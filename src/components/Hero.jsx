import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Code, 
  Terminal,
  Laptop
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glows & Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions (cols 1-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status / Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 -ml-3.5 rounded-full bg-emerald-400" />
              <span>{personalData.greeting}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              <span className="block">{personalData.name.split(' ')[0]}</span>
              <span className="text-gradient">
                {personalData.name.split(' ')[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-purple-200/90 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 hidden sm:inline" />
              <span>{personalData.status}</span>
            </div>

            {/* Professional Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              {personalData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-900/30 hover:shadow-neon-purple transition-all duration-300 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={personalData.resumeUrl}
                download="Vedant_Deshmukh_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-white border border-slate-700/80 hover:border-purple-500/50 hover:shadow-glass transition-all duration-300 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-card text-slate-300 hover:text-white hover:border-purple-500/50 hover:shadow-neon-purple transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-card text-slate-300 hover:text-white hover:border-blue-500/50 hover:shadow-neon-blue transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2.5 rounded-lg glass-card text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-neon-cyan transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Neon Glowing Frame (cols 8-12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/25 blur-2xl animate-pulse-slow pointer-events-none" />

            {/* Main Avatar Container with Animated Neon Border */}
            <div className="relative group">
              {/* Outer Neon Glow Layer */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse-slow" />

              {/* Glass Frame Card */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl bg-[#090d20] border border-purple-500/40 p-2.5 shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Profile Placeholder Image */}
                <img
                  src="/placeholder-avatar.svg"
                  alt="Vedant Deshmukh - Developer Profile"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Scanline / Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Bottom Label inside Frame */}
                <div className="absolute bottom-4 left-4 right-4 py-1.5 px-3 rounded-lg bg-slate-900/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-[11px] font-mono text-slate-200">Vedant Deshmukh</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold">B.Tech CE</span>
                </div>
              </div>

              {/* Floating Tech Pill: Top Left */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-card border border-purple-500/40 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-black/60 backdrop-blur-md"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-slate-200">Full-Stack Dev</span>
              </motion.div>

              {/* Floating Tech Pill: Bottom Right */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 glass-card border border-cyan-500/40 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-black/60 backdrop-blur-md"
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">Problem Solver</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

