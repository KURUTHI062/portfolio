import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

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
    <footer className="border-t border-white/10 bg-[#1e1e20] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo & Brand Meta */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1 bg-[#facf16] text-[#272729] font-black text-xl tracking-tighter rounded-xs">
                NK.
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white uppercase">
                Nee <span className="text-[#facf16]">Kuruthi</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm uppercase font-bold tracking-wider">
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
                className="text-slate-300 hover:text-[#facf16] transition-colors py-1"
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
              className="p-2.5 rounded-xs bg-[#272729] hover:bg-[#343437] text-slate-300 hover:text-white transition-colors border border-white/10"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xs bg-[#272729] hover:bg-[#343437] text-slate-300 hover:text-[#facf16] transition-colors border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:kuruthi076@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xs bg-[#272729] hover:bg-[#343437] text-slate-300 hover:text-[#f24614] transition-colors border border-white/10"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xs bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] transition-all shadow-md hover:scale-105 active:scale-95 ml-2 cursor-pointer font-bold"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left font-mono">
          <p>© 2026 Nee Kuruthi. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Designed with Lato &bull; React.js &bull; Vite &bull; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
