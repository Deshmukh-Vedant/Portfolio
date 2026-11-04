import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  Building2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData, experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRAJECTORY &amp; BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            My formal engineering academics and hands-on professional web development internship timeline.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Pin Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 ring-4 ring-[#050814] shadow-neon-purple" />

                  <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/30 text-purple-300">
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.graduation}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Professional Experience / Internship */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Pin Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 ring-4 ring-[#050814] shadow-neon-cyan" />

                  <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-purple-300 font-medium mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Award className="w-4 h-4 shrink-0" />
                      <span className="truncate">{exp.certificate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

