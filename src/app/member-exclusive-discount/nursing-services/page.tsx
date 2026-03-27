"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function NursingServicesPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-rose-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Back Button - Using router.back() */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Member Discounts</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-3xl mb-6 mx-auto border border-pink-400/50 shadow-xl">
            <span className="text-7xl">👩‍⚕️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Nursing Services
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional nursing care at home with exclusive membership discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">👩‍⚕️ Nursing Services</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>50% discount on nursing care</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>24/7 professional nurses</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Elderly care at home</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Post-surgery care</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Baby care services</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">✅ Eligibility</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Active membership required</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Valid doctor prescription (if needed)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Available in all major cities</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Minimum 4 hours booking</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">📝 How to Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-pink-500/20 rounded-full text-pink-400 text-sm font-bold">1</span><span>Call or book online</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-pink-500/20 rounded-full text-pink-400 text-sm font-bold">2</span><span>Share patient details</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-pink-500/20 rounded-full text-pink-400 text-sm font-bold">3</span><span>Select service type</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-pink-500/20 rounded-full text-pink-400 text-sm font-bold">4</span><span>Apply membership discount</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-pink-500/20 rounded-full text-pink-400 text-sm font-bold">5</span><span>Nurse assigned instantly</span></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Nursing service booking will open soon!")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Nursing Service
          </button>
          <p className="text-gray-400 text-sm mt-4">50% off for members • Professional nurses • 24/7 availability</p>
        </div>
      </div>
    </section>
  );
}