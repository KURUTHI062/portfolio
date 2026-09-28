import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Check, 
  Eye, 
  FileCode,
  ArrowRight,
  Layers,
  User,
  Sparkles
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails, isFeatured = false }) {
  return (
    <div
      className={`glass-card rounded-2xl border border-purple-500/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-purple-500/60 group ${
        isFeatured ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Header Bar */}
      <div className="p-6 pb-4 border-b border-purple-500/20 bg-[#070b18]/40 dark:bg-[#070b18]/40 light:bg-slate-50/60">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Category Tag */}
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-2.5 py-0.5 rounded-full font-mono shadow-sm">
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors uppercase leading-snug">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <p className="text-xs sm:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1">
            {project.subtitle}
          </p>
        )}

        {/* Metadata Line */}
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-3 pt-3 border-t border-purple-500/15 font-mono">
          <span className="w-5 h-5 rounded-full bg-[#070b18] border border-purple-500/30 flex items-center justify-center text-cyan-400">
            <User className="w-3 h-3" />
          </span>
          <span>Nee Kuruthi</span>
          <span>&bull;</span>
          <span className="text-purple-400 font-bold">Frontend / UI-UX</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Description */}
        <div>
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Quick List */}
          {project.keyFeatures && (
            <div className="mt-4 space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 block mb-2">
                Core Highlights:
              </span>
              <ul className="space-y-1.5">
                {project.keyFeatures.slice(0, isFeatured ? 4 : 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-200 dark:text-slate-200 light:text-slate-700">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* My Contribution Badge */}
          {project.contribution && (
            <div className="mt-4 p-3.5 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-purple-500/20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-pink-400 mb-1 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>My Contribution: {project.contribution.role}</span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug">
                {project.contribution.highlights[0]} &bull; {project.contribution.highlights[1]}
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack & Action Buttons */}
        <div className="space-y-4 pt-2">
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 border border-purple-500/20 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 6 : 4) && (
              <span className="px-2 py-1 rounded-lg bg-[#070b18]/40 text-slate-400 text-[11px] font-mono">
                +{project.technologies.length - (isFeatured ? 6 : 4)} more
              </span>
            )}
          </div>

          {/* Action Buttons (Blue -> Purple Gradient Button) */}
          <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between gap-3">
            <div>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 hover:bg-[#162032] text-slate-200 dark:text-slate-200 light:text-slate-700 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-purple-500/25"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenDetails(project)}
                  className="px-3.5 py-2 rounded-xl bg-[#070b18]/60 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-purple-500/20"
                  title="Source repository is academic/private"
                >
                  <FileCode className="w-3.5 h-3.5 text-purple-400" />
                  <span>Source Info</span>
                </button>
              )}
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="btn-gradient px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Project Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
