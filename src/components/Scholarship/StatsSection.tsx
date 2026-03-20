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
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Scholarship & Education Empowerment
          </h2>
          <p className="text-sm text-gray-500">
            Empowering dreams through education
          </p>
        </div>

        {/* Stats Grid - Smaller Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-3 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{stat.icon}</span>
                <span className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Bottom Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            * Supporting students across all educational sectors
          </p>
        </div>
      </div>
    </section>
  );
}