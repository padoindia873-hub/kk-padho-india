"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ScholarshipSystemPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Scholarship Programs</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl mb-6 mx-auto border border-blue-400/50 shadow-xl">
            <span className="text-7xl">⚙️</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Scholarship System
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive scholarship management system with easy application and tracking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">⚙️ System Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">✓</span><span>Online application portal</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">✓</span><span>Automated eligibility check</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">✓</span><span>Real-time status tracking</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">✓</span><span>Document verification system</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">✓</span><span>Direct fund transfer to bank</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">📊 Application Status</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">•</span><span>Submitted - Application received</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">•</span><span>Under Review - Document verification</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">•</span><span>Shortlisted - Interview scheduled</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">•</span><span>Approved - Scholarship granted</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-blue-400 mt-1">•</span><span>Disbursed - Funds transferred</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">📝 Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">1</span><span>Register on portal</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">2</span><span>Fill application form</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">3</span><span>Upload documents</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">4</span><span>Take eligibility test</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">5</span><span>Interview & selection</span></div>
              <div className="flex items-center gap-3 text-gray-300"><span className="flex items-center justify-center w-6 h-6 bg-blue-500/20 rounded-full text-blue-400 text-sm font-bold">6</span><span>Fund disbursement</span></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={() => alert("Track your application status")} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Track Application
          </button>
        </div>
      </div>
    </section>
  );
}