"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentsRegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    class: '',
    school: '',
    state: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration submitted successfully! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      class: '',
      school: '',
      state: '',
      city: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl mb-6 mx-auto border border-purple-400/50 shadow-xl">
            <span className="text-7xl">📝</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Students Registration</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Register yourself to avail all educational benefits and scholarships.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block text-gray-300 mb-2">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="Enter full name" /></div>
              <div><label className="block text-gray-300 mb-2">Email Address *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="your@email.com" /></div>
              <div><label className="block text-gray-300 mb-2">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="+91 98765 43210" /></div>
              <div><label className="block text-gray-300 mb-2">Class *</label><select name="class" required value={formData.class} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none"><option value="">Select class</option><option value="5">Class 5</option><option value="6">Class 6</option><option value="7">Class 7</option><option value="8">Class 8</option><option value="9">Class 9</option><option value="10">Class 10</option><option value="11">Class 11</option><option value="12">Class 12</option></select></div>
              <div><label className="block text-gray-300 mb-2">School Name *</label><input type="text" name="school" required value={formData.school} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="Enter school name" /></div>
              <div><label className="block text-gray-300 mb-2">State *</label><input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="Your state" /></div>
              <div><label className="block text-gray-300 mb-2">City *</label><input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-purple-400 focus:outline-none" placeholder="Your city" /></div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}