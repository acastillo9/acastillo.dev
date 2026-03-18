import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

interface NavTranslations {
  about: string;
  skills: string;
  projects: string;
  blog: string;
  contact: string;
  getInTouch: string;
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
}

interface Props {
  t: NavTranslations;
  locale?: string;
  blogHref?: string;
}

export function Navigation({ t, locale = "en", blogHref }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [switchHref, setSwitchHref] = useState(locale === "es" ? "/" : "/es");

  const resolvedBlogHref = blogHref ?? (locale === "es" ? "/es/blog" : "/blog");

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.blog, href: resolvedBlogHref },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const pathname = window.location.pathname;
    if (locale === "es") {
      setSwitchHref(pathname.replace(/^\/es/, "") || "/");
    } else {
      setSwitchHref(`/es${pathname === "/" ? "" : pathname}`);
    }
  }, [locale]);

  function handleLanguageSwitch() {
    document.cookie = `locale=${locale === "es" ? "en" : "es"};path=/;max-age=31536000`;
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border"
        : "bg-transparent"
        }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-mono text-md tracking-wider text-primary transition-colors hover:text-foreground"
        >
          {"^["}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center">
            <a
              href={switchHref}
              onClick={handleLanguageSwitch}
              className="relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              <Globe className="h-3.5 w-3.5" />
              {t.switchLanguage}
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#contact"
              className="rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              {t.getInTouch}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label={isMobileOpen ? t.closeMenu : t.openMenu}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={switchHref}
                onClick={() => { handleLanguageSwitch(); setIsMobileOpen(false); }}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Globe className="h-3.5 w-3.5" />
                {t.switchLanguage}
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg border border-primary bg-primary/10 px-4 py-3 text-center text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                {t.getInTouch}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
