import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t py-10 font-mono text-xs text-muted">
      <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      <a href="#top" className="hover:text-fg">Back to top ↑</a>
    </footer>
  );
}
