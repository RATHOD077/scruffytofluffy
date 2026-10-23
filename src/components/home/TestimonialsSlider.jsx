import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Calendar, ArrowRight } from 'lucide-react';
import { BRAND, TESTIMONIALS } from '../../data/siteData';
import { SplashIcon, GoogleGIcon } from '../ui/Icons';

export default function TestimonialsSlider() {
  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Bounce Splash */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 anim-fade-in-up">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#002842]">
                Clients say:
              </h2>
              <div className="anim-bounce-in anim-delay-100">
                <SplashIcon className="w-8 h-8 -mt-4 text-[#002842]" />
              </div>
            </div>
            <p className="text-gray-600 text-base mt-2">
              Real reviews from real pet parents across Mumbai and Navi Mumbai.
            </p>
          </div>

          {/* Google rating badge */}
          <a
            href={BRAND.googleRatingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover-grow transition-all"
          >
            <GoogleGIcon className="w-6 h-6" />
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700">
                {BRAND.googleRating} Google reviews
              </span>
            </div>
          </a>
        </div>

        {/* Testimonials Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <div>
                    {/* Stars & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-[#002842] bg-[#002842]/5 px-2.5 py-1 rounded-full">
                        {t.tag}
                      </span>
                    </div>

                    {/* Quote text */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-[#002842]/10 absolute -top-3 -left-2" />
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic relative z-10 pl-2">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Reviewer info */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#002842] text-white flex items-center justify-center font-display font-bold text-sm">
                      {t.petName[0]}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-[#002842]">
                        {t.petName}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {t.ownerName}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Banner bottom */}
        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="btn-primary inline-flex items-center gap-2 hover-grow"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
