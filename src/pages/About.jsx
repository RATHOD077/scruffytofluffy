import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Heart, Shield, Users, Truck, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { BRAND, SIX_VALUES, HERO_ASSETS, CENTER_FEATURES } from '../data/siteData';
import { PawIcon } from '../components/ui/Icons';

export default function About() {
  const getValueIcon = (iconName) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      case 'truck':
        return <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      case 'shield':
        return <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      case 'check':
        return <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      case 'users':
        return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fbd74]" />;
      default:
        return <PawIcon className="w-6 h-6 sm:w-7 sm:h-7" fill="#5fbd74" />;
    }
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#002842] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
            Our Story &amp; Dedication
          </span>
          <h1 className="font-display font-bold text-fluid-h1 text-white mt-2 mb-3 sm:mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            Doorstep mobile van pet grooming and specialized training throughout Mumbai &amp; Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 max-w-sm sm:max-w-none mx-auto">
                <img
                  src="https://scruffytofluffy.in/wp-content/uploads/2022/07/iStock-1308557657-1024x765.jpg"
                  alt="Pet groomer bonding with dog"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative pill badge */}
              <div className="absolute -bottom-6 -left-2 sm:left-4 bg-[#002842] text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-white/10">
                <p className="font-display text-xs font-semibold italic text-[#5fbd74]">
                  "We’re very proud to be pet-first and we will always put pet comfort before profit."
                </p>
                <p className="text-[0.6875rem] text-gray-300 mt-2 font-medium">
                  ▼・ᴥ・▼ Scruffy to Fluffy
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-[#002842] leading-tight">
                From Scruffy to Fluffy — with love &amp; patience
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                <strong>Scruffy to Fluffy</strong> was founded on a simple belief: every pet deserves to look and feel their best. What started as a passion project by pet-loving professionals has grown into one of Mumbai and Navi Mumbai’s most trusted pet grooming and training centers.
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                With over <strong>8 years in the industry</strong> and thousands of happy customers, we’ve built a reputation for excellence, care, and dedication. Our journey is marked by countless happy pets who have walked through our doors as <em>'scruffy'</em> and left <em>'fluffy'</em>!
              </p>

              <div className="pt-1 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Certified groomers with specialized animal behavioral training
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    100% cruelty-free, organic, and medicated shampoos
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Punctual doorstep mobile van service across all Mumbai pin codes
                  </span>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Link to="/book-an-appointment" className="btn-primary w-full sm:w-auto">
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 bg-[#002842] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
              Our Impact
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-white mt-1">
              8+ Years of Proven Care
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#5fbd74]">5,000+</span>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1 sm:mt-2">Dogs Groomed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#5fbd74]">1,000+</span>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1 sm:mt-2">Cats Groomed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#5fbd74]">1,200+</span>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1 sm:mt-2">Dogs Trained</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#5fbd74]">1,000+</span>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1 sm:mt-2">Happy Pet Parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why rely on us? (All 6 Core Value Pillars) */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
              Our Core Values
            </span>
            <h2 className="font-display font-bold text-fluid-h2 text-[#002842] mt-1">
              Why rely on us?
            </h2>
            <p className="text-fluid-body text-gray-600 mt-2">
              The 6 founding pillars that guide our pet handling across Mumbai &amp; Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SIX_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#002842]/5 flex items-center justify-center mb-4 sm:mb-6">
                    {getValueIcon(val.icon)}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842] mb-2 sm:mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-of-the-Art Grooming Center & Van Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
                Our Fleet &amp; Facilities
              </span>
              <h2 className="font-display font-bold text-fluid-h2 text-[#002842] leading-tight">
                Our State-of-the-Art Grooming Center &amp; Mobile Fleet
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                Whether inside our specialized grooming center or directly at your building compound in our luxury mobile van, we maintain the highest veterinary sanitation standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                {CENTER_FEATURES.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 sm:gap-3 bg-[#FBFBFB] p-3.5 sm:p-4 rounded-2xl border border-gray-100">
                    <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <Link to="/pricing" className="btn-primary w-full sm:w-auto">
                  <span>View Packages &amp; Pricing</span>
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 max-w-sm sm:max-w-none mx-auto">
                <img
                  src={HERO_ASSETS.centerPhoto}
                  alt="State of the art grooming facility"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
