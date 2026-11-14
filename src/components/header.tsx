"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { navigation, siteConfig } from "@/data/site-config";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-serif text-xl">{siteConfig.name}</a>
        <div className="flex items-center gap-5 text-sm text-muted">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hidden transition-colors hover:text-fg sm:inline">
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="font-mono text-xs transition-colors hover:text-fg"
            aria-label="Toggle color theme"
          >
            {mounted ? (resolvedTheme === "dark" ? "light" : "dark") : "theme"}
          </button>
        </div>
      </nav>
    </header>
  );
}
