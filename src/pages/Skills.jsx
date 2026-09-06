import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Cpu, GitBranch, Terminal, Layers, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    { name: 'HTML5 & Semantic Markup', category: 'frontend', level: 95, icon: Layout, color: 'from-orange-500 to-amber-500' },
    { name: 'CSS3 & Modern Flexbox/Grid', category: 'frontend', level: 90, icon: Palette, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, icon: Code, color: 'from-yellow-400 to-amber-500' },
    { name: 'React.js & Hooks', category: 'frontend', level: 85, icon: Cpu, color: 'from-cyan-400 to-indigo-500' },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: Layers, color: 'from-sky-400 to-blue-600' },
    { name: 'Git & GitHub', category: 'tools', level: 85, icon: GitBranch, color: 'from-rose-500 to-red-600' },
    { name: 'Vite & Build Tools', category: 'tools', level: 82, icon: Terminal, color: 'from-purple-500 to-pink-500' },
    { name: 'Responsive Web Design', category: 'concepts', level: 95, icon: Layout, color: 'from-emerald-400 to-teal-600' },
    { name: 'REST APIs & Fetch/Axios', category: 'concepts', level: 84, icon: Wrench, color: 'from-indigo-500 to-purple-600' },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider"
        >
          <Cpu className="w-3.5 h-3.5" />
          Technical Stack
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          Skills & <span className="text-gradient">Proficiency</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Overview of my technical expertise, programming languages, libraries, and developer tools.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-2">
        {[
          { id: 'all', label: 'All Skills' },
          { id: 'frontend', label: 'Frontend Core' },
          { id: 'tools', label: 'Tools & Ecosystem' },
          { id: 'concepts', label: 'Design & Concepts' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'glass text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Progress Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${skill.color} text-white flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400 text-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 + 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tech Icon Badges Summary */}
      <div className="p-8 rounded-3xl glass border border-slate-200/80 dark:border-slate-800/80 text-center space-y-4 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Primary Frontend Toolkit
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Git', 'GitHub', 'Framer Motion', 'REST APIs', 'npm'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
