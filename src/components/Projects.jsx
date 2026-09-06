import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Layers, 
  Sparkles, 
  Lightbulb, 
  Users, 
  Terminal,
  TrendingUp
} from 'lucide-react';
import { projects, projectFilterCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.filterCategories.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-[#1e1e20] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Bar (Matching reference 'TRENDING' design) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f24614] flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              Featured Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
              TRENDING <span className="text-[#facf16]">PROJECTS</span>
            </h2>
          </div>

          {/* Category Filter Pills (Exact match to reference pill styling) */}
          <div className="flex flex-wrap items-center gap-2">
            {projectFilterCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`pill-tab cursor-pointer uppercase ${
                    isSelected ? 'pill-tab-active' : ''
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-flow:dense]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={project.featured && selectedCategory === 'All' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                  isFeatured={project.featured && selectedCategory === 'All'}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section 14: Practical Experience Highlight Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-sm bg-[#272729] border-l-4 border-[#facf16] border-y border-r border-white/10 shadow-2xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#1e1e20] text-[#facf16] text-xs font-black uppercase tracking-wider mb-4 border border-white/10">
              <Rocket className="w-3.5 h-3.5" />
              <span>Projects & Practical Experience</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-4">
              Building Pragmatic, Team-Oriented Software
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Across collaborative projects including <strong className="text-white">Direct Bridge</strong>, <strong className="text-white">InsureFlow AI / ClaimGuard</strong>, <strong className="text-white">Career Adviser</strong>, and the <strong className="text-white">Secure Online Examination Management System</strong>, my technical emphasis focuses on practical engineering delivery:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-3">
                <Layers className="w-4 h-4 text-[#facf16] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase">Frontend Development</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Component reusability & state management</p>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#f24614] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase">UI/UX Design</h4>
                  <p className="text-slate-400 text-xs mt-0.5">User flows, accessibility & visual hierarchy</p>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-[#facf16] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase">Problem Solving</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Translating domain specs into functional code</p>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-3">
                <Users className="w-4 h-4 text-[#f24614] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase">Team Collaboration</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Git workflows & agile peer coordination</p>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#1e1e20] border border-white/10 flex items-start gap-3 sm:col-span-2 lg:col-span-2">
                <Terminal className="w-4 h-4 text-[#facf16] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase">Modern Web Technologies</h4>
                  <p className="text-slate-400 text-xs mt-0.5">React.js, Vite, Tailwind CSS, JavaScript ES6+, Supabase & SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
