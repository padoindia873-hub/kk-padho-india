"use client";

import React from 'react';
import Link from 'next/link';

export default function DiagnosticsTestPage() {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Benefits</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-3xl mb-6 mx-auto border border-cyan-400/50 shadow-xl">
            <span className="text-7xl">🔬</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Diagnostics Test
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive diagnostic tests at affordable prices with membership discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🔬 Test Benefits</h2>
            <ul className="space-y-3">
              {[
                "50% off on all tests",
                "Home sample collection",
                "Accurate reports within 24hrs",
                "Free doctor consultation",
                "Health checkup packages"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">✅ Tests Available</h2>
            <ul className="space-y-3">
              {[
                "Complete Blood Count",
                "Thyroid Profile",
                "Diabetes Package",
                "Lipid Profile",
                "Vitamin Deficiency Tests"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">📝 How to Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Select test package",
                "Schedule appointment",
                "Home collection available",
                "Apply membership discount",
                "Get reports online"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-bold">{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Test Now
          </button>
          <p className="text-gray-400 text-sm mt-4">50% off • Free home collection</p>
        </div>
      </div>
    </section>
  );
}