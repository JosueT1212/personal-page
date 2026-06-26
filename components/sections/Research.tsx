import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { research } from "@/lib/data";

export function Research() {
  return (
    <SectionWrapper className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-0">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-2 max-w-3xl mx-auto px-0">
          What I&apos;m working on
        </h2>
        <p className="text-secondary mb-10 max-w-3xl mx-auto">
          Active research, ongoing experiments, open questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-surface hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge label={item.status} />
                <span className="text-xs text-secondary">{item.institution}</span>
              </div>

              <h3 className="font-serif text-xl text-primary mb-1 leading-snug">
                {item.title}
              </h3>

              {item.advisor && (
                <p className="text-xs text-secondary mb-3">
                  Advisor: {item.advisor}
                </p>
              )}

              <p className="text-sm text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              <ul className="space-y-1">
                {item.details.map((d, j) => (
                  <li key={j} className="text-xs text-secondary flex gap-2">
                    <span className="text-accent mt-0.5">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
