import React from 'react';
import { BRAND } from '../data/siteData';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FBFBFB] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#002842] mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-8">Last Updated: March 2026</p>

        <div className="prose text-gray-700 space-y-6 text-sm leading-relaxed">
          <p>
            At <strong>Scruffy to Fluffy</strong> (scruffytofluffy.in), we respect your privacy and are committed to protecting the personal information you share with us.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">1. Information We Collect</h3>
          <p>
            When you book an appointment or submit an inquiry, we collect your name, phone number, address (for mobile van navigation), email, and details about your pet (breed, age, temperament, medical needs).
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">2. How We Use Your Information</h3>
          <p>
            We use your data solely to fulfill doorstep pet grooming and walking appointments, communicate schedule confirmations via phone or WhatsApp, and ensure tailored, safe care for your pet.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">3. Third-Party Sharing</h3>
          <p>
            We do not sell, rent, or trade your personal data to any external marketing agencies. Data is only accessible to our trusted groomers and dispatch coordinators.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">4. Contact Us</h3>
          <p>
            If you have questions regarding this privacy policy, please contact us at <a href={`mailto:${BRAND.email}`} className="text-[#002842] font-semibold underline">{BRAND.email}</a> or call {BRAND.phoneFormatted1}.
          </p>
        </div>
      </div>
    </div>
  );
}
