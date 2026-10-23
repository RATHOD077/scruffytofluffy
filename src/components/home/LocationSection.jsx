import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Clock, HelpCircle, Truck } from 'lucide-react';
import { BRAND, FAQS, HERO_ASSETS } from '../../data/siteData';

export default function LocationSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 anim-fade-in-up">
          <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
            Coverage &amp; Questions
          </span>
          <h2 className="font-display font-bold text-fluid-h2 text-[#002842] mt-1">
            Locations &amp; FAQs
          </h2>
          <p className="text-fluid-body text-gray-600 mt-2">
            Everything you need to know about our mobile service routes and daily care operations.
          </p>
        </div>

        {/* 3 Columns Layout on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Col 1: Location & Service Areas (4 cols) */}
          <div className="lg:col-span-4 bg-[#FBFBFB] rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-100 shadow-sm space-y-5 sm:space-y-6">
            
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#002842] text-white flex items-center justify-center mb-3 sm:mb-4">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842] mb-1">
                Van Grooming on Wheels:
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                Throughout <strong>Mumbai &amp; Navi Mumbai</strong> (Doorstep arrival at your apartment or bungalow)
              </p>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-gray-200">
              <h4 className="font-display font-bold text-sm sm:text-base text-[#002842] mb-1.5 flex items-center gap-1.5">
                <span>Our 🐕‍🦺 walkers and sitters:</span>
              </h4>
              <p className="text-[0.6875rem] sm:text-xs text-gray-600 leading-relaxed">
                {BRAND.walkingAreas}
              </p>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-gray-200 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-gray-700">
                <Phone className="w-4 h-4 text-[#5fbd74] shrink-0" />
                <span>Helpline: {BRAND.phoneFormatted1} / {BRAND.phone2}</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-gray-700">
                <Mail className="w-4 h-4 text-[#5fbd74] shrink-0" />
                <span className="truncate">Email: {BRAND.email}</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-gray-700">
                <Clock className="w-4 h-4 text-[#5fbd74] shrink-0" />
                <span>Mon – Sun: 8:30 AM – 8:00 PM</span>
              </div>
            </div>

          </div>

          {/* Col 2: Van & Team Photo (3 cols) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 group max-w-xs sm:max-w-sm w-full">
              <img
                src={HERO_ASSETS.vanPhoto}
                alt="Scruffy to Fluffy Grooming Van and Team"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                <span className="text-[0.625rem] sm:text-[0.6875rem] font-semibold text-[#5fbd74] uppercase tracking-wider">
                  Mobile Salon Unit
                </span>
                <p className="font-display font-bold text-xs sm:text-sm text-white">
                  Fully Equipped &amp; Air-Conditioned
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: FAQ Accordion (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842] mb-3 sm:mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#5fbd74]" />
              <span>Frequently Asked Questions</span>
            </h3>

            {FAQS.slice(0, 4).map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#002842] bg-[#002842]/5' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full min-h-[3rem] p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                  >
                    <span className="font-semibold text-xs sm:text-sm md:text-base text-[#002842] leading-snug">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#002842] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#002842]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
