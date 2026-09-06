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
  Sparkles, 
  ArrowRight,
  Copy,
  Check,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

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
    // Simulate brief processing for pleasant UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 16: Resume Callout Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/90 border border-indigo-500/30 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-700/50">
                <Sparkles className="w-3.5 h-3.5" />
                Career Opportunities
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Interested in working together?
              </h3>
              <p className="text-indigo-100/80 text-sm sm:text-base leading-relaxed">
                Explore my projects, skills, and experience, or download my resume to learn more.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="/resume.pdf"
                download="Nee_Kuruthi_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl glass hover:bg-slate-800/80 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-indigo-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 15: Let's Connect Quick Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Find my verified public profiles and technical code repositories on GitHub and LinkedIn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://github.com/KURUTHI062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-600 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">GitHub</h4>
                  <p className="text-xs text-slate-400">@KURUTHI062</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                View Profile &rarr;
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nee-kuruthi-0467b4357"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-600 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">LinkedIn</h4>
                  <p className="text-xs text-slate-400">Nee Kuruthi</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Connect &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Section 17: Main Contact Details & Interactive Form */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build <span className="text-gradient">Something Together</span>
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                I'm open to opportunities, collaborations, internships, and interesting projects.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Email Address</span>
                    <a 
                      href="mailto:kuruthi076@gmail.com" 
                      className="block text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      kuruthi076@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('kuruthi076@gmail.com')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Phone Number</span>
                    <a 
                      href="tel:8015949693" 
                      className="block text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      +91 8015949693
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Location</span>
                    <p className="text-sm font-semibold text-white">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank you!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your message has been recorded. I look forward to connecting with you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Internship opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
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
