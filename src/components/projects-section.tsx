import { projects } from "@/data/projects";
import { Section } from "@/components/section";

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <ul className="divide-y border-y">
        {projects.map((p) => {
          const href = p.hasDemo ? p.demoUrl : p.hasGithub ? p.githubUrl : undefined;
          return (
            <li key={p.title} className="group grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="font-mono text-xs leading-7 text-muted">{p.period ?? p.category}</p>
              <div>
                <h3 className="text-lg">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                      {p.title} <span aria-hidden className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                  ) : p.title}
                </h3>
                <p className="mt-1 max-w-2xl leading-relaxed text-muted">{p.shortDesc}</p>
                <p className="mt-3 font-mono text-xs text-muted">
                  {p.technologies.join(" / ")}
                  {p.hasGithub && p.hasDemo && (
                    <> · <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-fg">source</a></>
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
