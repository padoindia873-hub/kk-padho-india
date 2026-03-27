"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ScholarshipSystemPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-3xl mb-6 mx-auto border border-yellow-400/50 shadow-xl">
            <span className="text-7xl">💰</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Scholarship System
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our transparent and efficient scholarship management system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">💰 Scholarship Types</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Merit-based (up to 100%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Need-based (up to 80%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Sports excellence (up to 70%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Girl child education (up to 90%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Minority scholarships (up to 85%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Special talent scholarships (up to 95%)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚙️ System Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Online application portal</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Automated eligibility check</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Real-time status tracking</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Direct fund transfer to bank</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Document verification system</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Renewal management</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">✅ Eligibility Criteria</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Minimum 60% marks in last examination</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Family income less than ₹3 LPA</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Indian citizens only</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Students from class 8 to Post Graduation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Active membership required</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📊 Scholarship Amounts</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Class 8-10: Up to ₹25,000/year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Class 11-12: Up to ₹40,000/year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Graduation: Up to ₹60,000/year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Post Graduation: Up to ₹80,000/year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">✓</span>
                <span>Professional courses: Up to ₹1,00,000/year</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📝 Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">1</span>
                <span>Register on scholarship portal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">2</span>
                <span>Fill online application form</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">3</span>
                <span>Upload required documents</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">4</span>
                <span>Take scholarship eligibility test</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">5</span>
                <span>Personal interview (if shortlisted)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold">6</span>
                <span>Final selection & fund transfer</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📄 Required Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📄</span>
                <span>Previous year marksheet</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">🏠</span>
                <span>Income certificate</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">🆔</span>
                <span>Aadhar card</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📸</span>
                <span>Passport size photo</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">🏦</span>
                <span>Bank account details</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-yellow-400">📋</span>
                <span>Caste certificate (if applicable)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Scholarship application will open soon!")}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Apply for Scholarship
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Applications open twice a year • Limited seats available
          </p>
        </div>
      </div>
    </section>
  );
}