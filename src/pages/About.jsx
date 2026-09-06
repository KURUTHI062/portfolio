import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, Heart, CheckCircle2, User, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function About() {
  const strengths = [
    'Quick Learner & Tech Enthusiast',
    'Strong Problem Solving Abilities',
    'Eye for UI/UX Design & Typography',
    'Component-Driven Thinking',
    'Collaborative Team Player',
    'Clean Code & Documentation'
  ];

  const interests = [
    'Web Accessibility (a11y)',
    'React Architecture & Performance',
    'Open Source Contribution',
    'UI Animation & Micro-interactions',
    'Technical Writing & Blogging',
    'Competitive Coding'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider"
        >
          <User className="w-3.5 h-3.5" />
          Get To Know Me
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          About <span className="text-gradient">Me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Discover my academic background, career objectives, and personal strengths as a student developer.
        </motion.p>
      </div>

      {/* Main About Me Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Avatar & Quick Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 space-y-6"
        >
          <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl text-center relative overflow-hidden">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-xl mb-6">
              <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white text-3xl font-extrabold tracking-wider">
                AR
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Rivera</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-1">
              B.S. Computer Science Student
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-left text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>San Francisco, CA (Open to Remote)</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Senior Student (Graduating 2026)</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <span>Available for Summer Internships & Roles</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Detailed Narrative & Objective */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 space-y-8"
        >
          {/* Detailed About Story */}
          <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-6 h-6 text-indigo-500" />
              Who I Am
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a dedicated Computer Science undergraduate student with a passion for web technologies and user experience design. Ever since crafting my first HTML page, I fell in love with turning complex logic into smooth, visual interfaces.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My current focus revolves around the modern React ecosystem, Tailwind CSS, component modularity, and frontend performance. I enjoy constantly building real-world projects to solidify my knowledge.
            </p>
          </div>

          {/* Career Objective */}
          <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-4 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-500" />
              Career Objective
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To leverage my strong foundation in React, JavaScript, and modern web design to contribute as a Junior Frontend Developer. I aim to join an innovative engineering team where I can solve challenging UI problems, write maintainable code, and continue growing as a well-rounded developer.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Education Timeline Section */}
      <div className="space-y-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 justify-center md:justify-start">
            <GraduationCap className="w-7 h-7 text-indigo-500" />
            Education Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  2022 - Present
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
                  B.S. in Computer Science
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  State University of Technology
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• CGPA / GPA: 3.8 / 4.0</li>
              <li>• Relevant Coursework: Data Structures & Algorithms, Web Engineering, Software Engineering, Database Systems.</li>
              <li>• Honors: Dean's Honor List (3 Consecutive Semesters)</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                  2020 - 2022
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-3">
                  Higher Secondary Education
                </h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  Science & Mathematics Stream
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• Grade: Distinction (94%)</li>
              <li>• Computer Science Club President</li>
              <li>• Winner of Regional High School Hackathon</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strengths & Interests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strengths */}
        <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-500" />
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Heart className="w-6 h-6 text-pink-500" />
            Personal Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {interests.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Heart className="w-4 h-4 text-pink-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
