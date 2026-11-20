import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PipelineVisualizer from './components/PipelineVisualizer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode class with root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#050705] text-neutral-100' : 'light bg-neutral-50 text-neutral-900'}`}>
      {/* Sticky Top Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Interactive DevOps Architecture & Pipeline Visualizer */}
        <PipelineVisualizer />

        {/* 4. Skills & Capabilities Section */}
        <Skills />

        {/* 5. Featured Projects Section */}
        <Projects />

        {/* 6. Education and Certification Combined Section */}
        <section id="education" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/60 border border-green-500/30 text-lime-400 text-xs font-mono uppercase tracking-wider mb-3">
                <span>Qualifications & Accreditations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Certification</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-3">
                Academic foundation in Software Engineering and industry accreditation in Microsoft Azure cloud services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Education (6 cols) */}
              <div className="lg:col-span-6">
                <Education />
              </div>

              {/* Certification (6 cols) */}
              <div className="lg:col-span-6">
                <Certification />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
