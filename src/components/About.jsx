import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Container, 
  Cloud, 
  Activity, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Shield,
  Workflow
} from 'lucide-react';
import { personalData, certificationData } from '../data/content';

export default function About() {
  const journeyPillars = [
    {
      step: "01",
      title: "Write",
      icon: Code2,
      color: "from-lime-400 to-green-500",
      description: "Developing robust backend APIs and modern web interfaces using Java 17, Spring Boot, and React."
    },
    {
      step: "02",
      title: "Package",
      icon: Container,
      color: "from-green-400 to-emerald-500",
      description: "Containerizing services with multi-stage Docker builds, orchestrating multi-container stacks with Docker Compose."
    },
    {
      step: "03",
      title: "Deploy",
      icon: Cloud,
      color: "from-emerald-400 to-teal-500",
      description: "Provisioning reproducible infrastructure using Terraform on AWS (VPC, ALB, EC2, RDS) and Microsoft Azure."
    },
    {
      step: "04",
      title: "Observe",
      icon: Activity,
      color: "from-lime-500 to-green-600",
      description: "Streaming telemetry, host health via Node Exporter and application latency via Prometheus & Grafana dashboards."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/60 border border-green-500/30 text-lime-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Kavishi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed text-left"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />

              <p className="font-medium text-white mb-4">
                {personalData.introduction[0]}
              </p>

              <p className="mb-4 text-neutral-300">
                {personalData.introduction[1]}
              </p>

              <p className="text-lime-200/90 font-medium bg-green-950/40 p-4 rounded-xl border border-green-500/25">
                {personalData.introduction[2]}
              </p>
            </div>

            {/* Quick Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-green-500/30 transition-colors flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-lime-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Education</div>
                  <div className="text-sm font-bold text-white">NSBM Green Univ.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-green-500/30 transition-colors flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400">
                  <Award size={22} />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Academic Standing</div>
                  <div className="text-sm font-bold text-lime-400">GPA 3.78 / 4.00</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-green-500/30 transition-colors flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Cloud size={22} />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Certification</div>
                  <div className="text-sm font-bold text-green-300">Azure AZ-900</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Software Journey Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4 text-left"
          >
            <div className="px-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Workflow className="text-lime-400" size={20} />
                <span>The Full Software Journey</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                How I approach crafting and scaling modern applications from code to cloud:
              </p>
            </div>

            <div className="space-y-3">
              {journeyPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-xl bg-neutral-950/90 border border-neutral-800/90 hover:border-lime-400/40 transition-colors flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-lime-400/50 transition-colors">
                      <IconComponent size={20} className="text-lime-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-lime-400/80 font-bold">{pillar.step}.</span>
                        <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
