/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Renovation from './components/Renovation';
import RealEstate from './components/RealEstate';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-yellow-400 selection:text-slate-950 overflow-x-hidden">
      {/* Premium Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Banner Section with heavy background and dynamic state indicators */}
        <Hero />

        {/* Company Narrative, Certification Badges and Core Values */}
        <AboutUs />

        {/* Dynamic portfolio tabs and service metrics */}
        <Services />

        {/* Real Dynamic Before/After slider showcase */}
        <Renovation />

        {/* Genuine Vetted Document & Real Estate Roadmap Portal */}
        <RealEstate />

        {/* Client Testimonials slider and Review badges */}
        <Reviews />

        {/* ISO Compliant FAQ Lists */}
        <FAQ />

        {/* Smart WhatsApp Form redirect interface */}
        <ContactForm />
      </main>

      {/* Structured Legal Directory and SEO index footer */}
      <Footer />
    </div>
  );
}

