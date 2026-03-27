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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="max-w-md w-full">
        
        {/* Back Button */}
        <div className="mb-4">
          <button 
            onClick={() => router.back()}
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm"
          >
            ← Back
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          
          {/* Icon */}
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Events Coming Soon
          </h1>

          {/* Timer */}
          <div className="flex justify-center gap-3 my-4">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px]">
                <span className="text-2xl font-bold text-blue-600">{timeLeft.days}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Days</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px]">
                <span className="text-2xl font-bold text-blue-600">{timeLeft.hours}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px]">
                <span className="text-2xl font-bold text-blue-600">{timeLeft.minutes}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Mins</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px]">
                <span className="text-2xl font-bold text-blue-600">{timeLeft.seconds}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Secs</p>
            </div>
          </div>

          {/* Message */}
          <p className="text-gray-500 text-sm">
            Stay tuned for exciting events!
          </p>
        </div>
      </div>
    </section>
  );
}