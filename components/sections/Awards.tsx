"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Recognition</span>
        </div>

        <h2
          className="font-black uppercase text-primary leading-none tracking-tight mb-16"
          style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
        >
          Awards.
        </h2>

        <div className="space-y-0">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex items-center justify-between py-6 border-b border-border group"
            >
              <div className="flex items-center gap-6">
                <span className="text-sm text-secondary tabular-nums w-8 font-medium">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-black text-xl uppercase text-primary group-hover:text-accent transition-colors">{award.name}</p>
                  <p className="text-base text-secondary mt-0.5">{award.detail}</p>
                </div>
              </div>
              <span className="text-base text-secondary tabular-nums font-medium">{award.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
