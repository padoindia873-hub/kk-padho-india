"use client";

import React from 'react';

interface Highlight {
  number: string;
  label: string;
}

export default function ScholarshipSection() {
  const services: string[] = [
    "Merit-Based Scholarship",
    "Need-Based Financial Aid",
    "Women in STEM Scholarship",
    "Sports Excellence Award",
    "Rural Student Support",
    "Research Fellowship Grant",
    "Online Learning Assistance",
    "Study Abroad Scholarship",
    "Vocational Training Fund"
  ];

  const scholarshipHighlights: Highlight[] = [
    { number: "5000+", label: "Students Benefited" },
    { number: "₹2.5Cr+", label: "Scholarship Amount" },
    { number: "25+", label: "Partner Institutions" },
    { number: "15+", label: "Scholarship Types" }
  ];

  const handleScholarshipDetails = (): void => {
    console.log("Scholarship Details clicked");
    // Add navigation logic here
    // router.push("/scholarship/details");
  };

  const handleStudentRegistration = (): void => {
    console.log("Student Registration clicked");
    // Add navigation logic here
    // router.push("/scholarship/register");
  };

  const handleServiceClick = (service: string): void => {
    console.log(`${service} clicked`);
    // Add navigation logic here
    // router.push(`/scholarship/${service.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-6">
      
      {/* Decorative Top Border */}
      <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>

      {/* Title Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          KK PADHO INDIA SCHOLARSHIP
        </h2>

        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          Our mission is to support students across India by providing
          scholarships, free education programs, skill training, and
          career opportunities to help them achieve their dreams.
        </p>
      </div>

      {/* Statistics/Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        {scholarshipHighlights.map((stat: Highlight, index: number) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((item: string, index: number) => (
          <div
            key={index}
            onClick={() => handleServiceClick(item)}
            className="group relative bg-white border-2 border-green-200 text-green-900 
                     hover:bg-green-600 hover:text-white hover:border-green-600 
                     transition-all duration-300 shadow-md hover:shadow-xl 
                     rounded-xl p-6 text-center font-semibold cursor-pointer
                     transform hover:-translate-y-1"
          >
            {/* Hover Effect Icon */}
            <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {item}
          </div>
        ))}
      </div>

      {/* Main Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
        <button 
          onClick={handleScholarshipDetails}
          className="group relative bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg shadow-md font-semibold border border-green-700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Scholarship Details</span>
          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>

        <button 
          onClick={handleStudentRegistration}
          className="group relative bg-green-100 hover:bg-green-200 text-green-900 px-10 py-4 rounded-lg font-semibold border-2 border-green-500 transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Student Registration</span>
          <div className="absolute inset-0 bg-green-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Additional Info Cards */}
      <div className="mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Scholarship Process Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Simple Application Process</h3>
            <p className="text-gray-600">Apply in 3 easy steps: Check eligibility, submit documents, and track your application online.</p>
          </div>

          {/* Support Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">24/7 Student Support</h3>
            <p className="text-gray-600">Our dedicated team is always here to help you with any questions about scholarships.</p>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="text-center mt-16">
        <p className="text-green-600 font-medium">
          Last Date to Apply: <span className="font-bold">March 31, 2026</span>
        </p>
      </div>
    </section>
  );
}