"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FreeCareerCounselingPage() {
  const router = useRouter();

  const handleGetGuidance = () => {
    alert("Career counseling session request submitted! Our expert will contact you shortly.");
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back to Benefits</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-2xl mb-6">
            <span className="text-4xl">🎯</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free Career Counseling
          </h1>
          
          <div className="w-20 h-0.5 bg-indigo-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance to help you make informed career decisions
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Career guidance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Career guidance
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>One-on-one counseling sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Career assessment tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>College & course selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Industry trend insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Career roadmap planning</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Job preparation */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Job preparation
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Resume & cover letter building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>LinkedIn profile optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Job search strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Portfolio development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Networking guidance</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Interview help */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💼</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Interview help
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Mock interview sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Common question practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Communication skills training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Body language tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">✓</span>
                <span>Post-interview follow-up</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-indigo-600">✓</span> Free for all members
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-indigo-600">✓</span> Expert career counselors
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-indigo-600">✓</span> Online & offline sessions
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleGetGuidance}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Get Guidance
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Limited slots available • Start your career journey today
          </p>
        </div>
      </div>
    </section>
  );
}