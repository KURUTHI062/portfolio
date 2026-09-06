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
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#272729] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 16: Resume Callout Banner (Editorial High Impact) */}
        <div className="mb-20 p-8 sm:p-12 rounded-sm bg-[#1e1e20] border-l-4 border-[#facf16] border-y border-r border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#facf16]">
                Career Opportunities
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Interested in working together?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore my projects, skills, and experience, or download my resume to learn more.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="px-6 py-3.5 rounded-sm bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-sm bg-[#272729] hover:bg-[#343437] text-white font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-[#facf16]" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 15: Let's Connect Quick Cards */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#facf16]">
                Online Profiles
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase mt-1">
                LET'S <span className="text-[#facf16]">CONNECT</span>
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Verified Public Repositories & Profiles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://github.com/KURUTHI062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-sm editorial-card bg-[#1e1e20] border border-white/10 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#272729] border border-white/10 text-white flex items-center justify-center">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm uppercase">GitHub</h4>
                  <p className="text-xs text-slate-400 font-mono">@KURUTHI062</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#facf16] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                View Profile &rarr;
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-sm editorial-card bg-[#1e1e20] border border-white/10 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#272729] border border-white/10 text-[#facf16] flex items-center justify-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm uppercase">LinkedIn</h4>
                  <p className="text-xs text-slate-400 font-mono">Nee Kuruthi</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#facf16] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Connect &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Section 17: Main Contact Details & Form */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f24614]">
                Direct Inquiries
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mt-1">
                LET'S BUILD <span className="text-[#facf16]">TOGETHER</span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm open to opportunities, collaborations, internships, and interesting projects.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-sm bg-[#1e1e20] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#272729] text-[#facf16] border border-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Email Address</span>
                    <a 
                      href="mailto:kuruthi076@gmail.com" 
                      className="block text-sm font-bold text-white hover:text-[#facf16] transition-colors"
                    >
                      kuruthi076@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('kuruthi076@gmail.com')}
                  className="p-2 rounded bg-[#272729] text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#facf16]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-sm bg-[#1e1e20] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#272729] text-[#f24614] border border-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Phone Number</span>
                    <a 
                      href="tel:8015949693" 
                      className="block text-sm font-bold text-white hover:text-[#facf16] transition-colors"
                    >
                      +91 8015949693
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-sm bg-[#1e1e20] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#272729] text-white border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Location</span>
                    <p className="text-sm font-bold text-white">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-10 rounded-sm bg-[#1e1e20] border border-white/10 shadow-2xl">
              <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6 pb-3 border-b border-white/10">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-sm bg-[#272729] border-l-4 border-[#facf16] border-y border-r border-white/10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#facf16] text-[#272729] mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-white uppercase">Thank you!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your message has been recorded. I look forward to connecting with you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
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
                        className="w-full px-4 py-3 rounded-xs bg-[#272729] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#facf16] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
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
                        className="w-full px-4 py-3 rounded-xs bg-[#272729] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#facf16] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Internship opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xs bg-[#272729] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#facf16] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
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
                      className="w-full px-4 py-3 rounded-xs bg-[#272729] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#facf16] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xs bg-[#facf16] hover:bg-[#e0b70d] text-[#272729] font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
