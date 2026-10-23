import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SocialProofBanner from '../components/home/SocialProofBanner';
import AboutSection from '../components/home/AboutSection';
import ServicesIcons from '../components/home/ServicesIcons';
import ValuesSection from '../components/home/ValuesSection';
import ServiceCards from '../components/home/ServiceCards';
import BookingFormSection from '../components/home/BookingFormSection';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import LocationSection from '../components/home/LocationSection';
import InstagramBeforeAfterCarousel from '../components/home/InstagramBeforeAfterCarousel';

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Social Proof & Stats */}
      <SocialProofBanner />

      {/* 3. About & Mini Carousel */}
      <AboutSection />

      {/* 4. We are best in (6 icons) */}
      <ServicesIcons />

      {/* 5. Values / Why rely on us */}
      <ValuesSection />

      {/* 6. Pricing Service Packages */}
      <ServiceCards />

      {/* 7. Book Appointment Form */}
      <BookingFormSection />

      {/* 8. Clients say Testimonials Slider */}
      <TestimonialsSlider />

      {/* 9. Locations, Van photo & FAQs */}
      <LocationSection />

      {/* 10. Follow scruffy_to_fluffy Before & After Transformation Carousel */}
      <InstagramBeforeAfterCarousel />
    </main>
  );
}
