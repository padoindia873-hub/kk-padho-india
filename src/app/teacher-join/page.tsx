"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TeacherJoinPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    qualification: '',
    experience: '',
    subjects: [] as string[],
    preferredClasses: [] as string[],
    aboutYou: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const toggleClass = (cls: string) => {
    setFormData(prev => ({
      ...prev,
      preferredClasses: prev.preferredClasses.includes(cls)
        ? prev.preferredClasses.filter(c => c !== cls)
        : [...prev.preferredClasses, cls]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Your Teacher Application has been submitted successfully!\n\nOur team will contact you soon for the interview.");
    console.log("Teacher Application Data:", formData);
  };

  const subjectsList = ["English", "Mathematics", "Science", "Social Science", "Hindi"];
  const classesList = ["5th-6th", "7th", "8th", "9th-10th"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-8">
          <Link href="/benefits/free-tutions" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            ← Back to Free Tuition
          </Link>
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-3xl mb-6 mx-auto border border-amber-400/50">
            <span className="text-7xl">👨‍🏫</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">Teacher Joining</h1>
          <p className="text-xl text-gray-300">Register yourself as a teacher and start earning</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:border-amber-400 outline-none"
                placeholder="Enter your full name" />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email ID <span className="text-red-500">*</span></label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:border-amber-400 outline-none"
                placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:border-amber-400 outline-none"
                placeholder="9876543210" />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">State <span className="text-red-500">*</span></label>
              <select name="state" required value={formData.state} onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:border-amber-400 outline-none">
                <option value="">Select State</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Delhi">Delhi</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">Highest Qualification <span className="text-red-500">*</span></label>
              <input type="text" name="qualification" required value={formData.qualification} onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:border-amber-400 outline-none"
                placeholder="B.Ed, M.Sc, B.Tech, MA etc." />
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-10">
            <label className="block text-sm text-gray-400 mb-3">Subjects You Can Teach <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-3">
              {subjectsList.map(subject => (
                <button
                  key={subject}
                  type="button"
                  onClick={() => toggleSubject(subject)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                    formData.subjects.includes(subject) 
                      ? 'bg-amber-500 text-black border-amber-500' 
                      : 'border-white/30 text-gray-300 hover:border-amber-400'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Classes */}
          <div className="mt-8">
            <label className="block text-sm text-gray-400 mb-3">Preferred Classes</label>
            <div className="flex flex-wrap gap-3">
              {classesList.map(cls => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => toggleClass(cls)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all ${
                    formData.preferredClasses.includes(cls) 
                      ? 'bg-emerald-500 text-black border-emerald-500' 
                      : 'border-white/30 text-gray-300 hover:border-emerald-400'
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm text-gray-400 mb-2">About Yourself</label>
            <textarea
              name="aboutYou"
              value={formData.aboutYou}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white focus:border-amber-400 outline-none resize-y"
              placeholder="Tell us about your teaching experience, style, achievements..."
            />
          </div>

          <button
            type="submit"
            className="mt-12 w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-5 rounded-2xl text-xl transition-all shadow-xl"
          >
            Submit Teacher Application
          </button>
        </form>
      </div>
    </section>
  );
}