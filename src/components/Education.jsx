import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData } from '../data/content';

export default function Education() {
  return (
    <div className="text-left">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
          <GraduationCap size={22} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Academic Journey
        </h3>
      </div>

      <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node dot */}
            <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200" />

            <div className="glass-card p-6 rounded-2xl relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  {edu.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {edu.period}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {edu.degree}
              </h4>
              <div className="text-sm font-semibold text-cyan-300 font-mono mt-0.5 mb-2">
                {edu.institution}
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-3">
                {edu.grade}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                {edu.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
