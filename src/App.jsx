import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import CampusJourney from './components/CampusJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorFollower from './components/CursorFollower';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Interactive Easter Egg: Custom Smooth Cursor Follower */}
      <CursorFollower />

      {/* Interactive HTML5 Canvas Matrix-Dot Grid Background */}
      <MatrixGridCanvas />

      {/* Cyber Ambient Lighting Overlay (Neon Emerald & Lime Glow) */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Top-center emerald glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-emerald-500/12 rounded-full blur-[140px] animate-pulse-glow" />
        {/* Bottom-right lime glow */}
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-lime-400/8 rounded-full blur-[130px]" />
        {/* Left edge subtle cyan/emerald bloom */}
        <div className="absolute top-1/3 -left-20 w-[350px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px]" />
        {/* Scanline CRT overlay effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.25)_51%)] bg-[length:100%_4px] opacity-25" />
      </div>

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Intro Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Featured Projects Showcase */}
        <FeaturedProjects />

        {/* Tech Stack & Skills Showcase */}
        <TechStack />

        {/* Education & Campus Journey */}
        <CampusJourney />

        {/* Student-Friendly Contact Section */}
        <Contact />
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
