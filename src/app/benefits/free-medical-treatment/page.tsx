"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FreeMedicalTreatmentPage() {
  const router = useRouter();

  const handleGetSupport = () => {
    alert("Medical support request submitted! Our team will contact you shortly.");
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
            <span className="font-medium">Back to Benefits</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 rounded-2xl mb-6">
            <span className="text-4xl">🏥</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free Medical Treatment
          </h1>
          
          <div className="w-20 h-0.5 bg-teal-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality healthcare support for those who need it most
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Healthcare support */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🏥</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Healthcare support
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Free doctor consultations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>24/7 emergency support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Health checkup camps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Preventive care programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Health awareness sessions</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Treatment assistance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💊</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Treatment assistance
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>50% off on medicines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Free diagnostic tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Surgery financial aid</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Ambulance service support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Hospital admission assistance</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Doctor help */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">👨‍⚕️</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Doctor help
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Expert specialist consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Second opinion services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Telemedicine support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Follow-up care guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">✓</span>
                <span>Medical report analysis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-teal-600">✓</span> Active membership required
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-teal-600">✓</span> Partner hospitals network
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-teal-600">✓</span> Family income eligibility
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleGetSupport}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Get Support
          </button>
          <p className="text-gray-500 text-sm mt-4">
            24/7 emergency assistance • Quality healthcare for all
          </p>
        </div>
      </div>
    </section>
  );
}