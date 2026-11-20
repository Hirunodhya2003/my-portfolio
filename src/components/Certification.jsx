import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, ShieldCheck, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { certificationData } from '../data/content';

export default function Certification() {
  return (
    <div className="text-left">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-xl bg-green-500/10 text-lime-400">
          <Award size={22} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Industry Certification
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border-green-500/30 group"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header with Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-black p-2 border border-green-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/10 group-hover:scale-105 transition-transform duration-300">
              <img
                src={certificationData.badgeImage}
                alt="Microsoft Azure Fundamentals AZ-900 Badge"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Cloud size={30} className="text-lime-400 hidden" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-green-950 border border-green-500/40 text-lime-300">
                  {certificationData.code}
                </span>
                <span className="text-xs font-mono text-lime-400 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  Verified Active
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                {certificationData.title}
              </h4>
              <p className="text-xs font-mono text-neutral-400">
                Issuing Authority: <span className="text-white font-medium">{certificationData.issuer}</span>
              </p>
            </div>
          </div>

          <a
            href={certificationData.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-lime-300 bg-green-950/60 hover:bg-green-900/60 border border-green-500/30 transition-colors shrink-0"
          >
            <span>Learn More</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
          {certificationData.description}
        </p>

        {/* Syllabus / Domain Breakdown */}
        <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
          <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono">
            Key Competency Domains:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificationData.domains.map((domain) => (
              <div
                key={domain.name}
                className="p-3 rounded-xl bg-black/70 border border-neutral-800/80 hover:border-lime-400/35 transition-colors"
              >
                <div className="text-xs font-bold text-lime-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  {domain.name}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 leading-snug">
                  {domain.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
