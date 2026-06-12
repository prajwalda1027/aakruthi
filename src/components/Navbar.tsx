import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Youtube, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Construction', href: '#construction' },
    { name: 'Real Estate', href: '#realestate' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/85 backdrop-blur-md py-3 border-b border-slate-900 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Component */}
            <a href="#home" className="flex items-center">
              <Logo />
            </a>

            {/* Desktop Navigation Links (Centered UI) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-[14px] font-medium text-slate-300 hover:text-orange-400 tracking-wide transition-colors relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
                </a>
              ))}
            </nav>

            {/* Social Icons & Contact CTA (Right Aligned) */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3.5 border-r border-slate-800 pr-5" id="nav-socials">
                <a 
                  href="https://www.youtube.com/@Aakruthiconstructions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#FF0000] transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/aakruthiconstructions.dvg/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.facebook.com/AakruthiConstructions001/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>

              {/* Instant Call CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7500] to-orange-500 hover:from-orange-400 hover:to-[#FF7500] text-white font-display font-extrabold text-xs px-5 py-2.5 rounded-lg tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/15 cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5" /> Book Consultation
              </a>
            </div>

            {/* Mobile Burger Trigger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+919738802213"
                className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/15"
                aria-label="Call Business"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-down Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[65px] z-40 lg:hidden bg-slate-950 border-b border-slate-900 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-8 space-y-3 max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-display text-base font-semibold text-slate-300 hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-900 space-y-4">
                <div className="flex items-center justify-around py-2 bg-slate-900/50 rounded-xl px-4 border border-slate-900">
                  <span className="text-xs text-slate-400 font-mono">Follow us</span>
                  <div className="flex gap-4">
                    <a href="https://www.youtube.com/@Aakruthiconstructions" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#FF0000]">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/aakruthiconstructions.dvg/?hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#E1306C]">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/AakruthiConstructions001/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#1877F2]">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF7500] to-orange-500 text-white font-display font-extrabold py-3 px-5 rounded-xl uppercase tracking-wider text-sm shadow-md cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" /> Consult on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
