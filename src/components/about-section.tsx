import { aboutContent, skills } from "@/data/about";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" label="About">
      <p className="max-w-2xl text-xl leading-relaxed">{aboutContent.subtitle}</p>
      <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted">
        {aboutContent.journeyParagraphs.map((p) => <p key={p.text}>{p.text}</p>)}
      </div>
      <dl className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.title}>
            <dt className="font-medium">{s.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{s.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
