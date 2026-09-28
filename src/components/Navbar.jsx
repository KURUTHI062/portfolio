import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ResumeModal from './ResumeModal';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark 
            ? 'bg-[#070b18]/90 border-b border-purple-500/20 shadow-2xl shadow-black/70' 
            : 'bg-white/90 border-b border-purple-500/15 shadow-lg shadow-slate-200/50'
        } backdrop-blur-md ${isScrolled ? 'py-2.5' : 'py-3.5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-lg flex items-center justify-center tracking-tighter shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                NK
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors hidden sm:inline uppercase">
                NEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">KURUTHI</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-200 relative rounded-md ${
                      isActive
                        ? 'text-cyan-400 dark:text-cyan-400 light:text-purple-600 bg-purple-500/10'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-sm shadow-cyan-400/50" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons: Theme Toggle, Socials, Resume */}
            <div className="hidden md:flex items-center space-x-2.5">
              {/* ☀️/🌙 Theme Switcher Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
                title={isDark ? "Switch to Light Mode (☀️)" : "Switch to Dark Mode (🌙)"}
                className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-purple-600 border border-purple-500/25 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center group"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/KURUTHI062"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-purple-500/20 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-pink-400 border border-purple-500/20 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Resume Button with Blue -> Purple Gradient */}
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Actions: Theme Toggle + Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* ☀️/🌙 Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 border border-purple-500/25"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600" />
                )}
              </button>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="btn-gradient px-3 py-1.5 rounded-lg text-xs font-black uppercase flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-purple-500/25"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1224] dark:bg-[#0d1224] light:bg-white border-t border-purple-500/20 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-bold tracking-wider uppercase transition-colors rounded-lg ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <div className="pt-4 mt-3 border-t border-purple-500/20 flex items-center justify-around">
                <a
                  href="https://github.com/KURUTHI062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-bold uppercase tracking-wider py-2 px-3 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 border border-purple-500/20"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-bold uppercase tracking-wider py-2 px-3 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 border border-purple-500/20"
                >
                  <Linkedin className="w-4 h-4 text-pink-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
