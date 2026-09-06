import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Database, 
  Users, 
  Sparkles, 
  CheckCircle,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Layout,
  MessageSquare,
  Flame
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Core syntax, logic & object-oriented foundations",
    icon: Terminal,
    gradient: "from-blue-600 to-indigo-600",
    border: "border-blue-500/30",
    skills: [
      { name: "Python", badge: "Primary", desc: "Data structures, scripting, algorithm implementation" },
      { name: "Java", badge: "OOP Core", desc: "Object-oriented programming, class design, modular logic" },
      { name: "C", badge: "Foundations", desc: "Memory fundamentals, pointers, procedural logic" }
    ]
  },
  {
    title: "Web Development",
    subtitle: "Modern frontend frameworks, build tooling & markup",
    icon: Globe,
    gradient: "from-indigo-600 to-purple-600",
    border: "border-indigo-500/30",
    skills: [
      { name: "React.js", badge: "Core Stack", desc: "Functional components, state hooks, responsive single page apps" },
      { name: "Vite", badge: "Build Tool", desc: "Next-generation fast bundler, dev server, optimized assets" },
      { name: "JavaScript", badge: "ES6+", desc: "Async/await, DOM APIs, modern ES features, event loops" },
      { name: "HTML5", badge: "Semantic", desc: "Accessible structures, semantic markup, SEO best practices" },
      { name: "CSS3", badge: "Styling", desc: "Tailwind CSS, Flexbox/Grid, transitions, glassmorphism UI" }
    ]
  },
  {
    title: "Database Management",
    subtitle: "Relational modeling, queries & schema design",
    icon: Database,
    gradient: "from-emerald-600 to-teal-600",
    border: "border-emerald-500/30",
    skills: [
      { name: "SQL", badge: "Relational", desc: "Queries, joins, table indexing, relational schema structures" }
    ]
  },
  {
    title: "Soft Skills & Leadership",
    subtitle: "Collaborative teamwork, empathy & clear articulation",
    icon: Users,
    gradient: "from-pink-600 to-rose-600",
    border: "border-pink-500/30",
    skills: [
      { name: "Communication", badge: "Interpersonal", desc: "Clear technical explanations, active listening, project presentations" },
      { name: "Teamwork", badge: "Agile", desc: "Cross-functional collaboration in hackathons and academic cohorts" },
      { name: "Problem Solving", badge: "Analytical", desc: "Structured root-cause diagnosis, logical decomposition of complex bugs" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Practical skills acquired through academic coursework, engineering projects, and hands-on coding.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card rounded-3xl p-6 sm:p-8 border ${category.border} relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center shadow-lg shadow-black/20 shrink-0`}>
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List / Badges */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
                            <span className="font-semibold text-sm sm:text-base text-white group-hover:text-indigo-200 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-0.5 rounded-full">
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

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-indigo-400/80 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Applied in real projects
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
