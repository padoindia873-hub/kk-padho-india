"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StateTopLevelSchoolPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('featured');

  // Featured Schools Data
  const featuredSchools = [
    {
      id: 1,
      name: "Delhi Public School",
      location: "New Delhi",
      rating: 4.8,
      established: 1989,
      board: "CBSE",
      image: "🏛️",
      description: "Premier institution with state-of-the-art infrastructure and exceptional academic record."
    },
    {
      id: 2,
      name: "The Shri Ram School",
      location: "Gurgaon",
      rating: 4.9,
      established: 1988,
      board: "CBSE",
      image: "🏫",
      description: "Known for holistic education, innovative teaching methods, and excellent results."
    },
    {
      id: 3,
      name: "Bombay Scottish School",
      location: "Mumbai",
      rating: 4.7,
      established: 1847,
      board: "ICSE",
      image: "🎓",
      description: "Historic institution combining tradition with modern educational practices."
    },
    {
      id: 4,
      name: "St. Xavier's Collegiate School",
      location: "Kolkata",
      rating: 4.8,
      established: 1860,
      board: "ISC",
      image: "⛪",
      description: "Renowned for academic excellence, discipline, and co-curricular achievements."
    }
  ];

  // Facilities Data
  const facilities = [
    { icon: "🔬", name: "Science Labs", desc: "Advanced physics, chemistry & biology laboratories" },
    { icon: "💻", name: "Computer Labs", desc: "Modern computing facilities with high-speed internet" },
    { icon: "📚", name: "Library", desc: "Digital library with 10,000+ books & e-resources" },
    { icon: "⚽", name: "Sports Complex", desc: "Indoor & outdoor sports facilities" },
    { icon: "🎭", name: "Auditorium", desc: "400-seat auditorium with advanced AV equipment" },
    { icon: "🏊", name: "Swimming Pool", desc: "Olympic-size pool with professional coaches" },
    { icon: "🎨", name: "Art Studio", desc: "Creative spaces for visual & performing arts" },
    { icon: "🚑", name: "Medical Facility", desc: "24/7 infirmary with qualified medical staff" }
  ];

  // Academic Excellence Data
  const academicHighlights = [
    { year: "2023-24", result: "98.6%", achievement: "Highest pass percentage in district" },
    { year: "2023-24", result: "42", achievement: "Students scored 95%+ in board exams" },
    { year: "2022-23", result: "15", achievement: "Rank holders in JEE Main & NEET" },
    { year: "2023-24", result: "8", achievement: "Students selected for Olympiad training" }
  ];

  // Student Development Opportunities
  const developmentPrograms = [
    { title: "Leadership Camps", desc: "Annual leadership training and personality development workshops" },
    { title: "Debate & MUN", desc: "Model UN conferences and inter-school debate competitions" },
    { title: "STEM Clubs", desc: "Robotics, coding, and science innovation clubs" },
    { title: "Cultural Exchange", desc: "International student exchange programs" },
    { title: "Community Service", desc: "NCC, NSS, and social outreach initiatives" },
    { title: "Entrepreneurship", desc: "Young entrepreneurs program and business incubation" }
  ];

  // Admission Support
  const admissionSteps = [
    { step: 1, title: "Online Registration", desc: "Fill basic details and create application profile" },
    { step: 2, title: "Document Submission", desc: "Upload required documents and academic records" },
    { step: 3, title: "Entrance Assessment", desc: "Subject-specific test and aptitude evaluation" },
    { step: 4, title: "Personal Interview", desc: "Interaction with parents and student" },
    { step: 5, title: "Fee Payment", desc: "Secure admission with fee payment" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors group font-medium bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">🏫</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            State Top-Level Schools
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the finest educational institutions known for academic excellence, world-class facilities, and holistic student development
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'featured', label: '🏆 Featured Schools', icon: '🏆' },
            { id: 'facilities', label: '🏛️ Facilities', icon: '🏛️' },
            { id: 'academic', label: '📚 Academic Excellence', icon: '📚' },
            { id: 'admission', label: '📝 Admission Support', icon: '📝' },
            { id: 'development', label: '🌟 Student Development', icon: '🌟' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Schools Section */}
        {activeTab === 'featured' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSchools.map((school) => (
              <div key={school.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{school.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{school.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>📍 {school.location}</span>
                      <span>•</span>
                      <span>📅 Est. {school.established}</span>
                      <span>•</span>
                      <span>📖 {school.board}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-gray-700">{school.rating}</span>
                      <span className="text-gray-400 text-sm">/ 5.0</span>
                    </div>
                    <p className="text-gray-600 text-sm">{school.description}</p>
                    <button className="mt-3 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Find Your Perfect School</h3>
              <p className="mb-4 opacity-90">Explore more top-ranked schools across the state</p>
              <button className="bg-white text-blue-600 px-8 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                View All Schools →
              </button>
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {activeTab === 'facilities' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {facilities.map((facility, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center hover:shadow-lg transition-all border border-blue-100">
                  <div className="text-4xl mb-3">{facility.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-gray-500 text-sm">{facility.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-200">
              <p className="text-gray-700">✨ <strong>Plus:</strong> Smart classrooms, transportation facility, cafeteria, and modern security systems</p>
            </div>
          </div>
        )}

        {/* Academic Excellence Section */}
        {activeTab === 'academic' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {academicHighlights.map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 flex justify-between items-center border-l-4 border-blue-500 shadow-sm">
                  <div>
                    <p className="text-gray-500 text-sm">{item.year}</p>
                    <p className="font-semibold text-gray-800">{item.achievement}</p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{item.result}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🏅 Academic Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>100% pass rate in CBSE/ICSE board examinations for 5 consecutive years</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>State rank holders in Science, Mathematics, and Commerce streams</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Recipient of "Best School Award" for academic innovation (2023-24)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Advanced placement programs and career counseling services</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Admission Support Section */}
        {activeTab === 'admission' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {admissionSteps.map((step) => (
                <div key={step.step} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">📋 Required Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Birth Certificate (original & photocopy)</li>
                    <li>• Previous academic records/marksheets</li>
                    <li>• Transfer Certificate from previous school</li>
                    <li>• Address proof & Aadhaar card</li>
                    <li>• Passport size photographs (4 copies)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">⏰ Important Dates</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Application Opens: March 1, 2025</li>
                    <li>• Deadline: April 30, 2025</li>
                    <li>• Entrance Test: May 15-20, 2025</li>
                    <li>• Admission Confirmation: June 5, 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Development Opportunities */}
        {activeTab === 'development' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {developmentPrograms.map((program, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 hover:shadow-lg transition-all border border-blue-100">
                  <div className="text-3xl mb-3">
                    {idx === 0 && "👔"}
                    {idx === 1 && "🗣️"}
                    {idx === 2 && "🤖"}
                    {idx === 3 && "🌍"}
                    {idx === 4 && "🤝"}
                    {idx === 5 && "💡"}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-500 text-sm">{program.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">🌟 Beyond Academics</h3>
              <p>Annual sports meet • Cultural festivals • Educational trips • Skill development workshops</p>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="text-center mt-12 pt-6 border-t border-blue-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Explore all top-level schools in your state!")} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              View Schools
            </button>
            <button 
              onClick={() => alert("Register as a student to get personalized school recommendations!")} 
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-blue-300"
            >
              Register as Student
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Join 10,000+ students who found their dream school
          </p>
        </div>
      </div>
    </section>
  );
}