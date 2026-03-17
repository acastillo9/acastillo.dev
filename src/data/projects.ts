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
    title: "FincaSegura",
    description:
      "WhatsApp-first booking platform with escrow payment protection for vacation finca rentals in Colombia. Solves rampant scam problem by onboarding rural owners via WhatsApp bot and holding guest payments in escrow until verified check-in.",
    tags: ["Next.js", "Supabase", "WhatsApp API", "Wompi"],
    status: "in-development",
    image: "fincasegura.jpg",
  },
  {
    title: "CargaCO",
    description:
      "Colombia's unified EV charging platform. Aggregates fragmented charger networks into a single live map with real-time availability, reservations, and COP-native payments via Nequi and PSE. Includes a B2B CPO dashboard for malls, hotels, and parking operators to monetize their chargers with dynamic pricing and utilization analytics.",
    tags: ["React Native", "Next.js", "Node.js", "PostgreSQL", "OCPP"],
    status: "in-development",
    image: "cargaco.jpg",
  },
  {
    title: "FacturApp",
    description:
      "WhatsApp-first electronic invoicing for Colombian micro-businesses and freelancers. Simplifies DIAN compliance by handling XML generation (UBL 2.1), CUFE signing, real-time DIAN transmission, and client-ready PDFs — all from a simple chat message. Includes digital certificate management, frequent client directory, and a multi-NIT dashboard for independent accountants.",
    tags: ["WhatsApp API", "Node.js", "DIAN UBL 2.1", "SaaS", "Fintech"],
    status: "in-development",
    image: "facturapp.jpg",
  },
  {
    title: "ObraLog",
    description:
      "WhatsApp-native field documentation app for Colombian construction subcontractors. Turns scattered phone photos into geotagged, timestamped evidence organized by project — generating daily progress reports and payment-ready PDF packets to eliminate disputes.",
    tags: ["React Native", "Firebase", "WhatsApp API", "Android"],
    status: "in-development",
    image: "obralog.jpg",
  },
  {
    title: "ArriendoOS",
    description:
      "Rental management platform for Colombian small landlords (2–9 units). Automates rent collection via WhatsApp + Nequi/PSE, calculates Ley 820 IPC annual increases, generates paz y salvo documents, and gives tenants a downloadable payment history certificate — replacing the cuaderno-and-WhatsApp chaos with a lightweight dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "WhatsApp API", "Wompi"],
    status: "in-development",
    image: "arriendoos.jpg",
  },
];
