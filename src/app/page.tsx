import {
  site,
  projects,
  services,
  stack,
  education,
  about,
} from "@/content/site";
import { ProjectCard } from "@/components/ProjectCard";
import { CopyEmail } from "@/components/CopyEmail";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="rise rise-1">
          <p className="text-[var(--text-sm)] font-medium tracking-wide text-[var(--color-accent)]">
            {site.location}
          </p>
          <h1 className="mt-3 text-[var(--text-3xl)] font-semibold leading-[1.12] tracking-tight">
            {site.name}
          </h1>
        </div>

        <p className="measure rise rise-2 mt-5 text-[var(--text-lg)] leading-snug text-[var(--color-muted)]">
          {site.headline}
        </p>

        <div className="rise rise-3 mt-8">
          <div className="glass edge-lit card-hover relative rounded-[var(--radius-card)] p-5">
            <p className="measure text-[var(--text-base)] text-[var(--color-muted)]">
              {site.support}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-[var(--radius-chip)] bg-[var(--color-accent)] px-4 py-2.5 text-[var(--text-sm)] font-medium text-white shadow-[0_10px_30px_-12px_rgb(var(--color-accent-tint)/0.9)] transition-all duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_16px_38px_-12px_rgb(var(--color-accent-tint)/1)] motion-reduce:transform-none"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="glass card-hover rounded-[var(--radius-chip)] px-4 py-2.5 text-[var(--text-sm)] font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24 py-10">
        <SectionHeading
          title="Selected work"
          note="Two production applications, built and deployed solo."
        />
        <div className="mt-8 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Services + stack */}
      <section id="services" className="scroll-mt-24 py-10">
        <SectionHeading title="What I do" />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass edge-lit card-hover relative rounded-[var(--radius-card)] p-5"
            >
              <h3 className="text-[var(--text-base)] font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-[var(--text-sm)] text-[var(--color-muted)]">
                {service.body}
              </p>
            </div>
          ))}
        </div>

        <div className="glass mt-6 rounded-[var(--radius-card)] p-5 sm:p-6">
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[11rem_1fr]">
            {stack.map(({ group, items }) => (
              <div key={group} className="contents">
                <dt className="text-[var(--text-sm)] font-medium text-[var(--color-muted)]">
                  {group}
                </dt>
                <dd className="mb-3 flex flex-wrap gap-1.5 sm:mb-0">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[var(--radius-chip)] border border-[var(--glass-border)] bg-[var(--glass-fill)] px-2 py-0.5 text-[var(--text-xs)]"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-10">
        <SectionHeading title="About" />

        <div className="glass mt-8 rounded-[var(--radius-card)] p-5 sm:p-6">
          <div className="measure space-y-4 text-[var(--color-muted)]">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-7 space-y-3 border-t border-[var(--glass-border)] pt-6">
            {education.map((item) => (
              <li
                key={item.institution}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div>
                  <span className="font-medium">{item.institution}</span>
                  <span className="text-[var(--color-muted)]">
                    {" "}
                    — {item.credential}
                  </span>
                </div>
                <span className="shrink-0 text-[var(--text-sm)] text-[var(--color-muted)]">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-10">
        <SectionHeading title="Contact" note={site.availability} />

        <div className="glass edge-lit card-hover relative mt-8 rounded-[var(--radius-card)] p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="relative z-10 text-[var(--text-lg)] font-medium text-[var(--color-accent)] underline decoration-[var(--glass-border)] underline-offset-[6px] transition-colors hover:decoration-[var(--color-accent)]"
            >
              {site.email}
            </a>
            <CopyEmail />
          </div>

          <div className="mt-5 flex gap-4 border-t border-[var(--glass-border)] pt-5 text-[var(--text-sm)]">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div>
      <h2 className="text-[var(--text-xl)] font-semibold tracking-tight">
        {title}
      </h2>
      {note ? (
        <p className="mt-1 text-[var(--text-sm)] text-[var(--color-muted)]">
          {note}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className="mt-3 h-px bg-gradient-to-r from-[rgb(var(--color-accent-tint)/0.5)] via-[var(--glass-border)] to-transparent"
      />
    </div>
  );
}
