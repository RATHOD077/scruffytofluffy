import React from 'react';
import { Star } from 'lucide-react';
import { BRAND } from '../../data/siteData';

export default function SocialProofBanner() {
  return (
    <div className="bg-[#002842] text-white py-5 sm:py-6 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar with Google rating & core message */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left mb-5 sm:mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-xl sm:text-2xl shrink-0">🚐</span>
            <span className="font-display font-medium text-base sm:text-lg md:text-xl text-white tracking-wide">
              {BRAND.bannerText}
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white/10 px-3.5 py-1.5 sm:py-2 rounded-full border border-white/15 shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold">{BRAND.googleRating} Google Reviews</span>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/10">
          {BRAND.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left flex flex-col items-center md:items-start p-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#5fbd74] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[0.6875rem] sm:text-xs md:text-sm text-gray-300 font-medium mt-1 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
