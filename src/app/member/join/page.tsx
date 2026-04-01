"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function MemberJoinPage() {
  const router = useRouter();

  const handleBecomeMember = () => {
    alert("Thank you for choosing to become a member! Our team will contact you shortly with registration details.");
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-2xl mb-6">
            <span className="text-4xl">👥</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Become a Member Today
          </h1>
          
          <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community and unlock exclusive benefits and opportunities
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Membership benefits */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Membership benefits
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Up to 70% discount on services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Free educational resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Priority customer support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Exclusive member-only events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Special offers & rewards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Digital membership card</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Access to all services */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Access to all services
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Free medical treatment support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Scholarship opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Free IT training courses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Spoken English classes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Career counseling sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Nursing & healthcare services</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Community programs */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🌱</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Community programs
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Volunteer opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Networking events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Skill sharing workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Community meetups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Mentorship programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Social impact initiatives</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Free digital membership card
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Instant benefits activation
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-blue-600">✓</span> Family plans available
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleBecomeMember}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Become Member
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Join thousands of satisfied members • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}