import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, Calendar, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-[#FBFBFB] min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-rose-500" />
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#002842]">
            My Saved Services
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
            Review your shortlisted pet care and grooming packages before booking.
          </p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-md sm:max-w-none mx-auto">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 mb-3 sm:mb-4">
                    <img
                      src={item.image}
                      alt={item.name || item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-gray-500 hover:text-rose-500 flex items-center justify-center transition-colors shadow"
                      title="Remove from wishlist"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842] mb-1">
                    {item.name || item.title}
                  </h3>
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#5fbd74] block mb-3 sm:mb-4">
                    {item.price}
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center gap-3">
                  <Link
                    to={`/book-an-appointment?package=${item.id}`}
                    className="btn-primary w-full text-xs sm:text-sm py-2.5 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Slot</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto border border-gray-200 shadow-sm space-y-4">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 mx-auto" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842]">
              Your Wishlist is Empty
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Explore our mobile van packages, daycare, and grooming services to save your favorites!
            </p>
            <div className="pt-2">
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                <span>Browse Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
