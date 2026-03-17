export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    skills: [
      "Prompt Engineering",
      "RAG / Embeddings",
      "LLM Integration (Claude, OpenAI)",
      "Ollama / Local Models",
      "pgvector",
      "AI-Assisted Development (Cursor, Claude Code)",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React / Next.js",
      "Svelte / SvelteKit",
      "Vue.js / Nuxt",
      "JavaScript / TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Python / Django",
      "Go",
      "REST & GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma / Drizzle",
      "MySQL",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS / GCP",
      "Docker",
      "CI/CD Pipelines",
      "Vercel",
      "Terraform",
      "GitHub Actions",
    ],
  },
];
