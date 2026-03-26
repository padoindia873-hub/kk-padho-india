"use client";

import React from 'react';

interface Benefit {
  title: string;
  icon: string;
  discount?: string;
  description?: string;
}

export default function ExclusiveMemberDiscount() {
  const benefits: Benefit[] = [
    { title: "KK Raksha Kavach", icon: "🛡️", discount: "UP to 50% off" },
    { title: "QAR Rides", icon: "🚗", discount: "UP to 50% off" },
    { title: "QCM Medicines", icon: "💊", discount: "UP to 50% off" },
    { title: "Legal Support", icon: "⚖️", discount: "UP to 50% off" },
    { title: "Diagnostics Test", icon: "🔬", discount: "UP to 50% off" },
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Member Perks Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider">✨ MEMBER PERKS ✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive Member Discount Benefits
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>

          <p className="text-xl text-yellow-300 font-semibold">
            Up to 70% discount on various services
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center
                       hover:bg-white/20 transition-all duration-500
                       transform hover:-translate-y-2 hover:scale-105
                       border border-white/20 shadow-xl
                       relative overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Icon with Glow */}
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <span className="relative text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
                  {benefit.icon}
                </span>
              </div>

              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-yellow-300 transition-colors">
                {benefit.title}
              </h3>

              {benefit.discount && (
                <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  {benefit.discount}
                </div>
              )}

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Become a Member Today
          </button>
          <p className="text-gray-300 text-sm mt-4">*Terms and conditions apply</p>
        </div>
      </div>
    </section>
  );
}