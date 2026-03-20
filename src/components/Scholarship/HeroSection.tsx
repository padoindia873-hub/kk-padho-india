"use client";

import React from 'react';

export default function ScholarshipHero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          PADHO INDIA <span className="text-yellow-400">SCHOLARSHIP</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
          Millions Candidates Will Become Crorepatis.
        </p>
        
        <p className="text-xl md:text-2xl text-white mb-3">
          Over 10 Lakhs Students will get Scholarship...
        </p>
        
        <p className="text-lg md:text-xl text-blue-200">
          And Millions of Students will make career by Higher study.
        </p>

        {/* Decorative Cup Icon */}
        <div className="mt-8 flex justify-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-4xl">🏆</span>
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
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}