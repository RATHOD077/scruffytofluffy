import React from 'react';
import { Check, Calendar, Sparkles, HelpCircle, Phone } from 'lucide-react';
import { SERVICE_PACKAGES, BRAND } from '../data/siteData';
import BookingFormSection from '../components/home/BookingFormSection';

export default function Pricing() {
  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#002842] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
            Simple &amp; Transparent
          </span>
          <h1 className="font-display font-bold text-fluid-h1 text-white mt-2 mb-3 sm:mb-4">
            Pricing &amp; Booking
          </h1>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            Honest rates with zero hidden charges. Doorstep van grooming arrives right at your home across Mumbai &amp; Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Package Comparison Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16 max-w-md md:max-w-none mx-auto">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl sm:rounded-3xl bg-[#FBFBFB] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#002842] ring-2 ring-[#002842] shadow-xl relative'
                    : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#002842] text-white text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-[#5fbd74]" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
                    <span className="font-display font-bold text-3xl sm:text-4xl text-[#002842]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">/ session</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-5 sm:mb-6 pb-4 border-b border-gray-200 leading-relaxed">
                    Includes sanitized mobile van arrival &amp; dedicated 1-on-1 pet care professional.
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#book"
                  className={`btn-primary w-full text-center flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-[#002842] hover:bg-black text-white shadow-lg'
                      : 'bg-white hover:bg-[#002842] text-[#002842] hover:text-white border border-gray-200'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Select &amp; Book</span>
                </a>
              </div>
            ))}
          </div>

          {/* Pricing FAQ notice */}
          <div className="bg-[#002842]/5 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#002842]/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#002842] text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#002842]">
                  Have a Giant Breed, Persian Cat, or Special Coat?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Custom quotes available for heavy matted de-matting or special veterinary medicated washes.
                </p>
              </div>
            </div>
            <a
              href={`tel:${BRAND.phone1}`}
              className="btn-secondary w-full sm:w-auto text-xs sm:text-sm shrink-0 whitespace-nowrap py-2.5 sm:py-3"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>
      </section>

      {/* Booking Form Integration */}
      <BookingFormSection />

    </div>
  );
}
