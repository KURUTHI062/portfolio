import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#272729] border-b border-white/10 ${
        isScrolled ? 'py-3 shadow-xl' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Editorial Inspired */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="px-2.5 py-1 bg-[#facf16] text-[#272729] font-black text-xl tracking-tighter rounded-sm">
              NK.
            </div>
            <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-[#facf16] transition-colors hidden sm:inline uppercase">
              NEE <span className="text-[#facf16]">KURUTHI</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors relative ${
                    isActive
                      ? 'text-[#facf16]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#facf16]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/KURUTHI062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded bg-[#1e1e20] hover:bg-[#343437] text-slate-200 hover:text-white transition-colors border border-white/10"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded bg-[#1e1e20] hover:bg-[#343437] text-slate-200 hover:text-[#facf16] transition-colors border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Resume Button - Exact match to reference yellow 'Subscribe' button */}
            <a
              href="/resume.pdf"
              download="Nee_Kuruthi_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-black uppercase tracking-wider bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/resume.pdf"
              download="Nee_Kuruthi_Resume.pdf"
              className="px-3.5 py-1.5 rounded-sm text-xs font-black uppercase bg-[#facf16] text-[#272729] flex items-center gap-1.5"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              className="p-2 rounded bg-[#1e1e20] text-slate-200 hover:text-white border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#272729] border-t border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-bold tracking-wider uppercase transition-colors rounded ${
                    isActive
                      ? 'bg-[#facf16] text-[#272729]'
                      : 'text-slate-300 hover:bg-[#1e1e20] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-around">
              <a
                href="https://github.com/KURUTHI062"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider py-2 px-3 rounded bg-[#1e1e20] border border-white/10"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-[#facf16] text-xs font-bold uppercase tracking-wider py-2 px-3 rounded bg-[#1e1e20] border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
