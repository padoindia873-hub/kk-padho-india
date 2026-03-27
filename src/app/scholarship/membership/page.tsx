"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MembershipPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    aadhar: '',
    membershipType: 'basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Membership application submitted! Your card will be delivered in 7-10 days.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      aadhar: '',
      membershipType: 'basic'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Scholarship Programs</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl mb-6 mx-auto border border-purple-400/50 shadow-xl">
            <span className="text-7xl">💳</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Get Membership Card
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your exclusive membership card and unlock premium benefits, discounts, and priority access to all our services.
          </p>
        </div>

        {/* Membership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold text-white mb-2">Scholarship Access</h3>
            <p className="text-gray-400 text-sm">Priority access to all scholarship programs</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Up to 70% Discount</h3>
            <p className="text-gray-400 text-sm">On all partner services and programs</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-white mb-2">Free Resources</h3>
            <p className="text-gray-400 text-sm">Access to premium study materials</p>
          </div>
        </div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Basic</h3>
            <p className="text-3xl font-bold text-white mb-4">Free</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300 text-sm">✓ Limited benefits</li>
              <li className="text-gray-300 text-sm">✓ Basic resources</li>
              <li className="text-gray-300 text-sm">✓ Email support</li>
              <li className="text-gray-400 text-sm">✗ Priority access</li>
              <li className="text-gray-400 text-sm">✗ Premium discounts</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/50 hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105">
            <div className="absolute -mt-3 ml-2 px-2 py-1 bg-purple-500 text-white text-xs rounded-full">Popular</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Premium</h3>
            <p className="text-3xl font-bold text-white mb-4">₹999/<span className="text-sm">year</span></p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300 text-sm">✓ All benefits included</li>
              <li className="text-gray-300 text-sm">✓ Up to 70% discount</li>
              <li className="text-gray-300 text-sm">✓ Priority support</li>
              <li className="text-gray-300 text-sm">✓ Exclusive events access</li>
              <li className="text-gray-300 text-sm">✓ Free study materials</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Family</h3>
            <p className="text-3xl font-bold text-white mb-4">₹1499/<span className="text-sm">year</span></p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300 text-sm">✓ Up to 4 family members</li>
              <li className="text-gray-300 text-sm">✓ All premium benefits</li>
              <li className="text-gray-300 text-sm">✓ Shared resources</li>
              <li className="text-gray-300 text-sm">✓ Family events access</li>
              <li className="text-gray-300 text-sm">✓ Group discounts</li>
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Membership Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Address *</label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Your city"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Your state"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="6-digit pincode"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Aadhar Number *</label>
                <input
                  type="text"
                  name="aadhar"
                  required
                  value={formData.aadhar}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                  placeholder="12-digit Aadhar number"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Membership Type *</label>
                <select
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"
                >
                  <option value="basic">Basic - Free</option>
                  <option value="premium">Premium - ₹999/year</option>
                  <option value="family">Family - ₹1499/year</option>
                  <option value="student">Student - ₹499/year (Special)</option>
                  <option value="lifetime">Lifetime - ₹4999 (One-time)</option>
                </select>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 text-purple-500" />
                <span className="text-gray-300 text-sm">I agree to the terms and conditions and confirm that all information provided is correct</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply for Membership Card
            </button>
          </form>
        </div>

        {/* Digital Card Preview */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => alert("Digital card preview coming soon!")}
            className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Preview Digital Card
          </button>
          <p className="text-gray-400 text-sm mt-4">Physical card delivered within 7-10 days • Digital card instantly available</p>
        </div>
      </div>
    </section>
  );
}