export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status?: "live" | "in-development";
}

export const projects: Project[] = [
  {
    title: "Budget",
    description:
      "Personal finance app for tracking income, expenses, bills, and budgets with dashboard analytics. Features Google OAuth, multi-currency support, and AI-powered financial insights coming soon.",
    tags: ["SvelteKit", "NestJS", "MongoDB", "Tailwind CSS", "AI"],
    githubUrl: "https://github.com/acastillo9/budget",
    liveUrl: "https://budget-ui.vercel.app",
    image: "budget.jpg",
  },
  {
    title: "BarrioAlerta",
    description:
      "Neighborhood safety app for Colombian cities that replaces chaotic WhatsApp security groups with a structured incident map, verified neighbor network, smart proximity alerts, and weekly barrio safety trends.",
    tags: ["React Native", "Node.js", "PostGIS", "Firebase"],
    status: "in-development",
    image: "barrioalerta.jpg",
  },
  {
    title: "CargaCO",
    description:
      "Colombia's unified EV charging platform. Aggregates fragmented charger networks into a single live map with real-time availability, reservations, and COP-native payments via Nequi and PSE. Includes a B2B CPO dashboard for malls, hotels, and parking operators to monetize their chargers with dynamic pricing and utilization analytics.",
    tags: ["React Native", "Next.js", "Node.js", "PostgreSQL", "OCPP"],
    status: "in-development",
    image: "cargaco.jpg",
  },
];
