import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal as TerminalIcon, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Server,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalData, terminalCommands } from '../data/content';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [termTab, setTermTab] = useState('status');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.heroDescriptions.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a3e635', '#4ade80', '#22c55e', '#10b981', '#ffffff']
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-green-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-950/90 border border-green-500/35 text-xs font-mono text-lime-300 shadow-sm shadow-green-500/15 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400"></span>
              </span>
              <span>Seeking Cloud & DevOps Internship</span>
            </motion.div>

            {/* Name heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-neutral-950 mb-3 leading-[1.15]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500">
                {personalData.name}
              </span>
            </h1>

            {/* Animated Rotating Subtitle */}
            <div className="h-9 mb-4 flex items-center">
              <span className="text-lime-400 text-lg sm:text-xl font-mono mr-2">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg sm:text-2xl font-semibold text-green-300 font-mono"
                >
                  {personalData.heroDescriptions[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 light:text-neutral-600 max-w-2xl leading-relaxed mb-8">
              Third-year Software Engineering undergraduate at <strong className="text-white font-medium">NSBM Green University</strong> (GPA 3.78) and cloud & DevOps enthusiast, building <span className="text-lime-300 font-medium">reliable</span>, <span className="text-green-400 font-medium">automated</span>, and <span className="text-emerald-300 font-medium">observable</span> systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-300 hover:to-green-400 text-black shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalData.cvPath}
                download="Kavishi_Rajasekara_CV.pdf"
                onClick={triggerDownloadConfetti}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium font-mono text-sm bg-neutral-950/90 hover:bg-neutral-900 text-neutral-100 border border-neutral-800 hover:border-lime-400/60 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download size={16} className="text-lime-400" />
                <span>Download CV</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-neutral-950/90 hover:bg-neutral-900 text-neutral-200 hover:text-lime-400 border border-neutral-800 hover:border-green-500/40 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs bg-neutral-950/90 hover:bg-neutral-900 text-neutral-300 hover:text-lime-400 border border-neutral-800 hover:border-green-500/40 transition-all duration-200"
                title="Copy email to clipboard"
              >
                <Mail size={16} className="text-lime-400" />
                <span>{copiedEmail ? 'Copied!' : 'Email Me'}</span>
              </button>
            </div>

            {/* Quick Tech Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-neutral-800/80">
              {personalData.stats.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-extrabold text-white font-mono tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Profile Image Card + Interactive Cloud Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            {/* Portrait Frame with Glow & Floating Badges */}
            <div className="relative group">
              {/* Outer Glowing halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-neutral-950 border-2 border-lime-400/35 p-1">
                <img
                  src={personalData.profileImage}
                  alt="Kavishi Hirunodhya Rajasekara"
                  className="w-full h-full object-cover rounded-xl filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/kavishi.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-xs font-semibold text-white drop-shadow">Kavishi Rajasekara</div>
                  <div className="text-[10px] font-mono text-lime-300">Software Engineering (Hons)</div>
                </div>
              </div>

              {/* Floating Badge 1: AZ-900 Microsoft Azure Certified */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-4 sm:-right-6 bg-neutral-950/95 backdrop-blur-md border border-lime-400/40 rounded-xl p-2.5 shadow-xl shadow-black/50 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center text-lime-400">
                  <Cloud size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white font-mono">AZ-900</div>
                  <div className="text-[9px] text-lime-400">Azure Fundamentals</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: High GPA */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-neutral-950/95 backdrop-blur-md border border-green-500/40 rounded-xl p-2.5 shadow-xl shadow-black/50 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center text-green-400">
                  <CheckCircle2 size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-green-400 font-mono">GPA 3.78</div>
                  <div className="text-[9px] text-neutral-300">NSBM Green University</div>
                </div>
              </motion.div>
            </div>

            {/* Interactive DevOps Terminal Card */}
            <div className="w-full max-w-md rounded-xl bg-black/90 border border-green-500/20 shadow-xl shadow-black/60 overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-950 border-b border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-lime-400/90 inline-block" />
                  <span className="text-[11px] text-neutral-400 ml-2">cloud-terminal — bash</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setTermTab('status')}
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      termTab === 'status' ? 'bg-green-500/20 text-lime-400' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    status
                  </button>
                  <button
                    onClick={() => setTermTab('terraform')}
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      termTab === 'terraform' ? 'bg-green-500/20 text-lime-400' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    iac
                  </button>
                  <button
                    onClick={() => setTermTab('metrics')}
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      termTab === 'metrics' ? 'bg-green-500/20 text-lime-400' : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    metrics
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-3.5 space-y-2 text-neutral-300 min-h-[140px] text-left">
                {termTab === 'status' && (
                  <div>
                    <p className="text-neutral-400">
                      <span className="text-lime-400">kavishi@cloud</span>:<span className="text-green-400">~</span>$ curl -s /system/health
                    </p>
                    <div className="mt-1.5 space-y-1 text-neutral-300">
                      <p><span className="text-green-400">status:</span> <span className="text-lime-400 font-bold">● HEALTHY (UP)</span></p>
                      <p><span className="text-green-400">cloud:</span> AWS (eu-north-1) & Azure (ACR)</p>
                      <p><span className="text-green-400">orchestration:</span> Docker Compose + Jenkins CI/CD</p>
                      <p><span className="text-green-400">monitoring:</span> Prometheus & Grafana</p>
                      <p className="text-neutral-400 text-[11px] mt-1 pt-1 border-t border-neutral-800">
                        &gt; Ready for Cloud / DevOps Internship role
                      </p>
                    </div>
                  </div>
                )}

                {termTab === 'terraform' && (
                  <div>
                    <p className="text-neutral-400">
                      <span className="text-lime-400">kavishi@cloud</span>:<span className="text-green-400">~/terraform</span>$ terraform plan
                    </p>
                    <div className="mt-1 space-y-0.5 text-neutral-300 text-[11px]">
                      <p className="text-green-300">+ aws_vpc.main_vpc (10.0.0.0/16)</p>
                      <p className="text-green-300">+ aws_subnet.public_a & private_b (eu-north-1)</p>
                      <p className="text-green-300">+ aws_lb.internet_facing_alb</p>
                      <p className="text-green-300">+ aws_security_group.chained_backend_to_rds</p>
                      <p className="text-lime-400 font-semibold mt-1">Plan: 5 to add, 0 to change, 0 to destroy.</p>
                    </div>
                  </div>
                )}

                {termTab === 'metrics' && (
                  <div>
                    <p className="text-neutral-400">
                      <span className="text-lime-400">kavishi@cloud</span>:<span className="text-green-400">~</span>$ promql 'node_cpu_utilization'
                    </p>
                    <div className="mt-1.5 space-y-1 text-neutral-300 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span>CPU Usage:</span>
                        <span className="text-lime-400">14.2%</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-lime-400 h-full w-[14%]" />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span>JVM Heap:</span>
                        <span className="text-green-400">218MB / 1024MB</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[21%]" />
                      </div>
                      <p className="text-lime-400 text-[10px] pt-1">Node Exporter & Spring Actuator streaming ok</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
