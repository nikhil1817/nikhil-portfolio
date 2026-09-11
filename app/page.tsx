import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0A0E14] via-[#0A0E14] to-black text-white">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
