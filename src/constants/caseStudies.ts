export interface CapacityMetric {
  label: string;
  value: string;
}

export interface APIEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
}

export interface DesignComponent {
  name: string;
  description: string;
}

export interface TradeOff {
  decision: string;
  chosen: string;
  alternative: string;
  reason: string;
}

export interface DeepDive {
  title: string;
  body: string;
  points?: string[];
}

export interface CaseStudyContent {
  slug: string;
  title: string;
  description: string;
  scale: string;
  tags: string[];
  functionalRequirements: string[];
  nonFunctionalRequirements: string[];
  capacityEstimation: CapacityMetric[];
  apiEndpoints?: APIEndpoint[];
  highLevelDesign: {
    prose: string;
    components: DesignComponent[];
  };
  deepDives: DeepDive[];
  tradeoffs: TradeOff[];
  bottlenecks: string[];
}

export const CASE_STUDIES_CONTENT: CaseStudyContent[] = [
  /* ─────────────────────────────────────────────────────────────────────────
   * 1. URL SHORTENER
   * ─────────────────────────────────────────────────────────────────────── */
  {
    slug: "url-shortener",
    title: "Design a URL Shortener",
    description:
      "High-availability URL shortener handling 100M redirects/day — Base62 encoding, Redis caching, and consistent hashing for horizontal scaling.",
    scale: "100M req/day",
    tags: ["Redis", "Consistent Hashing", "Base62", "PostgreSQL", "CDN"],

    functionalRequirements: [
      "Given a long URL, generate a unique short alias (e.g. short.ly/aB3xQ2k)",
      "Redirect users from the short URL to the original long URL",
      "Support optional custom aliases chosen by the user",
      "Support URL expiry — auto-deactivate after a configurable duration",
      "Provide basic analytics — redirect counts per short URL",
    ],
    nonFunctionalRequirements: [
      "Handle 100M redirects/day (~1,200 req/s avg, ~5,000 req/s peak)",
      "Read-heavy workload — 100:1 read-to-write ratio",
      "99.99% uptime for the redirect endpoint",
      "Redirect latency < 100ms at p99",
      "Short codes must not be guessable or enumerable by attackers",
    ],

    capacityEstimation: [
      { label: "Redirects / day", value: "100M" },
      { label: "Reads / sec (avg)", value: "~1,160" },
      { label: "Writes / sec (avg)", value: "~12" },
      { label: "Storage / year", value: "~180 GB" },
      { label: "Cache size (top 20%)", value: "~4 GB" },
      { label: "Short code space", value: "62⁷ ≈ 3.5T" },
    ],

    apiEndpoints: [
      {
        method: "POST",
        path: "/api/shorten",
        description: "Generate a short code for a given long URL",
      },
      {
        method: "GET",
        path: "/:shortCode",
        description: "Redirect to the original URL (301 or 302)",
      },
      {
        method: "DELETE",
        path: "/api/url/:shortCode",
        description: "Deactivate a short URL",
      },
      {
        method: "GET",
        path: "/api/analytics/:shortCode",
        description: "Fetch redirect count and click stats",
      },
    ],

    highLevelDesign: {
      prose:
        "Requests arrive at a load balancer which fans out across stateless app servers. On creation, the server generates a Base62 short code, persists the mapping to PostgreSQL, and primes Redis cache. On redirect, the server checks Redis first — on a cache miss it queries PostgreSQL and backfills the cache before issuing the redirect.",
      components: [
        {
          name: "Load Balancer",
          description:
            "Distributes traffic across the app server pool. Health-checks and drains unhealthy nodes without downtime.",
        },
        {
          name: "App Servers",
          description:
            "Stateless; handle URL shortening logic and redirect. Horizontally scalable — add nodes to increase throughput.",
        },
        {
          name: "Redis Cache",
          description:
            "Stores hot shortCode → longUrl mappings. LRU eviction policy; TTL matches each URL's expiry date.",
        },
        {
          name: "PostgreSQL",
          description:
            "Source of truth. Rows contain (id, shortCode, longUrl, createdAt, expiresAt, clickCount).",
        },
        {
          name: "Analytics Worker",
          description:
            "Consumes click events from Kafka asynchronously, increments counters — click tracking never blocks redirects.",
        },
      ],
    },

    deepDives: [
      {
        title: "Base62 Encoding & Collision Handling",
        body: "A 7-character Base62 string (a–z, A–Z, 0–9) produces 62⁷ ≈ 3.5 trillion unique codes — enough for decades at current growth. The app generates a random 7-char string, checks for collisions in the DB (rare at this scale), and retries up to 3 times before falling back to a counter-based approach.",
        points: [
          "Counter-based (sequential IDs encoded in Base62) is simpler but predictable — URLs can be enumerated",
          "Random generation is unpredictable but requires a collision check on every write",
          "A Bloom filter can short-circuit collision checks for >99% of cases with constant memory",
        ],
      },
      {
        title: "301 vs 302 Redirect",
        body: "301 Moved Permanently is cached by the browser — future requests never reach our servers. 302 Found forces every redirect through us. The choice is a direct trade-off between infrastructure load and analytics accuracy.",
        points: [
          "Use 301 if click analytics are not a core product requirement — reduces server load significantly",
          "Use 302 if every click must be tracked — each redirect is captured server-side",
          "Hybrid: 301 for expired or non-tracked URLs, 302 for analytics-enabled URLs",
        ],
      },
      {
        title: "Cache Strategy",
        body: "Redis is the primary read path. We use write-through caching: whenever a URL is created or accessed, Redis is updated immediately. LRU eviction ensures hot URLs stay resident; TTL is aligned to the URL expiry time.",
        points: [
          "Top 20% of URLs serve ~80% of traffic (Pareto) — a warm cache eliminates most DB reads",
          "Cache stampede risk on viral URLs — mitigate with a distributed mutex (Redlock) or request coalescing",
          "Redis key: shortCode; value: JSON with longUrl + expiresAt",
        ],
      },
      {
        title: "Database Sharding with Consistent Hashing",
        body: "As data grows beyond one PostgreSQL instance, shard by the first character of the shortCode (62 buckets → physical shard groups). Consistent hashing ensures adding a new node migrates only 1/N of the keyspace, not a full reshuffle.",
        points: [
          "Shard key: shortCode[0] distributes writes evenly across 62 logical shards",
          "Consistent hashing ring: each new node claims a slice without touching other slices",
          "Cross-shard aggregation (e.g., total clicks) runs through a read-replica aggregation layer",
        ],
      },
    ],

    tradeoffs: [
      {
        decision: "Redirect Type",
        chosen: "302 Temporary",
        alternative: "301 Permanent",
        reason:
          "302 redirects hit our servers on every request, enabling accurate real-time analytics. 301 would offload bandwidth to browsers but makes click tracking impossible for cached URLs.",
      },
      {
        decision: "Short Code Generation",
        chosen: "Random Base62 + collision check",
        alternative: "Sequential counter encoded in Base62",
        reason:
          "Random codes are unpredictable, preventing enumeration attacks. At 3.5T capacity the collision probability is negligible even at 1B codes generated — a simple retry handles the rare case.",
      },
      {
        decision: "Cache Population",
        chosen: "Write-through (prime on create)",
        alternative: "Lazy population (fill on first miss)",
        reason:
          "Write-through ensures even the first redirect for a brand-new URL is served from cache. Lazy caching causes every viral link's first N requests to miss simultaneously — causing a DB spike.",
      },
    ],

    bottlenecks: [
      "Single DB write node saturates at high write throughput → introduce write sharding or a time-series write buffer (e.g., Cassandra for click events)",
      "Redis single-node memory limit → use Redis Cluster with consistent hashing to spread keys across multiple nodes",
      "Viral short code creates a hot key in Redis → replicate that key across several Redis nodes and randomise which replica serves each read",
      "Analytics counters on PostgreSQL suffer write contention at scale → use HyperLogLog probabilistic counters or route all clicks to an async Kafka pipeline",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 2. DISTRIBUTED MESSAGE QUEUE
   * ─────────────────────────────────────────────────────────────────────── */
  {
    slug: "message-queue",
    title: "Design a Distributed Message Queue",
    description:
      "Kafka-inspired message queue with at-least-once delivery, consumer groups, and partition-based parallelism.",
    scale: "1M msg/s",
    tags: ["Kafka", "KRaft", "Replication", "Partitioning", "Go"],

    functionalRequirements: [
      "Producers publish messages to named topics",
      "Consumers subscribe to topics and read messages in order",
      "Support consumer groups — each group tracks its own offset independently",
      "At-least-once delivery guarantee",
      "Configurable message retention (e.g., 7 days by time or by size)",
      "Replay messages from any historical offset",
    ],
    nonFunctionalRequirements: [
      "Aggregate throughput of 1M messages/sec across the cluster",
      "End-to-end latency < 10ms at p99",
      "Messages persisted to disk before acknowledgment (durability guarantee)",
      "Horizontally scalable — adding brokers increases throughput linearly",
      "No single point of failure — tolerate broker crashes without data loss",
    ],

    capacityEstimation: [
      { label: "Messages / sec", value: "1M" },
      { label: "Write throughput", value: "~1 GB/s" },
      { label: "With 3× replication", value: "~3 GB/s disk" },
      { label: "7-day retention", value: "~600 TB" },
      { label: "Brokers needed", value: "~100" },
      { label: "Partitions / topic", value: "100 – 1,000" },
    ],

    apiEndpoints: [
      {
        method: "POST",
        path: "/topics/:topic/messages",
        description: "Produce a message with key + value payload",
      },
      {
        method: "GET",
        path: "/topics/:topic/messages",
        description: "Consume messages starting from a given offset",
      },
      {
        method: "POST",
        path: "/topics/:topic/offsets",
        description: "Commit consumer group offset after processing",
      },
      {
        method: "POST",
        path: "/topics",
        description:
          "Create a topic with partition count and replication factor",
      },
    ],

    highLevelDesign: {
      prose:
        "Producers hash message keys to select a partition and write to the partition's leader broker. Each partition is an ordered, append-only log persisted to disk. Brokers replicate to followers in the ISR (in-sync replicas) list. The producer waits for all ISR members to confirm before acknowledging. Consumers in a group are each assigned a disjoint set of partitions and independently commit offsets to an internal __consumer_offsets topic.",
      components: [
        {
          name: "Producer",
          description:
            "Batches messages, compresses (LZ4/Snappy), and routes to the correct partition leader by key hash or round-robin.",
        },
        {
          name: "Broker Cluster",
          description:
            "Stores partition logs on disk. Each broker leads some partitions and follows others. Stateless w.r.t. consumers.",
        },
        {
          name: "Consumer Group",
          description:
            "Coordinator assigns one partition per consumer; rebalances automatically on member join or leave.",
        },
        {
          name: "KRaft Controller",
          description:
            "Replaces ZooKeeper. Handles leader election per partition, broker membership, and topic metadata via Raft consensus.",
        },
        {
          name: "Partition Log",
          description:
            "Append-only segment files on disk. Companion index files map offset → byte position for O(1) seeks.",
        },
      ],
    },

    deepDives: [
      {
        title: "Partitioning Strategy",
        body: "Partitions are the unit of parallelism — N consumers can read from N partitions concurrently. The partition is chosen by hashing the message key modulo the partition count. Messages with the same key always land on the same partition, guaranteeing per-key ordering.",
        points: [
          "No key → round-robin across partitions for maximum write throughput",
          "Keyed messages guarantee per-key ordering but risk hot partitions for popular keys",
          "Hot partition mitigation: composite keys (userId + timestamp), sub-partitioning, or random salt suffix",
        ],
      },
      {
        title: "Replication & In-Sync Replicas (ISR)",
        body: "Each partition has one leader and N−1 followers. Producers write to the leader; followers fetch and replicate. The ISR is the set of followers caught up within a configurable lag threshold. With acks=all, the leader only acknowledges after every ISR member confirms the write.",
        points: [
          "acks=0: fire and forget — highest throughput, no durability guarantee",
          "acks=1: leader confirms — fast but data lost if leader crashes before replication",
          "acks=all: all ISR members confirm — strongest durability, ~2–3ms additional latency",
        ],
      },
      {
        title: "Offset Management",
        body: "Each consumer group independently tracks its read position per partition. Offsets are committed (async or sync) to the internal __consumer_offsets topic. On restart, consumers resume from the last committed offset — enabling at-least-once semantics with idempotent consumers.",
        points: [
          "Auto-commit every 5s: simpler but risks re-processing messages after a crash between commits",
          "Manual commit after processing: safer, enables exactly-once when combined with idempotent consumers",
          "Offset reset policy: 'earliest' replays all messages; 'latest' skips to now",
        ],
      },
      {
        title: "Storage: Segment Files & Zero-Copy",
        body: "Each partition log is split into fixed-size segment files (e.g., 1 GB each). A companion .index file maps offset → byte position for O(1) random access. Segments older than the retention policy are deleted. Consumers stream segments via sendfile(), bypassing user-space copies entirely.",
        points: [
          "Index files are memory-mapped by the broker on startup — fast lookups without disk I/O",
          "Log compaction: only retain the latest value per key, like a distributed hash map",
          "Zero-copy (sendfile): eliminates kernel-to-user-to-kernel copy — critical for 1 GB/s throughput",
        ],
      },
    ],

    tradeoffs: [
      {
        decision: "Consumer Model",
        chosen: "Pull (consumers poll brokers)",
        alternative: "Push (brokers push to consumers)",
        reason:
          "Pull lets consumers control their own pace, providing natural back-pressure. Brokers don't need to track per-consumer speed or buffer messages per-consumer. Pull also enables batching — consumers read hundreds of messages per poll for efficiency.",
      },
      {
        decision: "Delivery Guarantee",
        chosen: "At-least-once",
        alternative: "Exactly-once",
        reason:
          "At-least-once is simpler and significantly more performant. Consumers handle idempotency using the message offset or an application-level dedup key. Exactly-once requires distributed transactions (2PC) across producer, broker, and consumer — adding latency and complexity.",
      },
      {
        decision: "Coordination Layer",
        chosen: "KRaft (built-in Raft)",
        alternative: "Apache ZooKeeper",
        reason:
          "KRaft eliminates the external ZooKeeper dependency, cuts operational complexity, enables faster broker startup, and removes the ~200K partition ceiling that ZooKeeper imposed. The Kafka community deprecated ZooKeeper mode in 3.x.",
      },
    ],

    bottlenecks: [
      "Hot partitions from high-cardinality keys → monitor per-partition lag, increase partition count, or use composite/salted keys",
      "Leader concentration on a single broker after failures → use rack-aware replica placement and auto-rebalance leader elections periodically",
      "Consumer lag buildup → increase consumer parallelism up to the partition count; optimise per-message processing or add a processing stage (e.g., Flink)",
      "Disk I/O saturation on brokers → use NVMe SSDs, tune segment flush intervals (log.flush.interval.ms), enable bulk compression (LZ4)",
      "Metadata overhead at 100K+ partitions → migrate from ZooKeeper to KRaft which removes the partition count ceiling",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 3. RATE LIMITER
   * ─────────────────────────────────────────────────────────────────────── */
  {
    slug: "rate-limiter",
    title: "Design a Rate Limiter",
    description:
      "Token bucket vs sliding window deep-dive, with a distributed Redis implementation across multiple API gateway instances.",
    scale: "50K req/s",
    tags: ["Redis", "Token Bucket", "Sliding Window", "API Gateway", "Lua"],

    functionalRequirements: [
      "Throttle API requests per client (user ID, IP address, or API key)",
      "Support configurable rate limits per endpoint and pricing tier",
      "Return HTTP 429 Too Many Requests with a Retry-After header on rejection",
      "Support multiple time windows simultaneously (per-second, per-minute, per-day)",
      "Allow controlled bursting — short spikes over the steady-state limit",
    ],
    nonFunctionalRequirements: [
      "Add less than 5ms overhead per request at p99",
      "Handle 50,000 requests/second aggregate across all gateway nodes",
      "Correct counts across any number of distributed API gateway instances",
      "Fault-tolerant — if Redis is unreachable, fail open with a circuit breaker",
      "Accurate to within 0.1% error rate under concurrent load",
    ],

    capacityEstimation: [
      { label: "Requests / sec", value: "50K" },
      { label: "Redis ops / sec", value: "~50K" },
      { label: "Memory / active user", value: "~80 bytes" },
      { label: "1M active users", value: "~80 MB" },
      { label: "Redis max ops / sec", value: "~1M (single node)" },
      { label: "Latency budget", value: "< 5ms overhead" },
    ],

    apiEndpoints: [
      {
        method: "GET",
        path: "/* (middleware)",
        description:
          "Intercept every inbound request; check the rate limit before proxying downstream",
      },
      {
        method: "GET",
        path: "/admin/limits/:clientId",
        description: "Inspect current token count or window state for a client",
      },
      {
        method: "PUT",
        path: "/admin/limits/:clientId",
        description:
          "Update the rate limit configuration for a specific client or tier",
      },
    ],

    highLevelDesign: {
      prose:
        "The rate limiter runs as in-process middleware inside each API gateway node. On each request, the middleware extracts the client identifier, executes a Redis Lua script that atomically checks-and-decrements the counter, then either proxies the request or returns 429 with Retry-After. Rate limit rules (limits per tier and endpoint) are stored in a Config Store and pushed to gateways in real-time via Redis pub/sub.",
      components: [
        {
          name: "API Gateway",
          description:
            "Entry point for all client traffic. Hosts the rate limiter middleware inline — no extra network hop.",
        },
        {
          name: "Rate Limiter Middleware",
          description:
            "Stateless; extracts client ID, key-derives the Redis key, executes Lua script atomically, returns allow/deny with headers.",
        },
        {
          name: "Redis Cluster",
          description:
            "Shared counter store. Atomic Lua scripts prevent race conditions when multiple gateway nodes serve the same client.",
        },
        {
          name: "Config Store",
          description:
            "Stores rate limit rules per tier/endpoint. Changes are pushed to all gateways via Redis pub/sub within milliseconds.",
        },
        {
          name: "Circuit Breaker",
          description:
            "If Redis latency exceeds 4ms or the connection fails, automatically fail-open to protect availability.",
        },
      ],
    },

    deepDives: [
      {
        title: "Token Bucket Algorithm",
        body: "Each client has a conceptual bucket of capacity B tokens. Tokens refill at rate R per second. Each request consumes one token. If the bucket is empty the request is rejected. The bucket naturally absorbs short bursts up to B tokens.",
        points: [
          "Implementation: store (tokens, lastRefillTimestamp) as a Redis hash — refill is computed lazily on each request",
          "No background jobs needed: elapsed time since last request determines how many tokens to add",
          "Best suited for: API tiers where bursting is intentionally permitted (e.g., free vs. pro plans)",
        ],
      },
      {
        title: "Sliding Window Log",
        body: "Store a sorted set in Redis where each member is a request timestamp. On each request: remove entries older than the window boundary, count remaining members, then add the current timestamp if under the limit.",
        points: [
          "Most accurate — counts exact requests within every possible window boundary",
          "Memory-heavy: stores every request timestamp for every active client",
          "O(log N) per operation with N = requests in the window",
          "Best for: high-accuracy requirements where 1 extra request matters (financial APIs, quota billing)",
        ],
      },
      {
        title: "Sliding Window Counter (Hybrid — Recommended)",
        body: "Approximate the sliding window by combining two fixed window counters. The weighted estimate: previousWindowCount × (windowSize − elapsed) / windowSize + currentWindowCount. Accurate to within 1% while using only O(1) memory per client.",
        points: [
          "Memory: only two integers per client — efficient at any scale",
          "Error: at most ~1 extra request per window boundary — acceptable for virtually all use cases",
          "Used in production by Cloudflare, Stripe, and GitHub's rate limiter implementations",
          "Implemented as a single Redis Lua script for atomicity",
        ],
      },
      {
        title: "Atomic Redis Lua Scripts",
        body: "Race condition: two gateway nodes both read the same counter before either writes — both conclude the request is allowed, granting 2× the limit. Lua scripts executed in Redis are atomic: the entire read-check-write sequence runs as one indivisible operation.",
        points: [
          "EVAL executes the Lua script atomically — no other Redis command runs between reads and writes",
          "Alternative: Redis MULTI/EXEC transactions — same guarantee but less ergonomic",
          "Latency: Lua scripts add ~0.1ms over a plain GET — well within the 5ms budget",
        ],
      },
    ],

    tradeoffs: [
      {
        decision: "Algorithm Choice",
        chosen: "Sliding Window Counter",
        alternative: "Token Bucket",
        reason:
          "Sliding window counter is near-exact with O(1) memory per client. Token bucket allows bursting but can be gamed — clients who time requests to always arrive at window start get up to 2× the limit in a short burst.",
      },
      {
        decision: "State Location",
        chosen: "Centralised Redis Cluster",
        alternative: "Local in-process counter per gateway",
        reason:
          "Centralised Redis ensures consistent counts across all gateway nodes. Local counters are ~1ms faster but allow a client to get N× the configured limit by spreading requests across N gateway nodes.",
      },
      {
        decision: "Failure Mode",
        chosen: "Fail open (allow on Redis timeout)",
        alternative: "Fail closed (deny on Redis timeout)",
        reason:
          "Rate limiting is a user-experience safety feature, not a security boundary. Failing open preserves availability during a Redis blip. Failing closed would drop all traffic during a Redis incident — typically an unacceptable trade-off.",
      },
    ],

    bottlenecks: [
      "Redis single node saturates at very high QPS → shard clients across a Redis Cluster using consistent hashing on the client ID key",
      "Hot keys for high-traffic clients on a single shard → add a client-side in-process counter as a first-pass filter, with Redis as the authoritative backstop",
      "Config propagation lag when changing limits → use Redis pub/sub for push-based updates instead of a polling loop",
      "Distributed clock skew across gateway nodes causes window boundary jitter → derive window boundaries from a Redis server-side timestamp, not local node clocks",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
   * 4. NOTIFICATION SERVICE
   * ─────────────────────────────────────────────────────────────────────── */
  {
    slug: "notification-service",
    title: "Design a Notification Service",
    description:
      "Event-driven fan-out service for push, email, and SMS — priority queues and idempotent delivery at 10M subscribers.",
    scale: "10M subscribers",
    tags: ["Kafka", "WebSockets", "Fan-out", "Priority Queue", "AWS SNS"],

    functionalRequirements: [
      "Send push (APNs/FCM), email (SES), and SMS (Twilio) notifications",
      "User preference management — opt in/out per channel and notification type",
      "Priority levels: Critical → High → Normal → Low",
      "Retry failed deliveries with exponential backoff; dead-letter after max retries",
      "Idempotent delivery — deduplicate within a 24-hour window",
      "Support both targeted (1:1) and broadcast (1:N) notification modes",
    ],
    nonFunctionalRequirements: [
      "Support 10M active subscribers",
      "Critical notifications delivered within 1 second end-to-end",
      "Normal notifications delivered within 5 minutes",
      "At-least-once delivery with application-level deduplication",
      "99.9% delivery rate for Critical priority",
      "Fan-out peak: 1 broadcast event → 10M notifications in under 60 seconds",
    ],

    capacityEstimation: [
      { label: "Active subscribers", value: "10M" },
      { label: "Notifications / day", value: "50M avg" },
      { label: "Avg throughput", value: "~580 / sec" },
      { label: "Peak fan-out", value: "~170K / sec" },
      { label: "Dedup window", value: "24h in Redis" },
      { label: "Max retries", value: "5 × exponential" },
    ],

    apiEndpoints: [
      {
        method: "POST",
        path: "/notify",
        description:
          "Send to a single user: { userId, template, channel, priority, data }",
      },
      {
        method: "POST",
        path: "/broadcast",
        description: "Fan-out to a user segment or all subscribers",
      },
      {
        method: "GET",
        path: "/notifications/:userId",
        description:
          "Fetch notification history and delivery status for a user",
      },
      {
        method: "PUT",
        path: "/preferences/:userId",
        description: "Update per-user channel and type opt-in preferences",
      },
    ],

    highLevelDesign: {
      prose:
        "Callers POST to the API layer which validates, resolves templates, and enqueues a notification event to Kafka. The Fan-out Service expands broadcasts into per-user tasks — one task per subscriber — written to priority-tiered Kafka topics. Channel Workers (push, email, SMS) consume tasks in strict priority order and call third-party APIs. A Delivery Tracker records status and feeds a retry scheduler via the dead-letter topic.",
      components: [
        {
          name: "API Layer",
          description:
            "Accepts notification and broadcast requests; validates templates, resolves user segments, publishes to Kafka.",
        },
        {
          name: "Fan-out Service",
          description:
            "Reads broadcast events; loads subscribers in batches; writes one task per user to a priority Kafka topic. Horizontally scaled to sustain 170K tasks/sec peak.",
        },
        {
          name: "Priority Queues",
          description:
            "Four Kafka topics per channel (push.critical, push.high, push.normal, push.low). Workers drain higher-priority topics first.",
        },
        {
          name: "Channel Workers",
          description:
            "Stateless workers per delivery channel. Call APNs/FCM, SES, or Twilio. Handle retries and report delivery status.",
        },
        {
          name: "Delivery Tracker",
          description:
            "Records sent / failed / delivered status in PostgreSQL. Powers the retry loop and the delivery analytics dashboard.",
        },
        {
          name: "Preference Store",
          description:
            "Redis (hot path) + PostgreSQL (persistence) for per-user opt-in/out. Fan-out service checks preferences before enqueuing each task.",
        },
      ],
    },

    deepDives: [
      {
        title: "Fan-out Strategies: Write vs Read",
        body: "Fan-out on write: when a broadcast arrives, immediately expand and write one task per subscriber to the queue — tasks are pre-materialised. Fan-out on read: store one event and expand only when a worker asks — materialise at consume time.",
        points: [
          "Write fan-out: consistent low latency for all subscribers regardless of concurrency — tasks exist the moment the event is created",
          "Read fan-out: lower storage footprint but read latency grows linearly with subscriber count",
          "Hybrid (recommended): write fan-out for regular users (≤100K subscribers), read fan-out for mega-events or celebrity accounts",
          "At 10M subscribers, batch inserts of tasks into Kafka at 5K records per produce call to sustain throughput",
        ],
      },
      {
        title: "Idempotent Delivery",
        body: "Duplicate notifications are inevitable: Kafka at-least-once delivery, worker retries after partial failures, and client-side resends all produce duplicates. Each notification task is assigned a deterministic UUID. Workers check Redis before delivery — skip if already sent.",
        points: [
          "Redis key: dedup:{notificationId}, TTL: 24 hours",
          "Worker atomically does: SET NX dedup:{id} 1 EX 86400 — if key exists, delivery is skipped",
          "UUID is derived deterministically: hash(userId + templateId + eventId + hourBucket) — same event in the same hour always produces the same ID",
          "Prevents duplicate push/email/SMS even across crash-recovery and Kafka rebalancing scenarios",
        ],
      },
      {
        title: "Priority Queue Implementation",
        body: "Kafka has no native message priority. We model it with four separate Kafka topics per channel, each representing a priority tier. Channel workers use a strict polling loop: always drain the critical topic before processing lower tiers.",
        points: [
          "Four topics per channel: notifications.push.{critical,high,normal,low}",
          "Worker loop: poll critical (max 200ms) → if empty, poll high → if empty, poll normal → poll low",
          "Guarantees critical messages are never starved by a flood of low-priority notifications",
          "Monitor consumer lag per topic — alert if critical topic lag exceeds 1,000 messages",
        ],
      },
      {
        title: "Retry with Exponential Backoff & Dead-letter Queue",
        body: "Failed deliveries (FCM rate limits, SES bounces, Twilio errors) are not immediately retried in-line. The worker writes the failed task to a dead-letter topic with a nextRetryAt timestamp. A retry scheduler re-enqueues eligible tasks after the backoff window elapses.",
        points: [
          "Backoff schedule: 30s → 2min → 10min → 1h → 6h (maximum 5 retries)",
          "After 5 failures, task is moved to a permanent dead-letter store for manual inspection",
          "Retry scheduler: Redis sorted set (score = nextRetryAt epoch); scanned every 30 seconds",
          "Jitter (±20%) is added to each backoff to prevent a thundering herd after a mass failure event",
        ],
      },
    ],

    tradeoffs: [
      {
        decision: "Fan-out Timing",
        chosen: "Fan-out on write",
        alternative: "Fan-out on read",
        reason:
          "Fan-out on write delivers consistent low read-latency for all subscribers since tasks are pre-materialised. Fan-out on read is storage-efficient but read latency grows with subscriber count — unacceptable for Critical-priority notifications targeting millions of users.",
      },
      {
        decision: "Queue System",
        chosen: "Apache Kafka",
        alternative: "AWS SQS",
        reason:
          "Kafka supports message replay from any offset (critical for debugging delivery failures), sustains 1M msg/s throughput, and supports log compaction. SQS is simpler to operate but cannot replay messages, has no ordering guarantees outside FIFO queues, and caps at a lower throughput ceiling.",
      },
      {
        decision: "Deduplication State",
        chosen: "Redis SET NX + TTL",
        alternative: "PostgreSQL unique constraint",
        reason:
          "Redis SET NX is a single atomic O(1) operation with sub-millisecond latency, safe under concurrent delivery attempts from multiple workers. PostgreSQL unique constraints add 5–10ms per delivery check and require schema management as notification volume grows.",
      },
    ],

    bottlenecks: [
      "Fan-out worker throughput during viral broadcast events → pre-scale worker pool based on subscriber count estimate; use batch Kafka produce (5K records/call)",
      "FCM/APNs provider rate limits during push storms → implement per-provider token-bucket rate limiting; use FCM batch API (up to 500 device tokens per request)",
      "Redis dedup store memory growth at 50M notifications/day → shard Redis by userId prefix; use a Bloom filter as a probabilistic first-pass to eliminate ~99% of duplicate checks before hitting Redis",
      "Preference store lookup on every fan-out task at 170K/sec → cache preferences in-process with a 5-minute TTL; invalidate via a Kafka change-data-capture event on preference updates",
      "Delivery tracker write throughput at peak → batch-insert delivery records asynchronously; use a time-series database (TimescaleDB) for analytics queries instead of row-level PostgreSQL scans",
    ],
  },
];
