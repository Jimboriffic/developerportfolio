import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import SectionDivider from './components/sectionDivider';
import SectionDivider2 from './components/sectionDivider2'
import Skills from './components/skills';

export default function Home() {
  return (
  <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <div className="-mt-16">
    <SectionDivider2 />
    </div>
    <Projects />
    <Skills />
  </main>
  );
}