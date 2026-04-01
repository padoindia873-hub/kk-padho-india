"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FreeScholarshipPage() {
  const router = useRouter();

  const handleApplyNow = () => {
    alert("Application form will open soon!");
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back to Benefits</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-2xl mb-6">
            <span className="text-4xl">🎁</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free Scholarship
          </h1>
          
          <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock educational opportunities with our free scholarship program
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Free financial support */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💰</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Free financial support
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete tuition fee waiver, monthly stipend, book allowance, and access to premium learning resources for deserving students.
            </p>
          </div>

          {/* Card 2: Eligibility */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">✅</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Eligibility
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Minimum 60% marks in last examination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Family income less than ₹3 LPA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Indian citizens only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Class 8 to Post Graduation students</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Apply process */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Apply process
            </h2>
            <ol className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-medium">1.</span>
                <span>Fill online application form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-medium">2.</span>
                <span>Upload required documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-medium">3.</span>
                <span>Appear for scholarship test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-medium">4.</span>
                <span>Personal interview (if shortlisted)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-medium">5.</span>
                <span>Final selection by committee</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Limited seats available
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Merit & need-based
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Apply before deadline
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleApplyNow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Apply Free
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Transform your future • Open to meritorious students
          </p>
        </div>
      </div>
    </section>
  );
}