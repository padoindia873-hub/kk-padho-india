"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GetMembershipCardPage() {
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
    alert('Membership application submitted successfully! Your card will be delivered within 7-10 business days.');
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
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-rose-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-3xl mb-6 mx-auto border border-pink-400/50 shadow-xl">
            <span className="text-7xl">💳</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Get Membership Card
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your exclusive membership card and unlock premium benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">💳 Membership Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Up to 70% discount on all services</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Free educational resources</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Priority access to events</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Exclusive scholarship opportunities</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Free career counseling sessions</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">✓</span><span>Digital membership card included</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">💎 Membership Types</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Basic - Free (Limited benefits)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Premium - ₹999/year (Full benefits)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Family - ₹1499/year (4 members)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Student - ₹499/year (Special discount)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-pink-400 mt-1">•</span><span>Lifetime - ₹4999 (One-time payment)</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">📝 Membership Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="Enter full name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Date of Birth *</label>
                  <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Address *</label>
                  <textarea name="address" required value={formData.address} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="Enter your address"></textarea>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">City *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="Your city" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">State *</label>
                  <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="Your state" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Pincode *</label>
                  <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="6-digit pincode" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Aadhar Number *</label>
                  <input type="text" name="aadhar" required value={formData.aadhar} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none" placeholder="12-digit Aadhar number" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Membership Type *</label>
                  <select name="membershipType" value={formData.membershipType} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-pink-400 focus:outline-none">
                    <option value="basic">Basic - Free</option>
                    <option value="premium">Premium - ₹999/year</option>
                    <option value="family">Family - ₹1499/year</option>
                    <option value="student">Student - ₹499/year</option>
                    <option value="lifetime">Lifetime - ₹4999</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Apply for Membership Card
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Membership card preview will be available soon!")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Preview Digital Card
          </button>
          <p className="text-gray-400 text-sm mt-4">Physical card delivered • Digital card instantly available</p>
        </div>
      </div>
    </section>
  );
}