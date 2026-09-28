import React from 'react';
import { 
  Globe, 
  Database, 
  Users, 
  CheckCircle, 
  Terminal, 
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    subtitle: "Core syntax, logic & object-oriented foundations",
    icon: Terminal,
    gradient: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    skills: [
      { name: "Python", badge: "PRIMARY", desc: "Data structures, scripting, algorithm implementation" },
      { name: "Java", badge: "OOP CORE", desc: "Object-oriented programming, class design, modular logic" },
      { name: "C", badge: "FOUNDATIONS", desc: "Memory fundamentals, pointers, procedural logic" }
    ]
  },
  {
    title: "WEB DEVELOPMENT",
    subtitle: "Modern frontend frameworks, build tooling & markup",
    icon: Globe,
    gradient: "from-purple-600 to-pink-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    skills: [
      { name: "React.js", badge: "CORE STACK", desc: "Functional components, state hooks, responsive single page apps" },
      { name: "Vite", badge: "BUILD TOOL", desc: "Next-generation fast bundler, dev server, optimized assets" },
      { name: "JavaScript", badge: "ES6+", desc: "Async/await, DOM APIs, modern ES features, event loops" },
      { name: "HTML5 & CSS3", badge: "MARKUP & UI", desc: "Accessible semantic structures, responsive layouts, modern CSS" }
    ]
  },
  {
    title: "DATABASE MANAGEMENT",
    subtitle: "Relational modeling, queries & schema design",
    icon: Database,
    gradient: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    skills: [
      { name: "SQL", badge: "RELATIONAL", desc: "Queries, joins, table indexing, relational schema structures" }
    ]
  },
  {
    title: "SOFT SKILLS",
    subtitle: "Collaborative teamwork, communication & structured thinking",
    icon: Users,
    gradient: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    skills: [
      { name: "Communication", badge: "INTERPERSONAL", desc: "Clear technical explanations, active listening, project presentations" },
      { name: "Team work", badge: "COLLABORATIVE", desc: "Cross-functional collaboration in hackathons and academic cohorts" },
      { name: "Problem Solving", badge: "ANALYTICAL", desc: "Structured root-cause diagnosis, logical decomposition of complex bugs" }
    ]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 bg-[#070b18] dark:bg-[#070b18] light:bg-[#f8fafc] bg-grid-pattern relative border-t border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-4 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
              SKILLS & <span className="gradient-text-cyan-blue">EXPERTISE</span>
            </h2>
          </div>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Verified Technical Capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20 flex flex-col justify-between hover:border-purple-500/50 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/20">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${category.gradient} text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform`}>
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white dark:text-white light:text-slate-900 tracking-wider uppercase">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-[#070b18]/70 dark:bg-[#070b18]/70 light:bg-slate-50 hover:bg-[#162032] dark:hover:bg-[#162032] light:hover:bg-slate-100 border border-purple-500/15 transition-all group/item"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-cyan-400 group-hover/item:scale-110 transition-transform" />
                            <span className="font-bold text-sm text-white dark:text-white light:text-slate-900">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${category.badgeColor}`}>
                            {skill.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 pl-6.5">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-400 font-bold">Applied in Projects</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
