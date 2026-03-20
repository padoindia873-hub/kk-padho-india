"use client";

import React from 'react';

export default function ScholarshipHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-yellow-200 via-purple-50 to-pink-200 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background - Soft Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-blue-200 shadow-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
          <span className="text-blue-700 text-sm font-medium tracking-wider">EDUCATION FOR ALL</span>
        </div>

        {/* Main Heading */}
        <h3 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            PADHO INDIA SCHOLARSHIP
          </span>
        </h3>
        
        {/* Main Message */}
        <p className="text-2xl md:text-3xl text-purple-600 font-semibold mb-4">
          Millions Candidates Will Become Crorepatis.
        </p>
        
        {/* Stats Box */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-blue-200 max-w-3xl mx-auto shadow-md">
          <p className="text-xl md:text-2xl text-gray-800 mb-3">
            Over 10 Lakhs Students will get Scholarship...
          </p>
          <p className="text-lg md:text-xl text-purple-600">
            And Millions of Students will make career by Higher study.
          </p>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm shadow-sm">
            🏆 Top Scholarships
          </span>
          <span className="bg-purple-50 border border-purple-200 rounded-full px-4 py-2 text-purple-700 text-sm shadow-sm">
            📚 Free Education
          </span>
          <span className="bg-pink-50 border border-pink-200 rounded-full px-4 py-2 text-pink-700 text-sm shadow-sm">
            🎯 Career Guidance
          </span>
        </div>

        {/* Decorative Icons */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-md animate-float">
            <span className="text-3xl">🏆</span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md animate-float animation-delay-1000">
            <span className="text-3xl">⭐</span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-md animate-float animation-delay-2000">
            <span className="text-3xl">🎓</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md">
            Apply for Scholarship
          </button>
          <p className="text-gray-600 text-sm mt-3">No application fee • Open for all students</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}