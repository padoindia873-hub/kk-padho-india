"use client";

import React from 'react';

interface Facility {
  title: string;
  description: string;
  icon: string;
}

export default function FacilitiesSection() {
  const facilities: Facility[] = [
    {
      title: "Get Membership Card",
      description: "This section features the top-performing students from West Bengal in the scholarship competition.",
      icon: "💳"
    },
    {
      title: "State Level Top School List",
      description: "State Level Top School List....State Level Top School List..State Level State Level Top School List",
      icon: "🏆"
    },
    {
      title: "Exclusive Scholarships",
      description: "Secure scholarships that recognize and support exceptional talent, fostering academic excellence.",
      icon: "🎓"
    },
    {
      title: "National Level Top School",
      description: "Personalized coaching sessions tailored to accelerate individual growth and academic performance.",
      icon: "🏅"
    },
    {
      title: "Free Medical Treatment",
      description: "Get access to essential medical care services without any financial burden for families in need.",
      icon: "🏥"
    },
    {
      title: "Job Facilities & Vacancy",
      description: "We provide job support and vacancy connections to empower youth with employment opportunities.",
      icon: "💼"
    },
    {
      title: "Free Online Tuition (5 to 12)",
      description: "Interactive, curriculum-based online classes for students from classes 5 to 12 absolutely free.",
      icon: "📚"
    },
    {
      title: "Free Spoken English",
      description: "Improve your English communication skills and confidence with our expert-led spoken English classes.",
      icon: "🗣️"
    },
    {
      title: "Free Online IT Classes",
      description: "Join virtual IT courses and upskill yourself with trending tech skills like coding, web, and more.",
      icon: "💻"
    },
    {
      title: "Free Career Counseling",
      description: "One-on-one and group counseling sessions to help students choose the right career path.",
      icon: "🤝"
    },
    {
      title: "Legal Support (Advocate)",
      description: "Receive guidance and legal support from certified advocates for justice and protection of rights.",
      icon: "⚖️"
    },
    {
      title: "Live Streaming",
      description: "Get inspired through regular sessions that boost confidence and mindset.",
      icon: "📺"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Our Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-600">
                  <span className="text-3xl group-hover:text-white">{facility.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}