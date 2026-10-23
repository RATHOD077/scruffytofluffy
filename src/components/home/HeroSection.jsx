import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Sparkles } from 'lucide-react';
import { BRAND, HERO_ASSETS } from '../../data/siteData';

export default function HeroSection() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 bg-gradient-to-b from-[#FBFBFB] via-white to-[#FBFBFB]">
      
      {/* Background subtle decoration */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#002842]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#5fbd74]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left anim-fade-in-up">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#002842]/5 border border-[#002842]/10 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.75rem] sm:text-xs md:text-sm font-semibold text-[#002842] anim-bounce-in max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5fbd74] shrink-0" />
              <span className="truncate">Doorstep Mobile Van Pet Grooming in Mumbai</span>
            </div>

            {/* Fluid H1 Headline using clamp with rem */}
            <h1 className="font-display font-bold text-fluid-h1 text-[#002842] tracking-tight">
              Your pet, <br />
              <span className="text-[#002842] relative inline-block">
                our priority
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 250 14" fill="none">
                  <path d="M2 10C50 3 150 3 248 10" stroke="#5fbd74" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Tagline using fluid text */}
            <p className="text-fluid-body text-[#2E3031] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional Pet Grooming Services on Wheels Throughout <strong className="text-[#002842]">Mumbai &amp; Navi Mumbai</strong>. From basic baths to full stylish transformations, we bring the salon to your door.
            </p>

            {/* CTA Buttons - Full width on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/pricing"
                className="btn-primary w-full sm:w-auto text-sm sm:text-base hover-grow text-center"
              >
                <span>Make a Booking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={scrollToServices}
                className="btn-secondary w-full sm:w-auto text-sm sm:text-base hover-grow text-center"
              >
                <span>Learn more</span>
              </button>
            </div>

            {/* Trust bullet highlights */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 border-t border-gray-200/80 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm font-medium text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5fbd74] shrink-0" />
                <span>Zero Travel Stress</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm font-medium text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5fbd74] shrink-0" />
                <span>1-on-1 Gentle Care</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm font-medium text-gray-700 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5fbd74] shrink-0" />
                <span>Sanitized Mobile Van</span>
              </div>
            </div>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-sm border border-gray-100 anim-fade-in-up anim-delay-300">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#002842]">
                {BRAND.googleRating} Google Rating
              </span>
              <span className="text-[0.6875rem] sm:text-xs text-gray-500">• 5,000+ Happy Pets</span>
            </div>

          </div>

          {/* Right Visual Column - Responsive width & mobile scaling */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
            
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Background SVG oval blob with zoomInUp */}
              <img 
                src={HERO_ASSETS.ovalBg}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-90 anim-zoom-in-up"
              />

              {/* Main dog photo with fadeInRight + delay 100ms */}
              <img 
                src={HERO_ASSETS.dogPhoto}
                alt="Fluffy happy groomed dog"
                className="relative z-10 w-[82%] max-w-[340px] object-contain drop-shadow-2xl anim-fade-in-right anim-delay-100 transition-transform duration-500 hover:scale-105"
              />

              {/* Cute illustration 1 - floating */}
              <img 
                src={HERO_ASSETS.illustration1}
                alt=""
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 sm:w-22 md:w-26 z-20 anim-fade-in-right anim-float"
              />

              {/* Cute illustration 2 - bouncing in from right */}
              <img 
                src={HERO_ASSETS.illustration2}
                alt=""
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-16 sm:w-22 md:w-26 z-20 anim-bounce-in-right anim-delay-400"
              />

              {/* Floating badge */}
              <div className="absolute bottom-2 left-1 sm:bottom-4 sm:left-2 z-20 bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 sm:gap-3 anim-bounce-in anim-delay-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#002842] text-white flex items-center justify-center font-display font-bold text-xs sm:text-sm">
                  8+
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[0.6875rem] sm:text-xs text-[#002842]">Years Expertise</div>
                  <div className="text-[0.5625rem] sm:text-[0.625rem] text-gray-500">Mumbai &amp; Navi Mumbai</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
