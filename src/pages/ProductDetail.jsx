import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, Calendar, Heart, Shield, ArrowLeft, Truck } from 'lucide-react';
import { PRODUCTS_DATA, CENTER_FEATURES } from '../data/siteData';
import { useWishlist } from '../context/WishlistContext';
import BookingFormSection from '../components/home/BookingFormSection';
import { WhatsAppIcon } from '../components/ui/Icons';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS_DATA[id] || PRODUCTS_DATA['grooming'];
  const { toggleWishlist, isInWishlist } = useWishlist();
  const saved = isInWishlist(product.id);

  const whatsappMessage = `Hi Scruffy to Fluffy! I would like to book or inquire about *${product.title}* (${product.price}).`;
  const whatsappUrl = `https://wa.me/919004116634?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-[#FBFBFB] min-h-screen py-6 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-4 sm:mb-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#002842] transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Product Main Showcase */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-100 shadow-sm mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left: Product Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square bg-gray-50 border border-gray-100 shadow-md max-w-sm sm:max-w-none mx-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Heart / Wishlist button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
                    saved 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-white/95 text-gray-700 hover:text-rose-500'
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${saved ? 'fill-white' : ''}`} />
                </button>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow text-[0.6875rem] sm:text-xs font-bold text-[#002842]">
                  Doorstep Van Arrival Available
                </div>
              </div>
            </div>

            {/* Right: Info & Pricing */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold text-[#5fbd74] tracking-widest">
                  {product.category}
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#002842] mt-1">
                  {product.title}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#002842]">{product.rating}</span>
                  <span className="text-[0.6875rem] sm:text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 pb-3 sm:pb-4 border-b border-gray-100">
                <span className="font-display font-bold text-3xl sm:text-4xl text-[#002842]">
                  {product.price}
                </span>
                <span className="text-xs text-gray-500">per session / pet</span>
              </div>

              {/* Headline */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                {product.headline}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-1">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#002842] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#book-form"
                  className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm sm:text-base py-3"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Service</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-full font-semibold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base text-center"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[0.6875rem] sm:text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#5fbd74]" /> Mumbai &amp; Navi Mumbai
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#5fbd74]" /> 100% Sanitized Equipment
                </span>
              </div>

            </div>

          </div>

          {/* Description Block */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842] mb-2 sm:mb-3">
              About This Service
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl">
              {product.fullDescription}
            </p>
          </div>
        </div>

        {/* Center & Van Standards */}
        <div className="bg-[#002842] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
              Quality Assurance
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mt-1">
              Our State-of-the-Art Standards
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
              Every grooming van and daycare hub operates under strict veterinary and sanitation protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {CENTER_FEATURES.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-start gap-2.5 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#5fbd74]/20 flex items-center justify-center text-[#5fbd74] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instant Booking Section */}
        <div id="book-form">
          <BookingFormSection defaultPackage={product.id} />
        </div>

      </div>
    </div>
  );
}
