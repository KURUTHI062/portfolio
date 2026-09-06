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
    badgeColor: "bg-[#f24614] text-white",
    tag: "Core Engineering"
  },
  {
    title: "Frontend Development",
    desc: "Designing intuitive, mobile-responsive interfaces and component-driven web architectures.",
    icon: Layers,
    badgeColor: "bg-[#facf16] text-[#272729]",
    tag: "UI Engineering"
  },
  {
    title: "React.js",
    desc: "Building interactive, state-driven single page applications using modern hooks and tools like Vite.",
    icon: Code2,
    badgeColor: "bg-[#facf16] text-[#272729]",
    tag: "Modern Framework"
  },
  {
    title: "Problem Solving",
    desc: "Applying structured analytical thinking to turn complex challenges into reliable software logic.",
    icon: Lightbulb,
    badgeColor: "bg-[#f24614] text-white",
    tag: "Analytical Logic"
  },
  {
    title: "Hackathon Projects",
    desc: "Developing fast, collaborative real-world prototypes under deadline-focused sprint settings.",
    icon: Trophy,
    badgeColor: "bg-[#facf16] text-[#272729]",
    tag: "Collaboration"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1e1e20] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f24614]">
              Profile & Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
              ABOUT <span className="text-[#facf16]">ME</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Nee Kuruthi &bull; Chennai, India
          </p>
        </div>

        {/* Narrative & Career Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="editorial-card p-6 sm:p-8 rounded-sm space-y-5">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                I'm a dedicated and enthusiastic Computer Science and Engineering student passionate about software development and modern web technologies. I enjoy turning ideas into practical digital solutions and continuously improving my technical and problem-solving skills.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                My current technical interests include <span className="text-[#facf16] font-bold">React.js, Vite, Python, Java, C,</span> and <span className="text-[#facf16] font-bold">SQL</span>. Through academic projects, hackathons, and personal projects, I am gaining practical experience in developing solutions for real-world problems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1e1e20] border border-white/15 text-slate-200 font-bold uppercase tracking-wider rounded-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#f24614]" />
                  Chennai, India
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1e1e20] border border-white/15 text-slate-200 font-bold uppercase tracking-wider rounded-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#facf16]" />
                  B.E. Computer Science & Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1e1e20] border border-white/15 text-slate-200 font-bold uppercase tracking-wider rounded-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#facf16]" />
                  S.A. Engineering College
                </span>
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-sm bg-[#272729] border-l-4 border-[#facf16] border-y border-r border-white/10 shadow-xl flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#facf16] text-[#272729] flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#facf16]">
                      Career Objective
                    </h3>
                    <p className="text-xs text-slate-400">Professional Goal</p>
                  </div>
                </div>

                <blockquote className="text-slate-100 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#f24614] pl-4 py-1">
                  "A dedicated and enthusiastic Computer Science student looking for an opportunity to start my career in the IT industry where I can utilize my technical skills, contribute to organizational growth, and continuously learn new technologies."
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase font-bold tracking-wider">Aspirations</span>
                <span className="text-[#facf16] font-bold uppercase">Software / Frontend Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Highlight Cards Section */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-black text-white tracking-tight uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#f24614] inline-block" />
              Core Competencies & Focus Areas
            </h3>
            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">
              Key domains shaping my engineering development and practical project work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="editorial-card p-5 rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-sm bg-[#1e1e20] text-slate-200 border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#facf16]" />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs ${card.badgeColor}`}>
                        {card.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-white mb-2 leading-snug uppercase">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
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
