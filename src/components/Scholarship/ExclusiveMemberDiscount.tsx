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
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/benefit.png"
          alt="Benefits background"
          className="w-full h-full object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-amber-100/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Member Perks Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-200/90 rounded-full px-4 py-2 mb-4 border border-amber-300">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse mr-2"></span>
            <span className="text-amber-800 text-sm font-medium tracking-wider">✨ MEMBER PERKS ✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Exclusive Member Discount Benefits
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>

          <p className="text-xl text-amber-700 font-semibold">
            Up to 70% discount on various services
          </p>
        </div>

        {/* Benefits Grid with Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {benefits.map((benefit, index) => (
            <Link href={`/member-exclusive-discount/${benefit.slug}`} key={index}>
              <div
                className="group bg-amber-100/90 backdrop-blur-sm rounded-2xl p-6 text-center
                         hover:bg-amber-100 transition-all duration-500
                         transform hover:-translate-y-2 hover:scale-105
                         border border-amber-300 shadow-lg
                         relative overflow-hidden cursor-pointer"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>

                {/* Icon with Glow */}
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <span className="relative text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {benefit.icon}
                  </span>
                </div>

                <h3 className="text-gray-800 font-semibold text-base mb-2 group-hover:text-amber-700 transition-colors">
                  {benefit.title}
                </h3>

                {benefit.discount && (
                  <div className="inline-block bg-amber-500 text-amber-50 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {benefit.discount}
                  </div>
                )}

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - Now links to member join page */}
        <div className="text-center mt-12">
          <Link href="/member/join">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-amber-50 px-8 py-3 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Become a Member Today
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}