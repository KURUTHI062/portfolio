import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, GraduationCap, Briefcase, Code, ExternalLink, Sparkles } from 'lucide-react';

export default function Resume() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate resume PDF generation/downloading
    setTimeout(() => {
      // Create a dummy blob download or alert
      const element = document.createElement('a');
      const file = new Blob([
        `ALEX RIVERA - FRONTEND DEVELOPER RESUME\n\n` +
        `Email: alex.rivera.dev@example.com | Phone: +1 (555) 234-5678\n` +
        `GitHub: github.com/alexrivera | LinkedIn: linkedin.com/in/alexrivera\n\n` +
        `SUMMARY:\n` +
        `Motivated Computer Science student specializing in React.js, JavaScript, and Tailwind CSS.\n\n` +
        `EDUCATION:\n` +
        `B.S. in Computer Science - State University of Technology (2022 - Present) | GPA: 3.8/4.0\n\n` +
        `TECHNICAL SKILLS:\n` +
        `React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite, Git, GitHub, REST APIs\n\n` +
        `PROJECTS:\n` +
        `- DevPulse: Developer Dashboard & Analytics App\n` +
        `- TaskFlow: Kanban Project Board in React\n` +
        `- ShopZen: E-Commerce Storefront UI\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Alex_Rivera_Frontend_Developer_Resume.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header & Download CTA */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider"
        >
          <FileText className="w-3.5 h-3.5" />
          Curriculum Vitae
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          My <span className="text-gradient">Resume</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
        >
          View a summary of my qualifications, academic background, and technical projects below, or download a printable PDF copy.
        </motion.p>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold flex items-center gap-3 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300 disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {downloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Preparing Resume...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Interactive Resume Sheet Paper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl space-y-10 relative overflow-hidden"
      >
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-slate-200 dark:border-slate-800 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Alex Rivera</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
              Frontend Developer / React Developer
            </p>
          </div>
          <div className="text-xs sm:text-right text-slate-500 dark:text-slate-400 space-y-1">
            <p>Email: alex.rivera.dev@example.com</p>
            <p>Location: San Francisco, CA</p>
            <p>Website: alexrivera.dev</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Professional Summary
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Self-motivated Computer Science student with strong expertise in React.js, modern JavaScript, and Tailwind CSS. Proven ability to create responsive, accessible web interfaces and component libraries. Enthusiastic about continuous learning, clean software architecture, and delivering polished digital experiences.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            Education
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">State University of Technology</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-xs">2022 - Present</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs">
              Cumulative GPA: 3.8 / 4.0 | Focus: Web Engineering, Data Structures, User Interface Design
            </p>
          </div>
        </div>

        {/* Core Technical Skills */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Code className="w-4 h-4 text-indigo-500" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Languages:</span>
              <span className="text-slate-600 dark:text-slate-300">JavaScript (ES6+), HTML5, CSS3, C++, Python</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Frameworks & Libraries:</span>
              <span className="text-slate-600 dark:text-slate-300">React.js, Tailwind CSS, Framer Motion, React Router</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Tools & Ecosystem:</span>
              <span className="text-slate-600 dark:text-slate-300">Git, GitHub, Vite, npm, VS Code, Chrome DevTools</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Methodologies:</span>
              <span className="text-slate-600 dark:text-slate-300">Responsive Web Design, Component-Based Architecture, REST APIs</span>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            Key Projects
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">DevPulse Developer Dashboard (React, Tailwind CSS)</h4>
              <ul className="mt-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <li>Engineered real-time developer statistics board utilizing REST APIs and custom React hooks.</li>
                <li>Implemented smooth state management and custom responsive glassmorphism UI.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">TaskFlow Kanban Manager (React, Context API)</h4>
              <ul className="mt-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <li>Built a full-featured task management web application with dark mode theme context.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
