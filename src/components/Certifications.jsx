import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck, 
  Eye, 
  X, 
  Download, 
  QrCode, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const certificationsList = [
  {
    id: "novitech-data-analytics",
    title: "30 Days MasterClass in Data Analytics",
    shortTitle: "Data Analytics",
    issuer: "NoviTech R&D Private Limited",
    issuerTag: "ISO 9001:2015 Certified",
    date: "June 08 – July 11, 2026",
    credentialId: "NT_B54DAET808",
    category: "Analytics & Data Science",
    achievement: "Completed 30 Days MasterClass in Data Analytics",
    skills: ["Data Analytics", "Insights Extraction", "Statistical Analysis", "Data Modeling"],
    signatories: "Mr. T. Muthuvel Ramesh (AI Developer) & Mr. A. Vinothkumar (Director)",
    fileUrl: "/certificates/novitech-data-analytics-certificate.jpg",
    fileType: "image",
    gradient: "from-blue-600 to-indigo-600",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20"
  },
  {
    id: "infosys-dsa",
    title: "Data Structures and Algorithms",
    shortTitle: "Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    issuerTag: "Infosys Limited",
    date: "November 5, 2025 (Issued: Nov 6, 2025)",
    credentialId: "Wingspan Verified",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Computer Science Core",
    achievement: "Course Completion Certificate",
    skills: ["Linear & Non-Linear Structures", "Searching & Sorting", "Complexity Analysis", "Algorithmic Logic"],
    signatories: "Satheesha B. Nanjappa (Senior VP & Head Education, Training & Assessment)",
    fileUrl: "/certificates/infosys-dsa-certificate.pdf",
    fileType: "pdf",
    gradient: "from-purple-600 to-pink-600",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20"
  },
  {
    id: "mathworks-onramp",
    title: "App Building Onramp",
    shortTitle: "App Building Onramp",
    issuer: "MathWorks | Training Services",
    issuerTag: "MathWorks Certified",
    date: "November 6, 2025",
    credentialId: "100% Self-Paced Course",
    category: "Software & UI Engineering",
    achievement: "Successfully completed 100% of the training course",
    skills: ["Application Design", "Event Handlers", "Interactive UI Building", "Workflow Automation"],
    signatories: "Director, Training Services (MathWorks)",
    fileUrl: "/certificates/mathworks-app-building-certificate.pdf",
    fileType: "pdf",
    gradient: "from-indigo-600 to-purple-600",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/20"
  },
  {
    id: "cisco-python",
    title: "Python Essentials 1",
    shortTitle: "Python Essentials 1",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    issuerTag: "Cisco Verified Credential",
    date: "July 18, 2025",
    credentialId: "PCEP Aligned Credential",
    category: "Programming Core",
    achievement: "Statement of Achievement (Student Level Credential)",
    skills: ["Python 3 Architecture", "Algorithmic Problem Solving", "Control Flow & Data Structures", "Python Standard Library"],
    signatories: "Lynn Bloomer (Director, Cisco Networking Academy)",
    fileUrl: "/certificates/cisco-python-essentials-certificate.pdf",
    fileType: "pdf",
    gradient: "from-cyan-600 to-teal-600",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock background scroll when certificate modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient">Courses</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
            Official credentials and specialized coursework completed with verified certificates from industry leaders.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-card p-6 sm:p-8 rounded-3xl border ${cert.border} hover:border-slate-600 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden`}
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.gradient} text-white flex items-center justify-center shadow-lg shrink-0`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/40">
                          {cert.category}
                        </span>
                        {cert.credentialId && (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800 shrink-0">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Course Title & Achievement */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  {cert.achievement}
                </p>

                {/* Key Skills Covered */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Signatory / Authority */}
                <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-800/60">
                  <span className="text-slate-400 font-medium">Authority:</span> {cert.signatories}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Document</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    title="Open Document in New Tab"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl glass-card bg-slate-900/98 rounded-3xl border border-slate-700 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {selectedCert.issuer} &bull; {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.fileUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    title="Open Full Screen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate modal"
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Document Preview Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#070b14]">
                {selectedCert.fileType === 'image' ? (
                  <div className="max-w-4xl w-full flex items-center justify-center">
                    <img
                      src={selectedCert.fileUrl}
                      alt={selectedCert.title}
                      className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-800"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[68vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <iframe
                      src={`${selectedCert.fileUrl}#view=FitH`}
                      title={selectedCert.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-slate-400 flex-wrap">
                  {selectedCert.credentialId && (
                    <span>
                      <strong className="text-slate-300">ID:</strong> {selectedCert.credentialId}
                    </span>
                  )}
                  <span>
                    <strong className="text-slate-300">Authority:</strong> {selectedCert.signatories}
                  </span>
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:underline flex items-center gap-1"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      Verify at {selectedCert.verifyUrl}
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium transition-colors"
                >
                  Close Preview
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
