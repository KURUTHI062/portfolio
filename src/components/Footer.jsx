import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          {/* Logo & Brand Meta */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-md shadow-indigo-500/20">
                NK.
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Nee Kuruthi
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Computer Science Student | Aspiring Software Developer | Frontend Developer
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/KURUTHI062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:kuruthi076@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20 hover:scale-105 active:scale-95 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 Nee Kuruthi. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-600">
            Crafted with React.js, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
