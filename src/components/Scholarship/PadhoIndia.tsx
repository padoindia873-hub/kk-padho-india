"use client";

import React from 'react';

export default function ScholarshipHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background - Cool Premium Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Additional Soft Glow Effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-violet-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-sky-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/70 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-indigo-200 shadow-md">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse mr-2"></span>
          <span className="text-indigo-700 text-sm font-medium tracking-wider">✨ EDUCATION FOR ALL ✨</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            PADHO INDIA SCHOLARSHIP
          </span>
        </h1>
        
        {/* Main Message */}
        <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
          Millions Candidates Will Become Crorepatis.
        </p>
        
        {/* Stats Box - Premium Glassmorphism */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 mb-6 border border-indigo-200 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-xl md:text-2xl text-gray-700 mb-3 font-medium">
              Over <span className="text-indigo-600 font-bold text-3xl">10 Lakhs</span> Students will get Scholarship...
            </p>
            <p className="text-lg md:text-xl text-cyan-600">
              And Millions of Students will make career by Higher study.
            </p>
          </div>
        </div>

        {/* Feature Chips - Premium Cool Colors */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-5 py-2.5 text-indigo-700 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            🏆 Top Scholarships
          </span>
          <span className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2.5 text-blue-700 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            📚 Free Education
          </span>
          <span className="bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-full px-5 py-2.5 text-cyan-700 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            🎯 Career Guidance
          </span>
          <span className="bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full px-5 py-2.5 text-violet-700 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            💰 Financial Aid
          </span>
          <span className="bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full px-5 py-2.5 text-teal-700 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            🌟 Merit Based
          </span>
        </div>

        {/* Decorative Icons - Premium Animated */}
        <div className="mt-8 flex justify-center gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center shadow-md animate-float cursor-pointer hover:scale-110 transition-all duration-300">
              <span className="text-3xl">🏆</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md animate-float animation-delay-1000 cursor-pointer hover:scale-110 transition-all duration-300">
              <span className="text-3xl">⭐</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center shadow-md animate-float animation-delay-2000 cursor-pointer hover:scale-110 transition-all duration-300">
              <span className="text-3xl">🎓</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center shadow-md animate-float animation-delay-3000 cursor-pointer hover:scale-110 transition-all duration-300">
              <span className="text-3xl">✨</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
            <button className="relative bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-indigo-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Apply for Scholarship
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <p className="text-indigo-600 text-sm">✓ No application fee</p>
            <p className="text-blue-600 text-sm">✓ Open for all students</p>
            <p className="text-cyan-600 text-sm">✓ Lifetime benefits</p>
          </div>
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
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}