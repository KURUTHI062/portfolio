import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software & Frontend Opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                <span className="text-gradient">Nee Kuruthi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mt-2">
                Computer Science Student & Aspiring Software Developer
              </h2>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Passionate about building modern web experiences, solving real-world problems, and continuously exploring new technologies.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="px-6 py-3.5 rounded-xl glass hover:bg-slate-800/80 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-700/80 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              
              <a
                href="https://github.com/KURUTHI062"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg glass hover:bg-slate-800 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg glass hover:bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:kuruthi076@gmail.com"
                aria-label="Email Address"
                className="p-2.5 rounded-lg glass hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Subtle Animated Code / Developer Visual Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md w-full">
              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-lg glass border border-indigo-500/40 text-xs font-mono font-medium text-indigo-300 shadow-lg flex items-center gap-1.5 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>&lt;React /&gt;</span>
              </div>

              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg glass border border-purple-500/40 text-xs font-mono font-medium text-purple-300 shadow-lg flex items-center gap-1.5 z-20">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>build(); // 0 errors</span>
              </div>

              {/* Glass Code Editor Window */}
              <div className="rounded-2xl glass-card overflow-hidden border border-slate-700/60 shadow-2xl relative">
                {/* Editor Header Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    developer.config.js
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    Active
                  </span>
                </div>

                {/* Editor Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed bg-[#0b0f19]/90">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-indigo-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"Nee Kuruthi"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-300">"CS Student & Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">"Chennai, India"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-cyan-300">"React.js"</span>,{" "}
                    <span className="text-cyan-300">"Vite"</span>,{" "}
                    <span className="text-cyan-300">"UI/UX"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">languages:</span> [
                    <span className="text-amber-300">"Python"</span>,{" "}
                    <span className="text-amber-300">"Java"</span>,{" "}
                    <span className="text-amber-300">"C"</span>,{" "}
                    <span className="text-amber-300">"SQL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-300">"Crafting real-world web apps"</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-500">
                    <span className="text-purple-400">async function</span>{" "}
                    <span className="text-cyan-400">buildFuture</span>() &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-indigo-300">developer</span>.
                    <span className="text-yellow-300">solveProblems</span>();
                  </div>
                  <div className="pl-4 text-emerald-400">
                    <span className="text-purple-400">return</span>{" "}
                    <span>"Ready to contribute to team growth 🚀";</span>
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Bottom Status bar */}
                <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>UTF-8</span>
                    <span>JavaScript React</span>
                  </div>
                  <div className="text-slate-500">
                    <span>Ln 24, Col 1</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
