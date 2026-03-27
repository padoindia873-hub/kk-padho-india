"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ScholarshipApplyPage() {
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
    qualification: '',
    institution: '',
    course: '',
    percentage: '',
    income: '',
    caste: '',
    aadhar: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Scholarship application submitted successfully! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      qualification: '',
      institution: '',
      course: '',
      percentage: '',
      income: '',
      caste: '',
      aadhar: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Scholarship Programs</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-3xl mb-6 mx-auto border border-yellow-400/50 shadow-xl">
            <span className="text-7xl">🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Apply for Scholarship
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the application form to apply for merit-based and need-based scholarships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📋 Scholarship Details</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Merit-based: Up to 100% fee waiver</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Need-based: Up to 80% fee waiver</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Sports scholarship: Up to 70% fee waiver</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Girl child education: Up to 90% fee waiver</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">✓</span><span>Monthly stipend for top performers</span></li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">✅ Eligibility Criteria</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Minimum 60% marks in last examination</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Family income less than ₹3 LPA (for need-based)</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Indian citizens only</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Students from class 8 to Post Graduation</span></li>
              <li className="flex items-start gap-3 text-gray-300"><span className="text-yellow-400 mt-1">•</span><span>Valid ID proof required</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mt-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Scholarship Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block text-gray-300 mb-2">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Enter full name" /></div>
              <div><label className="block text-gray-300 mb-2">Email Address *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="your@email.com" /></div>
              <div><label className="block text-gray-300 mb-2">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="+91 98765 43210" /></div>
              <div><label className="block text-gray-300 mb-2">Date of Birth *</label><input type="date" name="dob" required value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" /></div>
              <div><label className="block text-gray-300 mb-2">Address *</label><textarea name="address" required value={formData.address} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Enter your address"></textarea></div>
              <div><label className="block text-gray-300 mb-2">City *</label><input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Your city" /></div>
              <div><label className="block text-gray-300 mb-2">State *</label><input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Your state" /></div>
              <div><label className="block text-gray-300 mb-2">Pincode *</label><input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="6-digit pincode" /></div>
              <div><label className="block text-gray-300 mb-2">Qualification *</label><select name="qualification" required value={formData.qualification} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"><option value="">Select qualification</option><option value="10">Class 10</option><option value="12">Class 12</option><option value="graduate">Graduate</option><option value="postgraduate">Post Graduate</option></select></div>
              <div><label className="block text-gray-300 mb-2">Institution/College *</label><input type="text" name="institution" required value={formData.institution} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Your institution name" /></div>
              <div><label className="block text-gray-300 mb-2">Course/Stream *</label><input type="text" name="course" required value={formData.course} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="Course or stream" /></div>
              <div><label className="block text-gray-300 mb-2">Percentage/GPA *</label><input type="text" name="percentage" required value={formData.percentage} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="e.g., 85% or 8.5 CGPA" /></div>
              <div><label className="block text-gray-300 mb-2">Annual Family Income *</label><select name="income" required value={formData.income} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"><option value="">Select income range</option><option value="<1">Less than ₹1 Lakh</option><option value="1-2">₹1-2 Lakhs</option><option value="2-3">₹2-3 Lakhs</option><option value="3-5">₹3-5 Lakhs</option><option value=">5">More than ₹5 Lakhs</option></select></div>
              <div><label className="block text-gray-300 mb-2">Caste Category</label><select name="caste" value={formData.caste} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"><option value="">Select category</option><option value="general">General</option><option value="obc">OBC</option><option value="sc">SC</option><option value="st">ST</option><option value="other">Other</option></select></div>
              <div><label className="block text-gray-300 mb-2">Aadhar Number *</label><input type="text" name="aadhar" required value={formData.aadhar} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none" placeholder="12-digit Aadhar number" /></div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">Submit Application</button>
          </form>
        </div>
      </div>
    </section>
  );
}