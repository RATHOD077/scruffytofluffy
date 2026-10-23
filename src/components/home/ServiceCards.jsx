import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, Sparkles, Heart } from 'lucide-react';
import { SERVICE_PACKAGES } from '../../data/siteData';
import { useWishlist } from '../../context/WishlistContext';

export default function ServiceCards() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 anim-fade-in-up">
          <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
            Affordable &amp; Comprehensive
          </span>
          <h2 className="font-display font-bold text-fluid-h2 text-[#002842] mt-1">
            Our Grooming Packages
          </h2>
          <p className="text-fluid-body text-gray-600 mt-2">
            All services are carried out in our fully equipped, sanitized mobile van right outside your residence.
          </p>
        </div>

        {/* Packages Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-md md:max-w-none mx-auto">
          {SERVICE_PACKAGES.map((pkg) => {
            const saved = isInWishlist(pkg.id);
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 ${
                  pkg.popular
                    ? 'border-[#002842] ring-2 ring-[#002842] relative'
                    : 'border-gray-150'
                }`}
              >
                {/* Popular Tag */}
                {pkg.popular && (
                  <div className="bg-[#002842] text-white text-[0.6875rem] sm:text-xs font-bold uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#5fbd74]" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Package Badge Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Floating Price Pill */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg border border-gray-100">
                    <span className="font-display font-bold text-lg sm:text-xl text-[#002842]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    onClick={() => toggleWishlist(pkg)}
                    className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                      saved 
                        ? 'bg-rose-500 text-white' 
                        : 'bg-white/90 text-gray-600 hover:text-rose-500 hover:bg-white'
                    }`}
                    aria-label="Save to wishlist"
                    title={saved ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${saved ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* Package Body */}
                <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-[0.75rem] sm:text-xs text-gray-500 mb-5 sm:mb-6">
                      Doorstep van service throughout Mumbai • {pkg.duration}
                    </p>

                    {/* Features List */}
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

                  {/* CTA Buttons */}
                  <div>
                    <Link
                      to={`/book-an-appointment?package=${pkg.id}`}
                      className={`btn-primary w-full text-center flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'bg-[#002842] hover:bg-black text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-[#002842] text-[#002842] hover:text-white border-0'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-500 px-4">
          <span>Need specialized cat grooming, dog training, or boarding? </span>
          <Link to="/contact" className="text-[#002842] font-semibold underline underline-offset-4 hover:text-[#5fbd74] inline-block mt-1 sm:mt-0">
            Contact our care team for customized plans.
          </Link>
        </div>

      </div>
    </section>
  );
}
