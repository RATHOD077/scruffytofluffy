import React from 'react';
import { PawIcon } from '../ui/Icons';
import { Users, Truck, HeartHandshake, ShieldCheck } from 'lucide-react';
import { VALUES } from '../../data/siteData';

export default function ValuesSection() {
  const getIcon = (type) => {
    switch (type) {
      case 'paw':
        return <PawIcon className="w-8 h-8" fill="currentColor" />;
      case 'users':
        return <Users className="w-8 h-8" />;
      case 'truck':
        return <Truck className="w-8 h-8" />;
      default:
        return <PawIcon className="w-8 h-8" fill="currentColor" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
            Core Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#002842] mt-1">
            Why rely on us?
          </h2>
          <p className="text-gray-600 text-base mt-3">
            Every pet is treated like family. Here are the values that make Scruffy to Fluffy Mumbai's most trusted pet grooming service.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((val, index) => (
            <div
              key={index}
              className="bg-[#FBFBFB] rounded-3xl p-8 border border-gray-100 hover:border-[#002842]/20 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="w-18 h-18 rounded-full bg-[#002842] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-[#5fbd74] transition-all duration-300">
                {getIcon(val.icon)}
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002842] mb-3">
                {val.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
