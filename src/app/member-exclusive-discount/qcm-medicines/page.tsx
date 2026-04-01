"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QCMMedicinesPage() {
  const router = useRouter();
  const [medicineName, setMedicineName] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');

  // Medicine ordering options
  const medicineCategories = [
    { id: 1, name: "Prescription Medicines", icon: "📋", discount: "Up to 70%", delivery: "Same Day" },
    { id: 2, name: "OTC Medicines", icon: "💊", discount: "Up to 50%", delivery: "Same Day" },
    { id: 3, name: "Healthcare Devices", icon: "🩺", discount: "Up to 40%", delivery: "2-3 Days" },
    { id: 4, name: "Wellness Products", icon: "🌿", discount: "Up to 45%", delivery: "2-3 Days" }
  ];

  // Healthcare support services
  const healthcareSupport = [
    { icon: "👨‍⚕️", title: "24/7 Pharmacist", desc: "Consult with certified pharmacists anytime" },
    { icon: "📞", title: "Health Helpline", desc: "Free medical advice and guidance" },
    { icon: "📄", title: "Prescription Upload", desc: "Easy prescription upload and verification" },
    { icon: "🚚", title: "Free Delivery", desc: "Free home delivery on all orders" },
    { icon: "💳", title: "Insurance Support", desc: "Cashless insurance claim assistance" },
    { icon: "🔄", title: "Easy Returns", desc: "Hassle-free return policy" }
  ];

  const checkAvailability = () => {
    if (medicineName.trim()) {
      setAvailabilityStatus(`✓ ${medicineName} is available at our nearest store. Delivery in 2-3 hours!`);
    } else {
      setAvailabilityStatus('Please enter medicine name to check availability');
    }
  };

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-2xl mb-6 mx-auto">
            <span className="text-5xl">💊</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            QCM Medicines
          </h1>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality Care Medicines - Get authentic medicines at affordable prices with doorstep delivery
          </p>
        </div>

        {/* 1. Medicine Ordering */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">💊</span> Order Medicines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {medicineCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-green-600 font-bold text-sm mb-1">{category.discount} OFF</p>
                <p className="text-gray-500 text-xs mb-3">Delivery: {category.delivery}</p>
                <button 
                  onClick={() => alert(`Order ${category.name} - You'll be redirected to complete your purchase.`)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Availability Check */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🔍</span> Check Medicine Availability
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">Medicine Name</label>
                <input 
                  type="text" 
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  placeholder="Enter medicine name (e.g., Paracetamol, Amoxicillin)" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400"
                />
              </div>
              <div className="flex items-end">
                <button 
                  onClick={checkAvailability}
                  className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  Check Availability
                </button>
              </div>
            </div>
            {availabilityStatus && (
              <div className={`mt-4 p-3 rounded-lg ${availabilityStatus.includes('available') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                {availabilityStatus}
              </div>
            )}
          </div>
        </div>

        {/* 3. Healthcare Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🏥</span> Healthcare Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthcareSupport.map((support, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{support.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{support.title}</h3>
                    <p className="text-gray-500 text-sm">{support.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prescription Upload Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-3xl mb-2">📄</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Upload Prescription</h3>
                <p className="text-gray-600 text-sm">Upload your doctor's prescription for prescription medicines</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => alert("Upload prescription feature - Please select your prescription file")}
                  className="bg-white text-green-600 px-6 py-3 rounded-xl font-medium hover:shadow-md transition-all border border-green-200"
                >
                  Choose File
                </button>
                <button 
                  onClick={() => alert("Prescription uploaded successfully! Our pharmacist will review and contact you.")}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">💊</div>
            <div className="text-2xl font-bold text-gray-800">10,000+</div>
            <div className="text-sm text-gray-500">Medicines Available</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🚚</div>
            <div className="text-2xl font-bold text-gray-800">2-3 Hours</div>
            <div className="text-sm text-gray-500">Delivery Time</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800">4.9/5</div>
            <div className="text-sm text-gray-500">Customer Rating</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Order medicines now! Get up to 70% off with membership.")} 
            className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-md"
          >
            Order Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Free delivery • Authentic medicines • 24/7 pharmacist support
          </p>
        </div>
      </div>
    </section>
  );
}