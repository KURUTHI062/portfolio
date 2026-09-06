import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationList = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "S.A. Engineering College",
    period: "2024 – Present",
    location: "Chennai, India",
    status: "CURRENTLY PURSUING",
    details: "Focused on core computing fundamentals, data structures, algorithms, object-oriented programming, and modern software development practices.",
    badgeColor: "bg-[#facf16] text-[#272729]",
    dotColor: "bg-[#facf16]"
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Sir & Lady M. Venkatasubba Rao Matriculation Higher Secondary School",
    period: "2023 – 2024",
    location: "Chennai, India",
    status: "COMPLETED",
    details: "Completed secondary education with strong focus on science, mathematics, and analytical reasoning.",
    badgeColor: "bg-[#f24614] text-white",
    dotColor: "bg-[#f24614]"
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Seventh Day Adventist Matric School",
    period: "2021 – 2022",
    location: "Chennai, India",
    status: "COMPLETED",
    details: "Established strong academic foundations in general sciences, mathematics, and computer literacy.",
    badgeColor: "bg-[#1e1e20] text-slate-200 border border-white/20",
    dotColor: "bg-white"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#272729] relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#facf16]">
              Academic Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
              EDUCATION <span className="text-[#facf16]">TIMELINE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Academic Progression in Chennai
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Yellow Accent Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-[#facf16]/40" />

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
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-sm bg-[#1e1e20] border-2 border-[#facf16] flex items-center justify-center z-10 shadow-lg">
                    <span className={`w-2.5 h-2.5 rounded-xs ${item.dotColor}`} />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="editorial-card p-6 sm:p-7 rounded-sm bg-[#1e1e20] border border-white/10 group">
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                        <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-xs ${item.badgeColor}`}>
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-[#facf16]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#facf16] transition-colors uppercase">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-bold text-[#facf16] mt-1">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-[#f24614]" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mt-3 pt-3 border-t border-white/10 leading-relaxed">
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
