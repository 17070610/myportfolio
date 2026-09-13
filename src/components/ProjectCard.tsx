import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/site";

/*
  The whole card links to the case study; the live-site anchor sits above that
  overlay. Both repos are private, so there is deliberately no "Code" button.
*/
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group glass card-hover relative overflow-hidden rounded-[var(--radius-card)]">
      <span aria-hidden="true" className="edge-lit" />

      <div className="sheen relative aspect-[16/9] overflow-hidden border-b border-[var(--glass-border)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        {/* Grounds the screenshot against the panel below it. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.28)] via-transparent to-transparent"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[var(--text-lg)] font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0"
            >
              {project.name}
            </Link>
          </h3>
          <span className="shrink-0 rounded-[var(--radius-chip)] border border-[var(--glass-border)] bg-[var(--glass-fill)] px-2 py-0.5 text-[var(--text-xs)] text-[var(--color-muted)]">
            {project.repoPrivateNote}
          </span>
        </div>

        <p className="measure mt-2.5 text-[var(--text-sm)] text-[var(--color-muted)]">
          {project.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-[var(--radius-chip)] border border-[var(--glass-border)] bg-[var(--glass-fill)] px-2 py-0.5 text-[var(--text-xs)] text-[var(--color-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-[var(--text-sm)]">
          <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)]">
            Read case study
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1 motion-reduce:transform-none"
            >
              &rarr;
            </span>
          </span>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-[var(--color-muted)] underline decoration-[var(--glass-border)] underline-offset-4 transition-colors hover:text-[var(--color-text)] hover:decoration-[var(--color-accent)]"
          >
            View live
          </a>
        </div>
      </div>
    </article>
  );
}
