import { About, Contact, Experience, FloatingButtons, Globe, Projects, Skills, Socials } from "@/components";

export default function Home() {
  return (
    <main className="h-screen">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Globe />
        <Socials />
        <FloatingButtons />
        {/* <Contact /> */}
    </main>
  );
}
