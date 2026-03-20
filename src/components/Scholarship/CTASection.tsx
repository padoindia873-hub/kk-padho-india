"use client";

import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Bengali Text */}
        <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-6 font-bengali">
          চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি
        </p>
        
        <p className="text-xl text-white mb-4">
          Let us and you together build the future of our children
        </p>
        
        <p className="text-lg text-blue-100 mb-8">
          who are the resources of our country, the pillars of our country, and the future of our country.
        </p>

        {/* Main CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Padho India Free Tuition
          </h3>
          <p className="text-xl text-yellow-300 mb-4">
            Achieve your dreams with 100% free education.
          </p>
          <p className="text-lg text-white mb-6">
            Enroll now for the 2025-2026 session!
          </p>
          <Link 
            href="/register"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Register Now
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link href="/scholarship" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">🎓</span>
            <span className="text-white font-semibold">Higher Education</span>
          </Link>
          <Link href="/scholarship/online" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">📱</span>
            <span className="text-white font-semibold">Online Info</span>
          </Link>
          <Link href="/register" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">📝</span>
            <span className="text-white font-semibold">Registration Form</span>
          </Link>
          <Link href="/about/degrees" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">📜</span>
            <span className="text-white font-semibold">About All Degrees</span>
          </Link>
          <Link href="/scholarship/record" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">📊</span>
            <span className="text-white font-semibold">Scholarship Record</span>
          </Link>
          <Link href="/events/live" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
            <span className="text-3xl mb-2 block">📺</span>
            <span className="text-white font-semibold">Event Live Streaming</span>
          </Link>
        </div>
      </div>
    </section>
  );
}