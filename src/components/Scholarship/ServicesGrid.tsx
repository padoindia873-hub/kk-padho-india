"use client";

import React from 'react';

interface Service {
  title: string;
  icon: string;
  color: string;
}

export default function ServicesGrid() {
  const services: Service[] = [
    { title: "Scholarship Details", icon: "🎓", color: "blue" },
    { title: "Free Tuitions (5 to 12)", icon: "📚", color: "green" },
    { title: "Students Registration", icon: "📝", color: "purple" },
    { title: "Scholarship System", icon: "💰", color: "yellow" },
    { title: "Free IT Training", icon: "💻", color: "indigo" },
    { title: "School Benefits", icon: "🏫", color: "red" },
    { title: "Get Membership Card", icon: "💳", color: "pink" },
    { title: "Free Medical Treatment", icon: "🏥", color: "teal" },
    { title: "Legal Support", icon: "⚖️", color: "orange" },
    { title: "Job Vacancy", icon: "💼", color: "cyan" },
    { title: "Free Spoken English", icon: "🗣️", color: "emerald" },
    { title: "Free Acting Chances", icon: "🎭", color: "violet" },
    { title: "Up to 70% discount for medicines", icon: "💊", color: "rose" },
    { title: "Free Career Counseling", icon: "🤝", color: "amber" },
    { title: "Up to 50% discount for QAR", icon: "🚗", color: "lime" },
    { title: "Up to 50% discount for KK Raksha Kavach", icon: "🛡️", color: "fuchsia" },
    { title: "Events Live Streaming", icon: "📺", color: "sky" },
    { title: "State Level Top School", icon: "🏆", color: "purple" }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, hover: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", hover: "hover:bg-blue-600 hover:text-white" },
      green: { bg: "bg-green-50", text: "text-green-600", hover: "hover:bg-green-600 hover:text-white" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", hover: "hover:bg-purple-600 hover:text-white" },
      yellow: { bg: "bg-yellow-50", text: "text-yellow-600", hover: "hover:bg-yellow-600 hover:text-white" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:bg-indigo-600 hover:text-white" },
      red: { bg: "bg-red-50", text: "text-red-600", hover: "hover:bg-red-600 hover:text-white" },
      pink: { bg: "bg-pink-50", text: "text-pink-600", hover: "hover:bg-pink-600 hover:text-white" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", hover: "hover:bg-teal-600 hover:text-white" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", hover: "hover:bg-orange-600 hover:text-white" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", hover: "hover:bg-cyan-600 hover:text-white" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", hover: "hover:bg-emerald-600 hover:text-white" },
      violet: { bg: "bg-violet-50", text: "text-violet-600", hover: "hover:bg-violet-600 hover:text-white" },
      rose: { bg: "bg-rose-50", text: "text-rose-600", hover: "hover:bg-rose-600 hover:text-white" },
      amber: { bg: "bg-amber-50", text: "text-amber-600", hover: "hover:bg-amber-600 hover:text-white" },
      lime: { bg: "bg-lime-50", text: "text-lime-600", hover: "hover:bg-lime-600 hover:text-white" },
      fuchsia: { bg: "bg-fuchsia-50", text: "text-fuchsia-600", hover: "hover:bg-fuchsia-600 hover:text-white" },
      sky: { bg: "bg-sky-50", text: "text-sky-600", hover: "hover:bg-sky-600 hover:text-white" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Discover Our Facilities
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Experience unparalleled educational support with expert mentorship, exclusive scholarships, and personalized coaching designed for your success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group ${colors.bg} rounded-xl p-4 border border-gray-200 
                          hover:shadow-xl transition-all duration-300 cursor-pointer
                          transform hover:-translate-y-1 ${colors.hover}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <span className={`font-medium ${colors.text} group-hover:text-white transition-colors`}>
                    {service.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}