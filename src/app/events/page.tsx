"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date (change this to your desired launch date)
  const targetDate = new Date('April 15, 2026 00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Back Button */}
        <div className="mb-8 text-left">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg animate-pulse">
            <span className="text-5xl">📅</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We're working hard to bring you exciting events and opportunities.
            Stay tuned for updates!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-sm text-white/80">Days</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-sm text-white/80">Hours</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-4 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-sm text-white/80">Minutes</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-sm text-white/80">Seconds</div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-blue-700 text-sm">
              🚀 Exciting events launching soon! Subscribe to get notified when we go live.
            </p>
          </div>

          {/* Subscribe Button */}
          <div className="mt-6">
            <button 
              onClick={() => alert("Subscribe to get notified about upcoming events!")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}