import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Sparkles, Check, Phone } from 'lucide-react';
import { BRAND, BOOKING_BENEFITS } from '../data/siteData';
import BookingFormSection from '../components/home/BookingFormSection';
import { PawIcon, WhatsAppIcon } from '../components/ui/Icons';

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const selectedPackage = searchParams.get('package') || '';
  const [openFaq, setOpenFaq] = useState(0);

  const bookingFaqs = [
    {
      q: "Care instructions",
      a: "Before we begin, please include all information and detailed instructions in the application. If you want to add or change any information, we require all corrections/updates to be emailed to info@scruffytofluffy.in or sent directly via WhatsApp to +91 9004116634. We are not responsible for misinterpreted verbal requests, or handwritten and chat notes lacking details. Please allow a 2-hour time frame for the walk to start (1-hour for crated puppies under 1 year old), and 4-hour time frame for cat visits to start."
    },
    {
      q: "Minimum walks per week",
      a: "We ask for a minimum of 4 walks per week or 16 walks per month. We offer 15-min walks between 10:30am–5pm, Mon–Fri (non-holiday), requested at least a week in advance. For cat visits we require daily visits."
    },
    {
      q: "Canceling or changing your appointment",
      a: "Any cancellations received after 8pm the day before will incur an $8 late cancellation fee. Same-day cancellations must be coordinated directly with our scheduling team."
    },
    {
      q: "Payments due",
      a: "All payments for recurring weekly walks or boarding are due on the 1st of each month. We accept cash, check, and credit card (there is a 4% processing fee for credit cards). For mobile van grooming, UPI and cash upon service completion are also accepted."
    }
  ];

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Clean, Non-Intrusive Breadcrumb / Title Bar Matching Original */}
      <div className="bg-white border-b border-gray-100 py-6 sm:py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#002842]/5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#002842] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#5fbd74]" />
            <span>Doorstep Mobile Van Pet Grooming</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#002842]">
            Book an Appointment
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto">
            Doorstep van grooming &amp; professional pet care across Mumbai &amp; Navi Mumbai.
          </p>

          {/* Quick Helpline Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 text-xs">
            <a
              href={`tel:${BRAND.phone1}`}
              className="inline-flex items-center gap-1.5 text-gray-700 bg-gray-50 hover:bg-gray-100 px-3.5 py-1.5 rounded-full border border-gray-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#002842]" />
              <span>Call: {BRAND.phoneFormatted1}</span>
            </a>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#128C7E] bg-[#25D366]/10 hover:bg-[#25D366]/20 px-3.5 py-1.5 rounded-full border border-[#25D366]/30 transition-colors font-bold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Booking Form Section */}
      <BookingFormSection defaultPackage={selectedPackage} />

      {/* Benefits Section with original photo */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            
            {/* 4 Benefits Pillars (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
                  Our Guarantee
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#002842] mt-1">
                  Benefits
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1">
                {BOOKING_BENEFITS.map((b, idx) => (
                  <div key={idx} className="bg-[#FBFBFB] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-2xl bg-[#002842] text-white flex items-center justify-center mb-3">
                        <PawIcon className="w-5 h-5" fill="currentColor" />
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#002842] mb-1">
                        {b.title}:
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Column with exact image from booking.html (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 max-w-sm sm:max-w-none mx-auto">
                <img
                  src="https://scruffytofluffy.in/wp-content/uploads/2022/08/pexels-rodnae-productions-7516422-copy-1024x765.jpg"
                  alt="Pet grooming in mobile van"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Booking FAQ Accordion Matching booking.html */}
          <div className="max-w-3xl mx-auto pt-6 sm:pt-8 border-t border-gray-200">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-center text-[#002842] mb-6 sm:mb-8">
              FAQ
            </h3>

            <div className="space-y-3">
              {bookingFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? 'border-[#002842] bg-[#002842]/5'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full min-h-[3rem] p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-semibold text-xs sm:text-sm md:text-base text-[#002842]">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#002842] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#002842]/10 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
