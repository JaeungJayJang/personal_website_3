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
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-2 px-5 py-3 sm:h-14 sm:flex-nowrap sm:py-0 sm:px-8">
        <a href="#top" className="font-serif text-xl sm:mr-auto">{siteConfig.name}</a>
        <div className="order-last flex w-full justify-between text-sm text-muted sm:order-none sm:w-auto sm:gap-5">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="font-mono text-xs text-muted transition-colors hover:text-fg sm:ml-5"
          aria-label="Toggle color theme"
        >
          {mounted ? (resolvedTheme === "dark" ? "light" : "dark") : "theme"}
        </button>
      </nav>
    </header>
  );
}
