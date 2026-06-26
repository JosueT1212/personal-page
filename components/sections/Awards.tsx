import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <SectionWrapper className="bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-10 max-w-3xl mx-auto">
          Awards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-primary text-sm">{award.name}</h3>
                <span className="text-xs text-secondary">{award.year}</span>
              </div>
              <p className="text-xs text-secondary">{award.detail}</p>
              <div className="w-full h-px bg-border mt-2" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
