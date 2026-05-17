import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to My Page !!
        </h1>
      </section>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
