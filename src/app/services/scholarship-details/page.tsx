"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ScholarshipDetailsPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      
      {/* Simple background - removed heavy blur effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group font-medium"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6 mx-auto">
            <span className="text-4xl">🎓</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-900">
            Scholarship Details
          </h1>
          
          <div className="w-20 h-0.5 bg-blue-500 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial support for deserving students to achieve their educational dreams
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Scholarship Purpose */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Scholarship Purpose</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower talented and underprivileged students by providing financial assistance for quality education. We aim to nurture future leaders by removing financial barriers and recognizing academic excellence, sports achievements, and socio-economic needs.
            </p>
          </div>

          {/* 2. Eligibility Criteria */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">✅</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Eligibility Criteria</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Minimum 60% aggregate in last qualifying examination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Family annual income less than ₹3,00,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Indian citizens with valid ID proof</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Students from Class 8 to Post Graduation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Special reservations for girl child, sports quota & minorities</span>
              </li>
            </ul>
          </div>

          {/* 3. Required Documents */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📄</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Required Documents</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Academic marksheets (all previous qualifications)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Income certificate issued by competent authority</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Aadhaar card / Voter ID / Passport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Passport-size photographs (2 copies)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Bank account details (passbook copy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Category certificate (if applicable - SC/ST/OBC/Minority)</span>
              </li>
            </ul>
          </div>

          {/* 4. Scholarship Benefits */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎁</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Scholarship Benefits</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Up to 100% tuition fee waiver based on merit & need</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Annual book and study material allowance up to ₹10,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Monthly stipend for PG and research scholars</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Laptop/device grant for meritorious students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Career mentorship and internship opportunities</span>
              </li>
            </ul>
          </div>

          {/* 5. Application Process */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📝</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Application Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Register Online", desc: "Create account with basic details" },
                { step: 2, title: "Fill Application", desc: "Complete form with personal & academic info" },
                { step: 3, title: "Upload Documents", desc: "Submit all required documents" },
                { step: 4, title: "Take Test", desc: "Appear for scholarship aptitude test" },
                { step: 5, title: "Interview", desc: "Final selection round" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Important Dates */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Important Dates</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Application Opens</span>
                <span className="font-medium text-gray-900">April 15, 2025</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Application Deadline</span>
                <span className="font-medium text-gray-900">June 30, 2025</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Scholarship Test</span>
                <span className="font-medium text-gray-900">July 10-15, 2025</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Result Declaration</span>
                <span className="font-medium text-gray-900">August 5, 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fund Disbursement</span>
                <span className="font-medium text-gray-900">August 20, 2025</span>
              </div>
            </div>
          </div>

          {/* 7. Additional Info - Scholarship Variants */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Scholarship Categories</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Merit Scholar:</strong> Based on academic excellence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Need-Based Aid:</strong> For economically disadvantaged students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Sports Excellence:</strong> For state/national level athletes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Girl Child Scholarship:</strong> Empowering female education</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Minority Scholarship:</strong> For minority community students</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Renewal:</strong> Maintain minimum 60% marks annually and good conduct for scholarship renewal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Scholarship application portal will open soon! Stay tuned.")} 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm"
            >
              Apply for Scholarship
            </button>
            <button 
              onClick={() => alert("Registration for scholarship notifications will begin soon.")} 
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all border border-gray-200"
            >
              Register Now
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Limited seats available • Apply before June 30, 2025
          </p>
        </div>
      </div>
    </section>
  );
}