import Encryption from "@/components/Encryption";
import Hero from "@/components/Organisms/Hero";
import Skills from "@/components/Organisms/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
