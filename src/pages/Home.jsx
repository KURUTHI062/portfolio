import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, Rocket, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center relative py-12">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Open to Frontend & React Developer Roles
        </motion.div>

        {/* Name & Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.15]"
        >
          Hi, I'm <span className="text-gradient">Alex Rivera</span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2"
        >
          <Terminal className="w-6 h-6 text-indigo-500 inline" />
          Frontend Developer / React Developer
        </motion.p>

        {/* Short Introduction (2-3 lines) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A Computer Science student passionate about building clean, performant, and visually captivating web applications. I turn design concepts into interactive web apps using React, JavaScript, and Tailwind CSS.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <Link
            to="/projects"
            className="px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-2xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-semibold flex items-center gap-2 border border-slate-300 dark:border-slate-700 shadow-sm hover:scale-105 transition-all duration-300"
          >
            <span>Contact Me</span>
          </Link>
        </motion.div>

        {/* Social Links Quick Access */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 text-slate-500 dark:text-slate-400"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Feature Highlight Cards Section */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
            <Code2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Modern Tech Stack
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Proficient in React 18, ES6+ JavaScript, Tailwind CSS, Vite, HTML5, CSS3, and Git version control.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Pixel-Perfect UI
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Building intuitive user interfaces with strong focus on dark mode, responsiveness, accessibility, and micro-interactions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Clean Architecture
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Writing clean, modular, and maintainable code adhering to standard React hooks and component patterns.
          </p>
        </motion.div>
      </div>

      {/* Quick Bio Banner */}
      <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold">Want to learn more about my background?</h3>
          <p className="text-indigo-200 text-sm max-w-xl">
            Check out my education history, career aspirations, and core strengths on the About page.
          </p>
        </div>
        <Link
          to="/about"
          className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center gap-2 shrink-0"
        >
          <span>About Me</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
