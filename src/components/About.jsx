import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Layers, 
  Lightbulb, 
  Trophy, 
  MapPin, 
  Target, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const highlightCards = [
  {
    title: "Computer Science & Engineering",
    desc: "Rigorous academic grounding in core computing principles, algorithms, and system design.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-500/20",
    tag: "Core Engineering"
  },
  {
    title: "Frontend Development",
    desc: "Designing intuitive, mobile-responsive interfaces and component-driven web architectures.",
    icon: Layers,
    color: "from-indigo-500 to-purple-600",
    border: "border-indigo-500/20",
    tag: "UI Engineering"
  },
  {
    title: "React.js",
    desc: "Building interactive, state-driven single page applications using modern hooks and tools like Vite.",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/20",
    tag: "Modern Framework"
  },
  {
    title: "Problem Solving",
    desc: "Applying structured analytical thinking to turn complex challenges into reliable software logic.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600",
    border: "border-amber-500/20",
    tag: "Analytical Logic"
  },
  {
    title: "Hackathon Projects",
    desc: "Developing fast, collaborative real-world prototypes under deadline-focused sprint settings.",
    icon: Trophy,
    color: "from-purple-500 to-pink-600",
    border: "border-purple-500/20",
    tag: "Collaboration"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background ambient accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Narrative & Career Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I'm a dedicated and enthusiastic Computer Science and Engineering student passionate about software development and modern web technologies. I enjoy turning ideas into practical digital solutions and continuously improving my technical and problem-solving skills.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                My current technical interests include <span className="text-indigo-400 font-semibold">React.js, Vite, Python, Java, C,</span> and <span className="text-indigo-400 font-semibold">SQL</span>. Through academic projects, hackathons, and personal projects, I am gaining practical experience in developing solutions for real-world problems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  Chennai, India
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  B.E. Computer Science & Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  S.A. Engineering College
                </span>
              </div>
            </div>
          </div>

          {/* Career Objective Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/30 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-300">
                      Career Objective
                    </h3>
                    <p className="text-xs text-slate-400">Professional Goal</p>
                  </div>
                </div>

                <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic border-l-2 border-indigo-500 pl-4 py-1 my-4">
                  "A dedicated and enthusiastic Computer Science student looking for an opportunity to start my career in the IT industry where I can utilize my technical skills, contribute to organizational growth, and continuously learn new technologies."
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Immediate Aspirations</span>
                <span className="text-indigo-300 font-medium">Software / Frontend Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Highlight Cards Section */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Core Competencies & Focus Areas
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Key domains shaping my engineering development and practical project work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`glass-card p-5 rounded-2xl border ${card.border} flex flex-col justify-between hover:border-slate-600 transition-all duration-300`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                        {card.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
