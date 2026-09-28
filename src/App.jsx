import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070b18] dark:bg-[#070b18] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 flex flex-col selection:bg-purple-500/30 selection:text-cyan-300 transition-colors duration-300">
        {/* Sticky Top Navigation Bar with ☀️/🌙 toggle */}
        <Navbar />

        {/* Main Single Page Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Site Footer & Floating Back-to-Top */}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
