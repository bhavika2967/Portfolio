import React from 'react';

/**
 * CampusJourney
 * 
 * 'Education & Campus Journey' section featuring:
 * 1. Interactive vertical milestone timeline connected by an illuminated emerald line with glowing nodal dots.
 *    - 2026: Current milestone (Built FIM & Blockchain Document Notary)
 *    - 2025: Past milestone (Core club member & built first project: Soccer Bot)
 *    - 2025: Past milestone (Began degree, attended workshops like IIIT-B Cybersecurity & Ethical Hacking)
 * 2. Compact 2x2 grid of achievement badges:
 *    - Business Model Canvas Pitch Winner
 *    - 5+ Hackathons Participated
 *    - Core Technical Club Member
 *    - IIIT-Bangalore Cybersecurity Workshop Training
 */
export default function CampusJourney() {
  const milestones = [
    {
      year: '2026',
      status: 'Current Milestone',
      isCurrent: true,
      title: 'Built FIM & Blockchain Document Notary',
      description:
        'Engineered cryptographic file-tamper telemetry (File Integrity Monitor) and immutable decentralized notary smart contracts (Blockchain Document Notary) while exploring endpoint auditing.',
      tags: ['File Integrity Monitor', 'Blockchain Notary', 'Solidity & React'],
    },
    {
      year: '2025',
      status: 'Past Milestone',
      isCurrent: false,
      title: 'Core Club Member & Soccer Bot Build',
      description:
        'Served as an active core technical club coordinator and designed my first autonomous robotics system—the CV-powered Soccer Bot with PID motor speed calibration.',
      tags: ['Core Club Member', 'Soccer Bot', 'OpenCV & Arduino'],
    },
    {
      year: '2025',
      status: 'Past Milestone',
      isCurrent: false,
      title: 'Began Degree & IIIT-B Cybersecurity Workshops',
      description:
        'Commenced B.E. in CSE (Cybersecurity, IoT & Blockchain) at KSIT, actively participating in advanced security workshops including IIIT-Bangalore\'s Cybersecurity and Ethical Hacking summit.',
      tags: ['KSIT CSE Started', 'IIIT-B Workshop', 'Ethical Hacking'],
    },
  ];

  const achievements = [
    {
      id: '01',
      title: 'BMC Pitch Winner',
      subtitle: 'Business Model Canvas',
      badge: '1st Place',
      description: 'Awarded 1st place in college-level Business Model Canvas pitch for a novel cyber-tech venture concept.',
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9H3C2.44772 9 2 9.44772 2 10V11C2 13.7614 4.23858 16 7 16H8M18 9H21C21.5523 9 22 9.44772 22 10V11C22 13.7614 19.7614 16 17 16H16" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13V5Z" strokeWidth="2" />
          <path d="M12 19V22M8 22H16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      glowColor: 'hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]',
    },
    {
      id: '02',
      title: '5+ Hackathons',
      subtitle: 'Rapid Prototype Sprints',
      badge: 'Competitive',
      description: 'Built and presented innovative solutions under 24-48h deadlines spanning security, IoT, and AI tooling.',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]',
    },
    {
      id: '03',
      title: 'Core Club Member',
      subtitle: 'Campus Leadership',
      badge: 'Coordinator',
      description: 'Organized campus technical workshops, code labs, and collaborative peer learning sessions at KSIT.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21V19C22.9993 17.1137 21.7044 15.4528 19.86 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C17.8699 3.67389 19.208 5.41944 19.208 7.465C19.208 9.51056 17.8699 11.2561 16 11.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]',
    },
    {
      id: '04',
      title: 'IIIT-B Certified',
      subtitle: 'Cybersecurity Workshop',
      badge: 'Training',
      description: 'Hands-on training in ethical hacking methodologies, defensive penetration testing, and security hygiene at IIIT-B.',
      icon: (
        <svg className="w-5 h-5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22S4 18 4 12V5L12 2L20 5V12C20 18 12 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      glowColor: 'hover:border-lime-400/50 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]',
    },
  ];

  return (
    <section 
      id="campus-life" 
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>// ACADEMIC & CO-CURRICULAR</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Education &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
            Campus Journey
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          2nd year CSE (Cybersecurity, IoT with Blockchain) student at <span className="text-white font-medium underline decoration-emerald-500/50 decoration-2 underline-offset-4">K S Institute of Technology</span>, Bengaluru.
        </p>

        {/* KSIT Student Credentials Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-xl bg-[#12171f]/80 border border-emerald-500/20 text-xs font-mono text-slate-300">
          <span className="text-emerald-400 font-semibold">📍 KSIT Bengaluru</span>
          <span className="text-slate-600">•</span>
          <span>B.E. Computer Science & Engineering</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-300">Batch 2024 – 2028</span>
        </div>
      </div>

      {/* Main Grid: Interactive Timeline (Left) + Achievement Badges (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Interactive Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-500/15">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              <h3 className="text-lg font-bold text-white tracking-tight">Milestone Timeline</h3>
            </div>
            <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              chronological // flow
            </span>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 space-y-8">
            
            {/* Illuminated Emerald Vertical Line */}
            <div 
              aria-hidden="true" 
              className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
            />

            {milestones.map((milestone, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col transition-all duration-300"
              >
                {/* Glowing Nodal Dot on Timeline */}
                <div 
                  className={`absolute -left-[27px] sm:-left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                    milestone.isCurrent 
                      ? 'bg-emerald-950 border-2 border-emerald-400 shadow-[0_0_12px_#10b981]' 
                      : 'bg-[#0d1117] border-2 border-emerald-500/60 group-hover:border-emerald-400'
                  }`}
                >
                  <span 
                    className={`w-2 h-2 rounded-full ${
                      milestone.isCurrent 
                        ? 'bg-emerald-400 animate-ping' 
                        : 'bg-emerald-500'
                    }`} 
                  />
                </div>

                {/* Milestone Card Content */}
                <div className="rounded-xl bg-[#12171f]/70 border border-emerald-500/15 p-4 sm:p-5 hover:border-emerald-400/40 hover:bg-[#161f26]/80 transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  
                  {/* Top Meta: Year & Status Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {milestone.year}
                      </span>
                      <span className="text-slate-600 font-mono text-xs">//</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                        milestone.isCurrent 
                          ? 'bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-semibold' 
                          : 'bg-slate-800/80 text-slate-400'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>

                    {milestone.isCurrent && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-lime-400 bg-lime-950/40 border border-lime-500/30 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
                    {milestone.title}
                  </h4>

                  {/* 1-Line Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                    {milestone.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[#0d1117] border border-emerald-500/20 text-[11px] font-mono text-emerald-400/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Right Column: Achievement Badges Compact 2x2 Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/15">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
              <h3 className="text-lg font-bold text-white tracking-tight">Achievements & Callouts</h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-[#12171f] px-2.5 py-1 rounded-md border border-emerald-500/20">
              4 honors
            </span>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            Highlighted milestones from competitive hackathons, collegiate startup pitch arenas, and specialized technical certifications.
          </p>

          {/* Compact 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-xl bg-[#12171f]/85 border border-emerald-500/20 p-4 transition-all duration-300 transform hover:-translate-y-1 hover:bg-emerald-950/20 ${item.glowColor}`}
              >
                {/* Top row: Icon and Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0d1117] border border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight mb-1">
                    {item.title}
                  </h4>
                  <div className="text-[11px] font-mono text-emerald-400/80 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Card Status */}
          <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Verified student credentials</span>
            <span className="text-emerald-400 font-semibold">KSIT CSE 2024-2028</span>
          </div>
        </div>

      </div>
    </section>
  );
}

