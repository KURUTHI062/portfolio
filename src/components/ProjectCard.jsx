import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Check, 
  Eye, 
  FileCode,
  ShieldCheck
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails, isFeatured = false }) {
  return (
    <div
      className={`glass-card rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 group ${
        isFeatured ? 'lg:col-span-2 bg-gradient-to-b from-slate-900/90 to-slate-950/95' : 'bg-slate-900/80'
      }`}
    >
      {/* Visual Header / Mockup Banner */}
      <div className="relative p-6 sm:p-8 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle accent glow */}
        <div 
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: project.glowColor || 'rgba(99, 102, 241, 0.3)' }}
        />

        <div className="relative z-10 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800/40 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[11px] font-semibold text-purple-300 bg-purple-950/80 border border-purple-800/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" />
                Featured Project
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          
          {project.subtitle && (
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Description */}
        <div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Quick List */}
          {project.keyFeatures && (
            <div className="mt-4 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Core Highlights:
              </span>
              <ul className="space-y-1.5">
                {project.keyFeatures.slice(0, isFeatured ? 4 : 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* My Contribution Badge */}
          {project.contribution && (
            <div className="mt-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300 mb-1">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>My Contribution: {project.contribution.role}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {project.contribution.highlights[0]} &bull; {project.contribution.highlights[1]}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack Pills & Bottom Actions */}
        <div className="space-y-4 pt-2">
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 6 : 4) && (
              <span className="px-2 py-1 rounded-lg bg-slate-800/40 text-slate-400 text-xs font-mono">
                +{project.technologies.length - (isFeatured ? 6 : 4)} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenDetails(project)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-800"
                  title="Source repository is private or academic"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>View Source</span>
                </button>
              )}
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Project Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
