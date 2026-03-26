"use client";

import React from 'react';
import Link from 'next/link';

export default function FreeITTrainingPage() {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Benefits</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-3xl mb-6 mx-auto border border-green-400/50 shadow-xl">
            <span className="text-7xl">💻</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Free IT Training
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn in-demand IT skills with our free training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-green-400 mb-4">💻 Courses Offered</h2>
            <ul className="space-y-3">
              {[
                "Web Development (HTML, CSS, JS, React)",
                "Python Programming",
                "Data Science & AI",
                "Digital Marketing",
                "Cloud Computing (AWS, Azure)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Eligibility</h2>
            <ul className="space-y-3">
              {[
                "Minimum 12th pass",
                "Basic computer knowledge",
                "Age 16+ years",
                "Internet connection required"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-green-400 mb-4">📝 How to Enroll</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Choose your preferred course",
                "Fill the registration form",
                "Take a basic aptitude test",
                "Get enrolled in batch",
                "Start learning with projects"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-500/20 rounded-full text-green-400 text-sm font-bold">{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Register Now
          </button>
          <p className="text-gray-400 text-sm mt-4">Limited seats • Certificate provided</p>
        </div>
      </div>
    </section>
  );
}