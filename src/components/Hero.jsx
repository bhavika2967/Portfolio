import React from 'react';

/**
 * Hero
 * 
 * Opening hero section for Bhavika V N's student developer portfolio.
 * Features:
 * - Animated blinking radar status pill
 * - High-impact Cyber-Emerald gradient headline
 * - KSIT academic & technical bio
 * - Tech focus tags (Cybersecurity, IoT, Blockchain, AI)
 * - Glowing lift-on-hover primary CTA & outlined secondary CTA
 */
export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">

        {/* Status Badge: Animated Blinking Radar Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-emerald-950/40 border border-emerald-500/35 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:border-emerald-400/60 hover:bg-emerald-950/60 transition-all duration-300 cursor-default mb-8 group">
          {/* Radar Blinking Green Pulse */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </span>
          {/* Pill text */}
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-emerald-300 group-hover:text-emerald-200 transition-colors">
            Student Developer <span className="text-emerald-500/60">//</span> Open for Internships
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.1] mb-6">
          <span className="text-slate-300 block font-medium text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 font-mono">
            &lt;developer&gt; Hey, I am
          </span>
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
            Bhavika V N
          </span>
          <span className="block text-white mt-2 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            — Building the Future of Tech.
          </span>
        </h1>

        {/* Student Bio */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8 px-2 sm:px-4">
          2nd year <span className="text-emerald-400 font-semibold">CSE (Cybersecurity, IoT with Blockchain)</span> student at{' '}
          <span className="text-white font-medium underline decoration-emerald-500/40 decoration-2 underline-offset-4">
            K S Institute of Technology
          </span>
          , passionate about <span className="text-lime-300 font-medium">web development</span>,{' '}
          <span className="text-emerald-300 font-medium">AI</span>, and building real-world projects.
        </p>

        {/* Tech Specialization Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-2xl">
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#161f26]/80 border border-emerald-500/25 text-emerald-300/90 shadow-sm flex items-center gap-1.5">
            <span className="text-emerald-400">🛡️</span> Cybersecurity
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#161f26]/80 border border-emerald-500/25 text-emerald-300/90 shadow-sm flex items-center gap-1.5">
            <span className="text-emerald-400">⚡</span> IoT & Embedded Systems
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#161f26]/80 border border-emerald-500/25 text-emerald-300/90 shadow-sm flex items-center gap-1.5">
            <span className="text-emerald-400">🔗</span> Blockchain Architecture
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#161f26]/80 border border-lime-500/25 text-lime-300/90 shadow-sm flex items-center gap-1.5">
            <span className="text-lime-400">🤖</span> Full-Stack AI Apps
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md">
          
          {/* Glowing Emerald Primary Button with Lift on Hover */}
          <a
            href="#projects"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-emerald-400 via-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          >
            <span>View My Projects</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Outline Secondary Button */}
          <a
            href="#resume"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-emerald-300 bg-emerald-950/20 border border-emerald-500/40 hover:border-emerald-400 hover:text-white hover:bg-emerald-500/15 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.12)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume / CV</span>
          </a>

        </div>

        {/* Subtle Canvas Interaction Cue */}
        <div className="mt-14 inline-flex items-center gap-2 text-xs font-mono text-emerald-500/70 bg-[#0d1117]/80 px-3.5 py-1.5 rounded-full border border-emerald-500/15 backdrop-blur-sm pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Move cursor or touch screen to ripple the matrix-dot grid</span>
        </div>

      </div>
    </section>
  );
}

