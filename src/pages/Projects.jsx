import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Sparkles, Layers, Star } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'DevPulse - Developer Dashboard & Analytics',
      description: 'A comprehensive React dashboard for software engineers to track GitHub repositories, open PRs, commit activity, and personal coding goals in real-time.',
      category: 'React App',
      tags: ['React', 'Tailwind CSS', 'Vite', 'REST API', 'Framer Motion'],
      github: 'https://github.com/alexrivera/devpulse-dashboard',
      demo: 'https://devpulse-demo.vercel.app',
      featured: true,
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      id: 2,
      title: 'TaskFlow - Kanban Project Manager',
      description: 'An interactive project management web application featuring drag-and-drop task boards, dark mode, subtasks, priority tags, and local storage persistence.',
      category: 'React App',
      tags: ['React', 'Context API', 'Tailwind CSS', 'Lucide Icons'],
      github: 'https://github.com/alexrivera/taskflow-kanban',
      demo: 'https://taskflow-demo.vercel.app',
      featured: true,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 3,
      title: 'ShopZen - Modern E-Commerce UI',
      description: 'A responsive e-commerce storefront with product filtering, search, cart sidebar, total calculation, toast notifications, and checkout view.',
      category: 'E-Commerce',
      tags: ['React', 'Tailwind CSS', 'React Router', 'Vite'],
      github: 'https://github.com/alexrivera/shopzen-ecommerce',
      demo: 'https://shopzen-demo.vercel.app',
      featured: false,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 4,
      title: 'WeatherSphere - Weather Forecast App',
      description: 'Clean weather app providing 5-day weather forecasts, geolocation lookup, UV index, humidity meters, and dynamic animated weather backgrounds.',
      category: 'API Integration',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      github: 'https://github.com/alexrivera/weathersphere-app',
      demo: 'https://weathersphere-demo.vercel.app',
      featured: false,
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  const categories = ['All', 'React App', 'E-Commerce', 'API Integration'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Work
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Explore a showcase of applications I have built using modern frontend technologies.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              filter === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'glass text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Top Header / Mockup Banner */}
            <div className={`h-48 bg-gradient-to-r ${project.gradient} relative p-6 flex flex-col justify-between text-white overflow-hidden`}>
              <div className="flex justify-between items-start z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-slate-950" /> Featured
                  </span>
                )}
              </div>

              <div className="z-10">
                <h3 className="text-2xl font-bold tracking-wide drop-shadow-sm">
                  {project.title}
                </h3>
              </div>

              {/* Decorative Geometric Overlay */}
              <div className="absolute -right-6 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
            </div>

            {/* Content Body */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl glass hover:bg-indigo-50 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
