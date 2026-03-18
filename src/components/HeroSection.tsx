import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

interface HeroTranslations {
  greeting: string;
  name: string;
  tagline: string;
  roles: string[];
  viewWork: string;
  getInTouch: string;
  scrollToAbout: string;
}

interface Props {
  t: HeroTranslations;
}

export function HeroSection({ t }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = t.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      timeout = setTimeout(
        () => setText(currentRole.slice(0, text.length + 1)),
        80,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6"
      aria-label="Hero introduction"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p
          className="mb-4 font-mono text-sm tracking-widest text-primary opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          {t.greeting}
        </p>
        <h1
          className="text-balance text-5xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          {t.name}
        </h1>
        <div
          className="mt-6 flex h-8 items-center justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <span className="font-mono text-lg text-muted-foreground sm:text-xl">
            {text}
          </span>
          <span
            className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary"
            aria-hidden="true"
          />
        </div>
        <p
          className="mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          {t.tagline}
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 opacity-0 animate-fade-in-up sm:flex-row sm:justify-center"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(0,210,200,0.25)]"
          >
            {t.viewWork}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {t.getInTouch}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary animate-bounce"
        aria-label={t.scrollToAbout}
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
