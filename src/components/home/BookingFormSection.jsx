import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, Check, Sparkles } from 'lucide-react';
import { BRAND, SERVICE_PACKAGES } from '../../data/siteData';
import { WhatsAppIcon } from '../ui/Icons';

export default function BookingFormSection({ defaultPackage = '' }) {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' or 'whatsform'
  
  // Interactive Form State
  const [petType, setPetType] = useState('Dog');
  const [selectedServices, setSelectedServices] = useState(
    defaultPackage ? [defaultPackage] : ['basic']
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('60min');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleInteractiveSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const msg = `*New Booking Request - Scruffy to Fluffy* 🐾%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Location:* ${location}%0A` +
      `*Pet:* ${petType}%0A` +
      `*Services:* ${selectedServices.join(', ')}%0A` +
      `*Date:* ${date || 'Earliest available'}%0A` +
      `*Time:* ${time || 'Flexible'}%0A` +
      `*Duration:* ${duration}%0A` +
      `*Notes:* ${message || 'None'}`;

    const whatsappUrl = `https://wa.me/919004116634?text=${msg}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 anim-fade-in-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#002842]/5 px-3.5 py-1.5 rounded-full text-[0.6875rem] sm:text-xs font-semibold text-[#002842] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#5fbd74]" />
            <span>Instant Doorstep Van Booking</span>
          </div>
          <h2 className="font-display font-bold text-fluid-h2 text-[#002842]">
            Book Appointment
          </h2>
          <p className="text-fluid-body text-gray-600 mt-2">
            Schedule a grooming session at your doorstep anywhere in Mumbai &amp; Navi Mumbai.
          </p>

          {/* Tab Switcher - Responsive with Rem */}
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-full mt-5 sm:mt-6 border border-gray-200 max-w-full">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'interactive'
                  ? 'bg-[#002842] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quick Booking
            </button>
            <button
              onClick={() => setActiveTab('whatsform')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'whatsform'
                  ? 'bg-[#002842] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              WhatsForm (WhatsApp)
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Native React Form */}
        {activeTab === 'interactive' && (
          <div className="bg-[#FBFBFB] rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
            
            {/* Promo banner */}
            <div className="bg-[#5fbd74]/15 border border-[#5fbd74]/30 rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8 flex items-center gap-3">
              <span className="text-xl sm:text-2xl shrink-0">🎁</span>
              <div>
                <p className="font-display font-bold text-xs sm:text-sm text-[#002842]">
                  1 Day FREE daycare trial for new clients!
                </p>
                <p className="text-[0.6875rem] sm:text-xs text-gray-600">
                  Prior appointment required. Cannot be combined with peak holiday discounts.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#5fbd74] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002842]">
                  Booking Message Sent via WhatsApp!
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto">
                  Our team has received your details and will verify driver and van availability to confirm your time slot shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs sm:text-sm mt-3"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleInteractiveSubmit} className="space-y-6 sm:space-y-8">
                
                {/* STEP 1: About Care */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842]">
                    1. About Your Pet &amp; Service
                  </h3>

                  {/* Pet Selector */}
                  <div>
                    <label className="block text-[0.6875rem] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Pet Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {['Dog', 'Cat'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPetType(type)}
                          className={`min-h-[3rem] py-2.5 sm:py-3 px-4 rounded-2xl font-semibold text-sm border-2 transition-all duration-200 flex items-center justify-center gap-2 ${
                            petType === type
                              ? 'border-[#002842] bg-[#002842] text-white shadow-md'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span>{type === 'Dog' ? '🐕 Dog' : '🐈 Cat'}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Packages Checkboxes */}
                  <div>
                    <label className="block text-[0.6875rem] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Interested In (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {[
                        { id: 'basic', label: 'Basic Grooming (₹1,499)' },
                        { id: 'deluxe', label: 'Deluxe Grooming (₹2,199)' },
                        { id: 'ticks', label: 'Ticks Treatment (₹2,499)' },
                        { id: 'walking', label: 'Dog Walking' },
                        { id: 'daycare', label: 'Daycare' },
                        { id: 'boarding', label: 'Boarding' },
                      ].map((srv) => (
                        <label
                          key={srv.id}
                          className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                            selectedServices.includes(srv.id)
                              ? 'border-[#002842] bg-[#002842]/5 text-[#002842] font-semibold'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(srv.id)}
                            onChange={() => toggleService(srv.id)}
                            className="w-4 h-4 rounded text-[#002842] focus:ring-[#002842] shrink-0"
                          />
                          <span className="leading-tight">{srv.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Date, Time, Duration Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>Preferred Date</span>
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>Preferred Time Slot</span>
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Desired Length
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                      >
                        <option value="Undecided">Undecided</option>
                        <option value="30min">30 minutes</option>
                        <option value="60min">60 minutes</option>
                        <option value="2 hours">2 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="Full day - 8 hours">Full day - 8 hours</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* STEP 2: About You */}
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#002842]">
                    2. Contact Details &amp; Address
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-gray-500" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Susan Sharma"
                        className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-500" />
                        <span>Phone / WhatsApp Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9004116634"
                        className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span>Address / Area (Mumbai / Navi Mumbai) *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Building, Street, Dahisar / Andheri / Vashi"
                      className="w-full min-h-[2.875rem] bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#002842]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                      <span>Special Instructions / Pet Temperament</span>
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your pet's breed, temperament, or any specific requests..."
                      className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#002842]"
                    />
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 sm:py-4 text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-lg bg-[#25D366] hover:bg-[#20ba59] text-white border-0"
                  >
                    <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                    <span>Send Booking via WhatsApp</span>
                  </button>
                  <p className="text-center text-[0.6875rem] sm:text-xs text-gray-500 mt-2 sm:mt-3">
                    Instant confirmation • Pay after grooming • No advance fee required
                  </p>
                </div>

              </form>
            )}

          </div>
        )}

        {/* Tab 2: Embedded WhatsForm (Original) */}
        {activeTab === 'whatsform' && (
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-[0.6875rem] sm:text-xs text-gray-600 font-medium">
                WhatsForm Integration
              </span>
              <a
                href={BRAND.whatsformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#002842] font-semibold hover:underline"
              >
                Open in new window ↗
              </a>
            </div>
            
            <div className="w-full overflow-hidden">
              <iframe
                src={BRAND.whatsformUrl}
                title="Scruffy to Fluffy Booking Form"
                className="w-full h-[1500px] sm:h-[1800px] md:h-[2200px] border-none"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
