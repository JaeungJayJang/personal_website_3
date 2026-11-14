import { siteConfig } from "@/data/site-config";
import { experiences } from "@/data/experiences";

export function HeroSection() {
  const current = experiences.find((e) => e.isActive);
  return (
    <section id="top" className="pb-16 pt-20 md:pb-24 md:pt-32">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{siteConfig.location}</p>
      <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
        Jaeung Jang builds software <em className="text-accent">for scientists</em> &mdash; pipelines, platforms, and the tools in between.
      </h1>
      <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-sm">
        {current && (
          <p className="text-muted">
            Currently {current.position} at <span className="text-fg">{current.company.split(",")[0]}</span>
          </p>
        )}
        <a href={siteConfig.github} className="underline decoration-line underline-offset-4 hover:decoration-accent">GitHub</a>
        <a href={siteConfig.linkedin} className="underline decoration-line underline-offset-4 hover:decoration-accent">LinkedIn</a>
        <a href={`mailto:${siteConfig.email}`} className="underline decoration-line underline-offset-4 hover:decoration-accent">Email</a>
      </div>
    </section>
  );
}
