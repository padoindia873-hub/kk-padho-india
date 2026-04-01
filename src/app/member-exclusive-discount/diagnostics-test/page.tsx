"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DiagnosticsTestPage() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  // Blood tests & checkups
  const bloodTests = [
    { id: 1, name: "Complete Blood Count (CBC)", price: "₹499", discount: "₹299", duration: "6-8 hrs", icon: "🩸" },
    { id: 2, name: "Blood Sugar (Fasting)", price: "₹199", discount: "₹99", duration: "4-6 hrs", icon: "🍬" },
    { id: 3, name: "Thyroid Profile", price: "₹599", discount: "₹349", duration: "8-10 hrs", icon: "🦋" },
    { id: 4, name: "Lipid Profile", price: "₹699", discount: "₹399", duration: "8-10 hrs", icon: "❤️" },
    { id: 5, name: "Vitamin D & B12", price: "₹899", discount: "₹499", duration: "12-24 hrs", icon: "💊" },
    { id: 6, name: "Liver Function Test", price: "₹799", discount: "₹449", duration: "8-10 hrs", icon: "🧪" }
  ];

  // Health packages
  const healthPackages = [
    { id: 1, name: "Basic Wellness", tests: "40+", price: "₹2,999", discount: "₹1,499", icon: "🏥" },
    { id: 2, name: "Advanced Wellness", tests: "70+", price: "₹4,999", discount: "₹2,499", icon: "⭐" },
    { id: 3, name: "Full Body Checkup", tests: "90+", price: "₹7,999", discount: "₹3,999", icon: "🩺" },
    { id: 4, name: "Heart Care Package", tests: "25+", price: "₹3,499", discount: "₹1,749", icon: "❤️" },
    { id: 5, name: "Diabetes Care", tests: "15+", price: "₹1,999", discount: "₹999", icon: "🍬" },
    { id: 6, name: "Women Health", tests: "35+", price: "₹3,999", discount: "₹1,999", icon: "👩" }
  ];

  // Booking steps
  const bookingSteps = [
    { step: 1, title: "Select Test", desc: "Choose from 100+ tests or packages" },
    { step: 2, title: "Schedule", desc: "Pick date & time for sample collection" },
    { step: 3, title: "Pay Online", desc: "Apply membership discount" },
    { step: 4, title: "Collection", desc: "Sample collected at home" }
  ];

  const handleBookTest = () => {
    if (selectedPackage) {
      alert(`Test booked successfully! Your appointment is confirmed for ${bookingDate || 'as per schedule'}.`);
    } else {
      alert('Please select a test or package to book');
    }
  };

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-cyan-100 rounded-2xl mb-6 mx-auto">
            <span className="text-5xl">🔬</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Diagnostics Test
          </h1>
          
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accurate diagnostics with home sample collection. Get reports within 24 hours.
          </p>
        </div>

        {/* 1. Blood Tests & Checkups */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🩸</span> Blood Tests & Checkups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bloodTests.map((test) => (
              <div key={test.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{test.icon}</div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{test.name}</h3>
                <p className="text-gray-500 text-xs mb-2">Results in: {test.duration}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-sm">{test.price}</span>
                  <span className="text-cyan-600 font-bold text-lg">{test.discount}</span>
                </div>
                <button 
                  onClick={() => setSelectedPackage(test.name)}
                  className="w-full bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Health Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🏥</span> Health Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthPackages.map((pkg) => (
              <div key={pkg.id} className="bg-gradient-to-r from-cyan-50 to-white rounded-xl p-5 shadow-sm border border-cyan-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{pkg.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{pkg.tests} tests included</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-sm">{pkg.price}</span>
                  <span className="text-cyan-600 font-bold text-xl">{pkg.discount}</span>
                </div>
                <button 
                  onClick={() => setSelectedPackage(pkg.name)}
                  className="w-full bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Booking System */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📅</span> Booking System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {bookingSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-cyan-600 font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Book Your Test</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Select Test/Package</label>
                <select 
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Choose a test or package</option>
                  <option value="CBC">Complete Blood Count (CBC) - ₹299</option>
                  <option value="Thyroid">Thyroid Profile - ₹349</option>
                  <option value="Basic Wellness">Basic Wellness Package - ₹1,499</option>
                  <option value="Full Body">Full Body Checkup - ₹3,999</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
            <button 
              onClick={handleBookTest}
              className="mt-4 w-full bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors"
            >
              Book Test Now
            </button>
          </div>
        </div>

        {/* 4. Report Access */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📊</span> Report Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-gray-800">Download Reports</h3>
              <p className="text-gray-500 text-sm mt-1">Access reports anytime from app/website</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-800">Email Delivery</h3>
              <p className="text-gray-500 text-sm mt-1">Reports sent to registered email</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-800">Doctor Consultation</h3>
              <p className="text-gray-500 text-sm mt-1">Free consultation with report analysis</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🔬</div>
            <div className="text-2xl font-bold text-gray-800">100+</div>
            <div className="text-sm text-gray-500">Tests Available</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🏠</div>
            <div className="text-2xl font-bold text-gray-800">Free Home</div>
            <div className="text-sm text-gray-500">Sample Collection</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-gray-800">24 Hours</div>
            <div className="text-sm text-gray-500">Report Delivery</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Book your diagnostic test now! Get 50% off on all tests.")} 
            className="bg-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-md"
          >
            Book Test
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Free home collection • Accurate reports • NABL accredited labs
          </p>
        </div>
      </div>
    </section>
  );
}