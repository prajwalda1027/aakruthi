import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { ReviewItem } from '../types';

const reviewsCollection: ReviewItem[] = [
  {
    id: 'rev-01',
    name: 'Basavaraj S. Patil',
    location: 'MCC B Block, Davanagere',
    rating: 5,
    serviceType: 'Luxury Villa Construction',
    comment: 'Exceptional civil engineering work by Aakruthi Constructions! They constructed our 4BHK duplex luxury villa on time. The material audit was incredibly transparent; they literally tested concrete cubes in front of us. Highly recommended for premium homes.',
    date: 'March 2026'
  },
  {
    id: 'rev-02',
    name: 'Meenakshi & Ravishankar',
    location: 'Nittuvalli, Davanagere',
    rating: 5,
    serviceType: 'Old-to-New Renovation',
    comment: 'Our ancestral home was suffering from heavy dampness and weak structural pillars. Aakruthi Constructions did epoxy grout injection inside columns and modernized the facade. The change is spectacular and our building is strong for another 40 years!',
    date: 'January 2026'
  },
  {
    id: 'rev-03',
    name: 'Guruprasad Hegde (Hegde Traders)',
    location: 'Mandipet Main Rd, Davanagere',
    rating: 5,
    serviceType: 'Commercial Construction',
    comment: 'We hired Aakruthi to erect a multi-floor showroom property in a busy area. Their engineering solutions, double-glazed glass facades, and robust column layouts are top-class. Direct verified client agreement made transactions entirely stress-free.',
    date: 'December 2025'
  },
  {
    id: 'rev-04',
    name: 'Dr. Sharath Chandra',
    location: 'Vidya Nagar, Davanagere',
    rating: 5,
    serviceType: 'Premium Interior Design',
    comment: 'Impeccable execution of modular profile kitchen structures and false ceilings. Their design looks clean, rich, and highly modern. Aakruthi is definitely the best architectural construction partner in Davanagere!',
    date: 'October 2025'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      
      {/* Self-contained high performance marquee CSS styles */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-[#FF7500] font-mono text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" /> REPUTATION & TRUST
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7500] to-teal-400">Verified Clients</span>
          </h2>
          <p className="text-slate-400 text-sm">
            We let our completed structural works and happy client handshakes in Davanagere speak for us. Hover anywhere to inspect client experiences.
          </p>
        </div>

        {/* Continuous Right-to-Left Scrolling Reviews Area */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0" id="reviews-marquee-container">
          
          {/* Side gradient blur masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee-slow flex gap-6">
            {/* 3x repeat ensures gapless looping viewport width wrapper */}
            {[...reviewsCollection, ...reviewsCollection, ...reviewsCollection].map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`}
                className="w-[280px] sm:w-[330px] p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900/70 transition-all flex-shrink-0 flex flex-col justify-between duration-300 group relative"
              >
                
                {/* Micro quote mark indicator decoration */}
                <div className="absolute top-4 right-4 text-slate-800/20 pointer-events-none">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="space-y-4">
                  {/* Star rating output row */}
                  <div className="flex gap-0.5 text-[#FF7500]">
                    {[...Array(review.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="h-3.5 w-3.5 fill-[#FF7500] text-[#FF7500]" />
                    ))}
                  </div>

                  {/* Comment context body text with custom smaller scale layout font */}
                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed italic line-clamp-5 group-hover:line-clamp-none transition-all">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2">
                  <div>
                    <h4 className="font-display font-bold text-white text-xs sm:text-sm">
                      {review.name}
                    </h4>
                    <p className="text-slate-500 text-[10px] mt-0.5 font-mono">
                      {review.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded-sm bg-orange-500/10 text-orange-400 border border-orange-500/15">
                      {review.serviceType}
                    </span>
                    <span className="text-slate-500">{review.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Trust Platform Grid Banner */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center" id="reviews-meta-badges">
          
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850">
            <span className="block font-display text-3xl font-extrabold text-teal-400">5.0</span>
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mt-1.5 block">
              Google Verified Rating
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">120+ Perfect Five-Star Reviews</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850">
            <span className="block font-display text-3xl font-extrabold text-teal-400">100%</span>
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mt-1.5 block">
              On-Time Blueprinting
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Milestone schedules strictly hit</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850">
            <span className="block font-display text-3xl font-extrabold text-teal-400">4.9</span>
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mt-1.5 block">
              Facebook Rating Score
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Active community engagement</span>
          </div>

        </div>

      </div>
    </section>
  );
}
