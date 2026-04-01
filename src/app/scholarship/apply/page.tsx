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
    qualification: '',
    institution: '',
    course: '',
    percentage: '',
    income: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🎉 Scholarship application submitted successfully! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
      qualification: '',
      institution: '',
      course: '',
      percentage: '',
      income: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0e1a] via-[#0f1422] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-all duration-300 group"
          >
            <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium text-sm sm:text-base">Back to Programs</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative text-center px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-4 sm:mb-6 shadow-2xl">
              <span className="text-4xl sm:text-5xl">🎓</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-400 via-amber-500 to-blue-400 bg-clip-text text-transparent">
              Apply for Scholarship
            </h1>
            <div className="w-20 h-0.5 sm:w-24 bg-gradient-to-r from-amber-400 to-blue-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Unlock your potential with our merit-based and need-based scholarship programs
            </p>
          </div>
        </div>

        {/* Three Info Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Direct application form */}
          <div className="group relative bg-gradient-to-br from-[#111827] to-[#0f1422] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-500/20 hover:border-amber-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <span className="text-2xl sm:text-3xl">📝</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Direct application form
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Simple and straightforward application process. Fill your personal and academic details to apply for scholarship.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-amber-400 bg-amber-400/10 px-2 sm:px-3 py-1 rounded-full border border-amber-400/20">
                  ✓ Quick submission
                </span>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-400 bg-blue-400/10 px-2 sm:px-3 py-1 rounded-full border border-blue-400/20">
                  ✓ Instant confirmation
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Instructions */}
          <div className="group relative bg-gradient-to-br from-[#111827] to-[#0f1422] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-500/20 hover:border-amber-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <span className="text-2xl sm:text-3xl">📌</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Instructions
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>Fill all mandatory fields (*)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>Provide accurate academic details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>Double-check contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>Submit before deadline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">✦</span>
                  <span>Keep reference number for future</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Document upload */}
          <div className="group relative bg-gradient-to-br from-[#111827] to-[#0f1422] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-500/20 hover:border-amber-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <span className="text-2xl sm:text-3xl">📎</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Document upload
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Previous marksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Income certificate (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Aadhar card / ID proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Passport size photograph</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Category certificate (if applicable)</span>
                </li>
              </ul>
              <div className="mt-4 p-2 sm:p-3 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-lg sm:rounded-xl border border-amber-500/20 text-center">
                <p className="text-xs text-amber-400 font-medium">
                  📁 Upload documents after submission
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0f1422] rounded-xl sm:rounded-2xl shadow-2xl border border-amber-500/20 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 sm:px-8 py-5 sm:py-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Scholarship Application Form
            </h2>
            <p className="text-amber-100 text-sm sm:text-base mt-1">Please fill in all required details accurately</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              
              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Date of Birth <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Address <span className="text-amber-400">*</span>
                </label>
                <textarea 
                  name="address" 
                  required 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows={2} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Qualification <span className="text-amber-400">*</span>
                </label>
                <select 
                  name="qualification" 
                  required 
                  value={formData.qualification} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base"
                >
                  <option value="">Select qualification</option>
                  <option value="10">Class 10</option>
                  <option value="12">Class 12</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Institution/College <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="institution" 
                  required 
                  value={formData.institution} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="Your institution name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Course/Stream <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="course" 
                  required 
                  value={formData.course} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="Course or stream"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Percentage/GPA <span className="text-amber-400">*</span>
                </label>
                <input 
                  type="text" 
                  name="percentage" 
                  required 
                  value={formData.percentage} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base placeholder:text-gray-500"
                  placeholder="e.g., 85% or 8.5 CGPA"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                  Annual Family Income <span className="text-amber-400">*</span>
                </label>
                <select 
                  name="income" 
                  required 
                  value={formData.income} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg sm:rounded-xl focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all text-white text-sm sm:text-base"
                >
                  <option value="">Select income range</option>
                  <option value="<1">Less than ₹1 Lakh</option>
                  <option value="1-2">₹1 - 2 Lakhs</option>
                  <option value="2-3">₹2 - 3 Lakhs</option>
                  <option value="3-5">₹3 - 5 Lakhs</option>
                  <option value=">5">More than ₹5 Lakhs</option>
                </select>
              </div>
            </div>

            {/* Responsive Submit Button */}
            <div className="mt-8 sm:mt-10">
              <button 
                type="submit" 
                className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:w-full"></span>
                <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Application
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          
          <div className="bg-[#0a0e1a] px-6 sm:px-8 py-4 border-t border-amber-500/20">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              * All fields are mandatory • Documents will be verified after submission • Application review takes 7-10 business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}