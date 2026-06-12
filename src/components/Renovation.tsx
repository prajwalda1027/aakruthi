import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, Hammer, ShieldAlert, ArrowRight, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { RenovationPair } from '../types';

const renovationProjects: RenovationPair[] = [
  {
    id: 'const-01',
    title: 'Luxury 4-BHK duplex villa construction',
    location: 'Saraswathi Nagar, Davanagere',
    scope: 'Premium Turn-key Residential Design & Construction',
    beforeDesc: 'Raw plotted site after soil investigation & heavy excavation. Work began with structural foundation setups, M25 concrete column footings, and Fe-550 TMT grade reinforcing steel bar grids for lifetime load-bearing safety.',
    afterDesc: 'Spectacular finished 4-BHK double-glazed luxury duplex residence. Complete with solid geometric facades, modern profile kitchens, customized wooden safety doors, and fully cleared legal layouts.',
    structuralUpgrade: 'Rigid concrete cube strength audits, state-of-the-art earthquake-resistant tie beams, and full turn-key execution on schedule.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    imageUrlAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'const-02',
    title: 'Multi-Floor Premium Commercial Complex',
    location: 'MCC B Block, Davanagere',
    scope: 'Commercial Planning, RCC Core Framework & Finishing',
    beforeDesc: 'Casting of core structural pillars and intermediate floor slabs with premium cement blends. Regular hydration cured on columns, scaffolding safety systems, and architectural masonry alignment.',
    afterDesc: 'Fully operational business and showroom hub with high-performance glass curtains, robust granite flooring, fire protection ducts, optimized utility rails, and premium outdoor presentation.',
    structuralUpgrade: 'Post-tensioned concrete structural layout for broad workspace utility, customized wind-load structural engineering, and legally compliant pathways.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    imageUrlAfter: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renov-01',
    title: 'Heritage Villa Facade Modernization',
    location: 'Nittuvalli, Davanagere',
    scope: 'Ancestral Structure Modernization & Elevation Design',
    beforeDesc: 'Aged 1980s property suffering from weathered external plastering, old congested window profiles, structural dampness, and outdated layout zones.',
    afterDesc: 'Redesigned into a premium modern elevation. Installed elegant composite cladding panels, double-glazed soundproof glass windows, and beautiful ventilation panels.',
    structuralUpgrade: 'Comprehensive external waterproofing barrier treatment, interior wall partition optimization, and premium long-lasting exterior emulsion applications.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    imageUrlAfter: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Renovation() {
  const [activeProject, setActiveProject] = useState<RenovationPair>(renovationProjects[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Handle manual coordinate calculation for custom slider
  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isResizing) {
      const container = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, container);
    }
  };

  const isConstruction = activeProject.id.startsWith('const-');
  const labelBefore = activeProject.id === 'const-01' 
    ? 'RCC FOOTING & FOUNDATION STAGE' 
    : activeProject.id === 'const-02'
    ? 'STEEL & COLUMN SKELETON'
    : 'BEFORE RESTORE STATE';
  const labelAfter = activeProject.id === 'const-01'
    ? 'FINISHED DUPLEX VILLA'
    : activeProject.id === 'const-02'
    ? 'FINISHED COMMERCIAL COMPLEX'
    : 'COMPLETED MODERN ELEVATION';

  return (
    <section id="construction" className="py-24 bg-slate-950 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF7500] font-mono text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" /> PREMIUM NEW CONSTRUCTION &amp; OVERHAUL
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            From Blueprint &amp; Foundation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7500] to-teal-400">To Completed Masterpieces</span>
          </h2>
          <p className="text-slate-400 text-lg">
            At Aakruthi Constructions, we manage premium brand new home construction as well as high-performance retro-engineering and structural renovations with certified material audits.
          </p>
        </div>

        {/* Project Selector Tab Pills */}
        <div className="flex justify-center flex-wrap gap-3 mb-12" id="renovation-tabs">
          {renovationProjects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProject(proj);
                setSliderPosition(50);
              }}
              className={`px-5 py-3 rounded-xl font-medium font-display transition-all text-sm duration-300 cursor-pointer ${
                activeProject.id === proj.id
                  ? 'bg-gradient-to-r from-[#FF7500] to-orange-500 text-white shadow-lg shadow-orange-500/15'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Main Renovation Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Side-by-Side Interactive Divider Slider (Takes 8 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Custom Interactive Slider Container */}
            <div 
              className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl select-none cursor-ew-resize group"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => { setIsResizing(true); }}
              onMouseUp={() => { setIsResizing(false); }}
              onMouseLeave={() => { setIsResizing(false); }}
              id="before-after-slider"
            >
              {/* After State (Right Background, always visible at bottom layer) */}
              <div className="absolute inset-0">
                <img
                  src={activeProject.imageUrlAfter}
                  alt={labelAfter}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-orange-500/30 font-mono text-[10px] sm:text-xs font-semibold text-orange-400 whitespace-nowrap">
                  {labelAfter}
                </div>
              </div>

              {/* Before State (Left Layer, clipped based on slider position) */}
              <div 
                className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none transition-all duration-75"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
              >
                <img
                  src={activeProject.imageUrlBefore}
                  alt={labelBefore}
                  className="absolute top-0 left-0 w-full h-full object-cover h-[100%] max-w-none"
                  style={{ width: '100%', aspectRatio: '16/9' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-500/30 font-mono text-[10px] sm:text-xs font-semibold text-red-400 whitespace-nowrap">
                  {labelBefore}
                </div>
              </div>

              {/* Slider bar divider line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-orange-500 cursor-ew-resize flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white border-4 border-slate-950 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
                  <ArrowLeftRight className="h-4 w-4" />
                </div>
              </div>

              {/* Help Hover Hint */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm shadow px-3 py-1.5 rounded-full z-10 text-xs font-medium text-slate-300 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <HelpCircle className="h-3.5 w-3.5 text-orange-500" /> Drag center slider to compare phases
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Engineering & Architectural Detail Sheets (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-orange-400">
                {isConstruction ? 'New Build Specifications' : 'Modernization & Renovation Specifications'}
              </h3>

              {/* Old vs New Highlights Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                
                {/* Outdated distress box / Initial construction state box */}
                <div className="p-4 rounded-xl bg-red-950/25 border border-red-900/40">
                  <div className="flex items-center gap-2 mb-2">
                    {isConstruction ? (
                      <Building2 className="h-5 w-5 text-orange-500" />
                    ) : (
                      <ShieldAlert className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-display font-semibold text-orange-400 text-sm">
                      {isConstruction ? 'Foundation & Engineering Stage' : 'Critical Distress Points'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {activeProject.beforeDesc}
                  </p>
                </div>

                {/* Innovative Resolution Box */}
                <div className="p-4 rounded-xl bg-cyan-950/25 border border-cyan-800/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-cyan-400" />
                    <span className="font-display font-semibold text-cyan-300 text-sm">
                      {isConstruction ? 'Turn-key Modern Architecture' : 'Modern Engineering Design'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {activeProject.afterDesc}
                  </p>
                </div>
              </div>

              {/* Structural upgrade card */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-5">
                  <Hammer className="h-16 w-16 text-[#FF7500]" />
                </div>
                <h4 className="font-display font-semibold text-white text-sm mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                  {isConstruction ? 'Quality Verification Protocols' : 'Aesthetic & Quality Upgrades'}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {activeProject.structuralUpgrade}
                </p>
              </div>
            </div>

            {/* Call To Action specific to Renovation */}
            <div className="mt-8 pt-6 border-t border-slate-900">
              <p className="text-slate-400 text-sm mb-4">
                {isConstruction 
                  ? 'Planning to build a new premium house or showroom site? Consult with our expert engineering board.'
                  : 'Want to remodel your existing home or elevate its exterior facade? Let us design and modernize it.'
                }
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FF7500] text-[#FF7500] hover:bg-[#FF7500] hover:text-white font-semibold text-sm transition-all"
                onClick={() => {
                  const formEl = document.getElementById('contact-form-select');
                  if (formEl) {
                    (formEl as HTMLSelectElement).value = 'construction';
                  }
                }}
              >
                {isConstruction ? 'Get Free Structural Consultation' : 'Get Renovation Design Consultation'} <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Informative Grid detailing the difference general aspects */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold font-mono text-lg mb-4">
              01
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Seismic-Grade Structural Foundation</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              We design robust piling, concrete tie beams, and column encasings optimized for Davanagere soil parameters, ensuring high load capacity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
            <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold font-mono text-lg mb-4">
              02
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">High-Performance Finishing &amp; Facades</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Applying premium granite detailing, composite louvers, structural glass curtains, and high-performance weather barrier coating treatments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
            <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold font-mono text-lg mb-4">
              03
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Rigid Material Quality &amp; Approvals</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our projects undergo strict on-site concrete cube compressions and material audit tests, delivering 100% compliant municipal handovers on-time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
