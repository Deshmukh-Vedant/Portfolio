import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building, 
  Sparkles, 
  CheckCircle, 
  Info,
  X
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  const handleCertClick = (e, cert) => {
    if (cert.credentialUrl === '#' || !cert.credentialUrl.startsWith('http')) {
      e.preventDefault();
      setActiveCertModal(cert);
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-900/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS &amp; SIMULATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Industry simulation completions, internship credentials, and specialized engineering training.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Icon + Organization */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 group-hover:text-cyan-300 transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-4">
                  <Building className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Action: View Credential */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  Verified Credential
                </span>

                <a
                  href={cert.credentialUrl}
                  onClick={(e) => handleCertClick(e, cert)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Placeholder Modal */}
      <AnimatePresence>
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-2xl max-w-md w-full p-6 border border-purple-500/40 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveCertModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Certificate Link</h4>
                  <span className="text-xs text-slate-400">{activeCertModal.issuer}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                This certificate credential link is configured with an editable placeholder. You can link your certificate PDF or verification URL directly in:
              </p>

              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-purple-300 mb-5 break-all">
                File: <span className="text-cyan-300">src/data/portfolioData.js</span>
                <br />
                Array: <span className="text-emerald-300">certificationsData[credentialUrl]</span>
              </div>

              <button
                onClick={() => setActiveCertModal(null)}
                className="w-full py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md transition-all"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

