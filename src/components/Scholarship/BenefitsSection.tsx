"use client";

import React from 'react';

interface Benefit {
  title: string;
  icon: string;
  discount?: string;
  description?: string;
}

export default function BenefitsSection() {
  const freeBenefits: Benefit[] = [
    { title: "Free Scholarship", icon: "🎓" },
    { title: "Free Tuitions (5 to 12)", icon: "📚" },
    { title: "Free IT Training", icon: "💻" },
    { title: "Free Medical Treatment", icon: "🏥" },
    { title: "Free Spoken English", icon: "🗣️" },
    { title: "Free Career Counseling", icon: "🤝" },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      {/* Premium Green Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px]"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-full px-6 py-2.5 mb-5 border border-green-400/40 shadow-lg">
            <span className="relative flex h-2.5 w-2.5 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-300 text-sm font-bold tracking-wider uppercase">✨ Free For Members ✨</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Exclusive Member</span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent"> Free Benefits</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Unlock premium educational and career opportunities absolutely free with your membership
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {freeBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center
                       hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-500
                       transform hover:-translate-y-2 hover:scale-105
                       border border-white/20 hover:border-green-400/60
                       shadow-xl hover:shadow-2xl hover:shadow-green-500/30
                       overflow-hidden cursor-pointer"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-emerald-500/0 group-hover:from-green-500/30 group-hover:via-green-500/20 group-hover:to-emerald-500/30 transition-all duration-700"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              {/* Icon Container */}
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center border border-green-400/50 group-hover:border-green-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-gray-100 font-bold text-lg mb-2 group-hover:text-green-300 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}