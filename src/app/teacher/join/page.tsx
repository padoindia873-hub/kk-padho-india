"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherJoinPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    preferredClass: '',
    preferredSubject: '',
    state: '',
    city: '',
    availableHours: '',
    teachingMode: 'online'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Application submitted successfully! We will contact you soon.');
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      qualification: '',
      experience: '',
      preferredClass: '',
      preferredSubject: '',
      state: '',
      city: '',
      availableHours: '',
      teachingMode: 'online'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Back Button - Using router.back() like All Teachers page */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Free IT Training</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-3xl mb-6 mx-auto border border-amber-400/50 shadow-xl">
            <span className="text-7xl">👨‍🏫</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Join as a Teacher
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of our growing educator community. Teach students across India and earn competitive income.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "💰", title: "Competitive Pay", desc: "Attractive compensation package with performance bonuses" },
            { icon: "🏠", title: "Work Flexibility", desc: "Teach from home with flexible working hours" },
            { icon: "📈", title: "Career Growth", desc: "Opportunities to advance to senior faculty roles" },
            { icon: "🌍", title: "Pan India Reach", desc: "Connect with students from all over India" },
            { icon: "🎓", title: "Training Provided", desc: "Free training on modern teaching methodologies" },
            { icon: "🤝", title: "Community Support", desc: "Join a supportive community of educators" }
          ].map((benefit, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">Teacher Application Form</h2>
          
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Highest Qualification *</label>
                <select
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select qualification</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Teaching Experience *</label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="fresher">Fresher (0-1 years)</option>
                  <option value="beginner">1-3 years</option>
                  <option value="intermediate">3-5 years</option>
                  <option value="experienced">5-10 years</option>
                  <option value="expert">10+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Preferred Class to Teach *</label>
                <select
                  name="preferredClass"
                  required
                  value={formData.preferredClass}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select class</option>
                  <option value="5-6">Class 5th - 6th</option>
                  <option value="7">Class 7th</option>
                  <option value="8">Class 8th</option>
                  <option value="9-10">Class 9th - 10th</option>
                  <option value="11-12">Class 11th - 12th</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Preferred Subject *</label>
                <input
                  type="text"
                  name="preferredSubject"
                  required
                  value={formData.preferredSubject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Mathematics, Science, English, etc."
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Your state"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Your city"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Available Hours/Week *</label>
                <input
                  type="text"
                  name="availableHours"
                  required
                  value={formData.availableHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="e.g., 15-20 hours"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Preferred Teaching Mode *</label>
                <select
                  name="teachingMode"
                  value={formData.teachingMode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="online">Online Only</option>
                  <option value="offline">Offline Only</option>
                  <option value="both">Both Online & Offline</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}