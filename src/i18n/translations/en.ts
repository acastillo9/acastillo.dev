import type { Translations } from "../index";

export const en: Translations = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    getInTouch: "Get in Touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Español",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Andrés Castillo",
    tagline:
      "I build performant, scalable web applications and integrate AI-driven solutions to solve complex real-world problems and deliver exceptional user experiences.",
    roles: [
      "AI Engineer",
      "Full Stack Developer",
      "UI/UX Enthusiast",
      "Cloud Architect",
      "Open Source Contributor",
    ],
    viewWork: "View My Work",
    getInTouch: "Get in Touch",
    scrollToAbout: "Scroll to about section",
  },
  about: {
    label: "About Me",
    headline: "Engineering intelligent, scalable web experiences.",
    bio: [
      "I'm a Web Architect who designs end-to-end systems across diverse industries and complex business domains. My work sits at the intersection of modern web engineering and AI — not as separate disciplines, but as a unified approach to building smarter software.",
      "I specialize in turning complex business problems into clean, maintainable architectures — increasingly enhanced by AI-assisted development workflows. Beyond code, I invest in growing engineering teams through technical leadership, community building, and hands-on mentoring.",
    ],
    stats: ["12+ years experience", "Medellín, Colombia"],
  },
  skills: {
    label: "Skills & Tools",
    heading: "Technologies I Work With",
    description:
      "I believe in choosing the right tool for the job. Here are the technologies I use most frequently.",
    categories: {
      "AI & Intelligent Systems": "AI & Intelligent Systems",
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Database",
      "Cloud & DevOps": "Cloud & DevOps",
    },
  },
  projects: {
    label: "Selected Work",
    heading: "Projects I've Built",
    description:
      "Each project represents a unique challenge. I focus on clean code, performance, and delivering real value.",
    inDevelopment: "In Development",
    viewSource: "View {title} source code on GitHub",
    viewDemo: "View {title} live demo",
    descriptions: {
      Budget:
        "Personal finance app for tracking income, expenses, bills, and budgets with dashboard analytics. Features Google OAuth, multi-currency support, and AI-powered financial insights coming soon.",
      BarrioAlerta:
        "Neighborhood safety app for Colombian cities that replaces chaotic WhatsApp security groups with a structured incident map, verified neighbor network, smart proximity alerts, and weekly barrio safety trends.",
      FincaSegura:
        "WhatsApp-first booking platform with escrow payment protection for vacation finca rentals in Colombia. Solves rampant scam problem by onboarding rural owners via WhatsApp bot and holding guest payments in escrow until verified check-in.",
      CargaCO:
        "Colombia's unified EV charging platform. Aggregates fragmented charger networks into a single live map with real-time availability, reservations, and COP-native payments via Nequi and PSE. Includes a B2B CPO dashboard for malls, hotels, and parking operators to monetize their chargers with dynamic pricing and utilization analytics.",
      FacturApp:
        "WhatsApp-first electronic invoicing for Colombian micro-businesses and freelancers. Simplifies DIAN compliance by handling XML generation (UBL 2.1), CUFE signing, real-time DIAN transmission, and client-ready PDFs — all from a simple chat message. Includes digital certificate management, frequent client directory, and a multi-NIT dashboard for independent accountants.",
      ObraLog:
        "WhatsApp-native field documentation app for Colombian construction subcontractors. Turns scattered phone photos into geotagged, timestamped evidence organized by project — generating daily progress reports and payment-ready PDF packets to eliminate disputes.",
      ArriendoOS:
        "Rental management platform for Colombian small landlords (2–9 units). Automates rent collection via WhatsApp + Nequi/PSE, calculates Ley 820 IPC annual increases, generates paz y salvo documents, and gives tenants a downloadable payment history certificate — replacing the cuaderno-and-WhatsApp chaos with a lightweight dashboard.",
    },
  },
  blog: {
    label: "// latest posts",
    heading: "From the Blog",
    description:
      "Thoughts on development, design, and building better software.",
    viewAll: "View All Posts",
    allPosts: "All Posts",
    backToHome: "Back to Home",
    backToBlog: "Back to Blog",
    backToAllPosts: "Back to all posts",
  },
  contact: {
    label: "Contact",
    heading: "Let's Work Together",
    description:
      "Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project or idea...",
    send: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successMessage: "Thank you for reaching out. I'll reply soon.",
    connect: "Connect",
    availability:
      "Currently open to freelance opportunities and exciting full-time roles. Available for remote work worldwide.",
    errors: {
      FIELDS_REQUIRED: "All fields are required.",
      INVALID_EMAIL: "Invalid email address.",
      MESSAGE_TOO_LONG: "Message is too long (max 5000 characters).",
      SEND_FAILED: "Failed to send email. Please try again.",
      SERVER_ERROR: "Server configuration error.",
      UNKNOWN: "Something went wrong. Please try again.",
    },
  },
  footer: {
    copyright: "Andrés Castillo © {year}.",
    allRights: "© {year} Andrés Castillo. All rights reserved.",
  },
  meta: {
    homeTitle: "Andrés Castillo — AI Engineer & Software Developer",
    homeDescription:
      "Portfolio of Andrés Castillo, showcasing projects, skills, and blog posts on AI engineering and software development.",
    blogTitle: "Blog | Andrés Castillo",
    defaultDescription:
      "Full Stack Developer — building performant, accessible web applications.",
  },
};
