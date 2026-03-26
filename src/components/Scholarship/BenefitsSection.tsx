"use client";

import React from 'react';

interface Benefit {
  title: string;
  icon: string;
  discount?: string;
  description?: string;
}

export default function BenefitsSection() {
  const facilities: Benefit[] = [
    {
      title: "Get Membership Card",
      description: "This section features the top-performing students from West Bengal in the scholarship competition.",
      icon: "💳"
    },
    {
      title: "State Level Top School List",
      description: "State Level Top School List... Official ranking of top schools across West Bengal.",
      icon: "🏆"
    },
    {
      title: "Exclusive Scholarships",
      description: "Secure scholarships that recognize and support exceptional talent, fostering academic excellence.",
      icon: "🎓"
    },
    {
      title: "National Level Top School",
      description: "Personalized coaching sessions tailored to accelerate individual growth and academic performance.",
      icon: "🏅"
    },
    {
      title: "Free Medical Treatment",
      description: "Get access to essential medical care services without any financial burden for families in need.",
      icon: "🏥"
    },
    {
      title: "Job Facilities & Vacancy",
      description: "We provide job support and vacancy connections to empower youth with employment opportunities.",
      icon: "💼"
    },
    {
      title: "Free Online Tuition (5 to 12)",
      description: "Interactive, curriculum-based online classes for students from classes 5 to 12 absolutely free.",
      icon: "📚"
    },
    {
      title: "Free Spoken English",
      description: "Improve your English communication skills and confidence with our expert-led spoken English classes.",
      icon: "🗣️"
    },
    {
      title: "Free Online IT Classes",
      description: "Join virtual IT courses and upskill yourself with trending tech skills like coding, web, and more.",
      icon: "💻"
    },
    {
      title: "Free Career Counseling",
      description: "One-on-one and group counseling sessions to help students choose the right career path.",
      icon: "🤝"
    },
    {
      title: "Legal Support (Advocate)",
      description: "Receive guidance and legal support from certified advocates for justice and protection of rights.",
      icon: "⚖️"
    }
  ];

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

        {/* Our Facilities Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider">⚡ OUR FACILITIES ⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            World-Class Facilities
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left
                         hover:bg-white/20 transition-all duration-500
                         transform hover:-translate-y-1
                         border border-white/20 shadow-lg
                         relative overflow-hidden"
              >
                <div className="flex gap-4 items-start relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-blue-600/20 transition-all duration-300">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {facility.icon}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors line-clamp-2">
                      {facility.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20"></div>

        {/* Member Perks Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider">✨ MEMBER PERKS ✨</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive Member Benefits
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>

          <p className="text-xl text-yellow-300 font-semibold">
            Up to 70% discount on various services
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* KK Raksh Kavach Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🛡️</span>
              <div className="text-left">
                <h4 className="text-white font-bold text-lg">KK Raksh Kavach</h4>
                <p className="text-yellow-300 text-sm">Beti Bachao Beta Bachao</p>
                <p className="text-gray-300 text-xs mt-1">50% discount for members</p>
              </div>
            </div>
          </div>

          {/* QAR Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🚗</span>
              <div className="text-left">
                <h4 className="text-white font-bold text-lg">QAR</h4>
                <p className="text-yellow-300 text-sm">Quick Affordable Rides</p>
                <p className="text-gray-300 text-xs mt-1">50% discount on all rides</p>
              </div>
            </div>
          </div>

          {/* QCM Medicines Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 md:col-span-2 max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-5xl">💊</span>
              <div className="text-left">
                <h4 className="text-white font-bold text-lg">QCM India's Medicine</h4>
                <p className="text-yellow-300 text-sm">Up to 70% discount</p>
                <p className="text-gray-300 text-xs mt-1">On all medicines and healthcare products</p>
              </div>
            </div>
          </div>
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