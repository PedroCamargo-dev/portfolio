import Hero from "@/components/Organisms/Hero";
import Projects from "@/components/Organisms/Projects";
import Skills from "@/components/Organisms/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
