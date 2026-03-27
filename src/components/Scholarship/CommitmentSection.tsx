"use client";

import React from 'react';
import Link from 'next/link';

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
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Videos/study3.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider">🤝 OUR PROMISE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Commitments
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
          
          <p className="text-xl text-yellow-300 font-semibold max-w-3xl mx-auto">
            We proudly proclaim that 10 to 15 thousand boys and girls will build the future every year
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 
                       shadow-lg hover:shadow-2xl transition-all duration-500 
                       border border-white/20 hover:-translate-y-2
                       relative overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                {/* Icon Container with Glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300 border border-white/30">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {commitment.icon}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 text-xs font-semibold rounded-full mb-2 border border-yellow-400/30">
                    {commitment.category}
                  </span>
                  <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                    {commitment.text}
                  </p>
                </div>
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-yellow-300 text-sm">Girls Empowered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-yellow-300 text-sm">Free Tuitions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-yellow-300 text-sm">Journalism</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-white">5000+</div>
            <div className="text-yellow-300 text-sm">Engineering</div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <p className="text-gray-300 text-sm">
              * Multiple candidates supported across various educational sectors
            </p>
          </div>
        </div>

        {/* Bottom CTA - Updated with Link */}
        <div className="text-center mt-12">
          <Link href="/join-mission">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Join Our Mission
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}