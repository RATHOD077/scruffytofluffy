import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Calendar, Heart } from 'lucide-react';
import { BRAND } from '../../data/siteData';
import { InstagramIcon, YouTubeIcon } from '../ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002842] text-white pt-12 sm:pt-16 pb-8 border-t border-gray-800">
      
      {/* Pre-footer CTA banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <span className="text-[#5fbd74] font-semibold text-xs sm:text-sm uppercase tracking-widest">
              Doorstep Pet Care
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1">
              Are you ready to get started?
            </h3>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm md:text-base max-w-xl">
              Professional grooming on wheels, training, and walking across Mumbai &amp; Navi Mumbai. Book your pet's appointment today!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              to="/book-an-appointment"
              className="btn-primary bg-[#5fbd74] hover:bg-[#4ea862] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 w-full sm:w-auto text-center justify-center shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
            <a
              href={`tel:${BRAND.phone1}`}
              className="btn-secondary bg-transparent hover:bg-white/10 text-white border-white/60 hover:border-white py-3 sm:py-3 px-5 sm:px-6 w-full sm:w-auto text-center justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-3.5 sm:space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3">
              <img 
                src={BRAND.logo} 
                alt={BRAND.name} 
                className="h-11 sm:h-14 w-auto object-contain bg-white rounded-full p-1" 
              />
              <span className="font-display font-bold text-xl sm:text-2xl text-white">
                Scruffy to Fluffy
              </span>
            </Link>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {BRAND.bannerText}. Transforming pets with love, patience, and 8+ years of dedicated professional care.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5fbd74] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={BRAND.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EA4335] text-white flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">
                  Basic Grooming (₹1,499)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">
                  Deluxe Grooming (₹2,199)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">
                  Medicated Ticks Treatment (₹2,499)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors py-0.5 inline-block">
                  Grooming on Wheels (Van Service)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors py-0.5 inline-block">
                  Dog Walking &amp; Pet Sitting
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors py-0.5 inline-block">
                  Pet Boarding &amp; Daycare
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors py-0.5 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors py-0.5 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">Pricing &amp; Packages</Link>
              </li>
              <li>
                <Link to="/book-an-appointment" className="hover:text-white transition-colors py-0.5 inline-block">Book an Appointment</Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors py-0.5 inline-block">Locations &amp; Service Areas</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors py-0.5 inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5fbd74] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5fbd74] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BRAND.phone1}`} className="hover:text-white transition-colors">
                    {BRAND.phoneFormatted1}
                  </a>
                  <a href={`tel:${BRAND.phone2}`} className="hover:text-white transition-colors text-xs">
                    {BRAND.phoneFormatted2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5fbd74] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors truncate">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <p className="flex items-center justify-center gap-1">
            © 2026 Scruffy to Fluffy. All Rights Reserved. Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" /> for pets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-gray-300 hover:text-[#002842] flex items-center justify-center transition-all duration-200"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
