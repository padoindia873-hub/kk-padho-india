"use client";

import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Elements - Solid Colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Main Quote */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-4 leading-relaxed">
            "Let us and you together build the future of our children"
          </p>
          <p className="text-lg md:text-xl text-white">
            who are the resources of our country, the pillars of our nation, and the future of India.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-blue-700 rounded-3xl p-8 mb-8 shadow-xl border-2 border-blue-400">
          <div className="inline-block bg-yellow-400 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
            ✨ LIMITED SEATS ✨
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Padho India Free Tuition
          </h3>
          
          <p className="text-xl text-yellow-300 font-semibold mb-2">
            Achieve your dreams with 100% free education
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">📅 2025-2026</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">🎯 All India</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">🚀 Online/Offline</span>
          </div>
          
          <Link 
            href="/register"
            className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-yellow-300"
          >
            Register Now — It's Free!
          </Link>
          
          <p className="text-blue-200 text-sm mt-4">No registration fees • No hidden charges</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-700 rounded-xl p-4 border border-blue-500">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-blue-200 text-sm">Students</div>
          </div>
          <div className="bg-blue-700 rounded-xl p-4 border border-blue-500">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-blue-200 text-sm">Courses</div>
          </div>
          <div className="bg-blue-700 rounded-xl p-4 border border-blue-500">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-blue-200 text-sm">Mentors</div>
          </div>
          <div className="bg-blue-700 rounded-xl p-4 border border-blue-500">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-blue-200 text-sm">Free</div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link href="/scholarship" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">🎓</span>
            <span className="text-white text-xs font-medium">Higher Education</span>
          </Link>
          
          <Link href="/scholarship/online" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">📱</span>
            <span className="text-white text-xs font-medium">Online Info</span>
          </Link>
          
          <Link href="/register" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">📝</span>
            <span className="text-white text-xs font-medium">Registration</span>
          </Link>
          
          <Link href="/about/degrees" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">📜</span>
            <span className="text-white text-xs font-medium">All Degrees</span>
          </Link>
          
          <Link href="/scholarship/record" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">📊</span>
            <span className="text-white text-xs font-medium">Scholarship Record</span>
          </Link>
          
          <Link href="/events/live" className="bg-blue-700 rounded-xl p-3 hover:bg-blue-800 transition-all duration-300 border border-blue-500">
            <span className="text-2xl mb-1 block">📺</span>
            <span className="text-white text-xs font-medium">Live Streaming</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          <span className="text-blue-200 text-sm flex items-center gap-1">
            <span className="text-yellow-300">✓</span> Government Registered
          </span>
          <span className="text-blue-200 text-sm flex items-center gap-1">
            <span className="text-yellow-300">✓</span> ISO Certified
          </span>
          <span className="text-blue-200 text-sm flex items-center gap-1">
            <span className="text-yellow-300">✓</span> 10+ Years Trust
          </span>
        </div>
      </div>
    </section>
  );
}