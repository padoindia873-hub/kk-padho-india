"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FreeSpokenEnglishPage() {
  const router = useRouter();

  const handleStartLearning = () => {
    alert("Registration form will open soon! Start your English learning journey.");
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back to Benefits</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-50 rounded-2xl mb-6">
            <span className="text-4xl">🗣️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Free Spoken English
          </h1>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master English communication skills with our free expert-led program
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Communication training */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Communication training
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Grammar & vocabulary building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Pronunciation & accent training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Listening comprehension skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Business English essentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Daily conversation phrases</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Speaking practice */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">💬</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Speaking practice
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Live conversation sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Role-play exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Group discussions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Peer learning activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Interactive speaking drills</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Confidence building */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">⭐</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Confidence building
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Public speaking workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Interview preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Presentation skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Overcoming stage fear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">✓</span>
                <span>Personalized feedback sessions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-purple-600">✓</span> Flexible class timings
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-purple-600">✓</span> Expert certified trainers
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-purple-600">✓</span> Certificate on completion
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleStartLearning}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Start Learning
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Begin your English journey today • Open for all age groups
          </p>
        </div>
      </div>
    </section>
  );
}