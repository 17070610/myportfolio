"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const sections = [
  { id: "work", label: "Work" },
  { id: "services", label: "What I do" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  return (
    <div className="sticky top-0 z-40 px-4 pt-3 sm:px-6 sm:pt-4">
      <header
        className={`glass-nav mx-auto max-w-3xl rounded-[var(--radius-card)] transition-all duration-300 ${
          scrolled ? "glass glass-strong" : "glass bg-transparent shadow-none"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-5">
          <Link
            href="/"
            className="text-[var(--text-sm)] font-semibold tracking-tight transition-colors hover:text-[var(--color-accent)]"
          >
            {site.name}
          </Link>

          <nav aria-label="Primary">
            <ul className="flex items-center gap-1 text-[var(--text-sm)]">
              {sections.map(({ id, label }) => (
                <li key={id} className="hidden sm:block">
                  <Link
                    href={onHome ? `#${id}` : `/#${id}`}
                    aria-current={active === id ? "true" : undefined}
                    className={`relative rounded-[var(--radius-chip)] px-2.5 py-1.5 transition-colors ${
                      active === id
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {active === id ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-[var(--radius-chip)] bg-[rgb(var(--color-accent-tint)/0.1)] ring-1 ring-[rgb(var(--color-accent-tint)/0.22)]"
                      />
                    ) : null}
                    {label}
                  </Link>
                </li>
              ))}
              <li className="ml-1">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[var(--radius-chip)] px-2.5 py-1.5 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
