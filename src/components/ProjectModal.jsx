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
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#0d1224] dark:bg-[#0d1224] light:bg-white rounded-2xl border border-purple-500/30 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Top Header Bar */}
          <div className="px-6 py-4 border-b border-purple-500/20 flex items-center justify-between bg-[#070b18] dark:bg-[#070b18] light:bg-slate-50 sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-400">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-0.5 rounded-full hidden sm:inline font-mono">
                    {project.badge}
                  </span>
                )}
              </div>
              <h3 id="modal-headline" className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-slate-900 mt-1 uppercase">
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
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-[#162032] transition-colors cursor-pointer border border-purple-500/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto bg-[#0d1224] dark:bg-[#0d1224] light:bg-white">
            
            {/* Subtitle & Core Description */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 uppercase tracking-wide">
                {project.subtitle}
              </h4>
              <p className="text-slate-200 dark:text-slate-200 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.overview || project.description}
              </p>
            </div>

            {/* Key Features List */}
            {project.keyFeatures && (
              <div className="space-y-4">
                <h5 className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Key Features & Capabilities
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-purple-500/20 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Chips */}
            <div className="space-y-3">
              <h5 className="text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-pink-400" />
                Technologies & Tools
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 border border-purple-500/25 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution Section */}
            {project.contribution && (
              <div className="p-5 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border-l-4 border-l-purple-500 border border-purple-500/20 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h5 className="text-xs font-black uppercase tracking-widest text-pink-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    My Engineering Contribution
                  </h5>
                  <span className="text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-0.5 rounded-full font-mono">
                    {project.contribution.role}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {project.contribution.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.contribution.note && (
                  <div className="p-3 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 border border-purple-500/20 flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                    <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{project.contribution.note}</span>
                  </div>
                )}
              </div>
            )}

            {/* Actions & Links */}
            <div className="pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-black uppercase tracking-wider text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070b18]/60 text-slate-400 font-bold uppercase tracking-wider text-xs border border-purple-500/20">
                    <Github className="w-4 h-4" />
                    <span>Source Info (Academic Repository)</span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#070b18] dark:bg-[#070b18] light:bg-slate-100 hover:bg-[#162032] text-white dark:text-white light:text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider border border-purple-500/25 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
