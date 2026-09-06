import React from 'react';
import { 
  Globe, 
  Database, 
  Users, 
  CheckCircle,
  Terminal,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    subtitle: "Core syntax, logic & object-oriented foundations",
    icon: Terminal,
    tagColor: "bg-[#f24614] text-white",
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
    tagColor: "bg-[#facf16] text-[#272729]",
    skills: [
      { name: "React.js", badge: "CORE STACK", desc: "Functional components, state hooks, responsive single page apps" },
      { name: "Vite", badge: "BUILD TOOL", desc: "Next-generation fast bundler, dev server, optimized assets" },
      { name: "JavaScript", badge: "ES6+", desc: "Async/await, DOM APIs, modern ES features, event loops" },
      { name: "HTML5", badge: "SEMANTIC", desc: "Accessible structures, semantic markup, SEO best practices" },
      { name: "CSS3", badge: "STYLING", desc: "Tailwind CSS, Flexbox/Grid, transitions, editorial UI" }
    ]
  },
  {
    title: "DATABASE MANAGEMENT",
    subtitle: "Relational modeling, queries & schema design",
    icon: Database,
    tagColor: "bg-[#f24614] text-white",
    skills: [
      { name: "SQL", badge: "RELATIONAL", desc: "Queries, joins, table indexing, relational schema structures" }
    ]
  },
  {
    title: "SOFT SKILLS & LEADERSHIP",
    subtitle: "Collaborative teamwork, empathy & clear articulation",
    icon: Users,
    tagColor: "bg-[#facf16] text-[#272729]",
    skills: [
      { name: "Communication", badge: "INTERPERSONAL", desc: "Clear technical explanations, active listening, project presentations" },
      { name: "Teamwork", badge: "AGILE", desc: "Cross-functional collaboration in hackathons and academic cohorts" },
      { name: "Problem Solving", badge: "ANALYTICAL", desc: "Structured root-cause diagnosis, logical decomposition of complex bugs" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#272729] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#facf16]">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
              SKILLS & <span className="text-[#facf16]">EXPERTISE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Practical Technical Capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.title}
                className="editorial-card rounded-sm p-6 sm:p-8 bg-[#1e1e20] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-[#272729] text-[#facf16] border border-white/10 flex items-center justify-center font-bold">
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white tracking-wider uppercase">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
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
                        className="p-3.5 rounded-sm bg-[#272729] hover:bg-[#343437] border border-white/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#facf16] group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-xs bg-[#1e1e20] text-[#facf16] border border-white/10">
                            {skill.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 pl-6">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-[#facf16] font-bold">Applied in Projects</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
