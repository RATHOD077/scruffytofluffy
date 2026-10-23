import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { BRAND } from '../../data/siteData';

export default function InstagramBeforeAfterCarousel() {
  const slides = [
    {
      id: 3,
      url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/3.jpg",
      title: "Chow Chow Fluffy Transformation",
      pet: "Chow Chow"
    },
    {
      id: 2,
      url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/2.jpg",
      title: "Shih Tzu Scruffy to Fluffy Haircut",
      pet: "Shih Tzu"
    },
    {
      id: 1,
      url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/1.jpg",
      title: "Persian Cat Medicated Grooming",
      pet: "Persian Cat"
    },
    {
      id: 4,
      url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/4.jpg",
      title: "Poodle Teddy Bear Styling",
      pet: "Poodle / Bichon"
    },
    {
      id: 5,
      url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/5.jpg",
      title: "Golden Retriever Full De-shedding",
      pet: "Golden Retriever"
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Instagram Header with pink badge matching original */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 text-center sm:text-left">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 sm:gap-3.5 hover:opacity-90 transition-all"
          >
            {/* Pink Instagram rounded box */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#E1306C] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>

            <div>
              <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#002842] group-hover:text-[#E1306C] transition-colors flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                <span>Follow scruffy_to_fluffy</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
              </span>
              <p className="text-[0.6875rem] sm:text-xs text-gray-500 font-medium">
                Real Before &amp; After Doorstep Grooming Results on Wheels
              </p>
            </div>
          </a>

          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E1306C] bg-pink-50 hover:bg-pink-100 px-4 py-2 rounded-full transition-colors border border-pink-200"
          >
            <span>@scruffytofluffy5</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Carousel Container with warm golden background */}
        <div className="relative group/carousel rounded-2xl sm:rounded-3xl overflow-hidden p-1.5 sm:p-3 bg-[#FFF9C4]/70 border-2 border-[#FDD835]/50 shadow-sm">
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={1.08}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.before-after-prev',
              nextEl: '.before-after-next'
            }}
            pagination={{
              el: '.before-after-pagination',
              clickable: true
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 12
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 14
              }
            }}
            className="rounded-xl sm:rounded-2xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/slide bg-black/5"
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-auto object-cover transform group-hover/slide:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <div className="text-white text-[0.6875rem] sm:text-xs font-semibold flex items-center justify-between w-full">
                      <span className="flex items-center gap-1.5 truncate">
                        <Sparkles className="w-3.5 h-3.5 text-[#FDD835] shrink-0" />
                        <span className="truncate">{slide.title}</span>
                      </span>
                      <span className="bg-[#E1306C] text-white text-[0.5625rem] sm:text-[0.625rem] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ml-2">
                        View ↗
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows with touch-friendly size */}
          <button
            className="before-after-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#002842] hover:bg-[#002842] hover:text-white flex items-center justify-center shadow-lg border border-gray-100 transition-all duration-200 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          <button
            className="before-after-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#002842] hover:bg-[#002842] hover:text-white flex items-center justify-center shadow-lg border border-gray-100 transition-all duration-200 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

        </div>

        {/* Centered Dot Pagination */}
        <div className="before-after-pagination flex items-center justify-center gap-1.5 sm:gap-2 pt-4 sm:pt-6"></div>

      </div>
    </section>
  );
}
