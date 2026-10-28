import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Workflow, 
  Activity, 
  Code, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles,
  Server,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/content';

const iconMap = {
  Cloud: Cloud,
  Workflow: Workflow,
  Activity: Activity,
  Code: Code,
  Layers: Layers,
  Database: Database,
  Cpu: Cpu
};

export default function Skills() {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Cloud & Infrastructure',
    'DevOps & Automation',
    'Monitoring & Observability',
    'Languages',
    'Frameworks',
    'Databases',
    'Core Concepts'
  ];

  const filteredSkills = filter === 'All' 
    ? skillsData 
    : skillsData.filter(item => item.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Comprehensive skill set spanning cloud engineering, infrastructure automation, microservices development, and end-to-end system observability.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((category) => {
              const IconComponent = iconMap[category.icon] || Cpu;
              
              return (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-6 text-left flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top color gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} bg-opacity-20 flex items-center justify-center text-white shadow-md`}>
                          <IconComponent size={20} />
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {category.category}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill items */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors flex flex-col"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                              {skill.name}
                            </span>
                          </div>
                          {skill.details && (
                            <span className="text-[11px] text-slate-400 font-mono mt-1 pl-3">
                              {skill.details}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{category.skills.length} core technologies</span>
                    <span className="text-cyan-400/80 group-hover:text-cyan-300">Ready to scale →</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
