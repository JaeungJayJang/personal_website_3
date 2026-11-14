import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-4 font-serif text-5xl sm:text-7xl">This page doesn&rsquo;t exist.</h1>
      <Link href="/" className="mt-8 w-fit underline decoration-line underline-offset-4 hover:decoration-accent">
        ← Back home
      </Link>
    </main>
  );
}
