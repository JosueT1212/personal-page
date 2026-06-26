import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { contact, hero } from "@/lib/data";

export function Contact() {
  return (
    <SectionWrapper className="border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-4">
          Get in touch
        </h2>

        <p className="text-secondary mb-8 text-lg">{contact.tagline}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            {contact.email} &rarr;
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 transition-all"
          >
            {contact.github.replace("https://", "")} &rarr;
          </a>
        </div>

        <p className="text-xs text-secondary mt-16">
          &copy; {new Date().getFullYear()} {hero.name}
        </p>
      </div>
    </SectionWrapper>
  );
}
