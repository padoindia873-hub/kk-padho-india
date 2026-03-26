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
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/benefit.png"
          alt="Benefits background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-5 border border-yellow-400/30">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-300 text-sm font-bold tracking-wider">✨ FREE FOR MEMBERS ✨</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Exclusive Member
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Free Benefits</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock premium educational and career opportunities absolutely free with your membership
          </p>
        </div>

        {/* Benefits Grid - Modern Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {freeBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center
                       hover:from-white/20 hover:to-white/10 transition-all duration-500
                       transform hover:-translate-y-2
                       border border-white/20 shadow-xl
                       overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/5 group-hover:to-orange-400/10 transition-all duration-700"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Icon Container */}
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center border border-yellow-400/30 group-hover:scale-110 transition-all duration-300 group-hover:border-yellow-400/60">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Membership CTA Card */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-yellow-400/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">🌟</span>
                <span className="text-yellow-300 font-semibold">Limited Time Offer</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Unlock All Benefits?
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our membership program today and get access to all these premium services absolutely free
              </p>
              
              <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Become a Member Today
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-gray-400 text-sm mt-6">*Terms and conditions apply | No hidden charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}