"use client";

import React from 'react';
import Link from 'next/link';

export default function LegalSupportPage() {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Benefits</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl mb-6 mx-auto border border-purple-400/50 shadow-xl">
            <span className="text-7xl">⚖️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Legal Support
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert legal consultation and support for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">⚖️ Legal Services</h2>
            <ul className="space-y-3">
              {[
                "50% discount on legal consultation",
                "Free initial consultation",
                "Document verification",
                "Court case assistance",
                "Property legal support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">✅ Eligibility</h2>
            <ul className="space-y-3">
              {[
                "Active membership required",
                "Valid ID proof",
                "Available for all members",
                "Pan India coverage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">📝 How to Avail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Book consultation slot",
                "Explain your legal issue",
                "Get expert advice",
                "Receive legal documents",
                "Follow-up support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-purple-500/20 rounded-full text-purple-400 text-sm font-bold">{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Consultation
          </button>
          <p className="text-gray-400 text-sm mt-4">Free initial consultation • 50% off for members</p>
        </div>
      </div>
    </section>
  );
}