"use client";

import React from 'react';

interface StatItem {
  number: string;
  label: string;
  icon: string;
  color: string;
}

export default function StatsSection() {
  const stats: StatItem[] = [
    { number: "10 Lakhs+", label: "Students Get Scholarship", icon: "🎓", color: "from-blue-500 to-blue-600" },
    { number: "15,000+", label: "Girls Empowered Yearly", icon: "👧", color: "from-pink-500 to-pink-600" },
    { number: "1000+", label: "Journalism Candidates", icon: "📰", color: "from-purple-500 to-purple-600" },
    { number: "2000+", label: "B.Ed Candidates", icon: "👨‍🏫", color: "from-green-500 to-green-600" },
    { number: "2000+", label: "D.El.Ed Candidates", icon: "📚", color: "from-yellow-500 to-yellow-600" },
    { number: "1000+", label: "NEET Candidates", icon: "⚕️", color: "from-red-500 to-red-600" },
    { number: "2000+", label: "Nursing Candidates", icon: "🏥", color: "from-teal-500 to-teal-600" },
    { number: "5000+", label: "Engineering Diploma", icon: "🔧", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            📊 IMPACT NUMBERS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-3">
            Scholarship & Education Empowerment
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Empowering dreams through education, support, and opportunity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {stat.icon}
                </div>
                <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            * Supporting students across all educational sectors
          </p>
        </div>
      </div>
    </section>
  );
}