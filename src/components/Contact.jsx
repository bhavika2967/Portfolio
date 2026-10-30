import React, { useState, useRef } from 'react';

/**
 * MagneticLinkButton
 * 
 * Interactive social button that magnetically pulls slightly towards
 * the cursor on hover and snaps back on mouse leave.
 */
function MagneticLinkButton({ href, label, handle, icon, glowClass }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate magnetic pull strength
    const deltaX = (e.clientX - centerX) * 0.28;
    const deltaY = (e.clientY - centerY) * 0.28;

    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease' : 'none',
      }}
      className={`group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#12171f]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-400 hover:bg-emerald-950/30 transition-all duration-300 ${glowClass}`}
    >
      <div className="w-10 h-10 rounded-lg bg-[#0d1117] border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-300 transition-all">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
          {label}
        </span>
        <span className="text-sm font-semibold text-white tracking-tight">
          {handle}
        </span>
      </div>
      <span className="ml-auto text-xs font-mono text-emerald-500/60 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
        ↗
      </span>
    </a>
  );
}

/**
 * Contact
 * 
 * Student-friendly 'Get In Touch' section featuring:
 * - 'Let’s Collaborate & Build' headline
 * - Interactive message form with animated submission feedback (emerald spinner -> 'Message Sent! 🚀')
 * - Direct links with magnetic hover effect for GitHub, LinkedIn, and Email
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('sending');

    // Simulate real-time server dispatch
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      // Reset back to idle after 4.5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4500);
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>// GET IN TOUCH</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let’s{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
            Collaborate & Build
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Open for summer internships, open-source projects, or tech chats. Drop me a message!
        </p>
      </div>

      {/* Main Grid: Form (Left) & Direct Links (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
        
        {/* Left Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/15">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                <h3 className="text-lg font-bold text-white tracking-tight">Direct Transmission</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                status // online
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-xl bg-[#12171f]/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-xl bg-[#12171f]/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hey Bhavika, I came across your portfolio and wanted to chat about an internship opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-xl bg-[#12171f]/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Button with Dynamic Feedback */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md ${
                  status === 'sent'
                    ? 'bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-[0.99]'
                    : status === 'sending'
                    ? 'bg-emerald-600/80 text-black cursor-wait shadow-inner'
                    : 'bg-gradient-to-r from-emerald-400 via-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 text-black shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transform hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Transmission...</span>
                  </>
                )}

                {status === 'sent' && (
                  <>
                    <span className="text-base">🚀</span>
                    <span>Message Sent! 🚀</span>
                  </>
                )}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <span className="text-base">✉️</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-4 pt-3 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Response time // Typically under 24 hours
            </span>
          </div>
        </div>

        {/* Right Column: Direct Magnetic Links & Bio (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/15">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
                <h3 className="text-lg font-bold text-white tracking-tight">Direct Channels</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-[#12171f] px-2 py-0.5 rounded border border-emerald-500/20">
                magnetic // links
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Prefer direct outreach? Connect across professional networks or drop an email directly into my inbox:
            </p>

            {/* Magnetic Link Buttons */}
            <div className="space-y-3.5">
              
              {/* GitHub */}
              <MagneticLinkButton
                href="https://github.com/bhavika2967"
                label="GitHub Profile"
                handle="@bhavika2967"
                glowClass="hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                icon={
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />

              {/* LinkedIn */}
              <MagneticLinkButton
                href="https://www.linkedin.com/in/bhavika-v-n"
                label="LinkedIn Network"
                handle="bhavika-v-n"
                glowClass="hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                icon={
                  <svg className="w-5 h-5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.82v8.37H6.46v-8.37M7.87 6.48a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                }
              />

              {/* Email */}
              <MagneticLinkButton
                href="mailto:bhavika2967@gmail.com"
                label="Direct Email"
                handle="bhavika2967@gmail.com"
                glowClass="hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
                icon={
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />

            </div>
          </div>

          {/* Location & Status Card */}
          <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Bengaluru, Karnataka, India</span>
            <span className="text-emerald-400 font-semibold">IST (UTC+5:30)</span>
          </div>
        </div>

      </div>
    </section>
  );
}

