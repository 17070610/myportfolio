import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Returns to the Work section, not the top of the page. */}
      <Link
        href="/#work"
        className="group inline-flex items-center gap-1.5 text-[var(--text-sm)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-x-1 motion-reduce:transform-none"
        >
          &larr;
        </span>
        Back to work
      </Link>

      <header className="rise mt-8">
        <div className="flex flex-wrap items-center gap-2 text-[var(--text-sm)] text-[var(--color-muted)]">
          <span>{project.context}</span>
          <span aria-hidden="true">·</span>
          <span className="rounded-[var(--radius-chip)] border border-[var(--glass-border)] bg-[var(--glass-fill)] px-2 py-0.5 text-[var(--text-xs)]">
            {project.repoPrivateNote}
          </span>
        </div>

        <h1 className="mt-3 text-[var(--text-2xl)] font-semibold tracking-tight">
          {project.name}
        </h1>
        <p className="measure mt-4 text-[var(--text-lg)] leading-snug text-[var(--color-muted)]">
          {project.summary}
        </p>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-[var(--radius-chip)] bg-[var(--color-accent)] px-4 py-2.5 text-[var(--text-sm)] font-medium text-white shadow-[0_10px_30px_-12px_rgb(var(--color-accent-tint)/0.9)] transition-all duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_16px_38px_-12px_rgb(var(--color-accent-tint)/1)] motion-reduce:transform-none"
        >
          Visit {project.liveLabel}
        </a>
      </header>

      <div className="glass sheen card-hover relative mt-10 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover object-top"
          priority
        />
      </div>

      <Section title="The problem">
        <p className="measure text-[var(--color-muted)]">
          {project.caseStudy.problem}
        </p>
      </Section>

      <Section title="What I built">
        <ul className="grid gap-2.5">
          {project.caseStudy.built.map((item) => (
            <li
              key={item}
              className="glass card-hover rounded-[var(--radius-chip)] px-4 py-3 text-[var(--text-sm)] text-[var(--color-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Architecture &amp; decisions">
        <div className="grid gap-4">
          {project.caseStudy.architecture.map(({ heading, body }) => (
            <div
              key={heading}
              className="glass edge-lit card-hover relative rounded-[var(--radius-card)] p-5"
            >
              <h3 className="text-[var(--text-base)] font-semibold tracking-tight">
                {heading}
              </h3>
              <p className="measure mt-2 text-[var(--text-sm)] text-[var(--color-muted)]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {project.caseStudy.hardProblem ? (
        <Section title="A problem worth describing">
          <p className="measure text-[var(--color-muted)]">
            {project.caseStudy.hardProblem}
          </p>
        </Section>
      ) : null}

      <Section title="Stack">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li
              key={item}
              className="glass rounded-[var(--radius-chip)] px-2.5 py-1 text-[var(--text-sm)] text-[var(--color-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-[var(--text-xl)] font-semibold tracking-tight">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mt-3 h-px bg-gradient-to-r from-[rgb(var(--color-accent-tint)/0.5)] via-[var(--glass-border)] to-transparent"
      />
      <div className="mt-5">{children}</div>
    </section>
  );
}
