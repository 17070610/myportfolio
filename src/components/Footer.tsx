import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-20 px-4 pb-6 sm:px-6">
      <div className="glass mx-auto max-w-3xl rounded-[var(--radius-card)]">
        <div className="flex flex-col gap-3 px-5 py-5 text-[var(--text-sm)] text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {site.name} · {site.location}
          </p>
          <div className="flex gap-4">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-[var(--color-text)]"
            >
              Email
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-text)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
