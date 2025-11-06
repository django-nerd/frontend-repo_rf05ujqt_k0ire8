import React from 'react';
import Hero from './components/Hero.jsx';
import ProjectsCarousel from './components/ProjectsCarousel.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-400/20 selection:text-cyan-200">
      <Hero />
      <ProjectsCarousel />
      <About />
      <Contact />
      <footer className="py-12 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} ATLAS — Strength Through Creation
      </footer>
    </div>
  );
}
