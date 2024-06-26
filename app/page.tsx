import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import SectionDivider from './components/sectionDivider';
import SectionDivider2 from './components/sectionDivider2'
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
  <main className="flex flex-col items-center px-4">
    <Intro />
    <div className="mt-14">
    <About />
    </div>
    <div className="-mt-18">
    <SectionDivider2 />
    </div>
    <div className="mt-20">
    <Projects />
    </div>
    <Skills />
    <div className="mt-16">
    <Experience />
    <Contact />
    <SpeedInsights/>
    </div>
  </main>
  );
}
