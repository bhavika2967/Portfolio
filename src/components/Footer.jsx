import React from 'react';

/**
 * Footer
 * 
 * Clean, lightweight cyber-carbon footer.
 * Features:
 * - Centered line: 'Designed & Engineered by Bhavika • Class of 2029.'
 * - Quick back-to-top scroll button
 * - Subdued emerald border and status indicator
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-emerald-500/15 bg-[#0d1117]/90 backdrop-blur-xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Monogram Cyber Badge */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group w-10 h-10 rounded-xl bg-[#12171f] border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <span className="font-mono text-emerald-400 font-bold text-xs tracking-tighter group-hover:scale-110 transition-transform">
            ↑ TOP
          </span>
        </button>

        {/* User Required Centered Line */}
        <p className="text-sm font-mono text-slate-300 tracking-wide">
          Designed &amp; Engineered by <span className="text-white font-semibold">Bhavika</span> • <span className="text-emerald-400 font-medium">Class of 2029.</span>
        </p>

        {/* Micro Meta Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-500">
          <span>React + Tailwind CSS</span>
          <span>•</span>
          <span>Cyber-Emerald Theme</span>
          <span>•</span>
          <span className="text-emerald-500/80">K S Institute of Technology</span>
        </div>

      </div>
    </footer>
  );
}

