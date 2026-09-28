import React from 'react';
import {
  GraduationCap,
  Code2,
  Layers,
  Lightbulb,
  Trophy,
  MapPin,
  Target,
  Sparkles,
  CheckCircle2,
  Compass,
  Cpu,
  Zap
} from 'lucide-react';

const highlightCards = [
  {
    title: "Computer Science & Engineering",
    desc: "Rigorous academic grounding in computing principles, algorithms, and system design at S.A. Engineering College.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    borderGlow: "border-blue-500/30",
    tag: "Core Engineering"
  },
  {
    title: "Frontend Engineering",
    desc: "Designing intuitive, mobile-responsive user interfaces and component-driven web architectures with high usability.",
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
    borderGlow: "border-purple-500/30",
    tag: "UI/UX Engineering"
  },
  {
    title: "React.js & Vite",
    desc: "Building interactive, state-driven single page applications using modern hooks, fast build tooling, and modular design.",
    icon: Code2,
    gradient: "from-cyan-400 to-blue-500",
    borderGlow: "border-cyan-500/30",
    tag: "Modern Stack"
  },
  {
    title: "Analytical Problem Solving",
    desc: "Applying structured computational thinking to decompose complex requirements into dependable software logic.",
    icon: Lightbulb,
    gradient: "from-amber-400 to-orange-500",
    borderGlow: "border-amber-500/30",
    tag: "Problem Solving"
  },
  {
    title: "Collaborative Projects",
    desc: "Building real-world web applications and collaborative prototypes in team environments with version control.",
    icon: Trophy,
    gradient: "from-pink-500 to-rose-600",
    borderGlow: "border-pink-500/30",
    tag: "Collaboration"
  }
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 bg-[#0d1224] dark:bg-[#0d1224] light:bg-[#f1f5f9] relative border-t border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-4 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Profile & Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
              ABOUT <span className="gradient-text-purple-pink">ME</span>
            </h2>
          </div>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Nee Kuruthi &bull; Chennai, India
          </p>
        </div>

        {/* Narrative & Career Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/20 space-y-5">
              <p className="text-slate-200 dark:text-slate-200 light:text-slate-700 text-base sm:text-lg leading-relaxed">
                I'm a dedicated and enthusiastic Computer Science and Engineering student passionate about software development and modern web technologies. I enjoy turning ideas into practical digital solutions and continuously improving my technical and problem-solving skills.
              </p>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
                My current technical interests include <span className="text-cyan-400 font-bold">React.js, Vite, Python, Java, C,</span> and <span className="text-pink-400 font-bold">SQL</span>. Through academic projects, hackathons, and personal projects, I am gaining practical experience in developing solutions for real-world problems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-white border border-cyan-500/30 text-slate-300 dark:text-slate-300 light:text-slate-700 font-bold uppercase tracking-wider rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Chennai, India
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-white border border-purple-500/30 text-slate-300 dark:text-slate-300 light:text-slate-700 font-bold uppercase tracking-wider rounded-lg">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                  B.E. Computer Science & Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-white border border-pink-500/30 text-slate-300 dark:text-slate-300 light:text-slate-700 font-bold uppercase tracking-wider rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                  S.A. Engineering College
                </span>
              </div>
            </div>
          </div>

          {/* Career Objective Card (Exact from uploaded resume) */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-purple-500 border-t border-r border-b border-purple-500/25 shadow-2xl flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/30">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600">
                      CAREER OBJECTIVE
                    </h3>
                    <p className="text-xs text-slate-400">Professional Mission</p>
                  </div>
                </div>

                <blockquote className="text-white dark:text-white light:text-slate-900 text-sm sm:text-base leading-relaxed italic border-l-2 border-purple-400 pl-4 py-1">
                  "A dedicated and enthusiastic Computer Science student looking for an opportunity to start my career in the IT industry where I can utilize my technical skills, contribute to organizational growth, and continuously learn new technologies."
                </blockquote>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase font-bold tracking-wider">Aspirations</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-black uppercase">
                  Software / Web Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Highlight Cards Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-sm shadow-cyan-400" />
              Core Competencies & Focus Areas
            </h3>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm uppercase tracking-wider mt-1">
              Key technical domains shaping my engineering development and practical project work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`glass-card p-5 rounded-2xl border ${card.borderGlow} flex flex-col justify-between group hover:shadow-lg transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 text-slate-300 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${card.gradient} text-white shadow-xs`}>
                        {card.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-white dark:text-white light:text-slate-900 mb-2 leading-snug uppercase group-hover:text-cyan-400 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
