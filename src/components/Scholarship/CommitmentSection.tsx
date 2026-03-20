"use client";

import React from 'react';

interface Commitment {
  text: string;
  icon: string;
  category: string;
}

export default function CommitmentSection() {
  const commitments: Commitment[] = [
    { text: "10 to 15 thousand boys and girls will build the future of girls every year by various higher education diplomas.", icon: "👧", category: "Education" },
    { text: "Billions of poor boys and girls who cannot read tuition will give them free tuition two times by online.", icon: "📚", category: "Free Tuition" },
    { text: "Every year thousands of children will give the opportunity To get a job.", icon: "💼", category: "Employment" },
    { text: "Share all the cost of 1000 Journalism Candidates to MKK ONLINE ALLIANCE.", icon: "📰", category: "Journalism" },
    { text: "Share all the cost of 2000 B.Ed, Candidates and 2000 D.El.Ed Candidates to MKK ONLINE ALLIANCE.", icon: "👨‍🏫", category: "Teaching" },
    { text: "Share all the cost of 1000 Poor Excellent and Brilliant NEET Pass Out Government Medical College Candidates.", icon: "👩‍⚕️", category: "Medical" },
    { text: "Share all the cost of 2000 BSC And GNM Nursing Candidates to MKK ONLINE ALLIANCE.", icon: "🏥", category: "Nursing" },
    { text: "Share all the cost of 2000 Acting Diploma Candidates to MKK ONLINE ALLIANCE.", icon: "🎭", category: "Acting" },
    { text: "Share All the cost of All the IAS and IPS Candidates in Bengal to MKK ONLINE ALLIANCE.", icon: "👮", category: "Civil Services" },
    { text: "Share all the cost of 5000 Various Engineering Diploma Candidates in Bengal to MKK ONLINE ALLIANCE.", icon: "🔧", category: "Engineering" }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Bengali Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-bengali">
            আমাদের অঙ্গীকার
          </h2>
          <p className="text-xl text-gray-600">
            We proudly proclaim that 10 to 15 thousand boys and girls will build the future every year
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-3xl group-hover:scale-110 transition-transform group-hover:text-white">
                    {commitment.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full mb-2">
                    {commitment.category}
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    {commitment.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Repeated Section Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Multiple candidates supported across various educational sectors
          </p>
        </div>
      </div>
    </section>
  );
}