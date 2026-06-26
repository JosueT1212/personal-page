import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-10">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
