import React from "react";
import bgImage from "/assets/hero.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Subtle overlay to pull the UI together */}
      <div className="absolute inset-0 bg-black/14 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        {/* Status Badges */}
        <div className="flex justify-center gap-3 mb-6">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold tracking-widest text-blue-600 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            AI Verified Live
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-bold tracking-widest text-red-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Recording
          </span>
        </div>

        {/* Main Heading */}

        <h1 className="font-noto text-3xl md:text-5xl font-semibold text-white tracking-tight leading-none">
          Ecosystem Live Stream:
          <span className=" block mt-2 font-SEMIbold">
            Sector Alpha-7
            {/* Coastal Monitoring Zone */}
          </span>
        </h1>

        {/* Technical Subtext */}
        <div className="mt-6 max-w-2xl mx-auto">
          {/* <p className="text-lg md:text-xl  text-slate-300 font-normal leading-relaxed">
            Active restoration projects worldwide - AI-verified and visible in
            real time, helping coral, mangroves, and coastal wildlife thrive.
          </p> */}
          {/* <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-slate-200 tracking-widest uppercase">
            <span>1,200 baby clownfish hatched this week</span>
            <span className="w-1 h-1 bg-slate- rounded-full"></span>
            <span>50 mangrove saplings planted along tropical coasts</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>200 sea turtles safely released into the ocean</span>
          </div> */}
        </div>

        {/* Action Elements */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-black transition-all duration-300 shadow-xl shadow-slate-900/10">
            Explore Restoration Map
          </button>
          <button className="px-6 py-3 bg-white/80 border border-slate-200 text-slate-700 rounded-lg font-bold backdrop-blur-md hover:bg-white transition-all">
            See How It Works
          </button>
        </div>
      </div>

      {/* Corner Accents for "Credibility" */}
      <div className="absolute bottom-8 left-8 hidden md:block border-l border-slate-300 pl-4 py-2">
        <p className="text-[10px] text-slate-200 font-mono uppercase tracking-tighter">
          System Status
        </p>
        <p className="text-xs font-bold text-slate-400 uppercase">
          Operational
        </p>
      </div>
    </div>
  );
};

export default Hero;
