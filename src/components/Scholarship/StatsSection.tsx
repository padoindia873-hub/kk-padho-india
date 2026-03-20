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
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-semibold tracking-wider">📊 IMPACT NUMBERS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
              Scholarship & Education
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Empowerment
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering dreams through education, support, and opportunity. 
            <span className="block text-blue-600 font-semibold mt-2">Making quality education accessible to all.</span>
          </p>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden hover:-translate-y-2">
                
                {/* Icon Circle */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <span className="text-3xl text-white">{stat.icon}</span>
                </div>
                
                {/* Number with Animation */}
                <div className="mb-3">
                  <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-gray-700 font-medium text-lg mb-4 group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </p>
                
                {/* Decorative Progress Bar */}
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} animate-progress`}
                    style={{ width: "100%" }}
                  />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-3xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Total Impact So Far</h3>
              <p className="text-blue-100">Empowering students across India</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25K+</div>
                <div className="text-blue-100 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-blue-100 text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-100 text-sm">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 1s ease-out forwards;
          width: 0;
        }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}