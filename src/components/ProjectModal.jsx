import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  AlertCircle,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-[#272729] rounded-sm border border-white/20 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1e1e20] sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#f24614]">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[10px] font-black uppercase tracking-wider text-[#272729] bg-[#facf16] px-2 py-0.5 rounded-xs hidden sm:inline">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 id="modal-headline" className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
              {project.title}
              {project.altTitle && (
                <span className="text-slate-400 text-sm font-normal ml-2 lowercase">
                  ({project.altTitle})
                </span>
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xs text-slate-300 hover:text-white hover:bg-[#272729] transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto bg-[#272729]">
          
          {/* Subtitle & Core Description */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-[#facf16] uppercase tracking-wide">
              {project.subtitle}
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="space-y-4">
              <h5 className="text-xs font-black uppercase tracking-widest text-[#facf16] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#facf16]" />
                Key Features & Capabilities
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div 
                    key={i}
                    className="p-3.5 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#facf16] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Chips */}
          <div className="space-y-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-[#f24614] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#f24614]" />
              Technologies & Tools
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xs bg-[#1e1e20] text-slate-200 border border-white/15 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution Section */}
          {project.contribution && (
            <div className="p-5 rounded-xs bg-[#1e1e20] border-l-4 border-[#facf16] border-y border-r border-white/10 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h5 className="text-xs font-black uppercase tracking-widest text-[#facf16] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#facf16]" />
                  My Engineering Contribution
                </h5>
                <span className="text-xs font-black uppercase tracking-wider text-[#272729] bg-[#facf16] px-2.5 py-0.5 rounded-xs">
                  {project.contribution.role}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.contribution.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#f24614] font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.contribution.note && (
                <div className="p-3 rounded-xs bg-[#272729] border border-white/10 flex items-start gap-2.5 text-xs text-slate-400">
                  <AlertCircle className="w-4 h-4 text-[#facf16] shrink-0 mt-0.5" />
                  <span>{project.contribution.note}</span>
                </div>
              )}
            </div>
          )}

          {/* Actions & Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] font-black uppercase tracking-wider text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs bg-[#1e1e20] text-slate-400 font-bold uppercase tracking-wider text-xs border border-white/10">
                  <Github className="w-4 h-4" />
                  <span>Source Info (Academic Repository)</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xs bg-[#1e1e20] hover:bg-[#343437] text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
