import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Check, Calendar } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function Locations() {
  const mumbaiAreas = [
    { zone: "Western Suburbs", areas: "Dahisar, Borivali, Kandivali, Malad, Goregaon, Jogeshwari, Andheri, Vile Parle, Santacruz, Khar, Bandra" },
    { zone: "Mira-Bhayandar", areas: "Mira Road East, Siddhi Vinayak Nagar, Mahajan Wadi, Bhayandar East & West" },
    { zone: "Central Suburbs", areas: "Powai, Ghatkopar, Vikhroli, Bhandup, Mulund, Kurla" },
    { zone: "Thane & Beyond", areas: "Thane West, Ghodbunder Road, Majiwada, Vartak Nagar" },
    { zone: "Navi Mumbai", areas: "Vashi, Sanpada, Nerul, Seawoods, Belapur, Kharghar" },
    { zone: "South & Central Mumbai", areas: "Dadar, Worli, Lower Parel, Prabhadevi, Colaba" }
  ];

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#002842] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
            Doorstep Reach
          </span>
          <h1 className="font-display font-bold text-fluid-h1 text-white mt-2 mb-3 sm:mb-4">
            Locations &amp; Service Areas
          </h1>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            {BRAND.bannerText}. Bringing sanitized mobile pet grooming vans directly to your doorstep.
          </p>
        </div>
      </section>

      {/* Main Zones Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-display font-bold text-fluid-h2 text-[#002842]">
              Areas Covered by Grooming on Wheels
            </h2>
            <p className="text-fluid-body text-gray-600 mt-2">
              Our vans are dispatched daily across Mumbai and Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mumbaiAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBFB] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-[#002842]/20 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#002842] text-white flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#5fbd74]" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842] mb-2">
                    {item.zone}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.areas}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                  <span className="text-[#5fbd74] font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4" /> Van Service Active
                  </span>
                  <Link to="/book-an-appointment" className="text-[#002842] font-semibold hover:underline">
                    Book Slot →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dog walking specific area */}
          <div className="mt-12 sm:mt-16 bg-[#002842] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2">
              <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
                Daily Walking Hub
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">
                Dog Walkers &amp; Pet Sitters Primary Zone
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
                Dedicated daily dog walking services active in: {BRAND.walkingAreas}.
              </p>
            </div>
            <Link to="/book-an-appointment" className="btn-primary bg-[#5fbd74] hover:bg-[#4fa062] text-[#002842] hover:text-white shrink-0 w-full sm:w-auto">
              <Calendar className="w-4 h-4" />
              <span>Inquire for Walking</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
