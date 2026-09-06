import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Layers, 
  AlertCircle,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent scrolling when modal is open
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl glass-card rounded-3xl border border-slate-700 bg-slate-900/95 shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/40 hidden sm:inline">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 id="modal-headline" className="text-xl sm:text-2xl font-bold text-white mt-1">
              {project.title}
              {project.altTitle && (
                <span className="text-slate-400 text-sm sm:text-base font-normal ml-2">
                  ({project.altTitle})
                </span>
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Subtitle & Core Description */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-semibold text-indigo-300">
              {project.subtitle}
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="space-y-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Key Features & Capabilities
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div 
                    key={i}
                    className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Chips */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Technologies & Tools
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution Section - Strictly transparent & accurate */}
          {project.contribution && (
            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h5 className="text-sm font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  My Engineering Contribution
                </h5>
                <span className="text-xs font-semibold text-indigo-200 bg-indigo-900/60 px-2.5 py-0.5 rounded-md border border-indigo-700/50">
                  {project.contribution.role}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.contribution.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.contribution.note && (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{project.contribution.note}</span>
                </div>
              )}
            </div>
          )}

          {/* Actions & Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 text-slate-500 font-medium text-xs sm:text-sm border border-slate-800 cursor-not-allowed">
                  <Github className="w-4 h-4" />
                  <span>View Source (Private / Academic Repository)</span>
                </div>
              )}

              {project.liveUrl && project.liveUrl !== '#' ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  Live deployment in progress or restricted access
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
