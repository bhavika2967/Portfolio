import React, { useState, useEffect } from 'react';

/**
 * Navbar
 * 
 * Floating frosted-glass navigation bar.
 * Stays fixed as the user scrolls, with backdrop-blur, cyber-emerald accents,
 * brand logo, desktop navigation links, and a responsive mobile drawer menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: '01' },
    { name: 'Projects', href: '#projects', id: '02' },
    { name: 'Skills', href: '#skills', id: '03' },
    { name: 'Campus Life', href: '#campus-life', id: '04' },
    { name: 'Contact', href: '#contact', id: '05' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      isScrolled ? 'pt-2 pb-2' : 'pt-4 pb-2'
    }`}>
      {/* Floating Glass Pill */}
      <nav className="max-w-6xl mx-auto backdrop-blur-xl bg-[#0d1117]/80 border border-emerald-500/20 hover:border-emerald-500/35 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(16,185,129,0.06)] flex items-center justify-between transition-all duration-300">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 rounded-lg py-1 px-1.5 transition-all"
        >
          {/* Cyber bracket icon */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-950/60 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:border-emerald-400 transition-all">
            <span className="font-mono text-emerald-400 font-bold text-sm tracking-tighter group-hover:scale-110 transition-transform">
              &lt;B/&gt;
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Bhavika <span className="text-emerald-400 font-mono">V N</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-500/80 -mt-1 tracking-wider">
              cyber // iot // web
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative px-4 py-1.5 rounded-xl text-xs font-semibold font-mono tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            <span>Let's Connect</span>
            <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 backdrop-blur-2xl bg-[#0d1117]/95 border border-emerald-500/25 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_20px_rgba(16,185,129,0.15)] flex flex-col gap-1 transition-all animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10 flex items-center justify-between transition-colors"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-emerald-500/60">// {link.id}</span>
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-emerald-500/15">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-mono font-semibold text-black bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
            >
              <span>Get In Touch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

