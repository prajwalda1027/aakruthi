import React from 'react';
import { CheckCircle2, ShieldAlert, Award, FileCheck2, Leaf, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "ISO-Grade Material Policy",
      desc: "Strictly utilizing first-class structural supplies: Fe-550 TMT steel bars, certified Grade 53 Portland Cement, and dust-resistant copper wiring systems."
    },
    {
      icon: <FileCheck2 className="h-6 w-6 text-[#00E5FF]" />,
      title: "100% Legally Vetted land",
      desc: "Every plot, floor plan, and building map undergoes extreme layout verification by legal authorities. Zero litigation, 100% clean, verified documentations."
    },
    {
      icon: <Leaf className="h-6 w-6 text-yellow-500" />,
      title: "Sustainable Architecture",
      desc: "Integrating rainwater harvesting, smart energy wiring loops, organic ventilation zones, and thermal envelope blockworks to decrease cooling costs."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-[#00E5FF]" />,
      title: "Client-Centric Philosophy",
      desc: "Fully transparent digital dashboards to view daily progress updates, instant material inspections, and strict custom milestone payments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Interactive Images & Badges (Takes 5 cols) */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                alt="Elite Construction Engineering Process"
                className="w-full aspect-[4/5] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Overlaid Float Card (Structural Concrete Verification) */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-5 rounded-xl border border-yellow-500/30">
                <p className="font-mono text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">
                  CORE STANDARD
                </p>
                <h4 className="font-display font-bold text-white text-sm mb-1">
                  M25 Mix Design Concrete Compaction
                </h4>
                <p className="text-slate-400 text-xs">
                  We run automated hydraulic slump & cube compression tests on all concrete loads to secure 100% load-integrity before pouring.
                </p>
              </div>
            </div>

            {/* Micro Floating badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center h-28 w-28 rounded-full bg-slate-950 border border-slate-800 text-center shadow-xl">
              <span className="font-display text-2xl font-black text-yellow-400">100%</span>
              <span className="font-mono text-[9px] uppercase text-slate-400 tracking-wider">Vaastu</span>
              <span className="font-mono text-[9px] uppercase text-slate-400 tracking-wider">Compliant</span>
            </div>
          </div>

          {/* Right Column: Detailed copy and company narrative (Takes 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 font-mono text-xs font-semibold mb-4">
                ABOUT AAKRUTHI CONSTRUCTIONS
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Pioneers of Premium{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-[#caa05a]">
                  Engineering Quality
                </span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Operating from the heart of Davanagere, Aakruthi Constructions has earned an impeccable reputation for building high-quality, long-lasting residential villas, major commercial complexes, and modern apartments.
              </p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                We bridge the gap between architectural elegance and hard-nosed civil engineering codes. By integrating premium raw materials, verified client structures, and transparent title handovers, we deliver outstanding assets that appreciate rapidly in value.
              </p>
            </div>

            {/* Custom Values Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-core-values">
              {values.map((val, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-800 transition-colors">
                  <div className="flex-shrink-0 mt-1">{val.icon}</div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-1">
                      {val.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Guarantee checklist lines */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <p className="text-[#00E5FF] font-mono text-xs font-semibold tracking-wider uppercase">
                  OUR GUARANTEE
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> On-time Delivery Clause
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Zero Cost Escapes
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Vastu Certified Plots
                  </span>
                </div>
              </div>
              
              <a 
                href="#contact"
                className="text-[#caa05a] hover:text-white hover:underline font-display text-sm font-semibold flex items-center gap-1.5"
              >
                Schedule Site Visit &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
