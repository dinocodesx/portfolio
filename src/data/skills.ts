import { SkillCategory } from "@/types";

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot" },
      { name: "FastAPI" },
      { name: "NestJS" },
      { name: "gRPC" },
      { name: "Kafka" },
      { name: "Message Queues" },
    ],
  },
  {
    category: "Cloud & Platform",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Linux (Bash)" },
      { name: "Google Cloud" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "OpenTelemetry" },
    ],
  },
];
