import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  FileDown, 
  ExternalLink, 
  CheckCircle, 
  HelpCircle, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeSection() {
  const [showGuide, setShowGuide] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Resume Card */}
        <div className="relative rounded-3xl glass-card border border-purple-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Neon background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-600/15 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (cols 1-8) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Download My <span className="text-gradient">Official Resume</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Get a comprehensive breakdown of my engineering coursework, technical skillset, full-stack and machine learning project portfolio, and internship credentials in a recruiter-friendly format.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Download PDF Button */}
                <a
                  href={personalData.resumeUrl}
                  download="Vedant_Deshmukh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-900/40 hover:shadow-neon-purple transition-all duration-300 active:scale-95"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>

                {/* View in New Tab Button */}
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/80 hover:text-white border border-slate-700/80 hover:border-purple-500/40 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Preview In Browser</span>
                </a>

                {/* Instructions toggle button */}
                <button
                  onClick={() => setShowGuide(!showGuide)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors py-2"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>How to replace with my actual resume?</span>
                </button>
              </div>

              {/* Collapsible Instruction Box */}
              <AnimatePresence>
                {showGuide && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-purple-500/30 text-xs text-slate-300"
                  >
                    <div className="flex items-center justify-between font-semibold text-purple-300 mb-2">
                      <span>How to customize your resume:</span>
                      <button
                        onClick={copyPath}
                        className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>Copy Path</span>
                      </button>
                    </div>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-400">
                      <li>Copy your real resume PDF file into the <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">public/</code> directory.</li>
                      <li>Name the file <code className="text-purple-300 bg-slate-900 px-1 py-0.5 rounded">resume.pdf</code> (overwriting the placeholder).</li>
                      <li>All download links across the navbar, hero section, and this section will immediately serve your official resume!</li>
                    </ol>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Preview Card Graphic (cols 9-12) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-80 rounded-2xl bg-gradient-to-b from-slate-900 to-[#070b19] border border-purple-500/30 p-5 shadow-2xl relative group hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-extrabold text-sm text-gradient">VD Resume</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">PDF</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-3/4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-slate-800/80 rounded" />
                    <div className="h-2 w-full bg-slate-800/60 rounded" />
                    <div className="h-2 w-5/6 bg-slate-800/60 rounded" />
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="h-2.5 w-2/3 bg-purple-900/50 rounded" />
                    <div className="h-2 w-full bg-slate-800/60 rounded" />
                    <div className="h-2 w-4/5 bg-slate-800/60 rounded" />
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="h-2.5 w-1/2 bg-cyan-900/50 rounded" />
                    <div className="h-2 w-full bg-slate-800/60 rounded" />
                  </div>
                </div>

                <div className="text-center pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  Ready for Recruiters
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

