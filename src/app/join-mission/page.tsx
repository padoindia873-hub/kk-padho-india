"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function JoinMissionPage() {
  const router = useRouter();

  const handleJoinNow = () => {
    alert("Thank you for your interest! Our team will contact you soon.");
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-2xl mb-6">
            <span className="text-4xl">🤝</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join Our Mission
          </h1>
          
          <div className="w-20 h-0.5 bg-green-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be a part of our mission to empower students through education and career opportunities
          </p>
        </div>

        {/* Three Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Volunteer opportunities */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🙋‍♂️</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Volunteer opportunities
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Teaching & mentoring students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Career guidance sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Event coordination & outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Content creation & social media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Fundraising & awareness campaigns</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-green-600">Flexible timing • Remote & offline options</p>
            </div>
          </div>

          {/* Card 2: Partner programs */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🏢</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Partner programs
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Corporate sponsorship programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Educational institution collaborations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Skill development partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Corporate social responsibility (CSR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>NGO & foundation alliances</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-green-600">Join hands to create greater impact</p>
            </div>
          </div>

          {/* Card 3: Social impact */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">🌍</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Social impact
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Empower 10,000+ students annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Provide quality education access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Create employment opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Bridge the skill gap in communities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Build sustainable futures</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-green-600">Together we can make a difference</p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-green-600">✓</span> Flexible commitment
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-green-600">✓</span> Training provided
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold text-green-600">✓</span> Certificate of appreciation
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleJoinNow}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
          >
            Join Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Be the change • Make a lasting impact
          </p>
        </div>
      </div>
    </section>
  );
}