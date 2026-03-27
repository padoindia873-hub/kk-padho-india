"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function KKRakshaKavachPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Back Button - Using router.back() */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Member Discounts</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-3xl mb-6 mx-auto border border-yellow-400/50 shadow-xl">
            <span className="text-7xl">🛡️</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">KK Raksha Kavach</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Beti Bachao Beta Bachao - Comprehensive protection plan for your family.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">🛡️ Plan Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>50% discount on all services</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Family protection cover</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Emergency assistance 24/7</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Free legal consultation</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Annual health checkup</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">✅ Eligibility</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Active membership required</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Valid ID proof</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Family of up to 4 members</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Available pan India</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📝 How to Avail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">1</span><span>Show membership card</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">2</span><span>Fill application form</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">3</span><span>Submit family details</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">4</span><span>Get instant approval</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">5</span><span>Start using benefits</span></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Activation form will open soon!")}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Activate Now
          </button>
          <p className="text-gray-400 text-sm mt-4">Limited period offer • Up to 50% off</p>
        </div>
      </div>
    </section>
  );
}