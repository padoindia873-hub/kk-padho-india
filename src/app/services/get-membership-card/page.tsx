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

  // Membership benefits data
  const membershipBenefits = [
    { icon: "💰", title: "Up to 70% Discount", desc: "On all educational services and resources" },
    { icon: "📚", title: "Free Resources", desc: "Access to premium study materials and e-books" },
    { icon: "🎫", title: "Priority Access", desc: "Early registration for events and workshops" },
    { icon: "🏆", title: "Scholarship Access", desc: "Exclusive scholarship opportunities" },
    { icon: "👔", title: "Career Counseling", desc: "Free sessions with industry experts" },
    { icon: "📱", title: "Digital Card", desc: "Instant digital membership card access" }
  ];

  // Features & services access
  const featuresServices = [
    { category: "Educational", items: ["Online courses", "Video lectures", "Practice tests", "Study materials"] },
    { category: "Events", items: ["Workshops", "Seminars", "Competitions", "Career fairs"] },
    { category: "Career", items: ["Resume building", "Interview prep", "Internship leads", "Job alerts"] },
    { category: "Community", items: ["Student forums", "Mentorship program", "Alumni network", "Study groups"] }
  ];

  // Application steps
  const applicationSteps = [
    { step: 1, title: "Fill Application", desc: "Complete the online application form with your details", duration: "5 minutes" },
    { step: 2, title: "Upload Documents", desc: "Submit ID proof, address proof, and photograph", duration: "10 minutes" },
    { step: 3, title: "Payment", desc: "Pay membership fee (free for basic membership)", duration: "2 minutes" },
    { step: 4, title: "Verification", desc: "Our team verifies your details (24-48 hours)", duration: "1-2 days" },
    { step: 5, title: "Card Generation", desc: "Digital card issued & physical card dispatched", duration: "7-10 days" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">💳</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Get Membership Card
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock premium benefits, exclusive services, and endless opportunities with your membership card
          </p>
        </div>

        {/* 1. Membership Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">✨</span> Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {membershipBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Features & Services Access */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚡</span> Features & Services Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuresServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-pink-100">
                <div className="text-2xl mb-3">
                  {idx === 0 && "📖"}
                  {idx === 1 && "🎪"}
                  {idx === 2 && "💼"}
                  {idx === 3 && "👥"}
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">{service.category}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="text-pink-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Application Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📋</span> Application Steps
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-pink-200 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {applicationSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-4 text-center shadow-sm border border-pink-100 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{step.desc}</p>
                  <span className="text-xs text-pink-500 font-medium">{step.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Application Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span> Apply for Membership Card
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200" 
                  placeholder="Enter full name" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="+91 98765 43210" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Date of Birth *</label>
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2 font-medium">Address *</label>
                <textarea 
                  name="address" 
                  required 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows={2} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="Enter your complete address"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">City *</label>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  value={formData.city} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="Your city" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">State *</label>
                <input 
                  type="text" 
                  name="state" 
                  required 
                  value={formData.state} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="Your state" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Pincode *</label>
                <input 
                  type="text" 
                  name="pincode" 
                  required 
                  value={formData.pincode} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="6-digit pincode" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Aadhar Number *</label>
                <input 
                  type="text" 
                  name="aadhar" 
                  required 
                  value={formData.aadhar} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none" 
                  placeholder="12-digit Aadhar number" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Membership Type *</label>
                <select 
                  name="membershipType" 
                  value={formData.membershipType} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-pink-500 focus:outline-none"
                >
                  <option value="basic">Basic - Free (Limited benefits)</option>
                  <option value="premium">Premium - ₹999/year (Full benefits)</option>
                  <option value="family">Family - ₹1499/year (4 members)</option>
                  <option value="student">Student - ₹499/year (Special discount)</option>
                  <option value="lifetime">Lifetime - ₹4999 (One-time payment)</option>
                </select>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Apply for Card
            </button>
          </form>
        </div>

        {/* Membership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-pink-100">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-gray-800">10,000+</div>
            <div className="text-sm text-gray-500">Active Members</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-pink-100">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800">4.8/5</div>
            <div className="text-sm text-gray-500">Member Rating</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-pink-100">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-gray-800">50+</div>
            <div className="text-sm text-gray-500">Exclusive Benefits</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Membership card application form is above! Fill in your details to apply.")} 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Apply for Card
            </button>
            <button 
              onClick={() => alert("Preview your digital membership card after application submission!")} 
              className="bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-pink-300"
            >
              Preview Digital Card
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Digital card available instantly • Physical card delivered within 7-10 business days
          </p>
        </div>
      </div>
    </section>
  );
}