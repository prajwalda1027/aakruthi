import React from 'react';
import { ShieldCheck, FileText, CheckCircle, GraduationCap, MapPin, Landmark, Hammer, Sparkles, UserCheck } from 'lucide-react';

export default function RealEstate() {
  const securityStagedFlow = [
    {
      stage: "01",
      title: "Exhaustive 30-Year Title Search",
      desc: "Our legal panel executes a full 30-year historical title search, verifying absolute root of title deeds. Zero ancestral ambiguity or hidden claims allowed."
    },
    {
      stage: "02",
      title: "Verified Handover Clearance (EC)",
      desc: "Instant sourcing of non-encumbrance certificates (EC), validating that the property is completely free from mortgages, tax liabilities, or liens."
    },
    {
      stage: "03",
      title: "DGPS Layout Bounds Survey",
      desc: "We physically survey plot coordinates with modern high-accuracy DGPS, matching government survey maps to prevent layout encroachment issues."
    },
    {
      stage: "04",
      title: "Direct Verified Client Handshake",
      desc: "Absolute exclusion of suspicious brokers or middlemen. We perform mutual KYC on all sellers and buyers, ensuring zero-risk legal transactions."
    }
  ];

  const listedPlots = [
    {
      title: "Sri Siddaveerappa Elite Layout",
      location: "Vidya Nagar Extension, Davanagere",
      type: "Premium Residential Plots (RERA Approved)",
      size: "30x40 & 40x60 Sites Available",
      highlights: ["9m Asphalt Roads", "Underground Drainage (UGD)", "Ready for Dual-Floored Villa Construction"],
      price: "100% Legally Clear",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Aakruthi Landmark Arcade",
      location: "PB Road (Near Old Sub-Registrar), Davanagere",
      type: "Commercial Office Blocks",
      size: "1,200 - 4,500 Sq.Ft Flexi Floors",
      highlights: ["High Road Frontage Space", "Automatic Under-ground Car Parking", "Fire Safety & Lift Pre-installation"],
      price: "Immediate Document Handover",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="realestate" className="py-24 bg-slate-950 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <UserCheck className="h-3.5 w-3.5" /> LITIGATION-FREE SECURED ASSETS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Direct & Vetted <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[#caa05a]">Real Estate Verification</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Purchasing real estate should never involve stress or legal concerns. We provide 100% verified lands and buildings directly from clean owners, backed by certified legal clearances.
          </p>
        </div>

        {/* Core Pillars: Document Verification & Middlemen-Free guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Detailed text describing their transparency policies */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Securing Davanagere&apos;s Most Reliable Land Assets
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              At Aakruthi Constructions, we represent real estate with absolute, unyielding transparency. Unlike standard agents who prioritize commissions over safety, our in-house civil engineering design and legal advisory panels vet every plot beforehand:
            </p>

            {/* Checklist of core legal documentation protocols */}
            <div className="space-y-3.5" id="realestate-checklists">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">KHATA / Form 9 & 11 Clearances</h4>
                  <p className="text-slate-400 text-xs">Assured gram-panchayat or municipal corporation tax registration paperwork.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Pre-Approved Axis & SBI Bank Mortgages</h4>
                  <p className="text-slate-400 text-xs">Our assets are pre-cleared by major nationalized banks for fast building loan processing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Middleman-Free KYC Validation</h4>
                  <p className="text-slate-400 text-xs">We vet both parties' credentials to construct a safe direct-handshake agreement.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-850/50 flex gap-4 items-center">
              <FileText className="h-10 w-10 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="font-display font-bold text-sm text-white">Genuine Vetted Document Folder Sourcing</p>
                <p className="text-slate-400 text-xs mt-0.5">We share full copy files of Title, Mother Deeds, and Betterment Fees prior to advance payments.</p>
              </div>
            </div>
          </div>

          {/* Right: The 4-Stage Transaction Roadmap */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" /> Our Securing Flow Timeline
            </h3>

            <div className="space-y-6 relative border-l border-slate-800 ml-4 pl-6" id="realestate-roadmap-steps">
              {securityStagedFlow.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step number badge circle */}
                  <span className="absolute -left-[37px] top-0 h-7 w-7 rounded-full bg-slate-950 border border-[#caa05a] text-xs font-mono font-bold text-[#caa05a] flex items-center justify-center shadow-md">
                    {step.stage}
                  </span>
                  <h4 className="font-display font-bold text-base text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Showcasing verified luxury premium options directly */}
        <div className="mt-16 pt-16 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Featured Off-Market Secured Properties</h3>
            <p className="text-slate-400 text-xs">
              Every listing below represents Aakruthi Constructions&apos; direct verification, compliance audit, and physical layout clearance.
            </p>
          </div>

          {/* Legal Compliance Notice / Safe-Side Info */}
          <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-orange-950/25 border border-orange-500/20 text-slate-300 text-xs leading-relaxed flex items-start gap-3">
            <span className="h-5 w-5 bg-orange-500/10 text-orange-400 rounded-full flex items-center justify-center font-bold font-mono text-[10px] shrink-0">i</span>
            <div>
              <span className="font-display font-semibold text-orange-400 block mb-1">REAL-TIME LISTING &amp; INVENTORY DISCLAIMER</span>
              Physical land listings, commercial layouts, and pricing fluctuate dynamically. The assets featured here serve as prime technical case-studies representing Aakruthi&apos;s legal due-diligence standard. Please contact our desk for current live inventory, off-market lot availability, or private land registry checks in Davanagere.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="featured-listings">
            {listedPlots.map((plot, i) => (
              <div key={i} className="flex flex-col rounded-3xl bg-slate-900 border border-slate-850 overflow-hidden hover:border-[#caa05a]/40 transition-all group">
                <div className="relative aspect-video">
                  <img
                    src={plot.image}
                    alt={plot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-[#caa05a] text-black font-display text-xs font-bold py-1 px-3 rounded-full">
                    {plot.price}
                  </span>
                  
                  {/* Safe side availability stamp */}
                  <span className="absolute top-4 left-4 bg-slate-950/90 border border-white/15 backdrop-blur-sm text-slate-300 font-mono text-[10px] font-semibold py-1 px-2 rounded-md">
                    REPRESENTATIVE CASE STUDY
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 font-semibold mb-1 uppercase">
                      <MapPin className="h-3.5 w-3.5" /> {plot.location}
                    </span>
                    <h4 className="font-display font-extrabold text-lg text-white group-hover:text-yellow-400 transition-colors">
                      {plot.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1 font-medium">{plot.type} - {plot.size}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-950">
                    <ul className="grid grid-cols-1 gap-1.5">
                      {plot.highlights.map((high, k) => (
                        <li key={k} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="h-3.5 w-3.5 text-yellow-500" /> {high}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-yellow-400 hover:text-white"
                      onClick={() => {
                        const contactSelect = document.getElementById('contact-form-select');
                        const contactMessage = document.getElementById('contact-form-message');
                        if (contactSelect) {
                          (contactSelect as HTMLSelectElement).value = 'realestate';
                        }
                        if (contactMessage) {
                          (contactMessage as HTMLTextAreaElement).value = `HI Aakruthi, I am interested in exploring listing: ${plot.title} in ${plot.location}`;
                        }
                      }}
                    >
                      Inquire on Documents &rarr;
                    </a>
                    
                    <span className="font-mono text-[9px] text-[#00E5FF] font-semibold uppercase">SECURE REGISTRY</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
