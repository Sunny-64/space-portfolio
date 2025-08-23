import { About, Contact, Experience, Globe, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Globe />
        {/* <Contact /> */}
    </main>
  );
}
