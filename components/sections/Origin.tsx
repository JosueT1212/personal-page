"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { timeline } from "@/lib/data";

export function Origin() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6">
          The backstory
        </h2>

        <p className="text-secondary text-lg leading-relaxed mb-12 max-w-2xl">
          I spent my teenage years grinding national olympiads in math, physics,
          and informatics — not for trophies, but because hard problems were
          addictive. Those competitions taught me to think rigorously under
          pressure. Now I apply that same obsession to research and engineering:
          building ML systems that reason, learning from particle physicists,
          and shipping products that work in the real world.
        </p>

        {/* Timeline — horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 w-52 flex flex-col gap-2"
            >
              {/* Image slot — renders only when image path provided */}
              {item.image ? (
                <div className="w-full h-32 rounded-lg overflow-hidden border border-border bg-surface">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.label}
                    width={208}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-32 rounded-lg border border-dashed border-border bg-surface flex items-center justify-center">
                  <span className="text-3xl text-border select-none">
                    {["∇", "∑", "∫", "λ", "σ", "∂", "π"][i % 7]}
                  </span>
                </div>
              )}

              <div className="text-xs font-medium text-accent uppercase tracking-wider">
                {item.year}
              </div>
              <div className="w-full h-px bg-border" />
              <p className="text-sm text-secondary leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-secondary mt-4 opacity-60">
          Drop photos into <code className="font-mono">public/timeline/</code> and uncomment the image paths in <code className="font-mono">lib/data.ts</code> to fill the slots above.
        </p>
      </div>
    </SectionWrapper>
  );
}
