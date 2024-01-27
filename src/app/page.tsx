import Footer from "@/components/Organisms/Footer";
import Hero from "@/components/Organisms/Hero";
import Navbar from "@/components/Organisms/Navbar";
import Projects from "@/components/Organisms/Projects";
import Skills from "@/components/Organisms/Skills";
import StarCanvas from "@/components/Templates/StarBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-[#030014] overflow-x-hidden`}>
      <StarCanvas />
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
