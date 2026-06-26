"use client";

import { motion } from "framer-motion";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Active Research</span>
        </div>

        <h2
          className="font-black uppercase text-primary leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
        >
          What I&apos;m<br />working on.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                  {item.status}
                </span>
                <span className="text-xs text-secondary">{item.institution}</span>
              </div>

              <h3 className="font-black uppercase text-primary text-xl leading-tight mb-2">
                {item.title}
              </h3>

              {item.advisor && (
                <p className="text-xs text-secondary mb-4">Advisor: {item.advisor}</p>
              )}

              <p className="text-sm text-secondary leading-relaxed mb-6">{item.description}</p>

              <div className="border-t border-border pt-4 space-y-1.5">
                {item.details.map((d, j) => (
                  <p key={j} className="text-xs text-secondary flex gap-2">
                    <span className="text-accent flex-shrink-0">—</span>
                    <span>{d}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
