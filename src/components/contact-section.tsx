"use client";

import { useState } from "react";
import { contactContent, contactInfo } from "@/data/contact";
import { Section } from "@/components/section";

const empty = { name: "", email: "", subject: "", message: "" };
const field = "w-full border-0 border-b bg-transparent px-0 py-2 outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ContactSection() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Thanks! Your message is on its way.");
        setForm(empty);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Section id="contact" label="Contact">
      <p className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
        Say hello at{" "}
        <a href={`mailto:${contactInfo[0].value}`} className="text-accent underline decoration-1 underline-offset-8">
          {contactInfo[0].value}
        </a>
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">{contactContent.connectDescription}</p>
      <ul className="mt-6 flex gap-6 text-sm">
        {contactInfo.slice(1).map((c) => (
          <li key={c.label}>
            <a href={c.href ?? undefined} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
              {c.label}
            </a>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
        <input required name="name" value={form.name} onChange={onChange} placeholder="Name" aria-label="Name" className={field} />
        <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" aria-label="Email" className={field} />
        <input required name="subject" value={form.subject} onChange={onChange} placeholder="Subject" aria-label="Subject" className={`${field} sm:col-span-2`} />
        <textarea required name="message" rows={4} value={form.message} onChange={onChange} placeholder="Message" aria-label="Message" className={`${field} resize-none sm:col-span-2`} />
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-fg px-5 py-2 text-sm text-bg transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {(status === "success" || status === "error") && (
            <p role="status" className={`text-sm ${status === "error" ? "text-accent" : "text-muted"}`}>{message}</p>
          )}
        </div>
      </form>
    </Section>
  );
}
