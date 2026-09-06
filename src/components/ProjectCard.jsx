import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Check, 
  Eye, 
  FileCode,
  ArrowRight,
  Layers,
  User
} from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails, isFeatured = false }) {
  return (
    <div
      className={`editorial-card rounded-sm bg-[#272729] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#facf16]/60 group ${
        isFeatured ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Editorial Header Bar */}
      <div className="p-6 pb-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Orange Category Tag (Exact match to reference UI) */}
          <span className="text-xs font-black uppercase tracking-wider text-[#f24614]">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-black uppercase tracking-wider text-[#272729] bg-[#facf16] px-2 py-0.5 rounded-xs">
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#facf16] transition-colors uppercase leading-snug">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
            {project.subtitle}
          </p>
        )}

        {/* Metadata Line */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mt-3 pt-3 border-t border-white/5 font-mono">
          <span className="w-5 h-5 rounded-full bg-[#1e1e20] border border-white/20 flex items-center justify-center text-[#facf16]">
            <User className="w-3 h-3" />
          </span>
          <span>Nee Kuruthi</span>
          <span>&bull;</span>
          <span className="text-[#facf16] font-bold">Frontend / UI-UX</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Description */}
        <div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Quick List */}
          {project.keyFeatures && (
            <div className="mt-4 space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 block mb-2">
                Core Highlights:
              </span>
              <ul className="space-y-1.5">
                {project.keyFeatures.slice(0, isFeatured ? 4 : 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#facf16] shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* My Contribution Badge */}
          {project.contribution && (
            <div className="mt-4 p-3 rounded-xs bg-[#1e1e20] border border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#facf16] mb-1 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>My Contribution: {project.contribution.role}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
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
                className="px-2 py-0.5 rounded-xs bg-[#1e1e20] text-slate-200 border border-white/10 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 6 : 4) && (
              <span className="px-2 py-0.5 rounded-xs bg-[#1e1e20] text-slate-400 text-[11px] font-mono">
                +{project.technologies.length - (isFeatured ? 6 : 4)} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <div>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xs bg-[#1e1e20] hover:bg-[#343437] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/15"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenDetails(project)}
                  className="px-3.5 py-2 rounded-xs bg-[#1e1e20] text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/10"
                  title="Source repository is private or academic"
                >
                  <FileCode className="w-3.5 h-3.5 text-[#facf16]" />
                  <span>Source Info</span>
                </button>
              )}
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="px-4 py-2 rounded-xs bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
