import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Cloud, 
  Box, 
  Activity, 
  Sparkles, 
  Workflow, 
  Clock, 
  X,
  Server,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/content';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'DevOps & Cloud', 'Microservices & Backend', 'Full Stack'];

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/60 border border-green-500/30 text-lime-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Workflow size={13} />
            <span>Proven Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-3">
            Hands-on projects demonstrating automated CI/CD pipelines, Terraform IaC, multi-tier architectures, microservices, and observability telemetry.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold shadow-md shadow-green-500/25 scale-105'
                    : 'bg-neutral-950/90 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-green-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`glass-card rounded-2xl p-6 text-left flex flex-col justify-between group relative overflow-hidden ${
                  project.featured ? 'border-green-500/30 shadow-md shadow-green-500/5' : ''
                }`}
              >
                {/* Top Badge / Status */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-green-950/70 border border-green-500/30 text-lime-300">
                      {project.badge || project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-lime-400 px-2 py-0.5 rounded bg-green-950/40 border border-green-500/30">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  </div>

                  {/* Architecture Diagram Preview Thumbnail */}
                  {project.image && (
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-black border border-neutral-800/80 group-hover:border-lime-400/40 transition-colors">
                      <img
                        src={project.image}
                        alt={`${project.title} Architecture`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-neutral-400 font-mono mt-0.5 mb-3">
                    {project.subtitle}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-5">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="text-lime-400 mt-0.5 font-bold">›</span>
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-neutral-950 border border-neutral-800 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-lime-400 hover:text-lime-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-200 bg-neutral-950 hover:bg-neutral-900 hover:text-lime-400 border border-neutral-800 hover:border-green-500/35 transition-all duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal: Deep Dive Architecture & Details */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-neutral-950 border border-green-500/25 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-green-950 border border-green-500/30 text-lime-400">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    {activeModalProject.subtitle}
                  </p>
                </div>

                {/* Modal Architecture Diagram Preview */}
                {activeModalProject.image && (
                  <div className="w-full rounded-xl overflow-hidden mb-6 border border-neutral-800 bg-black">
                    <img
                      src={activeModalProject.image}
                      alt={`${activeModalProject.title} Full Architecture`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {activeModalProject.shortDescription}
                </p>

                {/* All Highlights from Content */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider font-mono">
                    Key Technical Highlights:
                  </h4>
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-black/70 p-3 rounded-xl border border-neutral-800/80">
                      <CheckCircle2 size={16} className="text-lime-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider font-mono mb-2">
                    Technologies Employed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-green-950/50 border border-green-500/25 text-lime-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-lime-400 to-green-500 text-black shadow-md shadow-green-500/20 hover:from-lime-300 hover:to-green-400 transition-all"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
