import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Layers, 
  Sparkles, 
  Lightbulb, 
  Users, 
  Terminal,
  TrendingUp,
  Cpu
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
    <section 
      id="projects" 
      className="py-24 bg-[#070b18] dark:bg-[#070b18] light:bg-[#f8fafc] bg-grid-pattern relative border-t border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14 pb-6 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              Featured Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
              TRENDING <span className="gradient-text-hero">PROJECTS</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projectFilterCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-pill cursor-pointer uppercase ${
                    isSelected ? 'filter-pill-active' : ''
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

        {/* Practical Experience Highlight Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl glass-card border-l-4 border-l-purple-500 border border-purple-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 text-cyan-400 text-xs font-black uppercase tracking-wider mb-4 border border-purple-500/25">
              <Rocket className="w-3.5 h-3.5" />
              <span>Projects & Practical Experience</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mb-4">
              Building Pragmatic, Team-Oriented Software
            </h3>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Across collaborative projects including <strong className="text-cyan-400">InsureFlow AI / ClaimGuard</strong>, <strong className="text-purple-400">Direct Bridge</strong>, <strong className="text-pink-400">Career Adviser</strong>, and the <strong className="text-blue-400">Secure Online Examination Management System</strong>, my technical emphasis focuses on practical engineering delivery:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-blue-500/20 flex items-start gap-3">
                <Layers className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 uppercase">Frontend Development</h4>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs mt-0.5">Component reusability & state management</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-purple-500/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 uppercase">UI/UX Design</h4>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs mt-0.5">User flows, accessibility & visual hierarchy</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-pink-500/20 flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 uppercase">Problem Solving</h4>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs mt-0.5">Translating domain specs into functional code</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-cyan-500/20 flex items-start gap-3">
                <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 uppercase">Team Collaboration</h4>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs mt-0.5">Git workflows & agile peer coordination</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-purple-500/20 flex items-start gap-3 sm:col-span-2 lg:col-span-2">
                <Terminal className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white dark:text-white light:text-slate-900 uppercase">Modern Web Technologies</h4>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs mt-0.5">React.js, Vite, Tailwind CSS, JavaScript ES6+, Supabase & SQL</p>
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
