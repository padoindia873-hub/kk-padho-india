"use client";

import React from 'react';
import Link from 'next/link';

interface Benefit {
  title: string;
  icon: string;
  discount?: string;
  description?: string;
  slug: string;
}

export default function ExclusiveMemberDiscount() {
  const benefits: Benefit[] = [
    { title: "KK Raksha Kavach", icon: "🛡️", discount: "UP to 50% off", slug: "kk-raksha-kavach" },
    { title: "QAR Rides", icon: "🚗", discount: "UP to 50% off", slug: "qar-rides" },
    { title: "QCM Medicines", icon: "💊", discount: "UP to 50% off", slug: "qcm-medicines" },
    { title: "Legal Support", icon: "⚖️", discount: "UP to 50% off", slug: "legal-support" },
    { title: "Diagnostics Test", icon: "🔬", discount: "UP to 50% off", slug: "diagnostics-test" },
    { title: "Nursing Services", icon: "👩‍⚕️", discount: "UP to 50% off", slug: "nursing-services" },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Simple Light Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Member Perks Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-5 border border-blue-200 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-blue-700 text-sm font-semibold tracking-wider">✨ MEMBER PERKS ✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Exclusive Member</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Discount Benefits</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-700 font-semibold">
            Up to 70% discount on various services
          </p>
        </div>

        {/* Benefits Grid with Links - Light & Clean Design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {benefits.map((benefit, index) => (
            <Link href={`/member-exclusive-discount/${benefit.slug}`} key={index}>
              <div
                className="group bg-white rounded-2xl p-6 text-center
                         hover:shadow-xl transition-all duration-300
                         transform hover:-translate-y-1
                         border border-gray-200 hover:border-blue-300
                         shadow-sm cursor-pointer"
              >
                {/* Simple Icon with Light Glow */}
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {benefit.icon}
                  </span>
                </div>

                <h3 className="text-gray-800 font-semibold text-sm mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {benefit.title}
                </h3>

                {benefit.discount && (
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {benefit.discount}
                  </div>
                )}

                {/* Simple Underline Effect */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-x-1/2 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - Light & Clean */}
        <div className="text-center mt-12">
          <Link href="/member/join">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Become a Member Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}