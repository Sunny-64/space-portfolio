import { About, Experience, FloatingButtons, Globe, Projects, Skills, Socials } from "@/components";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth relative">
        <Globe />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Socials />
        <FloatingButtons />
        {/* <Contact /> */}
    </main>
  );
}
