"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Videos/study1.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Decorative Elements - Light Effects */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
          <span className="text-white text-sm font-medium tracking-wider">🎯 LIMITED TIME OFFER</span>
        </div>
        
        {/* Main Quote */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            "Let us together build the <br />
            <span className="text-yellow-300">future of our children</span>"
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            They are the resources of our country, the pillars of our nation, 
            and the future of India.
          </p>
        </div>

        {/* Main CTA Card - Glass Effect */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 mb-10 shadow-2xl border border-white/20">
          
          {/* Countdown Timer Badge */}
          <div className="flex justify-center gap-3 mb-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">15 Days Left</span>
            <span className="bg-blue-500/30 text-white px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm">2025-2026</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Padho India <span className="text-yellow-300">Free Tuition</span>
          </h3>
          
          <p className="text-xl text-yellow-200 font-semibold mb-4">
            Achieve your dreams with 100% free education
          </p>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
              📚 Live Classes
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
              🎯 Expert Mentors
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
              📝 Study Material
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
              🏆 Certificates
            </span>
          </div>
          
          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register Now — It's Free!
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <p className="text-gray-300 text-sm mt-4 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
            No registration fees • No hidden charges
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
          </p>
        </div>

        {/* Quick Stats with Glass Effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-gray-300 text-sm">Happy Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-gray-300 text-sm">Courses</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-300 text-sm">Expert Mentors</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-300 text-sm">Free Education</div>
          </div>
        </div>

        {/* Quick Links Grid - Glass Effect */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <Link href="/scholarship" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">🎓</span>
            <span className="text-white text-xs font-medium">Higher Education</span>
          </Link>
          
          <Link href="/scholarship/online" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">📱</span>
            <span className="text-white text-xs font-medium">Online Info</span>
          </Link>
          
          <Link href="/register" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">📝</span>
            <span className="text-white text-xs font-medium">Registration</span>
          </Link>
          
          <Link href="/about/degrees" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">📜</span>
            <span className="text-white text-xs font-medium">All Degrees</span>
          </Link>
          
          <Link href="/scholarship/record" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">📊</span>
            <span className="text-white text-xs font-medium">Scholarship Record</span>
          </Link>
          
          <Link href="/events/live" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <span className="text-3xl mb-1 block">📺</span>
            <span className="text-white text-xs font-medium">Live Streaming</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <span className="text-gray-300 text-sm flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Government Registered
          </span>
          <span className="text-gray-300 text-sm flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            ISO Certified
          </span>
          <span className="text-gray-300 text-sm flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            10+ Years Trust
          </span>
        </div>
      </div>
    </section>
  );
}