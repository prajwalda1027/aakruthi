import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle, FileQuestion, GraduationCap } from 'lucide-react';
import { FAQItem } from '../types';

const faqCollection: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'How does Aakruthi Constructions ensure 100% legal clearance for properties?',
    answer: 'We have a dedicated in-house legal advisory panel that executes a strict 30-year Mother Deed title search, municipal khata verification (Form 9/11), and procures Non-Encumbrance certificates (EC). No ancestral disputes or partial clearings find their way onto our platform. Every document is made copyable and inspectable for the buyer prior to any payments.',
    category: 'legal'
  },
  {
    id: 'faq-02',
    question: 'What premium material specifications do you use for your Luxury Villas?',
    answer: 'We use premium high-strength Fe-550 Grade TMT corrosion-resistant steel bars, certified ultra-durable Grade 53 Portland Cements, premium Italian marble/double-charged vitrified flooring, premium copper multi-strand flame retardant wires, and solid Teakwood framing. Full laboratory concrete cube Slump tests are also conducted with M25 mix designs to guarantee load integrity.',
    category: 'engineering'
  },
  {
    id: 'faq-03',
    question: 'How does your "Old to New" house modernization work?',
    answer: 'We begin with a thorough architectural design and layout planning. Instead of costly demo-and-rebuild, we preserve key structural elements while updating your exterior aesthetic with high-performance glass facades or composite louver installations. Inside, we execute custom space re-planning, elegant fall ceiling designs, premium modular kitchen fittings, and top-tier luxurious flooring upgrades.',
    category: 'renovation'
  },
  {
    id: 'faq-04',
    question: 'Is every architectural layout layout designed according to classical Vaastu Shastra?',
    answer: 'Yes. 100% of our residential home plans, apartment models, and commercial building blueprints are created in strict compliance with classic Vaastu principles. We integrate detailed elements for perfect entry alignment, master bed placement, kitchen layout zones, and ventilation breeze directions.',
    category: 'general'
  },
  {
    id: 'faq-05',
    question: 'Can I obtain a bank mortgage for buying land or booking a villa from online catalogs?',
    answer: 'Absolutely. Because all our titles and municipal plan drafts are pre-cleared, major leading financial providers (including State Bank of India, Axis Bank, HDFC, and ICICI Bank) offer rapid door-step building loans for our pre-vetted plots and villa bookings.',
    category: 'legal'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 border-y border-slate-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 font-mono text-xs font-semibold mb-4">
            <FileQuestion className="h-3.5 w-3.5" /> REPUTATION & TRANSPARENCY
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#caa05a]">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about our legal, material engineering, architectural renovation, and layout compliance principles.
          </p>
        </div>

        {/* FAQ Accordion Elements */}
        <div className="space-y-4" id="faq-accordions">
          {faqCollection.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-[#caa05a]/45 shadow-xl shadow-[#caa05a]/5'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-705'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-yellow-400 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`h-7 w-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-yellow-400 border-yellow-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Animated Drawer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-900 bg-slate-950/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra contact box footer */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-slate-400 text-xs mb-4">
            Still have queries relating to specific structural designs or plot layouts in Davanagere?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#caa05a] hover:text-[#00E5FF] text-sm font-semibold font-display transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Ask Our Chief Engineer on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
