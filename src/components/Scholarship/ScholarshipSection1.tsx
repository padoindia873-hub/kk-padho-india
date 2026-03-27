"use client";

import React from 'react';
import Link from 'next/link';

interface ScholarshipFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
  buttonText?: string;
  link?: string;
}

export default function ScholarshipSection1() {
  const scholarshipFeatures: ScholarshipFeature[] = [
    {
      title: "Free Scholarship",
      description: "Merit-based and need-based scholarships for deserving students. Covers tuition fees, study materials, and additional academic support.",
      icon: "🎓",
      color: "gold",
      buttonText: "Apply Now",
      link: "/scholarship/apply"
    },
    {
      title: "Scholarship System",
      description: "Comprehensive scholarship management system with easy application, tracking, and renewal process. Get real-time updates on your application status.",
      icon: "⚙️",
      color: "blue",
      buttonText: "Learn More",
      link: "/scholarship/system"
    },
    {
      title: "Get Membership Card",
      description: "Exclusive membership card providing access to all facilities, discounts, and priority support across all our programs and services.",
      icon: "💳",
      color: "purple",
      buttonText: "Get Card",
      link: "/scholarship/membership"
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, hover: string, border: string, gradient?: string }> = {
      blue: { bg: "bg-blue-50/90 backdrop-blur-sm", text: "text-blue-700", hover: "hover:bg-blue-600 hover:text-white", border: "border-blue-200" },
      green: { bg: "bg-green-50/90 backdrop-blur-sm", text: "text-green-700", hover: "hover:bg-green-600 hover:text-white", border: "border-green-200" },
      purple: { bg: "bg-purple-50/90 backdrop-blur-sm", text: "text-purple-700", hover: "hover:bg-purple-600 hover:text-white", border: "border-purple-200" },
      yellow: { bg: "bg-yellow-50/90 backdrop-blur-sm", text: "text-yellow-700", hover: "hover:bg-yellow-600 hover:text-white", border: "border-yellow-200" },
      indigo: { bg: "bg-indigo-50/90 backdrop-blur-sm", text: "text-indigo-700", hover: "hover:bg-indigo-600 hover:text-white", border: "border-indigo-200" },
      red: { bg: "bg-red-50/90 backdrop-blur-sm", text: "text-red-700", hover: "hover:bg-red-600 hover:text-white", border: "border-red-200" },
      pink: { bg: "bg-pink-50/90 backdrop-blur-sm", text: "text-pink-700", hover: "hover:bg-pink-600 hover:text-white", border: "border-pink-200" },
      teal: { bg: "bg-teal-50/90 backdrop-blur-sm", text: "text-teal-700", hover: "hover:bg-teal-600 hover:text-white", border: "border-teal-200" },
      orange: { bg: "bg-orange-50/90 backdrop-blur-sm", text: "text-orange-700", hover: "hover:bg-orange-600 hover:text-white", border: "border-orange-200" },
      cyan: { bg: "bg-cyan-50/90 backdrop-blur-sm", text: "text-cyan-700", hover: "hover:bg-cyan-600 hover:text-white", border: "border-cyan-200" },
      emerald: { bg: "bg-emerald-50/90 backdrop-blur-sm", text: "text-emerald-700", hover: "hover:bg-emerald-600 hover:text-white", border: "border-emerald-200" },
      violet: { bg: "bg-violet-50/90 backdrop-blur-sm", text: "text-violet-700", hover: "hover:bg-violet-600 hover:text-white", border: "border-violet-200" },
      rose: { bg: "bg-rose-50/90 backdrop-blur-sm", text: "text-rose-700", hover: "hover:bg-rose-600 hover:text-white", border: "border-rose-200" },
      amber: { bg: "bg-amber-50/90 backdrop-blur-sm", text: "text-amber-700", hover: "hover:bg-amber-600 hover:text-white", border: "border-amber-200" },
      lime: { bg: "bg-lime-50/90 backdrop-blur-sm", text: "text-lime-700", hover: "hover:bg-lime-600 hover:text-white", border: "border-lime-200" },
      fuchsia: { bg: "bg-fuchsia-50/90 backdrop-blur-sm", text: "text-fuchsia-700", hover: "hover:bg-fuchsia-600 hover:text-white", border: "border-fuchsia-200" },
      sky: { bg: "bg-sky-50/90 backdrop-blur-sm", text: "text-sky-700", hover: "hover:bg-sky-600 hover:text-white", border: "border-sky-200" },
      gold: { bg: "bg-amber-50/90 backdrop-blur-sm", text: "text-amber-700", hover: "hover:bg-amber-600 hover:text-white", border: "border-amber-200", gradient: "from-amber-400 to-yellow-500" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M40 20 L44 28 L52 30 L46 36 L48 44 L40 40 L32 44 L34 36 L28 30 L36 28 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-4 border border-white/20">
            <span className="text-yellow-400 text-sm font-medium tracking-wider">🏆 SCHOLARSHIP PROGRAMS 🏆</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Unlock Your Potential
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access world-class scholarship opportunities, exclusive benefits, and recognition programs 
            designed to support your educational journey and career growth.
          </p>
        </div>

        {/* Scholarship Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {scholarshipFeatures.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <Link href={feature.link || "#"} key={index}>
                <div
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 
                            border border-white/10 hover:border-${feature.color}-400/50
                            transition-all duration-500 hover:transform hover:-translate-y-2
                            hover:shadow-2xl hover:shadow-${feature.color}-500/10 overflow-hidden cursor-pointer`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}-400/20 to-${feature.color}-600/20 
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 group-hover:text-${feature.color}-400 transition-colors duration-300 text-white`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Button */}
                  {feature.buttonText && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                                      bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600
                                      text-white font-medium text-sm
                                      hover:shadow-lg transition-all duration-300
                                      hover:scale-105`}>
                      {feature.buttonText}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their future through our scholarship programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/scholarship/apply">
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Apply for Scholarship
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Contact Advisor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}