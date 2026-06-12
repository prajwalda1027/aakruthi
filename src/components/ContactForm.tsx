import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Send, Calendar, Clock, MapPin, Mail, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'construction',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceDisplayNames: Record<string, string> = {
      construction: 'Core Construction (Villa/House/Flats)',
      renovation: 'Old-to-New Structural Renovation',
      interior: 'High-End Architectural Interior Design',
      realestate: 'Verified Real Estate Opportunities'
    };

    const selectedServiceLabel = serviceDisplayNames[formData.service] || formData.service;

    // Construct highly professional, structured message for the WhatsApp Business agent
    const waText = `*New Business Inquiry (Aakruthi Constructions)*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Selected Service:* ${selectedServiceLabel}\n\n` +
      `*Specific Inquiries / Message:* \n"${formData.message}"\n\n` +
      `_Sent via Aakruthi Constructions Web Official Portal_`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/919738802213?text=${encodedText}`;

    // Graceful trigger transition
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Premium Contact details + Office Hours + Interactive map (Takes 5 cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-[#FF7500] font-mono text-xs font-semibold mb-4">
                <Sparkles className="h-3.5 w-3.5" /> INSTANT CONNECT
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Together</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Get a completely customized material ledger quote or layout document clearance instantly. Submit the form to link directly with our executive engineering team on WhatsApp.
              </p>
            </div>

            {/* Structured Contact Details cards list */}
            <div className="space-y-4" id="address-block">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex-shrink-0 p-3 h-12 w-12 rounded-lg bg-orange-500/10 text-orange-505 flex items-center justify-center text-orange-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Davanagere Head Office</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    2724/1, 1st Floor, Near Ayyappa Swamy Temple, BIET Road, Davanagere - 577004, Karnataka, India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex-shrink-0 p-3 h-12 w-12 rounded-lg bg-[#00A88F]/10 text-[#00A88F] flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Direct Hotlines & Helpline</h4>
                  <div className="space-y-1 mt-1">
                    <p className="text-slate-200 text-xs font-bold font-mono">
                      +91 97388 02213
                    </p>
                    <p className="text-slate-200 text-xs font-bold font-mono">
                      +91 95384 40414
                    </p>
                    <p className="text-slate-200 text-xs font-bold font-mono">
                      +91 91640 66809
                    </p>
                  </div>
                  <p className="text-slate-500 text-[10px] mt-1">Instant response within 10 minutes</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex-shrink-0 p-3 h-12 w-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Email Mailroom</h4>
                  <p className="text-slate-200 text-xs mt-1 font-bold font-mono">
                    <a href="mailto:aakruthiconstruction01@gmail.com" className="hover:text-orange-400 transition-colors">
                      aakruthiconstruction01@gmail.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-[10px] mt-0.5">Submit custom RFQ attachments to mail box</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex-shrink-0 p-3 h-12 w-12 rounded-lg bg-[#00A88F]/10 text-[#00A88F] flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Official Working Hours</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Monday &mdash; Saturday: 9:00 AM to 7:30 PM <br />
                    Sunday: Prior Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connection Footer Panel */}
            <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20">
              <Logo className="mb-3" iconOnly={true} />
              <h4 className="font-display font-bold text-white text-sm">ISO Certified Davanagere Sourcing</h4>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Licensed civil contractors in Davanagere. Delivering top structural reinforcement projects, premium home plans, crystalline waterproofing treatment, and direct vetted plots.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form Body Card (Takes 7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden" id="contact-form-card">
            
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-b from-[#FF7500]/5 to-transparent rounded-full filter blur-xl"></div>

            <h3 className="font-display text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-orange-500" /> Professional Design & Pricing Request
            </h3>
            <p className="text-slate-400 text-xs mb-8">
              Complete the layout ledger request below. Your message formatting ensures priority dispatch directly onto our WhatsApp agent.
            </p>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              
              {/* Name Field Input row */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="contact-form-name" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Full Customer Name <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact-form-name"
                  name="name"
                  required
                  placeholder="e.g. Basavaraj Patil"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20 focus:outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Grid: Phone Number and Services selector dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone Field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-form-phone" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    WhatsApp Phone Number <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-form-phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20 focus:outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Service Dropdown Selector */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-form-select" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Select Needed Service <span className="text-orange-400">*</span>
                  </label>
                  <select
                    id="contact-form-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20 focus:outline-none transition-all"
                  >
                    <option value="construction">Construction (Villas/Commercial/Renovation)</option>
                    <option value="consulting">Civil Consulting (Architectural Plans/Waterproofing)</option>
                    <option value="realestate">Real Estate (Plot Buy & Sell/Legal section)</option>
                  </select>
                </div>

              </div>

              {/* Message details box text area */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="contact-form-message" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Detailed Message Specific Inquiries <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="contact-form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Provide details about plot size, expected floors, construction location, or heritage structural repair requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-medium focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20 focus:outline-none transition-all placeholder:text-slate-600 resize-y"
                ></textarea>
              </div>

              {/* Submit trigger with automated feedback routing to external client */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF7500] to-orange-500 hover:from-orange-400 hover:to-[#FF7500] text-white font-display font-extrabold py-4 px-6 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>Formatting Ledger Dispatch...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Redirect to Official WhatsApp (+91 97388 02213)
                  </>
                )}
              </button>

            </form>

            {/* Verification label caption for the sender */}
            <div className="mt-6 text-center text-[10px] text-slate-500 font-mono tracking-wide">
              🔒 Direct business query system. Absolute data privacy is guaranteed.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
