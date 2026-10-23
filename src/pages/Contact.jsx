import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Truck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { BRAND, HERO_ASSETS } from '../data/siteData';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from '../components/ui/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const contactFaqs = [
    {
      q: "What time can I drop off and pick up my dog?",
      a: "To help establish group play we like all dog drop-off by 9am for daycare. Please call ahead to inquire about an exit bath. For doorstep van grooming, our team coordinates an exact 1-hour arrival window tailored to your routine."
    },
    {
      q: "What should my dog bring for daycare / boarding?",
      a: "To keep your dog feeling close to you even in your absence, include something with your scent. This can be a blanket, t-shirt, or even a sock. This is a wonderful way to help your dog feel comfortable, calm, and stress-free."
    },
    {
      q: "Which Mumbai suburbs do you service?",
      a: "Our mobile van grooming fleet operates throughout all areas of Mumbai and Navi Mumbai, including Dahisar, Borivali, Andheri, Bandra, Powai, Thane, Vashi, and South Mumbai."
    },
    {
      q: "Do you require parking space for the grooming van?",
      a: "Yes, our mobile van requires standard passenger van parking space inside or near your residential compound or building gate. The van is fully self-sufficient with onboard power and water."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Inquiry from Scruffy to Fluffy Website*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/919004116634?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#002842] text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#5fbd74] text-xs uppercase tracking-widest font-semibold">
            We'd Love to Hear From You
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Reach out for bookings, custom grooming requests, dog walking routes, or general pet care inquiries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left: Contact Info & Hub Locations (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-[#FBFBFB] rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-semibold text-[#5fbd74] uppercase tracking-wider">
                    Our Service Coverage
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#002842] mt-1 flex items-center gap-2">
                    <Truck className="w-6 h-6" />
                    <span>Van Grooming on Wheels:</span>
                  </h3>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    Throughout <strong>Mumbai &amp; Navi Mumbai</strong>. Our luxury grooming vans travel across all residential suburbs.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-display font-bold text-base text-[#002842] mb-1">
                    Our 🐕‍🦺 walkers and sitters:
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {BRAND.walkingAreas}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#5fbd74] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Primary Hub</p>
                      <p className="text-sm font-medium text-gray-800">{BRAND.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#5fbd74] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Call / WhatsApp Helpline</p>
                      <a href={`tel:${BRAND.phone1}`} className="text-sm font-bold text-[#002842] hover:underline block">
                        {BRAND.phoneFormatted1}
                      </a>
                      <a href={`tel:${BRAND.phone2}`} className="text-xs text-gray-600 hover:underline">
                        {BRAND.phoneFormatted2}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#5fbd74] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Email Support</p>
                      <a href={`mailto:${BRAND.email}`} className="text-sm font-medium text-gray-800 hover:underline">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#5fbd74] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Operating Hours</p>
                      <p className="text-sm font-medium text-gray-800">Monday – Sunday: 8:30 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BRAND.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#EA4335] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right: Message Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FBFBFB] rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <h3 className="font-display font-bold text-2xl text-[#002842] mb-2">
                Have a question or comment? Use the form below to send us a message.
              </h3>
              <p className="text-sm text-gray-600 mb-8">
                Our care coordinators will reply within 30 minutes via WhatsApp or phone call.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#5fbd74] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#002842]">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    Your inquiry has been prepared for WhatsApp delivery. We will get back to you immediately!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-sm mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9004116634"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                        Area / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Bandra, Dahisar, Thane, Vashi"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Your Message or Questions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your pet's breed, service requested, or specific questions..."
                      className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#002842]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 sm:py-4 text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-lg bg-[#25D366] hover:bg-[#20ba59] text-white border-0"
                  >
                    <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>

          </div>

          {/* Contact FAQ Accordion */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-gray-200">
            <h3 className="font-display font-bold text-2xl text-center text-[#002842] mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#5fbd74]" />
              <span>Contact &amp; Operations FAQ’s</span>
            </h3>

            <div className="space-y-3">
              {contactFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? 'border-[#002842] bg-[#002842]/5'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-semibold text-sm sm:text-base text-[#002842]">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#002842] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#002842]/10 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
