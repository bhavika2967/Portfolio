import React from 'react';

/**
 * About
 * 
 * Clean cyber-styled 'About Me' overview connecting Bhavika's cybersecurity,
 * blockchain, and software engineering interests with high-level highlights.
 */
export default function About() {
  const highlights = [
    {
      title: 'Cybersecurity & Auditing',
      detail: 'Investigating file integrity monitors, cryptography, and network vulnerabilities to build defensive infrastructure.',
      icon: '🛡️',
    },
    {
      title: 'Decentralized Architecture',
      detail: 'Experimenting with smart contracts and tamper-evident blockchain verification for digital records.',
      icon: '🔗',
    },
    {
      title: 'Full-Stack & Robotics',
      detail: 'Crafting responsive user interfaces with React and Tailwind while prototyping CV algorithms on embedded robotics.',
      icon: '⚡',
    },
  ];

  return (
    <section 
      id="about" 
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/10"
    >
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>// ORIGIN & INTERESTS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Engineering With{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
            Purpose & Rigor
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          I am a 2nd year CSE (Cybersecurity, IoT with Blockchain) student at{' '}
          <span className="text-white font-medium underline decoration-emerald-500/50 decoration-2 underline-offset-4">
            K S Institute of Technology
          </span>
          , Bengaluru. I love building practical, reliable software where systems security meets intuitive user experience.
        </p>
      </div>

      {/* 3 Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 hover:border-emerald-400/50 hover:bg-[#12171f] hover:shadow-[0_0_20px_rgba(16,185,129,0.18)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161f26] border border-emerald-500/30 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

