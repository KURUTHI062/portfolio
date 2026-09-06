import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "S.A. Engineering College",
    period: "2024 – Present",
    location: "Chennai, India",
    status: "Currently Pursuing",
    details: "Focused on core computing fundamentals, data structures, algorithms, object-oriented programming, and modern software development practices.",
    badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-700/50",
    dotColor: "bg-indigo-500",
    glow: "shadow-indigo-500/20"
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Sir & Lady M. Venkatasubba Rao Matriculation Higher Secondary School",
    period: "2023 – 2024",
    location: "Chennai, India",
    status: "Completed",
    details: "Completed secondary education with strong focus on science, mathematics, and analytical reasoning.",
    badgeColor: "bg-purple-950/80 text-purple-300 border-purple-700/50",
    dotColor: "bg-purple-500",
    glow: "shadow-purple-500/20"
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Seventh Day Adventist Matric School",
    period: "2021 – 2022",
    location: "Chennai, India",
    status: "Completed",
    details: "Established strong academic foundations in general sciences, mathematics, and computer literacy.",
    badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-700/50",
    dotColor: "bg-cyan-500",
    glow: "shadow-cyan-500/20"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Academic progression in Computer Science and Engineering in Chennai, India.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30 sm:opacity-50" />

          <div className="space-y-12">
            {educationList.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor}`} />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group">
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                        <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 mt-3 pt-3 border-t border-slate-800/80 leading-relaxed">
                        {item.details}
                      </p>

                    </div>
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
