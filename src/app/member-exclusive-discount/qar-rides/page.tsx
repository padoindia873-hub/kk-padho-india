"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QARRidesPage() {
  const router = useRouter();
  const [rideType, setRideType] = useState('');

  // Emergency rides data
  const emergencyRides = [
    { id: 1, type: "Medical Emergency", response: "5-10 mins", icon: "🚑", color: "red" },
    { id: 2, type: "Accident Support", response: "10-15 mins", icon: "🚨", color: "orange" },
    { id: 3, type: "Women Safety Ride", response: "5-8 mins", icon: "👩", color: "pink" },
    { id: 4, type: "Late Night Ride", response: "8-12 mins", icon: "🌙", color: "purple" }
  ];

  // Hospital transport data
  const hospitalTransport = [
    { id: 1, title: "Ambulance Service", desc: "24/7 professional ambulance with medical staff", icon: "🚑" },
    { id: 2, title: "Patient Transport", desc: "Non-emergency transport for appointments", icon: "🛌" },
    { id: 3, title: "Wheelchair Accessible", desc: "Specially equipped vehicles for wheelchair users", icon: "♿" },
    { id: 4, title: "Oxygen Support", desc: "Vehicles with portable oxygen cylinders", icon: "💨" }
  ];

  // Safe travel features
  const safeTravelFeatures = [
    { icon: "👮", title: "Verified Drivers", desc: "Background checked and trained drivers" },
    { icon: "📍", title: "Live Tracking", desc: "Real-time ride tracking and sharing" },
    { icon: "🔒", title: "SOS Button", desc: "Emergency alert during ride" },
    { icon: "📞", title: "24/7 Support", desc: "Round-the-clock customer assistance" },
    { icon: "⭐", title: "Ride Rating", desc: "Rate your driver after each ride" },
    { icon: "🛡️", title: "Insurance Cover", desc: "Accident insurance for all passengers" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-2xl mb-6 mx-auto">
            <span className="text-5xl">🚗</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            QAR Rides
          </h1>
          
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick Affordable Rides - Safe, reliable, and affordable transportation for all your needs
          </p>
        </div>

        {/* 1. Emergency Rides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🚨</span> Emergency Rides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencyRides.map((ride) => (
              <div key={ride.id} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className={`text-4xl mb-3`}>{ride.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{ride.type}</h3>
                <p className="text-sm text-gray-500 mb-3">Response: {ride.response}</p>
                <button 
                  onClick={() => alert(`Emergency ${ride.type} ride requested! Driver will arrive in ${ride.response}.`)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Request Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Hospital Transport */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🏥</span> Hospital Transport
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hospitalTransport.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{service.desc}</p>
                <button 
                  onClick={() => alert(`Booking ${service.title} - Our team will contact you shortly.`)}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Safe Travel Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🛡️</span> Safe Travel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {safeTravelFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ride Booking Form */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Book Your Ride</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Pickup Location</label>
                <input 
                  type="text" 
                  placeholder="Enter pickup address" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Drop Location</label>
                <input 
                  type="text" 
                  placeholder="Enter destination" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Ride Type</label>
                <select 
                  value={rideType} 
                  onChange={(e) => setRideType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                >
                  <option value="">Select ride type</option>
                  <option value="standard">Standard Ride</option>
                  <option value="emergency">Emergency Ride</option>
                  <option value="hospital">Hospital Transport</option>
                  <option value="women">Women Safe Ride</option>
                </select>
              </div>
            </div>
            <button 
              onClick={() => alert(`Your ride has been booked! Driver will arrive shortly.`)}
              className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Ride
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🚗</div>
            <div className="text-2xl font-bold text-gray-800">50,000+</div>
            <div className="text-sm text-gray-500">Rides Completed</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800">4.8/5</div>
            <div className="text-sm text-gray-500">User Rating</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🚨</div>
            <div className="text-2xl font-bold text-gray-800">10 min</div>
            <div className="text-sm text-gray-500">Avg Emergency Response</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Book your ride now! Quick, safe, and affordable.")} 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Book Ride
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Available 24/7 • Safe rides • Professional drivers
          </p>
        </div>
      </div>
    </section>
  );
}