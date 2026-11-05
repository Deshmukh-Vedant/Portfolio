import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  MessageSquare,
  Info
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusNotice, setStatusNotice] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending validation & show transparent provider instructions
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusNotice({
        type: 'success',
        title: 'Form Validation Successful!',
        message: 'Your message inputs are valid. Note: This contact form is currently in frontend demonstration mode. To enable automatic live email dispatch directly to your inbox, connect a service like EmailJS, Formspree, or your backend endpoint in this component.'
      });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Open to software development opportunities, full-stack roles, internships, and collaborative tech discussions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards (cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalData.contact.email}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 block transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Email Me</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {personalData.contact.email}
                  </h3>
                  <span className="text-[11px] text-slate-500">(Click to compose)</span>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 block transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">LinkedIn Profile</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                    vedant-deshmukh
                  </h3>
                  <span className="text-[11px] text-slate-500">(Professional Network)</span>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 block transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">GitHub Repositories</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    github.com/Deshmukh-Vedant
                  </h3>
                  <span className="text-[11px] text-slate-500">(Code &amp; Open Source)</span>
                </div>
              </div>
            </a>

            {/* Location Pill */}
            <div className="glass-card rounded-2xl p-4 border border-slate-800/80 flex items-center gap-3 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Location: {personalData.contact.location}</span>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation (cols 6-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-500/30 relative"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out this form to get in touch. Form input validation is fully active.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
                  Your Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                  Your Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-purple-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Feedback Notice */}
              <AnimatePresence>
                {statusNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 text-xs text-purple-200"
                  >
                    <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{statusNotice.title}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {statusNotice.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-900/30 hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Validating &amp; Processing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

