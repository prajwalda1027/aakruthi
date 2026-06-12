import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Sparkles, Compass, Award, FileSpreadsheet } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-slate-950 overflow-hidden"
    >
      {/* Background Architectural Twilight Image with Heavy Slate vignette overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Luxury Villa Architectural Design"
          className="w-full h-full object-cover object-center opacity-45 transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/30"></div>
        {/* Modern decorative wireframe grid accent overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 w-full text-center">
        
        {/* Trust badge kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF7500] font-mono text-[11px] font-semibold tracking-wider uppercase mb-7" id="hero-badge">
          <Sparkles className="h-3.5 w-3.5" /> Davanagere&apos;s Elite ISO-Level Construction Firm
        </div>

        {/* Core display heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight sm:leading-none">
          Engineering Dream Homes with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7500] via-orange-400 to-teal-400">
            Structural Perfection
          </span>
        </h1>

        {/* Short, descriptive supporting copy */}
        <p className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          From ultra-luxury modern villas and robust commercial complexes to structural old-to-new renovations and premium verified real estate deals. We deliver ISO-quality execution with absolute legal transparency in Davanagere.
        </p>

        {/* Primary and secondary CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center" id="hero-ctas">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7500] to-orange-500 hover:from-orange-400 hover:to-[#FF7500] text-white font-display font-extrabold text-sm tracking-wide shadow-xl shadow-orange-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <HardHat className="h-4.5 w-4.5" /> Custom Quote WhatsApp
          </a>
          <a
            href="#construction"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-display font-semibold text-sm tracking-wide transition-all"
          >
            <Compass className="h-4.5 w-4.5 text-orange-400" /> Explore Construction Works
          </a>
        </div>

        {/* Genuine verification footer snippet */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-mono">
          <ShieldCheck className="h-4 w-4 text-[#00A88F]" /> 100% Genuine Land Documents & Local Approvals Guaranteed
        </div>

        {/* Trust Stats Panel (Bento-style horizontal bar) */}
        <div className="mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/85 shadow-2xl">
          
          <div className="p-6 bg-slate-950/40 hover:bg-slate-900/20 transition-colors">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7500] to-orange-400">
              350+
            </div>
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-1.5">
              Projects Completed
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Villas, Residential, Commercials</div>
          </div>

          <div className="p-6 bg-slate-950/40 hover:bg-slate-900/20 transition-colors">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#00A88F]">
              100%
            </div>
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-1.5">
              Verified Legal Titles
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Zero litigation, expert verified</div>
          </div>

          <div className="p-6 bg-slate-950/40 hover:bg-slate-900/20 transition-colors">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7500] to-orange-400">
              12+ Yrs
            </div>
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-1.5">
              Engineered Excellence
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Pioneers in DVG building sector</div>
          </div>

          <div className="p-6 bg-slate-950/40 hover:bg-slate-900/20 transition-colors">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#00A88F]">
              15-Yr
            </div>
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mt-1.5">
              Structural Warranty
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Underwritten construction bond</div>
          </div>

        </div>

      </div>
    </section>
  );
}
