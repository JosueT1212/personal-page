"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about, timeline } from "@/lib/data";
import { useState } from "react";

export function About() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">About me</span>
        </div>

        {/* Two-col: text left, photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2
              className="font-black uppercase text-primary leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 96px)" }}
            >
              A little<br />about me.
            </h2>
            <p className="text-primary text-lg leading-relaxed mb-4">{about.bio1}</p>
            <p className="text-secondary text-base leading-relaxed">{about.bio2}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/avatar.jpg"
                alt="Josue Tapia Hernández"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
          <span className="text-xs font-medium text-secondary tracking-[0.2em] uppercase">Timeline</span>
        </div>

        <div className="relative">
          {/* Vertical line — only on the text column side */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-[7px]" />

          <div className="space-y-12 pl-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
              >
                {/* Dot */}
                <div className="absolute -left-12 top-3 w-4 h-4 rounded-full bg-accent border-2 border-surface shadow-md" />

                {/* Text */}
                <div>
                  <span className="text-sm font-bold text-accent uppercase tracking-[0.18em]">{item.year}</span>
                  <p className="text-xl font-bold text-primary mt-1 leading-snug">{item.label}</p>
                </div>

                {/* Photo slot */}
                <div className="md:flex justify-end hidden">
                  {item.image && !imgErrors[i] ? (
                    <div className="relative w-48 h-32 rounded-xl overflow-hidden border border-border shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.label}
                        fill
                        className="object-cover"
                        onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-32 rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                      <span className="text-xs text-secondary text-center px-3 leading-relaxed">
                        Add photo<br />
                        <span className="text-accent font-mono">{item.image}</span>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
