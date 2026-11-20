import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/content';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a3e635', '#4ade80', '#22c55e', '#10b981']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formMessage.trim()) return;

    // Launch email client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hi Kavishi,\n\n${formMessage}\n\nBest regards,\n${formName}\n${formEmail}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    setSentStatus(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setSentStatus(false);
      setFormMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/60 border border-green-500/30 text-lime-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Touch</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-3">
            I am actively seeking an internship in <strong className="text-white">Cloud Engineering</strong> or <strong className="text-white">DevOps</strong>. Whether you have an open position, a question, or just want to say hi, I’d love to connect!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Status Card */}
            <div className="glass-card p-6 rounded-2xl border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
                </span>
                <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                  Internship Availability
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Ready to contribute to your engineering team
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                Available for internships in Cloud Infrastructure, DevOps pipelines, containerization, and observability.
              </p>
              <div className="text-xs text-neutral-400 font-mono">
                📍 Based in Colombo / Gampaha, Sri Lanka (Open to hybrid & remote)
              </div>
            </div>

            {/* Email Card with Copy button */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-neutral-400">Direct Email</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-lime-400 transition-colors truncate block"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-neutral-300 hover:text-lime-400 border border-neutral-800 hover:border-green-500/35 transition-all duration-200 shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} className="text-lime-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-lime-400/40 transition-all duration-200 block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-neutral-200 flex items-center justify-center shrink-0 group-hover:text-lime-400 transition-colors">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400">GitHub Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                    github.com/Hirunodhya2003
                  </div>
                </div>
              </div>
              <ExternalLink size={16} className="text-neutral-400 group-hover:text-lime-400 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-green-400/40 transition-all duration-200 block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 group-hover:text-lime-400 transition-colors">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                    linkedin.com/in/kavishi-rajasekara
                  </div>
                </div>
              </div>
              <ExternalLink size={16} className="text-neutral-400 group-hover:text-lime-400 transition-colors" />
            </a>

          </div>

          {/* Right Column: Quick Interactive Message Box (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={18} className="text-lime-400" />
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in the details below to launch your email client with your message prefilled.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 focus:border-lime-400 focus:outline-none text-xs sm:text-sm text-white placeholder-neutral-600 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 focus:border-lime-400 focus:outline-none text-xs sm:text-sm text-white placeholder-neutral-600 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Hi Kavishi, I came across your portfolio and would like to discuss a Cloud / DevOps opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-neutral-800 focus:border-lime-400 focus:outline-none text-xs sm:text-sm text-white placeholder-neutral-600 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-300 hover:to-green-400 text-black shadow-md shadow-green-500/25 transition-all duration-200 active:scale-95"
                >
                  <Send size={15} />
                  <span>{sentStatus ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
