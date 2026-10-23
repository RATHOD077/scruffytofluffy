import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, Bug, Home, Heart, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { SERVICES_ICONS } from '../../data/siteData';
import { SplashIcon } from '../ui/Icons';

export default function ServicesIcons() {
  const getIcon = (id) => {
    switch (id) {
      case 'daycare':
        return <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />;
      case 'walking':
        return <Scissors className="w-8 h-8 sm:w-10 sm:h-10" />;
      case 'grooming':
        return <Bug className="w-8 h-8 sm:w-10 sm:h-10" />;
      case 'boarding':
        return <Home className="w-8 h-8 sm:w-10 sm:h-10" />;
      case 'comforting':
        return <Heart className="w-8 h-8 sm:w-10 sm:h-10" />;
      case 'medi-wash':
        return <ShieldAlert className="w-8 h-8 sm:w-10 sm:h-10" />;
      default:
        return <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-[#FBFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Bounce Splash */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 anim-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <h2 className="font-display font-bold text-fluid-h2 text-[#002842]">
              We are best in:
            </h2>
            <div className="anim-bounce-in anim-delay-100">
              <SplashIcon className="w-6 h-6 sm:w-8 sm:h-8 -mt-2 sm:-mt-4 text-[#002842]" />
            </div>
          </div>
          <p className="text-fluid-body text-gray-600 mt-2">
            Tailored pet wellness and grooming specialties performed right inside our state-of-the-art mobile van.
          </p>
        </div>

        {/* 6 Icons Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5 md:gap-6">
          {SERVICES_ICONS.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover-grow transition-all duration-300 flex flex-col items-center justify-between"
            >
              {/* Icon Container with responsive sizes */}
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-[#002842]/5 group-hover:bg-[#002842] text-[#002842] group-hover:text-white flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                {getIcon(item.id)}
              </div>

              {/* Title & Desc */}
              <div className="space-y-1 w-full">
                <h3 className="font-display font-bold text-base sm:text-lg text-[#002842] group-hover:text-[#5fbd74] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[0.6875rem] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Mini Arrow */}
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-50 w-full flex justify-center text-gray-400 group-hover:text-[#002842]">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
