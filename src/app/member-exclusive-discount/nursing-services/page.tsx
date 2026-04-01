"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function NursingServicesPage() {
  const router = useRouter();

  const handleBookService = (serviceName: string) => {
    alert(`Booking request received for: ${serviceName}\n\nOur care team will reach you shortly to confirm details.`);
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 rounded-2xl mb-6">
            <span className="text-4xl">🏥</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nursing Services
          </h1>
          
          <div className="w-20 h-0.5 bg-teal-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional, compassionate care delivered at your doorstep
          </p>
        </div>

        {/* Services Grid - 3 cards exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Home nursing care */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🏡</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Home nursing care
            </h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Skilled nursing care including wound care, medication management, vital monitoring, and post-illness support at home.
            </p>
            <button 
              onClick={() => handleBookService("Home nursing care")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Book Service
            </button>
          </div>

          {/* Card 2: Patient & elderly support */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">👴🧓</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Patient & elderly support
            </h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Compassionate assistance for seniors and patients with daily activities, companionship, mobility support, and personal care.
            </p>
            <button 
              onClick={() => handleBookService("Patient & elderly support")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Book Service
            </button>
          </div>

          {/* Card 3: Post-treatment care */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🩺</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Post-treatment care
            </h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Recovery support after surgery, hospitalization, or medical procedures with professional follow-up care and guidance.
            </p>
            <button 
              onClick={() => handleBookService("Post-treatment care")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Book Service
            </button>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700">
              <span className="font-semibold text-teal-600">✓</span> Licensed professionals
            </div>
            <div className="text-gray-700">
              <span className="font-semibold text-teal-600">✓</span> Flexible scheduling
            </div>
            <div className="text-gray-700">
              <span className="font-semibold text-teal-600">✓</span> 24/7 availability
            </div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => handleBookService("Nursing Services")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Book Service
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Professional care • Compassionate support • Trusted by families
          </p>
        </div>
      </div>
    </section>
  );
}