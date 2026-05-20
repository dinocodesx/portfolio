import { CaseStudy } from "../types";

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 1,
    title: "Design a URL Shortener",
    description:
      "High-availability URL shortener handling 100M redirects/day — Base62 encoding, Redis caching, and consistent hashing for horizontal scaling.",
    link: "/system-designs/url-shortener",
  },
  {
    id: 2,
    title: "Design a Distributed Message Queue",
    description:
      "Kafka-inspired message queue with at-least-once delivery, consumer groups, and partition-based parallelism.",
    link: "/system-designs/message-queue",
  },
  {
    id: 3,
    title: "Design a Rate Limiter",
    description:
      "Token bucket vs sliding window deep-dive, with a distributed Redis implementation across multiple API gateway instances.",
    link: "/system-designs/rate-limiter",
  },
  {
    id: 4,
    title: "Design a Notification Service",
    description:
      "Event-driven fan-out service for push, email, and SMS — priority queues and idempotent delivery at 10M subscribers.",
    link: "/system-designs/notification-service",
  },
];
