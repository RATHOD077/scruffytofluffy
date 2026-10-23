import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BRAND } from '../../data/siteData';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-2 sm:gap-3 pointer-events-auto">
      {/* Tooltip speech bubble - desktop & tablet */}
      {showTooltip && (
        <div className="hidden md:flex items-center bg-white text-[#2E3031] text-[0.75rem] sm:text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-gray-100 relative max-w-xs anim-bounce-in">
          <span>Need quick pet care help? We're on WhatsApp!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -right-1.5 bottom-3.5 w-3 h-3 bg-white transform rotate-45 border-r border-t border-gray-100" />
        </div>
      )}

      {/* Official WhatsApp Action Button */}
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ring-4 ring-white/70 focus:outline-none"
        aria-label="Chat on WhatsApp with Scruffy to Fluffy"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
}
