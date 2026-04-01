"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FreeITTrainingPage() {
  const router = useRouter();

  const handleEnrollNow = () => {
    alert("Registration form will open soon!");
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
            <span className="text-4xl">💻</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free IT Training
          </h1>
          
          <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build your career with industry-ready IT skills — completely free
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: IT courses */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💻</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              IT courses
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Web Development (React, Node.js)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Python Programming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Data Science & AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Digital Marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Cloud Computing (AWS, Azure)</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Skill development */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Skill development
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Hands-on project training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Industry-relevant curriculum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Live coding sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Peer learning & collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Weekly assessments & feedback</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Career growth */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">📈</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Career growth
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Placement assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Resume building workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Mock interviews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Industry networking events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Flexible learning schedule
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Expert trainers
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Live projects & certification
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleEnrollNow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Enroll Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Limited seats available • Start your tech journey today
          </p>
        </div>
      </div>
    </section>
  );
}