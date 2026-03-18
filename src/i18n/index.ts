import { en } from "./translations/en";
import { es } from "./translations/es";

export type Locale = "en" | "es";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    blog: string;
    contact: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    roles: string[];
    viewWork: string;
    getInTouch: string;
    scrollToAbout: string;
  };
  about: {
    label: string;
    headline: string;
    bio: string[];
    stats: string[];
  };
  skills: {
    label: string;
    heading: string;
    description: string;
    categories: Record<string, string>;
  };
  projects: {
    label: string;
    heading: string;
    description: string;
    inDevelopment: string;
    viewSource: string;
    viewDemo: string;
    descriptions: Record<string, string>;
  };
  blog: {
    label: string;
    heading: string;
    description: string;
    viewAll: string;
    allPosts: string;
    backToHome: string;
    backToBlog: string;
    backToAllPosts: string;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    connect: string;
    availability: string;
    errors: Record<string, string>;
  };
  footer: {
    copyright: string;
    allRights: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    blogTitle: string;
    defaultDescription: string;
  };
}

const translations: Record<Locale, Translations> = { en, es };

export function getTranslations(locale: Locale | string | undefined): Translations {
  const loc = locale === "es" ? "es" : "en";
  return translations[loc];
}

export function localePath(path: string, locale: Locale | string | undefined): string {
  if (!locale || locale === "en") return path;
  // Avoid double-prefixing
  if (path.startsWith(`/${locale}`)) return path;
  // Handle hash-only paths like #contact
  if (path.startsWith("#")) return path;
  return `/${locale}${path}`;
}

export function getDateLocale(locale: Locale | string | undefined): string {
  return locale === "es" ? "es-CO" : "en-US";
}

export function getAlternateLocale(locale: Locale | string | undefined): Locale {
  return locale === "es" ? "en" : "es";
}
