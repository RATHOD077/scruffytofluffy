import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND, HERO_ASSETS, ABOUT_CAROUSEL_IMAGES } from '../../data/siteData';
import { SplashIcon } from '../ui/Icons';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Woman holding fluffy dog cutout + Organic Oval shape + Splash + Rotating "Our promise to you..." Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Decorative Splash icon (top left) */}
              <div className="absolute -top-3 left-0 sm:-top-6 sm:-left-4 z-10 text-[#5fbd74] anim-bounce-in anim-delay-100">
                <SplashIcon className="w-10 h-10 sm:w-14 sm:h-14 opacity-80" />
              </div>

              {/* Exact background oval blob shape from live site */}
              <img 
                src={HERO_ASSETS.ovalBg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-contain opacity-90 anim-zoom-in-up"
              />
              
              {/* Main Cutout Image: Woman holding & hugging happy fluffy brown dog */}
              <img 
                src={HERO_ASSETS.aboutPet} 
                alt="Happy pet parent holding and cuddling fluffy groomed dog" 
                className="relative z-10 w-[92%] sm:w-[95%] h-auto max-h-[95%] object-contain drop-shadow-2xl anim-fade-in-up transition-transform duration-500 hover:scale-105"
              />

              {/* Exact Circular Animated Badge: Rotating "Our promise to you…" + RubberBand Dog Icon */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-0 z-20 flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36">
                
                {/* Rotating SVG text circle */}
                <svg className="w-full h-full anim-spin-slow" viewBox="0 0 140 140">
                  <path
                    id="circlePath"
                    d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text className="text-[12px] font-bold uppercase tracking-[0.25em] fill-[#002842]">
                    <textPath href="#circlePath" startOffset="0%">
                      Our promise to you… Our promise to you…
                    </textPath>
                  </text>
                </svg>

                {/* Inner white circle with rubberBand dog icon */}
                <div className="absolute w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center p-2 sm:p-3 anim-rubber-band-loop">
                  <img
                    src="https://scruffytofluffy.in/wp-content/uploads/2022/06/dog.svg"
                    alt="Dog promise mascot icon"
                    className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                  />
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Content & Mini Swiper */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 anim-fade-in-up mt-4 lg:mt-0">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#5fbd74]">
              <span>About Scruffy to Fluffy</span>
            </div>

            <h2 className="font-display font-bold text-fluid-h2 text-[#002842] leading-tight">
              Happy pets, <br />happy humans
            </h2>

            <p className="text-fluid-body text-[#2E3031] leading-relaxed">
              Your beloved pet deserves the best care. At <strong>Scruffy to Fluffy</strong>, we don't just groom—we transform. With over <strong>8+ years of expertise</strong>, 5,000+ dog grooming sessions, 1,000+ cat grooming sessions, and 1,200+ trained pets, we understand every pet's unique temperament.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Certified &amp; animal-loving groomers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Premium organic &amp; hypoallergenic shampoos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Temperature controlled grooming vans</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>No cages, no wait times, 1-on-1 focus</span>
              </div>
            </div>

            {/* Mini Carousel of recent grooming results */}
            <div className="pt-2 sm:pt-4">
              <p className="text-[0.6875rem] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                Recent Grooming Transformations:
              </p>
              
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={12}
                slidesPerView={2.2}
                breakpoints={{
                  320: { slidesPerView: 1.8, spaceBetween: 10 },
                  480: { slidesPerView: 2.3, spaceBetween: 12 },
                  640: { slidesPerView: 2.8, spaceBetween: 14 },
                  1024: { slidesPerView: 3.2, spaceBetween: 16 }
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="rounded-2xl pb-4 sm:pb-6"
              >
                {ABOUT_CAROUSEL_IMAGES.map((imgUrl, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-2xl overflow-hidden aspect-square border border-gray-100 shadow-sm bg-gray-50 group hover-grow">
                      <img 
                        src={imgUrl} 
                        alt={`Grooming result ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#002842] font-semibold text-xs sm:text-sm hover:text-[#5fbd74] transition-colors hover-grow"
              >
                <span>Read our full story and mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
