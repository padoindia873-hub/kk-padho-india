"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinMissionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    qualification: '',
    interest: '',
    message: '',
    contributionType: 'volunteer'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for joining our mission! We will contact you soon with more details.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      qualification: '',
      interest: '',
      message: '',
      contributionType: 'volunteer'
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-3xl mb-6 mx-auto border border-yellow-400/50 shadow-xl">
            <span className="text-7xl">🤝</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Join Our Mission
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be a part of our mission to empower 10-15 thousand boys and girls every year through education and career opportunities.
          </p>
        </div>

        {/* Mission Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">15K+</div>
            <p className="text-gray-400 text-sm mt-2">Students Empowered</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <p className="text-gray-400 text-sm mt-2">Partner Schools</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">100+</div>
            <p className="text-gray-400 text-sm mt-2">Volunteers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">10</div>
            <p className="text-gray-400 text-sm mt-2">States Covered</p>
          </div>
        </div>

        {/* How You Can Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👨‍🏫</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Become a Volunteer</h3>
            <p className="text-gray-400 text-sm">Join our team of dedicated volunteers and help us reach more students.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Donate & Support</h3>
            <p className="text-gray-400 text-sm">Your contribution helps us provide education and opportunities to deserving students.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Partner with Us</h3>
            <p className="text-gray-400 text-sm">Collaborate with us to create more opportunities and reach more students.</p>
          </div>
        </div>

        {/* Our Mission Areas */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Our Mission Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Higher Education Support</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Free Tuition Programs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Job Placement Assistance</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Journalism Training</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Teaching Certification</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Medical Education Support</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Nursing Programs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Acting & Arts Diploma</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Civil Services Preparation</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-yellow-400">✓</span>
              <span>Engineering Programs</span>
            </div>
          </div>
        </div>

        {/* Join Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Join Our Mission</h2>
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="Your age"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Highest Qualification</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select qualification</option>
                  <option value="10th">10th Pass</option>
                  <option value="12th">12th Pass</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                  <option value="professional">Professional Degree</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">How would you like to contribute? *</label>
                <select
                  name="contributionType"
                  required
                  value={formData.contributionType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="donor">Donor</option>
                  <option value="partner">Partner Organization</option>
                  <option value="ambassador">Brand Ambassador</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Area of Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select area of interest</option>
                  <option value="education">Education Support</option>
                  <option value="scholarship">Scholarship Programs</option>
                  <option value="career">Career Counseling</option>
                  <option value="skill">Skill Development</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="fundraising">Fundraising</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Why do you want to join our mission?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="Tell us why you're passionate about our mission..."
                />
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300 text-sm">I agree to the terms and conditions and am committed to supporting the mission</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Our Mission
            </button>
          </form>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
          <div className="text-4xl mb-4">⭐</div>
          <p className="text-gray-300 italic mb-4">"Joining this mission has been life-changing. I've helped over 200 students achieve their dreams through education."</p>
          <p className="text-yellow-400 font-semibold">- Priya Sharma, Volunteer</p>
        </div>
      </div>
    </section>
  );
}