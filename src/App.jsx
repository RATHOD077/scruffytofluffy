import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { WishlistProvider } from './context/WishlistContext';

// Primary Home page imported directly for instantaneous first paint
import Home from './pages/Home';

// Lazy-loaded routes for optimal performance and mobile chunking
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const Contact = lazy(() => import('./pages/Contact'));
const Locations = lazy(() => import('./pages/Locations'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

// Smooth fallback spinner during lazy chunk transition
function PageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 py-16">
      <div className="w-10 h-10 border-4 border-[#002842]/20 border-t-[#002842] rounded-full animate-spin" />
      <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Loading page…</span>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FBFBFB] text-[#2E3031]">
          <Header />
          
          <div className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* About routes */}
                <Route path="/about" element={<About />} />
                <Route path="/about/" element={<About />} />

                {/* Services routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/" element={<Services />} />
                <Route path="/product-category/services" element={<Services />} />
                <Route path="/product-category/services/" element={<Services />} />

                {/* Product routes (daycare, walking, grooming, boarding, training, etc.) */}
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/product/:id/" element={<ProductDetail />} />

                {/* Pricing routes */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing/" element={<Pricing />} />

                {/* Book Appointment routes */}
                <Route path="/book-an-appointment" element={<BookAppointment />} />
                <Route path="/book-an-appointment/" element={<BookAppointment />} />

                {/* Wishlist route */}
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/wishlist/" element={<Wishlist />} />

                {/* Contact routes */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/contacts/" element={<Contact />} />

                {/* Locations routes */}
                <Route path="/locations" element={<Locations />} />
                <Route path="/locations/" element={<Locations />} />

                {/* Legal routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />

                {/* WooCommerce fallback routes */}
                <Route path="/cart" element={<BookAppointment />} />
                <Route path="/checkout" element={<BookAppointment />} />
                <Route path="/my-account" element={<Contact />} />

                {/* Fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </WishlistProvider>
  );
}
