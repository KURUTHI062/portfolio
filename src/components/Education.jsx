import React from 'react';
import { GraduationCap, Calendar, MapPin, School, BookOpen } from 'lucide-react';

const educationList = [
  {
    degree: "B.E in Computer Science and Engineering - II Year",
    institution: "S.A. Engineering College",
    period: "2024 – Present",
    location: "CHENNAI, INDIA",
    status: "CURRENTLY PURSUING",
    details: "Focused on core computing fundamentals, data structures, algorithms, object-oriented programming, and modern software development practices.",
    gradient: "from-blue-600 to-indigo-600",
    glowColor: "border-blue-500/40 text-cyan-400",
    dotColor: "bg-cyan-400 ring-4 ring-cyan-500/20"
  },
  {
    degree: "HSC",
    institution: "Sir & Lady M. Venkatasubba Rao Matriculation Higher Secondary School",
    period: "2023 – 2024",
    location: "CHENNAI, INDIA",
    status: "COMPLETED",
    details: "Completed higher secondary education with strong focus on science, mathematics, and analytical reasoning.",
    gradient: "from-purple-600 to-pink-600",
    glowColor: "border-purple-500/40 text-purple-400",
    dotColor: "bg-purple-400 ring-4 ring-purple-500/20"
  },
  {
    degree: "SSLC",
    institution: "Seventh Day Adventist Matric School",
    period: "2021 – 2022",
    location: "CHENNAI, INDIA",
    status: "COMPLETED",
    details: "Established academic foundations in general sciences, mathematics, and computer fundamentals.",
    gradient: "from-pink-600 to-rose-600",
    glowColor: "border-pink-500/40 text-pink-400",
    dotColor: "bg-pink-400 ring-4 ring-pink-500/20"
  }
];

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 bg-[#0d1224] dark:bg-[#0d1224] light:bg-[#f1f5f9] relative border-t border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5" />
              Academic Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
              EDUCATION <span className="gradient-text-purple-pink">TIMELINE</span>
            </h2>
          </div>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Academic Progression in Chennai
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Accent Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-40" />

          <div className="space-y-12">
            {educationList.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.degree}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070b18] dark:bg-[#070b18] light:bg-white border-2 border-purple-500 flex items-center justify-center z-10 shadow-lg shadow-purple-500/30">
                    <span className={`w-3 h-3 rounded-full ${item.dotColor}`} />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-purple-500/20 group hover:border-purple-500/60 transition-all">
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                        <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.glowColor} bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100`}>
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors uppercase">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-bold text-purple-400 dark:text-purple-400 light:text-purple-600 mt-1">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-3 pt-3 border-t border-purple-500/15 leading-relaxed">
                        {item.details}
                      </p>

                    </div>
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
