import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Building2, HardHat, Shield, HelpCircle, HardDrive, BadgeCheck, Sparkles, BookOpen } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'serv-01',
    title: 'Custom Residential Villas & Independent Houses',
    category: 'construction',
    tagline: 'Premium Turn-Key Home Spaces',
    description: 'Custom architectural villas engineered with durable frame schedules, premium masonry, and modern layout clearances. Full compliance with Vaastu standards.',
    features: [
      'Tailored architectural designs & 3D view models',
      'Solid Teakwood main frame carpentry and high-quality masonry',
      'Custom luxury finish selection from tile layouts to premium finishes',
      'Fully supervised structural reinforcement for superior stability'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    badge: 'CUSTOM VILLAS'
  },
  {
    id: 'serv-02',
    title: 'Modern Commercial Hubs & Complexes',
    category: 'construction',
    tagline: 'High-Density Premium Commercial Assets',
    description: 'Robust commercial concrete configurations designed to support optimal loading weight, spacious open showroom layouts, and advanced commercial ventilation.',
    features: [
      'Heavy load steel frame analysis & beam calculations',
      'Extruded structural aluminium exterior curtain facades',
      'Pre-planned utility ducts & electrical layout matrices',
      'Safe double fire exit staircases and functional entry bays'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    badge: 'COMMERCIAL'
  },
  {
    id: 'serv-03',
    title: 'Core Building & Structural Renovations',
    category: 'construction',
    tagline: 'Revamping & Space Extensions',
    description: 'Surgical remodeling and extension of standard existing structures to double utility. High quality material deployment ensures standard lifespan increases.',
    features: [
      'Precision load bearing structural walls replacement',
      'Exterior facade modernizing with composite board work',
      'New floor vertical expansions with lightweight light-gauge frames',
      'Premium damp-proofing layers for entire extended structures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    badge: 'RENOVATIONS'
  },
  {
    id: 'serv-04',
    title: 'Custom Architectural Plans & Vaastu Auditing',
    category: 'consulting',
    tagline: 'Precision 2D/3D Blueprint Formulations',
    description: 'Developing legally compliant architectural and structural drawings in complete synchronization with absolute Vaastu Shastra principles for modern spaces.',
    features: [
      'Tailored Vaastu entry alignments and kitchen-bed configurations',
      'High-fidelity 3D exterior/interior layout renderings',
      'Detailed columns, shear-wall drawings, and beam steel charts',
      'Certified blueprints ready for municipal authorities approvals'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    badge: 'ARCHITECTURAL PLANS'
  },
  {
    id: 'serv-05',
    title: 'Advanced Waterproof Working Systems',
    category: 'consulting',
    tagline: '100% Leakproof Sealant Engineering',
    description: 'Defeating dampness, rain infiltration, and foundation rising damp using multi-layered polyurethane membranes, crystalline sealants, and custom injection systems.',
    features: [
      'Crystalline slurry application for concrete structural pores',
      'Flexible polymer-modified polyurethane base layers',
      'Sub-soil grade water collection & diversion lines',
      '10-Year absolute written zero-dampness service warranty'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    badge: 'WATERPROOFING'
  },
  {
    id: 'serv-06',
    title: 'Civil Engineering Solutions & Diagnostics',
    category: 'consulting',
    tagline: 'Expert Design Audits & Concrete Cubes Stress Lab',
    description: 'Professional engineering consultancies covering blueprint optimization, core stress testing, compressive strength testing, and custom soil load calculations.',
    features: [
      'Compressive concrete cube crushing tests under certified load',
      'Rigid seismic-grade shear structural modeling',
      'Computer-aided structural optimizing to reduce redundant steel',
      'Bespoke layout clearance certification paperwork'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800',
    badge: 'ENGINEERING SOLUTIONS'
  },
  {
    id: 'serv-07',
    title: 'Verified Land Site Buy & Sell Guidance',
    category: 'realestate',
    tagline: 'Legally Vetted Land Investment Portal',
    description: 'Connecting genuine property buyers directly with verified sellers in Davanagere. Zero-brokerage overhead, premium growth areas, and robust physical boundary markers.',
    features: [
      'Fully surveyed land measurements and GPS coordinate pinning',
      'Direct contact linkage bypasses unreliable market middlemen',
      'Highest appreciating neighborhoods in growing DVG limits',
      'Immediate handovers with solid physical boundary fencing setup'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    badge: 'SITE BUY & SELL'
  },
  {
    id: 'serv-08',
    title: 'Legal Plots Section, RERA & Registration',
    category: 'realestate',
    tagline: 'Title Legal clearance verification processes',
    description: 'Bulletproof screening of property archives, conversion certificates, encumbrance history, and local urban authority authorizations to guarantee zero-litigation plots.',
    features: [
      'Search index scrutiny on history deeds up to thirty preceding years',
      'Davanagere Urban Development Authority layout confirmations',
      'RERA compliancy validations and fast-track sub-registrar coordination',
      'Drafting of flawless client sale agreements and registration schedules'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    badge: 'LEGAL PLOTS SECTION'
  }
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolios', icon: <LayoutGrid className="h-4 w-4" /> },
    { id: 'construction', label: 'Core Construction', icon: <Building2 className="h-4 w-4" /> },
    { id: 'consulting', label: 'Civil Engg Consulting', icon: <HardHat className="h-4 w-4" /> },
    { id: 'realestate', label: 'Real Estate & Plots', icon: <BadgeCheck className="h-4 w-4" /> }
  ];

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-24 bg-slate-900 border-b border-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-[#FF7500] font-mono text-xs font-semibold mb-4">
            <Shield className="h-3.5 w-3.5" /> SCOPE & CAPABILITIES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Custom Services Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-teal-400">Extreme Precision</span>
          </h2>
          <p className="text-slate-450 text-sm max-w-2xl mx-auto text-slate-450">
            Aakruthi Constructions is a multi-discipline builder offering high-standard civil design and turn-key execution. Click any category to inspect our specialized structural and layout deliverables.
          </p>
        </div>

        {/* Filter Navigation Menu Buttons (Custom Segmented Control) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16" id="services-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-display font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-[#FF7500] to-teal-650 text-white shadow-lg shadow-orange-500/10 border border-orange-500/30'
                  : 'bg-slate-950/40 border border-slate-800 text-slate-450 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-container">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={service.id}
                className="flex flex-col h-full rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden hover:border-[#FF7500]/50 hover:shadow-2xl hover:shadow-[#FF7500]/5 transition-all group"
              >
                {/* Service Card Image Banner */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category overlay tags */}
                  {service.badge && (
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-[#FF7500] border border-orange-500/20 font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-md">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service card body details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="text-[#00A88F] font-mono text-[11px] font-semibold uppercase tracking-wider block">
                      {service.tagline}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet details bullet grid */}
                  <div className="pt-4 border-t border-slate-900/85">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2.5">
                      Technical Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inline micro action trigger */}
                  <div className="pt-4 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="font-display text-xs font-semibold text-[#FF7500] hover:text-white flex items-center gap-1 transition-colors"
                      onClick={() => {
                        const selectEl = document.getElementById('contact-form-select');
                        if (selectEl) {
                          (selectEl as HTMLSelectElement).value = service.category;
                        }
                      }}
                    >
                      Inquire on this scope &rarr;
                    </a>
                    
                    <span className="font-mono text-[9px] text-slate-500">ISO CERTIFIED</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic prompt badge */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-extrabold text-lg text-white mb-1 flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="h-4 w-4 text-orange-400" /> Custom Structural Engineering Request?
            </h4>
            <p className="text-slate-400 text-xs max-w-xl">
              Do you have a highly custom blueprint, complex load bearing villa layout, or premium elevation requirement? Contact our structural engineering diagnostics leads directly.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-[#FF7500] hover:bg-orange-600 text-white text-xs font-display font-bold uppercase tracking-wider transition-all"
          >
            Consult Chief Engineer
          </a>
        </div>

      </div>
    </section>
  );
}
