import { Hero } from "@/components/sections/Hero";
import { Origin } from "@/components/sections/Origin";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Origin />
      <Research />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
