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
    alert('Scholarship application submitted successfully! We will contact you soon.');
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
    <section className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back to Scholarship Programs</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-2xl mb-6">
            <span className="text-4xl">📝</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Apply for Scholarship
          </h1>
          
          <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-5"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the application to avail merit-based and need-based scholarships
          </p>
        </div>

        {/* Three Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Direct application form */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-4">📋</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Direct application form
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simple and straightforward application process. Fill your personal, academic, and income details to apply for scholarship.
            </p>
          </div>

          {/* Card 2: Instructions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-4">📌</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Instructions
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Fill all mandatory fields (*)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Provide accurate academic details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Income proof may be required later</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Keep documents ready for upload</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Application review takes 7-10 days</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Document upload */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-4">📎</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Document upload
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Previous marksheets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Income certificate (if applicable)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Aadhar card / ID proof</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Passport size photograph</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>Category certificate (if applicable)</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                📁 Upload documents after submission via email
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Scholarship Application Form
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="address" 
                  required 
                  value={formData.address} 
                  onChange={handleChange} 
                  rows={2} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Qualification <span className="text-red-500">*</span>
                </label>
                <select 
                  name="qualification" 
                  required 
                  value={formData.qualification} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                >
                  <option value="">Select qualification</option>
                  <option value="10">Class 10</option>
                  <option value="12">Class 12</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Institution/College <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="institution" 
                  required 
                  value={formData.institution} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="Your institution name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Course/Stream <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="course" 
                  required 
                  value={formData.course} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="Course or stream"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Percentage/GPA <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="percentage" 
                  required 
                  value={formData.percentage} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
                  placeholder="e.g., 85% or 8.5 CGPA"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Annual Family Income <span className="text-red-500">*</span>
                </label>
                <select 
                  name="income" 
                  required 
                  value={formData.income} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
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

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm mt-4"
            >
              Submit Application
            </button>
          </form>
          
          <p className="text-gray-500 text-xs text-center mt-6">
            * All fields are mandatory • Documents will be verified • Application review takes 7-10 days
          </p>
        </div>
      </div>
    </section>
  );
}