import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Brain, 
  Zap, 
  Users, 
  Sparkles, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const badgeIcons = {
  Brain: Brain,
  Zap: Zap,
  Users: Users
};

export default function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      desc: "Final-year B.Tech Computer Engineering student building strong foundations in algorithms, system architecture, and modern computer science principles."
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Hands-on experience architecting full-stack web applications with React, Node.js, Express, and structured relational & NoSQL databases."
    },
    {
      icon: Compass,
      title: "Real-World Focus",
      desc: "Driven to build pragmatic, reliable software products—from machine learning pipelines to clean user interfaces that address real challenges."
    },
    {
      icon: Sparkles,
      title: "Growth & Continuous Learning",
      desc: "Eager to contribute, learn from experienced engineering teams, and adapt to modern tech stacks in collaborative developer environments."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>BACKGROUND &amp; ASPIRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Introduction Glassmorphism Card (cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-500/20 relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              <span>Aspiring Software Developer</span>
            </h3>

            {/* Official Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              {personalData.bio}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Throughout my engineering journey, I have prioritized genuine hands-on problem-solving, clean code practices, and exploring how modern web frameworks and predictive models come together to form cohesive user experiences.
            </p>

            {/* Visual Badges */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Core Strengths
              </span>
              <div className="flex flex-wrap gap-3">
                {personalData.badges.map((badge) => {
                  const Icon = badgeIcons[badge.icon] || CheckCircle2;
                  return (
                    <div
                      key={badge.title}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-200 text-xs sm:text-sm font-semibold shadow-sm hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{badge.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Pillars & Quick Facts Cards (cols 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

