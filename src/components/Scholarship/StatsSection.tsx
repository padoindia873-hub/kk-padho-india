"use client";

import React from 'react';

interface StatItem {
  number: string;
  label: string;
}

export default function StatsSection() {
  const stats: StatItem[] = [
    { number: "10 Lakhs+", label: "Students Get Scholarship" },
    { number: "15,000+", label: "Girls Empowered Yearly" },
    { number: "1000+", label: "Journalism Candidates" },
    { number: "2000+", label: "B.Ed Candidates" },
    { number: "2000+", label: "D.El.Ed Candidates" },
    { number: "1000+", label: "NEET Candidates" },
    { number: "2000+", label: "Nursing Candidates" },
    { number: "5000+", label: "Engineering Diploma" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Scholarship & Education Empowerment
          </h2>
          <p className="text-lg text-gray-600">
            Empowering dreams through education, support, and opportunity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-blue-100 transform hover:-translate-y-2"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}