import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  FolderGit2, 
  Layers, 
  Code, 
  CheckCircle2, 
  Users, 
  Rocket, 
  Lightbulb,
  Terminal
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Real-world platforms, AI-assisted tools, and digital solutions demonstrating frontend development, UI/UX design, and structured system workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilterCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'glass text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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

        {/* Section 14: Practical Experience & Hackathons Highlight Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl glass-card border border-indigo-500/30 relative overflow-hidden bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/40 shadow-xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-500/30">
              <Rocket className="w-3.5 h-3.5 text-indigo-400" />
              <span>Projects & Practical Experience</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Building Pragmatic, Team-Oriented Software
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Across collaborative projects including <strong className="text-white">Direct Bridge</strong>, <strong className="text-white">InsureFlow AI / ClaimGuard</strong>, <strong className="text-white">Career Adviser</strong>, and the <strong className="text-white">Secure Online Examination Management System</strong>, my technical emphasis focuses on practical engineering delivery:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Layers className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Frontend Development</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Component reusability & state management</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">UI/UX Design</h4>
                  <p className="text-slate-400 text-xs mt-0.5">User flows, accessibility & visual hierarchy</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Real-world Problem Solving</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Translating domain specs into functional code</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Team Collaboration</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Git workflows & agile peer coordination</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 sm:col-span-2 lg:col-span-2">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Modern Web Technologies</h4>
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
