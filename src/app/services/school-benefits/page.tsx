"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SchoolBenefitsPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-3xl mb-6 mx-auto border border-red-400/50 shadow-xl">
            <span className="text-7xl">🏫</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              School Benefits
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive benefits and facilities for our partner schools and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-400 mb-4">🏫 School Facilities</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Smart classrooms with digital boards</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Well-equipped science laboratories</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Computer labs with latest technology</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Sports complex and playgrounds</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Library with digital resources</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Transportation facilities</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-400 mb-4">🎓 Student Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Fee concessions up to 50%</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Free study materials and books</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Scholarship opportunities</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Career counseling sessions</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Personality development programs</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Extracurricular activities</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-400 mb-4">👨‍🏫 Teacher Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Competitive salary packages</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Professional development programs</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Health insurance coverage</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Retirement benefits</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Training workshops</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Career growth opportunities</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-400 mb-4">⭐ Partnership Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Brand recognition and marketing</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Student enrollment support</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Infrastructure development grants</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Teacher training programs</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Educational resources access</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-red-400 mt-1">✓</span><span>Annual awards and recognition</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-red-400 mb-4">📝 How to Avail Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full text-red-400 text-sm font-bold">1</span>
                <span>Register your school</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full text-red-400 text-sm font-bold">2</span>
                <span>Submit required documents</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full text-red-400 text-sm font-bold">3</span>
                <span>School verification process</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full text-red-400 text-sm font-bold">4</span>
                <span>Get partnership approval</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="flex items-center justify-center w-6 h-6 bg-red-500/20 rounded-full text-red-400 text-sm font-bold">5</span>
                <span>Start availing benefits</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("School registration will open soon!")}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Register Your School
          </button>
          <p className="text-gray-400 text-sm mt-4">Limited partnership slots • Join our network</p>
        </div>
      </div>
    </section>
  );
}