import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Cpu, 
  Sparkles, 
  FileText,
  Layers,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-[#070b18] dark:bg-[#070b18] light:bg-[#f8fafc] bg-grid-pattern overflow-hidden transition-colors duration-300"
      >
        {/* Vibrant Glowing Gradient Orbs (Electric Blue + Purple + Cyan + Pink) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/20 light:bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/25 dark:bg-purple-600/25 light:bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-600/15 dark:bg-pink-600/15 light:bg-pink-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/15 light:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Kicker Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11182b]/90 dark:bg-[#11182b]/90 light:bg-white/90 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-purple-600 shadow-lg shadow-purple-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-ping" />
                <span>NEE KURUTHI &bull; CHENNAI, INDIA &bull; SOFTWARE DEVELOPER</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-cyan-400 dark:text-cyan-400 light:text-purple-600 text-base sm:text-lg font-extrabold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-none uppercase">
                  Nee <span className="gradient-text-hero">Kuruthi</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-200 dark:text-slate-200 light:text-slate-700 mt-2">
                  Computer Science Student & Aspiring Software Developer
                </h2>
              </div>

              {/* Supporting Bio Paragraph */}
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Passionate about building modern web experiences, solving real-world problems, and continuously exploring new technologies.
              </p>

              {/* Call to Actions (Blue -> Purple Gradient Buttons) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-white font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-glass px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                >
                  <FileText className="w-4 h-4 text-pink-400" />
                  <span>View Resume</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Nee_Kuruthi_Resume.pdf"
                  className="p-3.5 rounded-xl bg-[#11182b] dark:bg-[#11182b] light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-purple-500/25 shadow-md transition-all hover:scale-105"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-300 dark:text-slate-300 light:text-slate-600">
                <span className="text-xs uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-purple-600 font-bold">Connect:</span>
                
                <a
                  href="https://github.com/KURUTHI062"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-white hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-purple-500/20"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-white hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-pink-400 transition-colors border border-purple-500/20"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="mailto:kuruthi076@gmail.com"
                  aria-label="Email Address"
                  className="p-2.5 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-white hover:bg-purple-900/30 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-purple-500/20"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Cyber Code Terminal Card with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md w-full">
                {/* Floating Badges */}
                <div className="absolute -top-3 -left-3 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono text-xs font-black shadow-lg shadow-blue-500/30 flex items-center gap-1.5 z-20">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>&lt;React.js / Vite /&gt;</span>
                </div>

                <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-white text-pink-400 font-mono text-xs font-black shadow-lg flex items-center gap-1.5 z-20 border border-pink-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                  <span>build(); // 0 errors</span>
                </div>

                {/* Code Window */}
                <div className="glass-card rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
                  {/* Header Bar */}
                  <div className="px-4 py-3 bg-[#070b18]/90 dark:bg-[#070b18]/90 light:bg-slate-100/90 border-b border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      developer.config.js
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  </div>

                  {/* Editor Body */}
                  <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 space-y-2 leading-relaxed bg-[#11182b]/95 dark:bg-[#11182b]/95 light:bg-white/95">
                    <div>
                      <span className="text-pink-400 font-bold">const</span>{" "}
                      <span className="text-cyan-400 font-bold">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-400 font-bold">"Nee Kuruthi"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-purple-300 font-bold">"CS Student & Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">location:</span>{" "}
                      <span className="text-cyan-300">"Chennai, India"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">focus:</span> [
                      <span className="text-pink-400">"React.js"</span>,{" "}
                      <span className="text-cyan-400">"Vite"</span>,{" "}
                      <span className="text-purple-400">"UI/UX"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">languages:</span> [
                      <span className="text-blue-400">"Python"</span>,{" "}
                      <span className="text-amber-400">"Java"</span>,{" "}
                      <span className="text-cyan-400">"C"</span>,{" "}
                      <span className="text-pink-400">"SQL"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">objective:</span>{" "}
                      <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">"Build impactful software"</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-slate-400">
                      <span className="text-pink-400 font-bold">function</span>{" "}
                      <span className="text-cyan-400 font-bold">startCareer</span>() &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-emerald-300">"Ready to contribute to team growth 🚀";</span>
                    </div>
                    <div>&#125;</div>
                  </div>

                  {/* Status bar */}
                  <div className="px-4 py-2 bg-[#070b18]/90 dark:bg-[#070b18]/90 light:bg-slate-100/90 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                      <span>UTF-8</span>
                      <span>JavaScript React</span>
                    </div>
                    <span className="text-purple-400">Ln 24, Col 1</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
