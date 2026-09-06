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
  Maximize2
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const certificationsList = [
  {
    id: "novitech-data-analytics",
    title: "30 Days MasterClass in Data Analytics",
    issuer: "NoviTech R&D Private Limited",
    issuerTag: "ISO 9001:2015 Certified",
    date: "June 08 – July 11, 2026",
    credentialId: "NT_B54DAET808",
    category: "ANALYTICS & DATA SCIENCE",
    achievement: "Completed 30 Days MasterClass in Data Analytics",
    skills: ["Data Analytics", "Insights Extraction", "Statistical Analysis", "Data Modeling"],
    signatories: "Mr. T. Muthuvel Ramesh (AI Developer) & Mr. A. Vinothkumar (Director)",
    fileUrl: "/certificates/novitech-data-analytics-certificate.jpg",
    fileType: "image",
    tagColor: "bg-[#facf16] text-[#272729]"
  },
  {
    id: "infosys-dsa",
    title: "Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    issuerTag: "Infosys Limited",
    date: "November 5, 2025 (Issued: Nov 6, 2025)",
    credentialId: "Wingspan Verified",
    verifyUrl: "https://verify.onwingspan.com",
    category: "COMPUTER SCIENCE CORE",
    achievement: "Course Completion Certificate",
    skills: ["Linear & Non-Linear Structures", "Searching & Sorting", "Complexity Analysis", "Algorithmic Logic"],
    signatories: "Satheesha B. Nanjappa (Senior VP & Head Education, Training & Assessment)",
    fileUrl: "/certificates/infosys-dsa-certificate.pdf",
    fileType: "pdf",
    tagColor: "bg-[#f24614] text-white"
  },
  {
    id: "mathworks-onramp",
    title: "App Building Onramp",
    issuer: "MathWorks | Training Services",
    issuerTag: "MathWorks Certified",
    date: "November 6, 2025",
    credentialId: "100% Course Completed",
    category: "SOFTWARE & UI ENGINEERING",
    achievement: "Successfully completed 100% of the training course",
    skills: ["Application Design", "Event Handlers", "Interactive UI Building", "Workflow Automation"],
    signatories: "Director, Training Services (MathWorks)",
    fileUrl: "/certificates/mathworks-app-building-certificate.pdf",
    fileType: "pdf",
    tagColor: "bg-[#facf16] text-[#272729]"
  },
  {
    id: "cisco-python",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    issuerTag: "Cisco Verified Credential",
    date: "July 18, 2025",
    credentialId: "PCEP Aligned Credential",
    category: "PROGRAMMING CORE",
    achievement: "Statement of Achievement (Student Level Credential)",
    skills: ["Python 3 Architecture", "Algorithmic Problem Solving", "Control Flow & Data Structures", "Python Standard Library"],
    signatories: "Lynn Bloomer (Director, Cisco Networking Academy)",
    fileUrl: "/certificates/cisco-python-essentials-certificate.pdf",
    fileType: "pdf",
    tagColor: "bg-[#f24614] text-white"
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
    <section id="certifications" className="py-20 bg-[#1e1e20] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f24614]">
              Official Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
              CERTIFICATIONS & <span className="text-[#facf16]">COURSES</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Verified Industry Credentials
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="editorial-card p-6 sm:p-8 rounded-sm bg-[#272729] border border-white/10 hover:border-[#facf16]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#1e1e20] text-[#facf16] border border-white/10 flex items-center justify-center font-bold shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#f24614]">
                          {cert.category}
                        </span>
                        {cert.credentialId && (
                          <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-xs ${cert.tagColor}`}>
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1 font-bold">
                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-300 flex items-center gap-1 bg-[#1e1e20] px-2.5 py-1 rounded-xs border border-white/10 shrink-0">
                    <Calendar className="w-3 h-3 text-[#facf16]" />
                    {cert.date}
                  </span>
                </div>

                {/* Course Title & Achievement */}
                <h3 className="text-xl font-black text-white group-hover:text-[#facf16] transition-colors mb-1.5 uppercase">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 mb-4">
                  {cert.achievement}
                </p>

                {/* Key Skills Covered */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-xs bg-[#1e1e20] text-slate-200 text-xs font-medium border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Signatory / Authority */}
                <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/10 font-mono">
                  <span className="text-[#facf16] font-bold uppercase">Authority:</span> {cert.signatories}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#facf16]" />
                  <span>Verified Document</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs text-xs font-black uppercase tracking-wider bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xs bg-[#1e1e20] hover:bg-[#343437] text-slate-200 hover:text-white transition-colors border border-white/10"
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
            <div
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <div
              className="relative w-full max-w-5xl bg-[#272729] rounded-sm border border-white/20 shadow-2xl z-10 my-4 max-h-[92vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1e1e20] sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#facf16] text-[#272729] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="cert-modal-title" className="text-base sm:text-lg font-black text-white uppercase">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xs bg-[#1e1e20] hover:bg-[#343437] text-slate-200 hover:text-white transition-colors border border-white/10"
                    title="Open Full Screen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate modal"
                    className="p-2 rounded-xs text-slate-300 hover:text-white hover:bg-[#1e1e20] transition-colors border border-white/10 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Document Preview Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#1e1e20]">
                {selectedCert.fileType === 'image' ? (
                  <div className="max-w-4xl w-full flex items-center justify-center">
                    <img
                      src={selectedCert.fileUrl}
                      alt={selectedCert.title}
                      className="max-h-[68vh] w-auto object-contain rounded-xs shadow-2xl border border-white/10"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[68vh] rounded-xs overflow-hidden border border-white/10 bg-[#272729]">
                    <iframe
                      src={`${selectedCert.fileUrl}#view=FitH`}
                      title={selectedCert.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="px-6 py-4 border-t border-white/10 bg-[#1e1e20] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-4 text-slate-300 flex-wrap">
                  {selectedCert.credentialId && (
                    <span>
                      <strong className="text-[#facf16]">ID:</strong> {selectedCert.credentialId}
                    </span>
                  )}
                  <span>
                    <strong className="text-[#facf16]">Authority:</strong> {selectedCert.signatories}
                  </span>
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f24614] hover:underline flex items-center gap-1 font-bold"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      Verify at {selectedCert.verifyUrl}
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xs bg-[#272729] hover:bg-[#343437] text-slate-200 hover:text-white font-bold uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
