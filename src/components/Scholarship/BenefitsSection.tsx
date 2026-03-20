"use client";

import React from 'react';

interface Benefit {
  title: string;
  icon: string;
  discount?: string;
}

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    { title: "KK Raksh Kavach", icon: "🛡️", discount: "50% off" },
    { title: "QAR Rides", icon: "🚗", discount: "50% off" },
    { title: "QCM Medicines", icon: "💊", discount: "70% off" },
    { title: "Get Membership Card", icon: "💳" },
    { title: "Free Medical Treatment", icon: "🏥" },
    { title: "Legal Support", icon: "⚖️" },
    { title: "Job Vacancy", icon: "💼" },
    { title: "Free Spoken English", icon: "🗣️" },
    { title: "Free Acting Chances", icon: "🎭" },
    { title: "Free Career Counseling", icon: "🤝" },
    { title: "Events Live Streaming", icon: "📺" }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Exclusive Member Benefits
        </h2>
        <p className="text-xl text-center text-blue-100 mb-12">
          Up to 70% discount on various services
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-sm">{benefit.title}</h3>
              {benefit.discount && (
                <p className="text-yellow-400 text-xs font-bold mt-1">{benefit.discount}</p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg">
            <span className="font-bold text-yellow-400">KK Raksh Kavach:</span> Beti Bachao Beta Bachao
          </p>
          <p className="text-white text-lg mt-2">
            <span className="font-bold text-yellow-400">QAR:</span> Quick Affordable Rides
          </p>
        </div>
      </div>
    </section>
  );
}