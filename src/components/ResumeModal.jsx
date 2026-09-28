import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Globe2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0d1224] dark:bg-[#0d1224] light:bg-white rounded-xl border border-purple-500/30 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden text-slate-100 dark:text-slate-100 light:text-slate-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#070b18]/90 dark:bg-[#070b18]/90 light:bg-slate-50 border-b border-purple-500/20 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="resume-modal-title" className="text-lg font-black text-white dark:text-white light:text-slate-900 uppercase tracking-wide">
                  Official Resume &bull; Nee Kuruthi
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  Verified Candidate Profile &bull; Chennai, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="btn-gradient px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-purple-500/20"
                title="Open PDF in New Tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                aria-label="Close resume modal"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-purple-500/20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Authentic Resume Document View */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100/60">
            
            {/* Resume Sheet Container (matches attached layout) */}
            <div className="max-w-3xl mx-auto bg-[#11182b] dark:bg-[#11182b] light:bg-white p-6 sm:p-10 rounded-xl border border-purple-500/25 shadow-2xl space-y-8">
              
              {/* Header Box */}
              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/20 border border-cyan-500/25 text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase">
                  Nee Kuruthi
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    kuruthi076@gmail.com
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    8015949693
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    chennai, India
                  </span>
                  <span>&bull;</span>
                  <span>02/10/2006</span>
                  <span>&bull;</span>
                  <span>INDIAN</span>
                  <span>&bull;</span>
                  <span className="text-cyan-400 font-bold">MALE</span>
                </div>

                <div className="flex items-center justify-center gap-4 pt-1 text-xs font-bold text-cyan-400">
                  <a href="https://github.com/KURUTHI062" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub: github.com/KURUTHI062
                  </a>
                  <span>&bull;</span>
                  <a href="https://www.linkedin.com/in/nee-kuruthi-0467b4357" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    LinkedIn: nee-kuruthi-0467b4357
                  </a>
                </div>
              </div>

              {/* 1. CAREER OBJECTIVE */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    CAREER OBJECTIVE
                  </h2>
                </div>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed pt-1">
                  A dedicated and enthusiastic Computer Science student looking for an opportunity to start my career in the IT industry where I can utilize my technical skills, contribute to organizational growth, and continuously learn new technologies.
                </p>
              </div>

              {/* 2. EDUCATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    EDUCATION
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">
                        B.E in Computer Science and Engineering - II Year
                      </h3>
                      <p className="text-cyan-400 text-xs font-semibold">S.A. Engineering College</p>
                    </div>
                    <div className="sm:text-right text-slate-400 text-xs font-mono">
                      <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-700">2024 – Present</span>
                      <p className="uppercase">CHENNAI, INDIA</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-2 border-t border-purple-500/10">
                    <div>
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">HSC</h3>
                      <p className="text-purple-400 text-xs font-semibold">Sir & Lady M. Venkatasubba Rao Matriculation Higher Secondary School</p>
                    </div>
                    <div className="sm:text-right text-slate-400 text-xs font-mono">
                      <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-700">2023 – 2024</span>
                      <p className="uppercase">CHENNAI, INDIA</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-2 border-t border-purple-500/10">
                    <div>
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">SSLC</h3>
                      <p className="text-pink-400 text-xs font-semibold">Seventh Day Adventist Matric School</p>
                    </div>
                    <div className="sm:text-right text-slate-400 text-xs font-mono">
                      <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-700">2021 – 2022</span>
                      <p className="uppercase">CHENNAI, INDIA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. SKILLS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <Code2 className="w-4 h-4 text-pink-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    SKILLS
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-blue-500/20">
                    <h3 className="font-bold text-cyan-400 uppercase tracking-wider text-xs mb-2">Technical Skills:</h3>
                    <ul className="space-y-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <li className="flex items-center gap-2">&bull; Python / Java / C</li>
                      <li className="flex items-center gap-2">&bull; SQL</li>
                      <li className="flex items-center gap-2">&bull; React.js/vite</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-50 border border-purple-500/20">
                    <h3 className="font-bold text-purple-400 uppercase tracking-wider text-xs mb-2">Soft Skills:</h3>
                    <ul className="space-y-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <li className="flex items-center gap-2">&bull; Communication</li>
                      <li className="flex items-center gap-2">&bull; Team work</li>
                      <li className="flex items-center gap-2">&bull; Problem Solving</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. PROJECTS */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    PROJECTS
                  </h2>
                </div>

                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="text-xs font-mono uppercase text-slate-400">personal projects</p>
                  <h3 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">
                    Portfolio Website
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-xs sm:text-sm">
                    &bull; Created a personal portfolio to showcase projects and skills using vite/react.js
                  </p>
                </div>
              </div>

              {/* 5. COURSES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    COURSES
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#070b18]/40 border border-purple-500/15">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">App Building Onramp</h3>
                      <span className="text-[11px] font-mono text-cyan-400">11/2025</span>
                    </div>
                    <p className="text-xs text-slate-400">MathWorks</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070b18]/40 border border-purple-500/15">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">Python Essentials 1</h3>
                      <span className="text-[11px] font-mono text-cyan-400">07/2025</span>
                    </div>
                    <p className="text-xs text-slate-400">Cisco Networking Academy</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070b18]/40 border border-purple-500/15">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">Data Structures and Algorithm</h3>
                      <span className="text-[11px] font-mono text-cyan-400">11/2025</span>
                    </div>
                    <p className="text-xs text-slate-400">Infosys Springboot</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#070b18]/40 border border-purple-500/15">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white dark:text-white light:text-slate-900">Data Analytics</h3>
                      <span className="text-[11px] font-mono text-cyan-400">06/2026 – 07/2026</span>
                    </div>
                    <p className="text-xs text-slate-400">NoviTech R&D Private Limited</p>
                  </div>
                </div>
              </div>

              {/* 6. LANGUAGES */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-500/30 pb-2">
                  <Globe2 className="w-4 h-4 text-pink-400" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white dark:text-white light:text-slate-900">
                    LANGUAGES
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-8 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">English</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full border border-slate-500 inline-block" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Tamil</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-[#070b18] dark:bg-[#070b18] light:bg-slate-50 border-t border-purple-500/20 flex items-center justify-between">
            <p className="text-xs text-slate-400">
              Exact replica of uploaded resume &bull; Updated 2026
            </p>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="btn-gradient px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                Download PDF
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
