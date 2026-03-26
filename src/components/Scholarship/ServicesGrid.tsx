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
    { title: "Up to 70% discount for medicines", icon: "💊", color: "rose" }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, hover: string, border: string }> = {
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
      rose: { bg: "bg-rose-50/90 backdrop-blur-sm", text: "text-rose-700", hover: "hover:bg-rose-600 hover:text-white", border: "border-rose-200" },
    };
    return colors[color] || colors.blue;
  };

  return (
<<<<<<< HEAD
    <>
      {/* Facilities Section */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/study.png" 
            alt="Students studying" 
            className="w-full h-full object-cover"
          />
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
=======
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Images/study.png" 
          alt="Students studying" 
          className="w-full h-full object-cover"
        />
       
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with Glass Effect */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black/100 backdrop-blur-md rounded-full px-6 py-2 mb-4 border border-white/20">
            <span className="text-white/90 text-sm font-medium tracking-wider">⚡ OUR FACILITIES ⚡</span>
>>>>>>> 907a02f8217ba6ace4af5d706c134d2a4840697f
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header with Glass Effect */}
          <div className="text-center mb-12">
            <div className="inline-block bg-black/100 backdrop-blur-md rounded-full px-6 py-2 mb-4 border border-white/20">
              <span className="text-white/90 text-sm font-medium tracking-wider">⚡ OUR FACILITIES ⚡</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Discover Our Facilities
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience unparalleled educational support with expert mentorship, 
              exclusive scholarships, and personalized coaching designed for your success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={index}
                  className={`group ${colors.bg} ${colors.border} border-2 rounded-xl p-5 
                            hover:shadow-2xl transition-all duration-500 cursor-pointer
                            transform hover:-translate-y-2 hover:scale-105
                            backdrop-blur-sm ${colors.hover} relative overflow-hidden`}
                >
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className={`w-16 h-16 ${colors.text} bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    
                    <span className={`font-semibold text-base ${colors.text} group-hover:text-white transition-colors duration-300`}>
                      {service.title}
                    </span>
                    
                    {/* Hover Indicator */}
                    <div className="mt-3 w-8 h-0.5 bg-current opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12"></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-black/100 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm">12+ Facilities Available</span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}