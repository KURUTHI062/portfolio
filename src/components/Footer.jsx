import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';

const footerNavLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
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
    <footer className="border-t border-purple-500/20 bg-[#070b18] dark:bg-[#070b18] light:bg-white pt-16 pb-12 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-500/20">
          {/* Logo & Brand Meta */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-xl flex items-center justify-center tracking-tighter shadow-md shadow-blue-500/30">
                NK
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white dark:text-white light:text-slate-900 uppercase">
                Nee <span className="gradient-text-hero">Kuruthi</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm uppercase font-bold tracking-wider">
              Computer Science Student &bull; Aspiring Software Developer
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-purple-600 transition-colors py-1"
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
              className="p-2.5 rounded-xl bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-purple-500/20"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-pink-400 transition-colors border border-purple-500/20"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:kuruthi076@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-purple-500/20"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="btn-gradient p-2.5 rounded-xl text-white transition-all shadow-md ml-2 cursor-pointer font-bold hover:scale-105 active:scale-95"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 gap-4 text-center sm:text-left font-mono">
          <p>© 2026 Nee Kuruthi. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-bold uppercase tracking-wider flex items-center gap-1 justify-center">
            <span>Electric Theme</span>
            <span>&bull;</span>
            <span className="text-cyan-400">React.js</span>
            <span>&bull;</span>
            <span className="text-purple-400">Vite</span>
            <span>&bull;</span>
            <span className="text-pink-400">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
