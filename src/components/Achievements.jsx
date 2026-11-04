import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Globe, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const achievementIcons = {
  Target: Target,
  Globe: Globe,
  Award: Award
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-60 bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-cyan-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>HONORS &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Milestones, recruitment screening selections, developer communities, and hackathon participation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => {
            const Icon = achievementIcons[item.icon] || Trophy;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Glow border on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/0 via-indigo-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-600/20 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-xs sm:text-sm font-semibold text-cyan-400 mb-4">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verified Badge */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Candidate Milestone</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

