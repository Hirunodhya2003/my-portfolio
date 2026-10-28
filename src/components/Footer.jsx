import React from 'react';
import { ArrowUp, Mail, Terminal, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-900 pt-16 pb-12 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand info (6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-mono font-bold text-sm">
                KR
              </div>
              <span className="font-bold text-white text-base">
                Kavishi Hirunodhya Rajasekara
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed mb-4">
              Third-year BSc (Hons) Software Engineering undergraduate at NSBM Green University. Microsoft Azure (AZ-900) Certified Cloud & DevOps enthusiast building automated, reliable, and observable systems.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 text-left">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-cyan-400 transition-colors">DevOps Architecture</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Certification</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Cloud & Tech Info (3 cols) */}
          <div className="md:col-span-3 text-left">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              System Specs
            </div>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>Status: Available for Hire</span>
              </div>
              <div>Stack: React + Tailwind + Vite</div>
              <div>Deploy: AWS EC2 / Vercel</div>
              <div>CI/CD: GitHub Actions / Jenkins</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2026 Kavishi Hirunodhya Rajasekara. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
