"use client";

import { useState } from "react";
import { contact } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="px-6 py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="font-black uppercase text-primary leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
            >
              Let&apos;s<br />talk.
            </h2>
            <p className="text-secondary mb-8 text-lg">{contact.tagline}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-full text-sm text-primary hover:border-accent hover:text-accent transition-colors"
              >
                ✉ Email
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-full text-sm text-primary hover:border-accent hover:text-accent transition-colors"
              >
                ↗ GitHub
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${contact.email}?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
            }}
            className="bg-white rounded-2xl border border-border p-8 space-y-6"
          >
            <div>
              <label className="block text-xs text-secondary uppercase tracking-widest mb-2">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-border bg-transparent text-primary py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Josue Tapia"
              />
            </div>
            <div>
              <label className="block text-xs text-secondary uppercase tracking-widest mb-2">Your email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-border bg-transparent text-primary py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-secondary uppercase tracking-widest mb-2">Tell me what&apos;s on your mind</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border-b border-border bg-transparent text-primary py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="I'd love to collaborate on..."
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/80 transition-colors"
            >
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
