export function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="grid gap-6 border-t py-16 md:grid-cols-[10rem_1fr] md:gap-12 md:py-24">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted md:sticky md:top-24 md:self-start">{label}</h2>
      <div>{children}</div>
    </section>
  );
}
