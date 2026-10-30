import React, { useState } from 'react';

/**
 * TechStack
 * 
 * Interactive 'Tech Stack & Skills' showcase in Cyber-Emerald / Dark Mode style.
 * Categorized into 3 sections:
 * 1. Languages
 * 2. Frameworks & Tools
 * 3. Core CS Concepts
 * 
 * Each skill badge includes an official SVG tech icon, smooth scale-105 lift,
 * border emerald glow, and an interactive comfort level tooltip.
 */
export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      id: '01',
      title: 'Languages',
      badge: 'Syntax & Logic',
      description: 'Foundational languages used for systems programming, backend logic, and web architecture.',
      skills: [
        {
          name: 'C++',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#00599C" strokeWidth="1.5" fill="#00599C" fillOpacity="0.15" />
              <path d="M9.5 9.5C9 10.2 8.5 11 8.5 12C8.5 13 9 13.8 9.5 14.5" stroke="#004482" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 10.5V13.5M12.5 12H15.5M19 10.5V13.5M17.5 12H20.5" stroke="#00599C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'Python',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M11.8 3C7.5 3 7.8 4.9 7.8 4.9L7.8 6.8H12V7.8H5.9C4 7.8 3 9.4 3 11.5C3 13.9 4.3 14.2 4.3 14.2H5.6V12.3C5.6 10.1 7.2 10.1 7.2 10.1H11.5C13.5 10.1 13.6 8.3 13.6 8.3V4.9C13.6 4.9 13.8 3 11.8 3ZM9.8 4.3C10.3 4.3 10.7 4.7 10.7 5.2C10.7 5.7 10.3 6.1 9.8 6.1C9.3 6.1 8.9 5.7 8.9 5.2C8.9 4.7 9.3 4.3 9.8 4.3Z" fill="#3776AB" />
              <path d="M12.2 21C16.5 21 16.2 19.1 16.2 19.1L16.2 17.2H12V16.2H18.1C20 16.2 21 14.6 21 12.5C21 10.1 19.7 9.8 19.7 9.8H18.4V11.7C18.4 13.9 16.8 13.9 16.8 13.9H12.5C10.5 13.9 10.4 15.7 10.4 15.7V19.1C10.4 19.1 10.2 21 12.2 21ZM14.2 19.7C13.7 19.7 13.3 19.3 13.3 18.8C13.3 18.3 13.7 17.9 14.2 17.9C14.7 17.9 15.1 18.3 15.1 18.8C15.1 19.3 14.7 19.7 14.2 19.7Z" fill="#FFD43B" />
            </svg>
          ),
        },
        {
          name: 'JavaScript',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#F7DF1E" />
              <path d="M6 18.5V13.8H8.5V17C8.5 18.8 7.3 19.5 6 18.5Z" fill="#000" />
              <path d="M11.5 17.2C12 18.4 13.3 19.2 15 19.2C16.8 19.2 18 18.1 18 16.5C18 13.6 13.9 13.7 13.9 11.8C13.9 11 14.6 10.5 15.6 10.5C16.8 10.5 17.6 11.2 18 12.1L16.2 13.1C16 12.6 15.8 12.3 15.4 12.3C15 12.3 14.7 12.5 14.7 12.9C14.7 14.3 18.8 14.2 18.8 16.6C18.8 19.2 16.7 20.7 14.6 20.7C12.4 20.7 11 19.3 10.5 18L11.5 17.2Z" fill="#000" />
            </svg>
          ),
        },
        {
          name: 'Java',
          level: 'Familiar',
          levelType: 'familiar',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M8.5 19.5C11.5 19.7 16 19.2 17.5 17C17.5 17 16.5 17.8 14 18C10.5 18.3 8 17.2 8 17.2C8 17.2 8.3 18.5 8.5 19.5Z" fill="#5382A1" />
              <path d="M7 16C10 16.2 15 15.8 17 14C17 14 15.5 14.6 13 14.8C9.5 15.1 7 14 7 14C7 14 6.8 15.2 7 16Z" fill="#E76F00" />
              <path d="M11 3C11 3 13 5.5 11 8C9 10.5 13 12 13 12C13 12 11.5 10.8 12 9.5C12.5 8.2 14.5 6.5 11 3Z" stroke="#E76F00" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M14 6C14 6 15.5 7.5 14 9C12.5 10.5 15 11.5 15 11.5" stroke="#5382A1" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'Solidity',
          level: 'Currently Learning',
          levelType: 'learning',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L6 12L12 15.5L18 12L12 2Z" fill="#627EEA" />
              <path d="M12 16.5L6 13L12 22L18 13L12 16.5Z" fill="#627EEA" fillOpacity="0.8" />
            </svg>
          ),
        },
        {
          name: 'SQL',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#10b981" strokeWidth="1.5" />
              <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="#10b981" strokeWidth="1.5" />
              <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          ),
        },
      ],
    },
    {
      id: '02',
      title: 'Frameworks & Tools',
      badge: 'Ecosystem & Cloud',
      description: 'Modern libraries, reactive UI frameworks, and version control tooling.',
      skills: [
        {
          name: 'React',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(150 12 12)" />
              <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
            </svg>
          ),
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.5 8.75 12.25 9.5 13 10.25C14.2 11.45 15.6 12.85 19 12.85C21.6667 12.85 23.3333 11.5167 24 8.85C23 10.1833 21.8333 10.6833 20.5 10.35C19.5 10.1 18.75 9.35 18 8.6C16.8 7.4 15.4 6 12 6ZM5 12C2.33333 12 0.666667 13.3333 0 16C1 14.6667 2.16667 14.1667 3.5 14.5C4.5 14.75 5.25 15.5 6 16.25C7.2 17.45 8.6 18.85 12 18.85C14.6667 18.85 16.3333 17.5167 17 14.85C16 16.1833 14.8333 16.6833 13.5 16.35C12.5 16.1 11.75 15.35 11 14.6C9.8 13.4 8.4 12 5 12Z" fill="#38BDF8" />
            </svg>
          ),
        },
        {
          name: 'Node.js',
          level: 'Familiar',
          levelType: 'familiar',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="#68A063" strokeWidth="1.5" fill="#68A063" fillOpacity="0.15" />
              <path d="M12 6L6 9.5V14.5L12 18L18 14.5V9.5L12 6Z" stroke="#68A063" strokeWidth="1.3" />
            </svg>
          ),
        },
        {
          name: 'Git / GitHub',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#F0F6FC" />
            </svg>
          ),
        },
        {
          name: 'Firebase',
          level: 'Familiar',
          levelType: 'familiar',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 17.5L6.8 3.5L10 9.8L4.5 17.5Z" fill="#FFA000" />
              <path d="M12 2.5L14.5 6.8L12 10.8L10 9.8L12 2.5Z" fill="#F57C00" />
              <path d="M19.5 17.5L4.5 17.5L12 22L19.5 17.5Z" fill="#FFCA28" />
            </svg>
          ),
        },
        {
          name: 'Linux & Bash',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 17L10 11L4 5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 19H20" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ),
        },
      ],
    },
    {
      id: '03',
      title: 'Core CS Concepts',
      badge: 'Theory & Architecture',
      description: 'Foundational computer science principles, system design, and security heuristics.',
      skills: [
        {
          name: 'Data Structures',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="5" r="2.5" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="6" cy="18" r="2.5" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="2.5" stroke="#10b981" strokeWidth="1.5" />
              <path d="M10.5 7.2L7.5 15.5M13.5 7.2L16.5 15.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'OOP',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#34d399" strokeWidth="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#34d399" strokeWidth="1.5" />
              <rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
              <path d="M6.5 10V12H17.5V10M12 12V14" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'DBMS',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6C4 4.5 7.5 3 12 3C16.5 3 20 4.5 20 6M4 6C4 7.5 7.5 9 12 9C16.5 9 20 7.5 20 6M4 6V18C4 19.5 7.5 21 12 21C16.5 21 20 19.5 20 18V6M4 12C4 13.5 7.5 15 12 15C16.5 15 20 13.5 20 12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          name: 'OS (Operating Systems)',
          level: 'Proficient',
          levelType: 'proficient',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="#a3e635" strokeWidth="1.5" />
              <rect x="9" y="9" width="6" height="6" stroke="#10b981" strokeWidth="1.5" />
              <path d="M9 2V4M15 2V4M9 20V22M15 20V22M2 9H4M2 15H4M20 9H22M20 15H22" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'Cryptography',
          level: 'Currently Learning',
          levelType: 'learning',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L4 6V12C4 17.5 7.5 21.5 12 22C16.5 21.5 20 17.5 20 12V6L12 2Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.15" />
              <circle cx="12" cy="11" r="1.5" fill="#10b981" />
              <path d="M12 12.5V15" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          name: 'Computer Networks',
          level: 'Familiar',
          levelType: 'familiar',
          svg: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="4" width="6" height="5" rx="1" stroke="#38BDF8" strokeWidth="1.5" />
              <rect x="16" y="4" width="6" height="5" rx="1" stroke="#38BDF8" strokeWidth="1.5" />
              <rect x="9" y="15" width="6" height="5" rx="1" stroke="#38BDF8" strokeWidth="1.5" />
              <path d="M5 9V12H19V9M12 12V15" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
      ],
    },
  ];

  // Comfort Level Pill Tooltip Helper
  const getLevelBadgeConfig = (levelType) => {
    switch (levelType) {
      case 'proficient':
        return {
          dot: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
          text: 'text-emerald-300',
          border: 'border-emerald-500/50',
          glow: 'shadow-[0_0_15px_rgba(16,185,129,0.35)]',
          label: 'Proficient',
        };
      case 'familiar':
        return {
          dot: 'bg-teal-400 shadow-[0_0_8px_#2dd4bf]',
          text: 'text-teal-300',
          border: 'border-teal-500/50',
          glow: 'shadow-[0_0_15px_rgba(45,212,191,0.3)]',
          label: 'Familiar',
        };
      case 'learning':
        return {
          dot: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
          text: 'text-lime-300',
          border: 'border-lime-500/50',
          glow: 'shadow-[0_0_15px_rgba(163,230,53,0.35)]',
          label: 'Currently Learning',
        };
      default:
        return {
          dot: 'bg-emerald-400',
          text: 'text-emerald-300',
          border: 'border-emerald-500/50',
          glow: 'shadow-none',
          label: 'Active',
        };
    }
  };

  return (
    <section 
      id="skills" 
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>// CORE PROFICIENCIES</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Tech Stack &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Section Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Languages, architectural tools, and foundational CS principles honed through coursework and real-world project builds.
        </p>

        {/* Legend / Comfort Level Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]" />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3-Category Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-emerald-500/40 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_15px_rgba(16,185,129,0.12)] transition-all duration-300"
          >
            {/* Top Specular Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 tracking-wider">
                  {category.badge}
                </span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400/70 transition-colors">
                  // {category.id}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {category.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {category.description}
              </p>

              {/* Skills Pill Badges with Interactive Tooltips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => {
                  const badgeCfg = getLevelBadgeConfig(skill.levelType);
                  return (
                    <div
                      key={skill.name}
                      className="group/badge relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#12171f]/85 border border-emerald-500/20 text-slate-200 text-xs sm:text-sm font-medium hover:border-emerald-400 hover:text-white hover:bg-emerald-950/30 hover:scale-105 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] transition-all duration-200 cursor-default select-none"
                    >
                      {/* Tech Icon / Logo */}
                      <span className="flex items-center justify-center shrink-0">
                        {skill.svg}
                      </span>

                      {/* Skill Name */}
                      <span className="font-mono tracking-tight">{skill.name}</span>

                      {/* Floating Interactive Tooltip */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/badge:flex flex-col items-center opacity-0 group-hover/badge:opacity-100 transition-all duration-200 z-30 whitespace-nowrap">
                        <div
                          className={`px-2.5 py-1 rounded-lg bg-[#070a0e]/95 backdrop-blur-md border ${badgeCfg.border} ${badgeCfg.glow} flex items-center gap-1.5`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${badgeCfg.dot}`} />
                          <span className={`text-[11px] font-mono font-semibold ${badgeCfg.text}`}>
                            {skill.level}
                          </span>
                        </div>
                        {/* Downward Tooltip Caret */}
                        <div
                          className={`w-1.5 h-1.5 bg-[#070a0e] border-r border-b ${badgeCfg.border} transform rotate-45 -mt-1`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Category Status Line */}
            <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>{category.skills.length} core competencies</span>
              <span className="text-emerald-500/80">verified // active</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interaction Cue */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1117]/80 border border-emerald-500/20 text-xs font-mono text-slate-400 backdrop-blur-sm">
          <span className="text-emerald-400 font-bold">Hint:</span>
          <span>Hover over any tech badge to view real-time proficiency & comfort level</span>
        </div>
      </div>
    </section>
  );
}

