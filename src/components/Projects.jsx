import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  AlertCircle, 
  CheckCircle, 
  Info,
  Calendar,
  Layers,
  X
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleLinkClick = (e, project, type) => {
    // If it's a placeholder link, show informative dialog so the user knows where to configure it
    const url = type === 'github' ? project.github : project.liveDemo;
    if (!url || url.includes('your-username') || url === '#') {
      e.preventDefault();
      setActiveModalProject({ project, type });
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Practical software projects demonstrating full-stack engineering, machine learning pipelines, automation workflows, and modern web application development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects List / Grid */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-slate-800/90 hover:border-purple-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow border gradient effect */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Screenshot / Diagram Mockup (cols 1-6) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 group-hover:border-purple-500/30 transition-all duration-300 bg-slate-950/80 shadow-2xl">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot preview`}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-purple-500/30 text-[11px] font-semibold text-purple-300 shadow">
                        {project.badge}
                      </div>
                    </div>
                  </div>

                  {/* Project Details (cols 7-12) */}
                  <div className={`lg:col-span-6 flex flex-col ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Implemented Features Highlights */}
                    <div className="space-y-2 mb-5">
                      {project.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer if present (AI Medical Report) */}
                    {project.disclaimer && (
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-xs mb-5 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{project.disclaimer}</span>
                      </div>
                    )}

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-slate-900/90 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: GitHub & Live Demo */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                      <a
                        href={project.github}
                        onClick={(e) => handleLinkClick(e, project, 'github')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all duration-200 active:scale-95"
                      >
                        <Github className="w-4 h-4 text-purple-400" />
                        <span>Source Code</span>
                      </a>

                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-sm transition-all duration-200 active:scale-95"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <button
                          onClick={(e) => handleLinkClick(e, project, 'demo')}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          <span>Live Demo (Config)</span>
                        </button>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Helpful Link Configuration Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-2xl max-w-md w-full p-6 border border-purple-500/40 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Placeholder Link</h4>
                  <span className="text-xs text-slate-400">{activeModalProject.project.title}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                This project's {activeModalProject.type === 'github' ? 'GitHub repository' : 'Live Demo'} is currently set to an editable placeholder so that you can add your actual URL.
              </p>

              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-purple-300 mb-5 break-all">
                File: <span className="text-cyan-300">src/data/portfolioData.js</span>
                <br />
                Key: <span className="text-emerald-300">{activeModalProject.type === 'github' ? 'github' : 'liveDemo'}</span>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md transition-all"
              >
                Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

