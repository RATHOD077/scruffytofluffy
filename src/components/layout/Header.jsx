import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Heart, Search } from 'lucide-react';
import { BRAND } from '../../data/siteData';
import { useWishlist } from '../../context/WishlistContext';
import SearchModal from '../ui/SearchModal';
import { WhatsAppIcon } from '../ui/Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll cleanly when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FBFBFB] shadow-sm py-1.5 sm:py-2 border-b border-gray-100' 
          : 'bg-[#FBFBFB] py-2 sm:py-3'
      }`}>
        {/* Top announcement micro bar - visible on md+ */}
        <div className="bg-[#002842] text-white text-[0.75rem] sm:text-[0.8125rem] py-1.5 px-3 sm:px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="font-medium tracking-wide truncate pr-2">
              🚐 Doorstep Mobile Van Pet Grooming throughout Mumbai &amp; Navi Mumbai | 8+ Years of Pet Care
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <a 
                href={`tel:${BRAND.phone1}`} 
                className="flex items-center gap-1.5 hover:text-[#5fbd74] transition-colors py-0.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BRAND.phoneFormatted1}</span>
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href={`tel:${BRAND.phone2}`} 
                className="hover:text-[#5fbd74] transition-colors py-0.5"
              >
                {BRAND.phoneFormatted2}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="Scruffy to Fluffy Home">
              <img 
                src={BRAND.logo} 
                alt={BRAND.name} 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#002842] tracking-tight leading-none">
                  Scruffy to Fluffy
                </span>
                <span className="text-[0.625rem] sm:text-[0.6875rem] font-medium text-gray-500 uppercase tracking-widest mt-0.5 sm:mt-1">
                  Pet Grooming on Wheels
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-[0.9375rem] xl:text-base transition-colors duration-200 relative py-1 ${
                    isActive(link.path)
                      ? 'text-[#002842] font-semibold'
                      : 'text-[#2E3031] hover:text-[#002842]'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#002842] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions: Search, Wishlist, Book Now */}
            <div className="hidden lg:flex items-center gap-2 md:gap-3">
              
              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#002842] transition-colors focus:outline-none"
                aria-label="Search services"
                title="Search services"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#002842] transition-colors relative focus:outline-none"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-[#5fbd74] text-white rounded-full text-[0.6875rem] font-bold flex items-center justify-center shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Book Now Pill */}
              <Link
                to="/book-an-appointment"
                className="btn-primary text-xs md:text-sm py-2 sm:py-2.5 px-4 md:px-5 tracking-wide flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile & Tablet Actions Header (Search, Wishlist, 3 Lines Menu Burger) */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 active:bg-gray-100 hover:bg-gray-100 focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/wishlist"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 active:bg-gray-100 hover:bg-gray-100 relative focus:outline-none"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#5fbd74] text-white rounded-full text-[0.625rem] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* 3 Lines Toggle Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[#002842] active:bg-gray-100 hover:bg-gray-100 focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 
        ========================================================================
        MOBILE DRAWER (RENDERED OUTSIDE HEADER SO IT NEVER GETS CONFINED 
        BY HEADER STACKING CONTEXT OR BACKDROP BLUR WHEN SCROLLED DOWN)
        ========================================================================
      */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          
          {/* Backdrop click area */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />

          {/* Drawer Panel */}
          <div className="w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between p-5 overflow-y-auto animate-in slide-in-from-right duration-250">
            
            {/* Drawer Top Header (Logo + Close X) */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img src={BRAND.logo} alt="" className="h-9 w-auto" />
                  <span className="font-display font-bold text-lg text-[#002842]">
                    Scruffy to Fluffy
                  </span>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 active:bg-gray-200 flex items-center justify-center focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl font-display font-semibold text-base transition-colors flex items-center justify-between ${
                      isActive(link.path)
                        ? 'bg-[#002842] text-white shadow-md'
                        : 'text-[#002842] hover:bg-gray-100 active:bg-gray-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive(link.path) && <span className="w-2 h-2 rounded-full bg-[#5fbd74]" />}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/book-an-appointment"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center flex items-center justify-center gap-2 py-3 text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>

              {/* Call & WhatsApp Quick Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`tel:${BRAND.phone1}`}
                  className="py-2.5 px-3 rounded-xl bg-gray-100 active:bg-gray-200 text-[#002842] text-xs font-bold flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#002842]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 active:bg-[#25D366]/25 text-[#128C7E] text-xs font-bold flex items-center justify-center gap-1.5 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-[0.6875rem] text-gray-500 pt-1">
                🚐 Doorstep Mobile Van Service Mumbai
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
