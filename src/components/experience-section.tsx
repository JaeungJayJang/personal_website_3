import { experiences } from "@/data/experiences";
import { Section } from "@/components/section";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-14">
        {experiences.map((exp) => (
          <li key={exp.company} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <p className="font-mono text-xs leading-7 text-muted">{exp.period}</p>
            <div>
              <h3 className="text-lg">
                {exp.position} <span className="text-muted">·</span>{" "}
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} className="underline decoration-line underline-offset-4 hover:decoration-accent">{exp.company}</a>
                ) : exp.company}
              </h3>
              <p className="text-sm text-muted">{exp.location}</p>
              <ul className="mt-4 space-y-2 leading-relaxed text-muted">
                {exp.description.map((d) => (
                  <li key={d} className="pl-4 -indent-4 before:mr-2 before:text-accent before:content-['–']">{d}</li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-muted">{exp.technologies.join(" / ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
