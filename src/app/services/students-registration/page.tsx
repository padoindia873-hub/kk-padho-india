"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentsRegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    course: '',
    schoolName: '',
    email: '',
    phone: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    address: ''
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration submitted successfully! We will contact you soon.');
    setFormData({
      studentName: '',
      class: '',
      course: '',
      schoolName: '',
      email: '',
      phone: '',
      guardianName: '',
      guardianRelation: '',
      guardianPhone: '',
      address: ''
    });
    setSelectedFile(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">📝</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Students Registration
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Register yourself to access scholarships, educational resources, and academic opportunities
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Student Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">👤</span> Student Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Student Name *</label>
                  <input 
                    type="text" 
                    name="studentName" 
                    required 
                    value={formData.studentName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" 
                    placeholder="Enter full name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Class/Course *</label>
                  <select 
                    name="class" 
                    required 
                    value={formData.class} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select class/course</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Diploma">Diploma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Course/Specialization</label>
                  <input 
                    type="text" 
                    name="course" 
                    value={formData.course} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="Enter course name (if applicable)" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">School/College Name *</label>
                  <input 
                    type="text" 
                    name="schoolName" 
                    required 
                    value={formData.schoolName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="Enter school/college name" 
                  />
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📞</span> Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="student@email.com" 
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2 font-medium">Address</label>
                  <textarea 
                    name="address" 
                    rows={2} 
                    value={formData.address} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Guardian Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">👪</span> Guardian Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Guardian Name *</label>
                  <input 
                    type="text" 
                    name="guardianName" 
                    required 
                    value={formData.guardianName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="Enter guardian full name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Relationship *</label>
                  <select 
                    name="guardianRelation" 
                    required 
                    value={formData.guardianRelation} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Legal Guardian</option>
                    <option value="Grandparent">Grandparent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Guardian Phone *</label>
                  <input 
                    type="tel" 
                    name="guardianPhone" 
                    required 
                    value={formData.guardianPhone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-blue-500 focus:outline-none" 
                    placeholder="Guardian contact number" 
                  />
                </div>
              </div>
            </div>

            {/* Upload Documents Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📄</span> Upload Documents
              </h2>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Student ID / Aadhaar Card *</label>
                    <input 
                      type="file" 
                      onChange={handleFileChange} 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload PDF, JPG or PNG (Max size: 5MB)</p>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Previous Year Marksheet</label>
                    <input 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload latest academic marksheet (optional)</p>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Income Certificate (if applicable)</label>
                    <input 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload income certificate for scholarship consideration</p>
                  </div>
                </div>
                {selectedFile && (
                  <div className="mt-3 text-sm text-green-600">
                    ✓ {selectedFile.name} uploaded successfully
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Submit Registration
              </button>
              <button 
                type="button"
                onClick={() => alert("Apply for scholarship after registration! You'll receive a confirmation email.")} 
                className="flex-1 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-blue-300"
              >
                Apply Now
              </button>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              By registering, you agree to our Terms & Conditions and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}