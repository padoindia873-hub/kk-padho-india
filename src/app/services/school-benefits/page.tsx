"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SchoolBenefitsPage() {
  const router = useRouter();

  // School partnership benefits data
  const partnershipBenefits = [
    { title: "Brand Recognition", desc: "Get featured on our platform with verified school badge", icon: "🏆" },
    { title: "Student Referrals", desc: "Receive qualified student leads and enrollment support", icon: "👥" },
    { title: "Infrastructure Support", desc: "Access to development grants and facility upgrades", icon: "🏗️" },
    { title: "Teacher Training", desc: "Free professional development workshops for staff", icon: "👨‍🏫" },
    { title: "Digital Resources", desc: "Free access to digital learning materials and tools", icon: "💻" },
    { title: "Annual Awards", desc: "Recognition at annual education summit", icon: "🏅" }
  ];

  // Student exposure opportunities
  const exposureOpportunities = [
    { title: "Industrial Visits", desc: "Exclusive tours to leading companies and industries" },
    { title: "Exchange Programs", desc: "Student exchange with partner schools nationally" },
    { title: "Competitions", desc: "Participate in state and national level competitions" },
    { title: "Guest Lectures", desc: "Interactive sessions with industry experts" },
    { title: "Internships", desc: "Early internship opportunities for senior students" },
    { title: "Career Fairs", desc: "Connect with top colleges and employers" }
  ];

  // Scholarship access details
  const scholarshipAccess = [
    { name: "Merit Scholarship", amount: "Up to 100%", criteria: "Top 10% academic performers" },
    { name: "Need-Based Aid", amount: "Up to 80%", criteria: "Family income below ₹3 LPA" },
    { name: "Sports Excellence", amount: "Up to 70%", criteria: "State/National level athletes" },
    { name: "Girl Child Scholarship", amount: "Up to 90%", criteria: "Female students with good academics" },
    { name: "Minority Scholarship", amount: "Up to 85%", criteria: "Minority community students" },
    { name: "Special Talent", amount: "Up to 95%", criteria: "Art, music, or innovation excellence" }
  ];

  // Events participation
  const events = [
    { name: "Annual Sports Meet", month: "January", type: "Sports", participants: "500+" },
    { name: "Science Exhibition", month: "February", type: "Academic", participants: "300+" },
    { name: "Cultural Fest", month: "August", type: "Cultural", participants: "800+" },
    { name: "Tech Symposium", month: "October", type: "Technology", participants: "400+" },
    { name: "Debate Competition", month: "November", type: "Literary", participants: "200+" },
    { name: "Art & Craft Mela", month: "December", type: "Creative", participants: "350+" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">🏫</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            School Benefits
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive benefits, opportunities, and resources for your school and students through our partnership program
          </p>
        </div>

        {/* 1. School Partnership Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🤝</span> School Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnershipBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Student Exposure Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🌍</span> Student Exposure Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {exposureOpportunities.map((opportunity, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{opportunity.title}</h3>
                    <p className="text-gray-500 text-sm">{opportunity.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Scholarship Access */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">💰</span> Scholarship Access
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {scholarshipAccess.map((scholarship, idx) => (
                <div key={idx} className="p-5">
                  <div className="text-2xl mb-2">
                    {idx === 0 && "🏅"}
                    {idx === 1 && "❤️"}
                    {idx === 2 && "⚽"}
                    {idx === 3 && "👧"}
                    {idx === 4 && "⭐"}
                    {idx === 5 && "🎨"}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{scholarship.name}</h3>
                  <p className="text-green-600 font-bold text-lg mb-2">{scholarship.amount}</p>
                  <p className="text-gray-500 text-sm">{scholarship.criteria}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 text-center border border-green-200">
            <p className="text-gray-700 text-sm">🎯 <strong>Total Scholarship Pool:</strong> ₹50,00,000+ annually | 500+ scholarships awarded every year</p>
          </div>
        </div>

        {/* 4. Events Participation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎉</span> Events Participation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{event.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{event.type}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span>📅 {event.month}</span>
                  <span>👥 {event.participants}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Open for all partner schools</p>
              </div>
            ))}
          </div>
          
          {/* Upcoming Events Highlight */}
          <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-5 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">🎪 Next Big Event: Annual Sports Meet 2025</h3>
                <p className="text-green-100">Register your school before January 15, 2025</p>
              </div>
              <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                Register Now →
              </button>
            </div>
          </div>
        </div>

        {/* Additional Benefits Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-green-100">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-gray-800">100+</div>
            <div className="text-sm text-gray-500">Partner Schools</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-green-100">
            <div className="text-3xl mb-2">👨‍🎓</div>
            <div className="text-2xl font-bold text-gray-800">25,000+</div>
            <div className="text-sm text-gray-500">Students Benefited</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-green-100">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-800">50+</div>
            <div className="text-sm text-gray-500">Events Organized</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Thank you for your interest! Our partnership team will contact you within 48 hours.")} 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => alert("Download our school partnership brochure with complete benefit details.")} 
              className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-green-300"
            >
              Download Brochure
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Join our growing network of partner schools • Limited slots available for 2025-26 academic year
          </p>
        </div>
      </div>
    </section>
  );
}