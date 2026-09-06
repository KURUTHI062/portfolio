import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Code2, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-[#1e1e20] overflow-hidden">
      {/* Editorial warm ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f24614]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#facf16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Editorial Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#272729] border border-white/15 text-xs font-bold uppercase tracking-wider text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#facf16] inline-block animate-pulse" />
              <span>NEE KURUTHI &bull; CHENNAI, INDIA &bull; SOFTWARE DEVELOPER</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-[#f24614] text-base sm:text-lg font-bold tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none uppercase">
                Nee <span className="text-[#facf16]">Kuruthi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                Computer Science Student & Aspiring Software Developer
              </h2>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Passionate about building modern web experiences, solving real-world problems, and continuously exploring new technologies.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-sm bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#facf16]/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="px-6 py-3.5 rounded-sm bg-[#272729] hover:bg-[#343437] text-white font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 border border-white/20 shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#facf16]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-300">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Connect:</span>
              
              <a
                href="https://github.com/KURUTHI062"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded bg-[#272729] hover:bg-[#343437] text-slate-200 hover:text-white transition-colors border border-white/10"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded bg-[#272729] hover:bg-[#343437] text-slate-200 hover:text-[#facf16] transition-colors border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:kuruthi076@gmail.com"
                aria-label="Email Address"
                className="p-2.5 rounded bg-[#272729] hover:bg-[#343437] text-slate-200 hover:text-[#f24614] transition-colors border border-white/10"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code Window with Editorial Colors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md w-full">
              {/* Floating Badges */}
              <div className="absolute -top-3 -left-3 px-3 py-1 rounded-sm bg-[#facf16] text-[#272729] font-mono text-xs font-black shadow-lg flex items-center gap-1.5 z-20">
                <Code2 className="w-3.5 h-3.5" />
                <span>&lt;React /&gt;</span>
              </div>

              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-sm bg-[#f24614] text-white font-mono text-xs font-black shadow-lg flex items-center gap-1.5 z-20">
                <Cpu className="w-3.5 h-3.5" />
                <span>build(); // 0 errors</span>
              </div>

              {/* Code Window */}
              <div className="rounded-sm bg-[#272729] border border-white/15 shadow-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="px-4 py-3 bg-[#1e1e20] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#f24614] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#facf16] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-white/40 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#facf16]" />
                    developer.config.js
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#272729] bg-[#facf16] px-2 py-0.5 rounded-xs">
                    ACTIVE
                  </span>
                </div>

                {/* Editor Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 space-y-2 leading-relaxed bg-[#272729]">
                  <div>
                    <span className="text-[#f24614] font-bold">const</span>{" "}
                    <span className="text-[#facf16] font-bold">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-white font-bold">"Nee Kuruthi"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-white font-bold">"CS Student & Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-white">"Chennai, India"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-[#facf16]">"React.js"</span>,{" "}
                    <span className="text-[#facf16]">"Vite"</span>,{" "}
                    <span className="text-[#facf16]">"UI/UX"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">languages:</span> [
                    <span className="text-[#f24614]">"Python"</span>,{" "}
                    <span className="text-[#f24614]">"Java"</span>,{" "}
                    <span className="text-[#f24614]">"C"</span>,{" "}
                    <span className="text-[#f24614]">"SQL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">objective:</span>{" "}
                    <span className="text-slate-300">"Build impactful software"</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-400">
                    <span className="text-[#f24614] font-bold">function</span>{" "}
                    <span className="text-[#facf16] font-bold">startCareer</span>() &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#f24614]">return</span>{" "}
                    <span className="text-white">"Ready to contribute to team growth 🚀";</span>
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Status bar */}
                <div className="px-4 py-2 bg-[#1e1e20] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#facf16]" />
                    <span>UTF-8</span>
                    <span>JavaScript React</span>
                  </div>
                  <span className="text-slate-500">Ln 24, Col 1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
