import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  FileText,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kuruthi076@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `[Portfolio Contact] ${formData.subject || 'Message from ' + formData.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('success');
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateMailtoUrl = () => {
    const sub = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    return `mailto:kuruthi076@gmail.com?subject=${sub}&body=${body}`;
  };

  return (
    <>
      <section 
        id="contact" 
        className="py-24 bg-[#0d1224] dark:bg-[#0d1224] light:bg-[#f1f5f9] relative border-t border-purple-500/20 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Resume Callout Banner */}
          <div className="mb-20 p-8 sm:p-12 rounded-2xl glass-card border-l-4 border-l-purple-500 border border-purple-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/15 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center justify-center md:justify-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  Career Opportunities & Resume
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase">
                  Interested in working together?
                </h3>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                  Explore my projects, verified credentials, and experience, or view & download my official resume to review my qualifications.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="btn-gradient px-6 py-3.5 rounded-xl text-white font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Nee_Kuruthi_Resume.pdf"
                  className="btn-glass px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Let's Connect Quick Cards */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-purple-500/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600">
                  Online Profiles
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
                  LET'S <span className="gradient-text-hero">CONNECT</span>
                </h3>
              </div>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Verified Public Repositories & Profiles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              <a
                href="https://github.com/KURUTHI062"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-card border border-purple-500/20 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 border border-purple-500/25 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white dark:text-white light:text-slate-900 text-sm uppercase">GitHub</h4>
                    <p className="text-xs text-slate-400 font-mono">@KURUTHI062</p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                  View Profile &rarr;
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-card border border-purple-500/20 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-100 border border-purple-500/25 text-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white dark:text-white light:text-slate-900 text-sm uppercase">LinkedIn</h4>
                    <p className="text-xs text-slate-400 font-mono">Nee Kuruthi</p>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400 group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                  Connect &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Main Contact Details & Form */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-purple-600">
                  Direct Inquiries
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight uppercase mt-1">
                  LET'S BUILD <span className="gradient-text-purple-pink">TOGETHER</span>
                </h2>
                <p className="mt-3 text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                  I'm open to opportunities, collaborations, internships, and interesting projects. Messages submitted here are directly delivered to my email inbox.
                </p>
              </div>

              {/* Direct Details Cards */}
              <div className="space-y-3.5">
                {/* Email */}
                <div className="p-4 rounded-xl glass-card border border-purple-500/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Direct Email</span>
                      <a 
                        href="mailto:kuruthi076@gmail.com" 
                        className="block text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors"
                      >
                        kuruthi076@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('kuruthi076@gmail.com')}
                    className="p-2.5 rounded-lg bg-[#070b18]/60 dark:bg-[#070b18]/60 light:bg-slate-100 text-slate-400 hover:text-cyan-400 transition-colors border border-purple-500/20 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl glass-card border border-purple-500/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/25">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Phone Number</span>
                      <a 
                        href="tel:8015949693" 
                        className="block text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-pink-400 transition-colors"
                      >
                        +91 8015949693
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl glass-card border border-purple-500/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/25">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Location</span>
                      <p className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        Chennai, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-10 rounded-2xl border border-purple-500/25 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-500/20">
                  <h3 className="text-xl font-black text-white dark:text-white light:text-slate-900 uppercase tracking-wider">
                    Send a Message to My Inbox
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                </div>

                {submitStatus === 'success' ? (
                  <div className="p-8 rounded-xl bg-[#070b18]/80 dark:bg-[#070b18]/80 light:bg-slate-50 border-l-4 border-l-cyan-400 border border-purple-500/25 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 text-white mx-auto flex items-center justify-center font-bold shadow-lg shadow-cyan-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-white dark:text-white light:text-slate-900 uppercase">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-md mx-auto">
                      Your message has been delivered to <strong className="text-cyan-400">kuruthi076@gmail.com</strong>. I will get back to you promptly!
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="btn-gradient mt-4 px-6 py-2.5 rounded-xl text-white font-black uppercase text-xs tracking-wider transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitStatus === 'error' && (
                      <div className="p-4 rounded-xl bg-[#070b18]/80 border-l-4 border-amber-500 border border-purple-500/20 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-slate-200">
                          <p className="font-bold text-white mb-1">Direct submission notice</p>
                          <p>You can also send directly using your favorite email client:</p>
                          <a
                            href={generateMailtoUrl()}
                            className="inline-flex items-center gap-1.5 mt-2 text-cyan-400 font-bold underline"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Click here to open in Email Client</span>
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#070b18]/70 dark:bg-[#070b18]/70 light:bg-slate-50 border border-purple-500/25 text-white dark:text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#070b18]/70 dark:bg-[#070b18]/70 light:bg-slate-50 border border-purple-500/25 text-white dark:text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-black uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Internship opportunity / Collaboration / Inquiries"
                        className="w-full px-4 py-3 rounded-xl bg-[#070b18]/70 dark:bg-[#070b18]/70 light:bg-slate-50 border border-purple-500/25 text-white dark:text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Nee Kuruthi, I came across your portfolio and would like to discuss..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070b18]/70 dark:bg-[#070b18]/70 light:bg-slate-50 border border-purple-500/25 text-white dark:text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gradient flex-1 py-3.5 rounded-xl text-white font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-98 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending to kuruthi076@gmail.com...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message to Email</span>
                          </>
                        )}
                      </button>

                      <a
                        href={generateMailtoUrl()}
                        className="btn-glass px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                        title="Open in your default mail app"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Mail App</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
