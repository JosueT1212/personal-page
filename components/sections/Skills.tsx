"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Stack &amp; Tools</span>
        </div>

        <h2
          className="font-black uppercase text-primary leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
        >
          Tools.
        </h2>

        <div className="space-y-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="grid grid-cols-[140px_1fr] gap-8 items-start"
            >
              <p className="text-xs font-medium text-secondary uppercase tracking-[0.15em] pt-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm text-primary bg-surface border border-border rounded-full hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
