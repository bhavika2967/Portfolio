import React, { useState, useRef } from 'react';

/**
 * ProjectCard
 * 
 * Individual dark-glass project panel with:
 * - Interactive 3D perspective tilt reacting to mouse position
 * - Smooth -6px lift on hover
 * - Edge glow (shadow-[...]) and dynamic radial glass shine effect
 * - Tech badges, 2-sentence description, and Live Demo / GitHub Code actions
 */
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, lift: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D perspective tilt (clamped to max ±8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ rotateX, rotateY, lift: -6 });
    setShinePos({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset
    setTilt({ rotateX: 0, rotateY: 0, lift: 0 });
    setShinePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="h-full flex"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(${tilt.lift}px)`,
          transition: isHovered 
            ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease' 
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, border-color 0.5s ease',
        }}
        className={`group relative flex flex-col justify-between w-full rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border p-6 sm:p-7 overflow-hidden transition-all duration-300 ${
          isHovered
            ? 'border-emerald-400/50 shadow-[0_16px_36px_-8px_rgba(16,185,129,0.28),0_0_20px_rgba(16,185,129,0.18)]'
            : 'border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Dynamic Radial Glare / Sleek Shine Follower */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle 280px at ${shinePos.x}px ${shinePos.y}px, rgba(16, 185, 129, 0.18), rgba(163, 230, 53, 0.08), transparent 70%)`,
            opacity: shinePos.opacity,
            transition: 'opacity 0.35s ease',
          }}
          className="pointer-events-none absolute inset-0 z-10"
        />

        {/* Ambient Top Subtle Linear Glass Sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        {/* Card Header & Content */}
        <div className="relative z-20 flex flex-col">
          {/* Top meta row: Category pill & Project Index */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 tracking-wider">
              {project.categoryBadge}
            </span>
            <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400/70 transition-colors">
              // {project.id}
            </span>
          </div>

          {/* Icon & Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-lg shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:scale-105 group-hover:border-emerald-400/60 transition-all">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* 2-Sentence Project Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
            {project.tech.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#161f26]/90 border border-emerald-500/20 text-slate-300 group-hover:border-emerald-500/35 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Buttons: Live Demo & GitHub Code */}
        <div className="relative z-20 pt-4 border-t border-emerald-500/15 flex items-center gap-3">
          {/* Primary Action: Live Demo */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-400 via-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_22px_rgba(16,185,129,0.6)] transition-all duration-300 transform active:scale-95"
          >
            <span>Live Demo</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Secondary Action: GitHub Code */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/code inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/25 border border-emerald-500/35 hover:border-emerald-400 hover:text-white hover:bg-emerald-500/15 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_18px_rgba(16,185,129,0.25)] transition-all duration-300 transform active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5 text-emerald-400 group-hover/code:text-emerald-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * FeaturedProjects
 * 
 * Showcase section featuring 3 student projects in a 3-column responsive grid.
 * Includes interactive category filter pills ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * and dark glass panels with 3D tilt & smooth lift physics.
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projects = [
    {
      id: '01',
      title: 'File Integrity Monitor',
      categoryBadge: 'Cybersecurity',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      icon: '🛡️',
      description:
        'Continuously monitors mission-critical system directories to detect unauthorized alterations and malicious file tampering in real time. Leverages SHA-256 cryptographic hashing to instantly trigger alert dispatchers and compile visual audit logs.',
      tech: ['React', 'Firebase', 'SHA-256', 'Tailwind'],
      demoUrl: '#demo-file-integrity',
      repoUrl: 'https://github.com/bhavika-vn/file-integrity-monitor',
    },
    {
      id: '02',
      title: 'Blockchain Document Notary',
      categoryBadge: 'Blockchain & AI',
      categories: ['All', 'Web Apps', 'AI / ML'],
      icon: '🔗',
      description:
        'Cryptographically timestamps and anchors academic diplomas and legal records onto an immutable decentralized ledger to eradicate fraudulent credentials. Utilizes computer vision algorithms to verify document biometric seals and validate authenticity in one click.',
      tech: ['Python', 'OpenCV', 'Solidity', 'Web3'],
      demoUrl: '#demo-blockchain-notary',
      repoUrl: 'https://github.com/bhavika-vn/blockchain-document-notary',
    },
    {
      id: '03',
      title: 'Soccer Bot',
      categoryBadge: 'Robotics & AI',
      categories: ['All', 'AI / ML', 'Mini-Projects'],
      icon: '🤖',
      description:
        'Autonomous two-wheel differential drive robotics system built to detect, pursue, and score balls in fast-paced arena competitions. Employs real-time computer vision object tracking coupled with PID motor speed controllers for agile physical maneuvers.',
      tech: ['Tailwind', 'Node.js', 'OpenCV', 'Arduino'],
      demoUrl: '#demo-soccer-bot',
      repoUrl: 'https://github.com/bhavika-vn/soccer-bot',
    },
  ];

  // Filter projects based on the active category pill
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section 
      id="projects" 
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>// PORTFOLIO SHOWCASE</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Featured{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Section Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Real-world security telemetry, decentralized ledger verification, and autonomous intelligent systems crafted with precision.
        </p>
      </div>

      {/* Filter Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {filterCategories.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.45)] border border-emerald-300 scale-105'
                  : 'bg-[#12171f]/80 text-slate-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-[#161f26]'
              }`}
            >
              <span>{category}</span>
              {isActive && (
                <span className="ml-1.5 text-black/70 text-[10px]">
                  ({filteredProjects.length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Hint / Metric Bar */}
      <div className="mt-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1117]/80 border border-emerald-500/20 text-xs font-mono text-slate-400 backdrop-blur-sm">
          <span className="text-emerald-400 font-bold">Tip:</span>
          <span>Hover & move your cursor over any card to experience the dynamic 3D perspective tilt & glare</span>
        </div>
      </div>
    </section>
  );
}

