import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  Eye, 
  X, 
  Download, 
  QrCode, 
  ArrowUpRight,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const certificationsList = [
  {
    id: "novitech-data-analytics",
    title: "Data Analytics",
    issuer: "NoviTech R&D Private Limited",
    issuerTag: "ISO 9001:2015 Certified",
    date: "06/2026 – 07/2026",
    credentialId: "NT_B54DAET808",
    category: "ANALYTICS & DATA SCIENCE",
    achievement: "Completed 30 Days MasterClass in Data Analytics",
    skills: ["Data Analytics", "Insights Extraction", "Statistical Analysis", "Data Modeling"],
    signatories: "Mr. T. Muthuvel Ramesh (AI Developer) & Mr. A. Vinothkumar (Director)",
    fileUrl: "/certificates/novitech-data-analytics-certificate.jpg",
    fileType: "image",
    gradient: "from-blue-600 to-indigo-600",
    badgeColor: "border-blue-500/30 text-blue-400"
  },
  {
    id: "infosys-dsa",
    title: "Data Structures and Algorithm",
    issuer: "Infosys Springboard",
    issuerTag: "Infosys Limited",
    date: "11/2025",
    credentialId: "Wingspan Verified",
    verifyUrl: "https://verify.onwingspan.com",
    category: "COMPUTER SCIENCE CORE",
    achievement: "Course Completion Certificate",
    skills: ["Linear & Non-Linear Structures", "Searching & Sorting", "Complexity Analysis", "Algorithmic Logic"],
    signatories: "Satheesha B. Nanjappa (Senior VP & Head Education, Training & Assessment)",
    fileUrl: "/certificates/infosys-dsa-certificate.pdf",
    fileType: "pdf",
    gradient: "from-purple-600 to-pink-600",
    badgeColor: "border-purple-500/30 text-purple-400"
  },
  {
    id: "mathworks-onramp",
    title: "App Building Onramp",
    issuer: "MathWorks",
    issuerTag: "MathWorks Certified",
    date: "11/2025",
    credentialId: "100% Course Completed",
    category: "SOFTWARE & UI ENGINEERING",
    achievement: "Successfully completed 100% of the training course",
    skills: ["Application Design", "Event Handlers", "Interactive UI Building", "Workflow Automation"],
    signatories: "Director, Training Services (MathWorks)",
    fileUrl: "/certificates/mathworks-app-building-certificate.pdf",
    fileType: "pdf",
    gradient: "from-cyan-500 to-blue-600",
    badgeColor: "border-cyan-500/30 text-cyan-400"
  },
  {
    id: "cisco-python",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issuerTag: "Cisco Verified Credential",
    date: "07/2025",
    credentialId: "PCEP Aligned Credential",
    category: "PROGRAMMING CORE",
    achievement: "Statement of Achievement (Student Level Credential)",
    skills: ["Python 3 Architecture", "Algorithmic Problem Solving", "Control Flow & Data Structures", "Python Standard Library"],
    signatories: "Lynn Bloomer (Director, Cisco Networking Academy)",
    fileUrl: "/certificates/cisco-python-essentials-certificate.pdf",
    fileType: "pdf",
    gradient: "from-pink-500 to-rose-600",
    badgeColor: "border-pink-500/30 text-pink-400"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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
    <section 
      id="certifications" 
      className="py-24 bg-[#070b18] dark:bg-[#070b18] light:bg-[#f8fafc] bg-grid-pattern relative border-t border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4 border-b border-purple-500/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Official Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
              COURSES & <span className="gradient-text-cyan-blue">CERTIFICATIONS</span>
            </h2>
          </div>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Verified Industry Credentials
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${cert.gradient} text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                          {cert.category}
                        </span>
                        {cert.credentialId && (
                          <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${cert.badgeColor} bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100`}>
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 font-bold">
                        <Building2 className="w-3.5 h-3.5 text-purple-400" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 px-3 py-1 rounded-full border border-purple-500/20 shrink-0">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                {/* Course Title & Achievement */}
                <h3 className="text-xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors mb-1.5 uppercase">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  {cert.achievement}
                </p>

                {/* Key Skills Covered */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-medium border border-purple-500/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Signatory / Authority */}
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-3 pt-2 border-t border-purple-500/15 font-mono">
                  <span className="text-purple-400 font-bold uppercase">Authority:</span> {cert.signatories}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-purple-500/20 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credential</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 hover:bg-[#162032] text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors border border-purple-500/20"
                    title="Open Document in New Tab"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
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
              className="relative w-full max-w-5xl bg-[#0d1224] dark:bg-[#0d1224] light:bg-white rounded-2xl border border-purple-500/30 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-purple-500/20 flex items-center justify-between bg-[#070b18] dark:bg-[#070b18] light:bg-slate-50 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${selectedCert.gradient} text-white flex items-center justify-center font-bold shadow-md`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="cert-modal-title" className="text-base sm:text-lg font-black text-white dark:text-white light:text-slate-900 uppercase">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      {selectedCert.issuer} &bull; {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.fileUrl}
                    download
                    className="btn-gradient inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-100 hover:bg-[#162032] text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white transition-colors border border-purple-500/20"
                    title="Open Full Screen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate modal"
                    className="p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-[#11182b] transition-colors border border-purple-500/20 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Document Preview Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#070b18] dark:bg-[#070b18] light:bg-slate-100">
                {selectedCert.fileType === 'image' ? (
                  <div className="max-w-4xl w-full flex items-center justify-center">
                    <img
                      src={selectedCert.fileUrl}
                      alt={selectedCert.title}
                      className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl border border-purple-500/20"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[68vh] rounded-xl overflow-hidden border border-purple-500/20 bg-[#11182b]">
                    <iframe
                      src={`${selectedCert.fileUrl}#view=FitH`}
                      title={selectedCert.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="px-6 py-4 border-t border-purple-500/20 bg-[#070b18] dark:bg-[#070b18] light:bg-slate-50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-4 text-slate-300 dark:text-slate-300 light:text-slate-700 flex-wrap">
                  {selectedCert.credentialId && (
                    <span>
                      <strong className="text-cyan-400">ID:</strong> {selectedCert.credentialId}
                    </span>
                  )}
                  <span>
                    <strong className="text-purple-400">Authority:</strong> {selectedCert.signatories}
                  </span>
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline flex items-center gap-1 font-bold"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      Verify at {selectedCert.verifyUrl}
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg bg-[#11182b] dark:bg-[#11182b] light:bg-slate-200 hover:bg-[#162032] text-slate-200 dark:text-slate-200 light:text-slate-800 font-bold uppercase tracking-wider transition-colors border border-purple-500/20 cursor-pointer"
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
