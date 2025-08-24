import { About, Contact, Experience, Globe, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <main className="h-screen">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Globe />
        {/* <Contact /> */}
    </main>
  );
}
