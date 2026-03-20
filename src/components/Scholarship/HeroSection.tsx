"use client";

import React from 'react';

export default function ScholarshipHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-white/90 text-sm font-medium tracking-wider">EDUCATION FOR ALL</span>
        </div>

        {/* Main Heading */}
        <h3 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            PADHO INDIA SCHOLARSHIP
          </span>
        </h3>
        
        {/* Main Message */}
        <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
          Millions Candidates Will Become Crorepatis.
        </p>
        
        {/* Stats Box */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white mb-3">
            Over 10 Lakhs Students will get Scholarship...
          </p>
          <p className="text-lg md:text-xl text-blue-200">
            And Millions of Students will make career by Higher study.
          </p>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            🏆 Top Scholarships
          </span>
          <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            📚 Free Education
          </span>
          <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            🎯 Career Guidance
          </span>
        </div>

        {/* Decorative Cup Icon */}
        <div className="mt-8 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-4xl">🏆</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Apply for Scholarship
          </button>
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
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}