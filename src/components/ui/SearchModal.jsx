import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { SERVICE_PACKAGES, PRODUCTS_DATA } from '../../data/siteData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const allItems = [
    ...SERVICE_PACKAGES.map((p) => ({
      title: p.name,
      category: 'Grooming Package',
      price: p.price,
      image: p.image,
      link: `/pricing`,
      keywords: `${p.name} grooming bath haircut nail clean`
    })),
    ...Object.values(PRODUCTS_DATA).map((prod) => ({
      title: prod.title,
      category: prod.category,
      price: prod.price,
      image: prod.image,
      link: `/product/${prod.id}`,
      keywords: `${prod.title} ${prod.headline} ${prod.features.join(' ')}`
    }))
  ];

  const results = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 5);

  const handleSelect = (link) => {
    onClose();
    navigate(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input bar */}
        <div className="p-3.5 sm:p-5 border-b border-gray-100 flex items-center gap-2.5 sm:gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services (e.g. Grooming, Tick wash, Haircut)..."
            className="w-full text-sm sm:text-base md:text-lg focus:outline-none placeholder-gray-400 text-[#002842] font-medium"
          />
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 sm:max-h-96 overflow-y-auto p-2 sm:p-3 divide-y divide-gray-50">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.link)}
                className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-gray-50 active:bg-gray-100 flex items-center justify-between cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-gray-100 shrink-0"
                  />
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#002842] group-hover:text-[#5fbd74] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[0.6875rem] sm:text-[0.75rem] text-gray-500 font-medium">
                      {item.category} • <strong className="text-[#002842]">{item.price}</strong>
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#002842] group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-gray-400 text-xs sm:text-sm">
              No services found matching "{query}"
            </div>
          )}
        </div>

        {/* Bottom footer */}
        <div className="bg-gray-50 px-4 py-2 text-[0.6875rem] sm:text-xs text-gray-500 flex justify-between items-center">
          <span>Search Scruffy to Fluffy</span>
          <span>Tap to view</span>
        </div>
      </div>
    </div>
  );
}
