import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal, Download, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalData } from '../data/content';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#pipeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Certs', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'pipeline', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050705]/90 dark:bg-[#050705]/90 light:bg-white/95 backdrop-blur-md border-b border-green-500/15 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Kavishi Rajasekara Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-400 to-green-500 flex items-center justify-center text-black font-mono font-bold text-lg shadow-md shadow-green-500/25 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold tracking-tighter">KR</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-neutral-100 light:text-neutral-900 group-hover:text-lime-400 transition-colors text-base sm:text-lg flex items-center gap-1.5">
                Kavishi<span className="text-lime-400">.</span>
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-green-950/80 border border-green-500/30 text-lime-400 font-mono font-normal hidden sm:inline-block">
                  AZ-900
                </span>
              </span>
              <span className="text-[11px] text-neutral-400 font-mono -mt-1 hidden sm:block">
                DevOps & Cloud Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-lime-400 font-semibold'
                      : 'text-neutral-300 hover:text-white light:text-neutral-600 light:hover:text-neutral-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-lime-400 to-green-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-neutral-300 hover:text-lime-400 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-green-500/30 transition-all duration-200 focus:outline-none"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} className="text-lime-400" /> : <Moon size={18} className="text-green-600" />}
            </button>

            {/* Quick CV Button */}
            <a
              href={personalData.cvPath}
              download="Kavishi_Rajasekara_CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold font-mono bg-green-500/10 hover:bg-green-500/20 text-lime-300 border border-green-500/30 hover:border-lime-400 transition-all duration-200"
            >
              <Download size={14} />
              <span>CV</span>
            </a>

            {/* GitHub Link */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 p-2 rounded-xl text-neutral-300 hover:text-lime-400 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-green-500/30 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            {/* Contact / Hire CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-300 hover:to-green-400 text-black shadow-md shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-neutral-900/80 border border-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-green-500/15 bg-[#050705]/95 backdrop-blur-xl px-4 py-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:text-lime-400 hover:bg-neutral-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
                <a
                  href={personalData.cvPath}
                  download="Kavishi_Rajasekara_CV.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-mono text-lime-400 bg-green-950/40 border border-green-500/30"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-lime-400 to-green-500 text-black shadow-md shadow-green-500/20"
                >
                  <Mail size={16} />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
