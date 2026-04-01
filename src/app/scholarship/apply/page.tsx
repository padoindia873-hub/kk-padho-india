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
    <section className="min-h-screen w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 group"
          >
            <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium text-sm sm:text-base">Back to Programs</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl opacity-10 blur-2xl"></div>
          <div className="relative text-center px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <span className="text-4xl sm:text-5xl">🎓</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Apply for Scholarship
            </h1>
            <div className="w-20 h-0.5 sm:w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Unlock your potential with our merit-based and need-based scholarship programs
            </p>
          </div>
        </div>

        {/* Three Info Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Direct application form */}
          <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <span className="text-2xl sm:text-3xl">📝</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Direct application form
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Simple and straightforward application process. Fill your personal and academic details to apply for scholarship.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-indigo-600 bg-indigo-50 px-2 sm:px-3 py-1 rounded-full">
                  ✓ Quick submission
                </span>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-purple-600 bg-purple-50 px-2 sm:px-3 py-1 rounded-full">
                  ✓ Instant confirmation
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Instructions */}
          <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <span className="text-2xl sm:text-3xl">📌</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Instructions
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Fill all mandatory fields (*)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Provide accurate academic details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Double-check contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Submit before deadline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Keep reference number for future</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Document upload */}
          <div className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <span className="text-2xl sm:text-3xl">📎</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Document upload
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">✓</span>
                  <span>Previous marksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">✓</span>
                  <span>Income certificate (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">✓</span>
                  <span>Aadhar card / ID proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">✓</span>
                  <span>Passport size photograph</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">✓</span>
                  <span>Category certificate (if applicable)</span>
                </li>
              </ul>
              <div className="mt-4 p-2 sm:p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl border border-indigo-100 text-center">
                <p className="text-xs text-indigo-600 font-medium">
                  📁 Upload documents after submission
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form - Enhanced with Responsive Submit Button */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-8 py-5 sm:py-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Scholarship Application Form
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base mt-1">Please fill in all required details accurately</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="address" 
                  required 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows={2} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Qualification <span className="text-red-500">*</span>
                </label>
                <select 
                  name="qualification" 
                  required 
                  value={formData.qualification} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                >
                  <option value="">Select qualification</option>
                  <option value="10">Class 10</option>
                  <option value="12">Class 12</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Institution/College <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="institution" 
                  required 
                  value={formData.institution} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="Your institution name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Course/Stream <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="course" 
                  required 
                  value={formData.course} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="Course or stream"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Percentage/GPA <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="percentage" 
                  required 
                  value={formData.percentage} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
                  placeholder="e.g., 85% or 8.5 CGPA"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Annual Family Income <span className="text-red-500">*</span>
                </label>
                <select 
                  name="income" 
                  required 
                  value={formData.income} 
                  onChange={handleChange} 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-gray-800 text-sm sm:text-base"
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

            {/* Responsive Submit Button - Looks Great on Both Mobile and Desktop */}
            <div className="mt-8 sm:mt-10">
              <button 
                type="submit" 
                className="group relative w-full overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
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
          
          <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-100">
            <p className="text-gray-500 text-xs sm:text-sm text-center">
              * All fields are mandatory • Documents will be verified after submission • Application review takes 7-10 business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}