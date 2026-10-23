import React from 'react';
import { BRAND } from '../data/siteData';

export default function TermsOfUse() {
  return (
    <div className="bg-[#FBFBFB] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#002842] mb-6">
          Terms of Use
        </h1>
        <p className="text-xs text-gray-500 mb-8">Last Updated: March 2026</p>

        <div className="prose text-gray-700 space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to <strong>Scruffy to Fluffy</strong>. By accessing our website (scruffytofluffy.in) or booking our mobile van grooming and pet care services, you agree to these Terms of Use.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">1. Pet Health &amp; Vaccinations</h3>
          <p>
            Pet owners must disclose any known medical conditions, behavioral tendencies, bites history, allergies, or contagious illnesses before any grooming, walking, or daycare session. Pets must be up-to-date on essential vaccinations.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">2. Mobile Van Access &amp; Parking</h3>
          <p>
            For Grooming on Wheels, customers agree to coordinate suitable vehicle parking in their residential society or building premises with adequate clearance for our mobile van.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">3. Cancellations &amp; Rescheduling</h3>
          <p>
            Please provide at least 4 hours advance notice if you need to cancel or reschedule your mobile grooming appointment to allow our team to accommodate other clients.
          </p>

          <h3 className="font-display font-bold text-lg text-[#002842]">4. Safety &amp; Humane Treatment</h3>
          <p>
            The comfort and well-being of the animal is our highest priority. If a pet displays severe, dangerous aggression or extreme distress, our groomers reserve the right to pause or adapt the session safely.
          </p>
        </div>
      </div>
    </div>
  );
}
