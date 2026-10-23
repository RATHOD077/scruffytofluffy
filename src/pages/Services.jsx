import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, Sparkles, Footprints, Home } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/siteData';

export default function Services() {
  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#002842] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
            Complete Pet Wellness
          </span>
          <h1 className="font-display font-bold text-fluid-h1 text-white mt-2 mb-3 sm:mb-4">
            Our Grooming &amp; Care Services
          </h1>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            From our signature mobile van grooming to dog walking and boarding, every service is delivered with kindness and expertise.
          </p>
        </div>
      </section>

      {/* Main 3 Packages Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
              Mobile Van Packages
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-[#002842] mt-1">
              Doorstep Grooming on Wheels
            </h2>
            <p className="text-fluid-body text-gray-600 mt-2">
              Select the perfect grooming package for your dog or cat. Our luxury van arrives right outside your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-md md:max-w-none mx-auto">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl ${
                  pkg.popular
                    ? 'border-[#002842] ring-2 ring-[#002842]'
                    : 'border-gray-150'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-[#002842] text-white text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#5fbd74]" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div className="relative aspect-square w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg border border-gray-100">
                    <span className="font-display font-bold text-lg sm:text-xl text-[#002842]">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-[0.6875rem] sm:text-xs text-gray-500 mb-5 sm:mb-6">
                      Estimated duration: 45 - 90 mins depending on pet size
                    </p>

                    <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 sm:gap-3">
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

                  <Link
                    to={`/book-an-appointment?package=${pkg.id}`}
                    className="btn-primary w-full text-center flex items-center justify-center gap-2 py-3"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {pkg.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Additional Care Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-display font-bold text-fluid-h2 text-[#002842]">
              Additional Pet Services
            </h2>
            <p className="text-fluid-body text-gray-600 mt-2">
              Beyond grooming, we offer day-to-day care to keep your pet healthy, stimulated, and joyful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Dog Walking */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#002842]/5 text-[#002842] flex items-center justify-center mb-4 sm:mb-6">
                  <Footprints className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-2">
                  Dog Walking
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Regular, energetic neighborhood walks in Dahisar, Mira Road, and surrounding suburbs. Includes GPS updates and water replenishment.
                </p>
                <ul className="text-[0.6875rem] sm:text-xs text-gray-700 space-y-1.5 sm:space-y-2 mb-6">
                  <li>• Minimum 4 walks per week</li>
                  <li>• 15-min to 45-min customized walk sessions</li>
                  <li>• Experienced, bonded animal handlers</li>
                </ul>
              </div>
              <Link to="/book-an-appointment" className="btn-secondary w-full text-center text-xs sm:text-sm py-2.5 sm:py-3">
                Inquire for Walking
              </Link>
            </div>

            {/* Boarding & Daycare */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#002842]/5 text-[#002842] flex items-center justify-center mb-4 sm:mb-6">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-2">
                  Boarding &amp; Daycare
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  A loving home-away-from-home stay for dogs and cats with 24/7 human supervision, feeding routines, playtime, and comfy beds.
                </p>
                <ul className="text-[0.6875rem] sm:text-xs text-gray-700 space-y-1.5 sm:space-y-2 mb-6">
                  <li>• 1-Day FREE trial for new clients</li>
                  <li>• Sanitized, temperature-controlled play areas</li>
                  <li>• Video updates sent to parents daily</li>
                </ul>
              </div>
              <Link to="/book-an-appointment" className="btn-secondary w-full text-center text-xs sm:text-sm py-2.5 sm:py-3">
                Reserve Daycare
              </Link>
            </div>

            {/* Behavior Training */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1 max-w-md md:max-w-none mx-auto w-full">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#002842]/5 text-[#002842] flex items-center justify-center mb-4 sm:mb-6">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-2">
                  Pet Behavior Training
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Positive-reinforcement training programs for puppies and adult dogs. Basic obedience, leash walking, potty training, and anxiety reduction.
                </p>
                <ul className="text-[0.6875rem] sm:text-xs text-gray-700 space-y-1.5 sm:space-y-2 mb-6">
                  <li>• 1,200+ pets successfully trained</li>
                  <li>• Custom home-visit training sessions</li>
                  <li>• Gentle reward-based techniques</li>
                </ul>
              </div>
              <Link to="/book-an-appointment" className="btn-secondary w-full text-center text-xs sm:text-sm py-2.5 sm:py-3">
                Book Consultation
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
