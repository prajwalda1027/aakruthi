import React from 'react';
import { Youtube, Instagram, Facebook, Mail, Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main upper footer bento section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900/80">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="inline-block">
              <Logo />
            </a>
            <p className="text-xs leading-relaxed text-slate-400">
              Aakruthi Constructions is Davanagere&apos;s leading premium construction provider. ISO quality audits, 100% legally clear plot titles, rigid seismic-grade structural steel calculations, and flawless interior architecture.
            </p>
            {/* Social icons list */}
            <div className="flex items-center gap-4 pt-2" id="footer-socials">
              <a 
                href="https://www.youtube.com/@Aakruthiconstructions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500/30 text-slate-300 hover:text-[#FF0000] flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/aakruthiconstructions.dvg/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/30 text-slate-300 hover:text-[#E1306C] flex items-center justify-center transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.facebook.com/AakruthiConstructions001/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/30 text-slate-300 hover:text-[#1877F2] flex items-center justify-center transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Business Directory
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">About our Firm</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#construction" className="hover:text-orange-400 transition-colors">Construction Works</a>
              </li>
              <li>
                <a href="#realestate" className="hover:text-orange-400 transition-colors">Verified Land Sales</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">FAQs & Legals</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Premium Construction Standard tags (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              SEO Google Verified Specifications
            </h4>
            <div className="flex flex-wrap gap-2" id="footer-spec-tags">
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">ISO-9001:2015 QC</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">Premium Villa Design DVG</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">Modern Facade Elevations</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">Litigation-Free Properties</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">Aesthetic Home Renovation</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">Teakwood Architectural Carpentry</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">M25 Grade Strength slump tests</span>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-900 border border-slate-800">State-level Land Registry</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Disclaimer: Property detail folders, blueprints, architectural layouts, and technical specifications must be confirmed against actual state land registrar databases prior to booking completions.
            </p>
          </div>

        </div>

        {/* Lower footer row and trademark */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} Aakruthi Constructions. All Rights Reserved. Built premium &amp; legally clear.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
            >
              Back to Top <ArrowUp className="h-3.5 w-3.5 animate-bounce" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
