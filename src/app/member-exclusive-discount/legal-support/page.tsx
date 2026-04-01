"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LegalSupportPage() {
  const router = useRouter();
  const [consultationType, setConsultationType] = useState('');
  const [query, setQuery] = useState('');

  // Legal consultation services
  const legalServices = [
    { id: 1, name: "Family Law", icon: "👨‍👩‍👧", desc: "Divorce, child custody, marriage registration", duration: "30 mins" },
    { id: 2, name: "Criminal Law", icon: "⚖️", desc: "Bail, FIR, legal representation", duration: "45 mins" },
    { id: 3, name: "Property Law", icon: "🏠", desc: "Property disputes, registration, agreements", duration: "30 mins" },
    { id: 4, name: "Consumer Rights", icon: "🛡️", desc: "Consumer complaints, fraud cases", duration: "20 mins" },
    { id: 5, name: "Employment Law", icon: "💼", desc: "Workplace disputes, termination issues", duration: "30 mins" },
    { id: 6, name: "Women Rights", icon: "👩", desc: "Domestic violence, harassment cases", duration: "45 mins" }
  ];

  // Documentation help services
  const documentationHelp = [
    { icon: "📄", title: "Legal Notice Drafting", desc: "Expert drafting of legal notices and replies" },
    { icon: "📑", title: "Affidavit Preparation", desc: "Notarized affidavit for various purposes" },
    { icon: "📝", title: "Agreement Drafting", desc: "Rental, partnership, and service agreements" },
    { icon: "⚖️", title: "Court Filing Support", desc: "Assistance with court document filing" },
    { icon: "🔍", title: "Document Review", desc: "Review of legal documents before signing" },
    { icon: "📋", title: "Will & Succession", desc: "Will drafting and succession planning" }
  ];

  // Safety guidance
  const safetyGuidance = [
    { icon: "🚨", title: "Emergency Legal Help", desc: "24/7 helpline for urgent legal matters" },
    { icon: "👮", title: "Police Station Support", desc: "Assistance during police complaints" },
    { icon: "🏛️", title: "Court Procedure Guide", desc: "Step-by-step court process guidance" },
    { icon: "📞", title: "Legal Aid Information", desc: "Free legal aid centers information" },
    { icon: "🛡️", title: "Women Safety Laws", desc: "Information on women protection laws" },
    { icon: "👨‍⚖️", title: "Mediation Services", desc: "Alternative dispute resolution support" }
  ];

  const handleGetHelp = () => {
    if (consultationType && query) {
      alert(`Your legal query has been submitted! Our legal expert will contact you within 24 hours.`);
      setConsultationType('');
      setQuery('');
    } else {
      alert('Please select consultation type and enter your query');
    }
  };

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-2xl mb-6 mx-auto">
            <span className="text-5xl">⚖️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Legal Support
          </h1>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert legal assistance, documentation help, and safety guidance for all your legal needs
          </p>
        </div>

        {/* 1. Legal Consultation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚖️</span> Legal Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {legalServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{service.desc}</p>
                <p className="text-blue-600 text-xs font-medium">Consultation: {service.duration}</p>
                <button 
                  onClick={() => alert(`Book consultation for ${service.name} - Our expert will contact you shortly.`)}
                  className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Documentation Help */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📄</span> Documentation Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {documentationHelp.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{doc.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{doc.title}</h3>
                    <p className="text-gray-500 text-sm">{doc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Safety Guidance */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🛡️</span> Safety Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyGuidance.map((guidance, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{guidance.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{guidance.title}</h3>
                    <p className="text-gray-500 text-sm">{guidance.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Need Legal Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Consultation Type</label>
                <select 
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                >
                  <option value="">Select consultation type</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Property Law">Property Law</option>
                  <option value="Consumer Rights">Consumer Rights</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Women Rights">Women Rights</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Your Query</label>
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  rows={2}
                  placeholder="Briefly describe your legal issue..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
            </div>
            <button 
              onClick={handleGetHelp}
              className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Help
            </button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🚨</span> Emergency Legal Helpline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
              <div className="text-2xl mb-1">👮</div>
              <p className="font-semibold text-gray-800">Police Emergency</p>
              <p className="text-2xl font-bold text-red-600">100</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 text-center border border-pink-100">
              <div className="text-2xl mb-1">👩</div>
              <p className="font-semibold text-gray-800">Women Helpline</p>
              <p className="text-2xl font-bold text-pink-600">1091</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
              <div className="text-2xl mb-1">⚖️</div>
              <p className="font-semibold text-gray-800">Legal Aid Helpline</p>
              <p className="text-2xl font-bold text-blue-600">15100</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⚖️</div>
            <div className="text-2xl font-bold text-gray-800">100+</div>
            <div className="text-sm text-gray-500">Expert Lawyers</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">📄</div>
            <div className="text-2xl font-bold text-gray-800">5,000+</div>
            <div className="text-sm text-gray-500">Documents Prepared</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800">4.8/5</div>
            <div className="text-sm text-gray-500">Client Rating</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Get instant legal help! Our experts will contact you within 24 hours.")} 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Get Help
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Confidential • Expert advice • Affordable consultation
          </p>
        </div>
      </div>
    </section>
  );
}