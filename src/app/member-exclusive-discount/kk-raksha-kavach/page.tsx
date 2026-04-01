"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KKRakshaKavachPage() {
  const router = useRouter();
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);

  // Safety system features
  const safetyFeatures = [
    { icon: "🚨", title: "24/7 Emergency Response", desc: "Immediate assistance with our dedicated emergency response team" },
    { icon: "📍", title: "GPS Tracking", desc: "Real-time location tracking for family members' safety" },
    { icon: "👥", title: "Guardian Network", desc: "Connect with verified guardians in your neighborhood" },
    { icon: "📱", title: "SOS Button", desc: "One-tap emergency alert to registered contacts and police" },
    { icon: "🔒", title: "Privacy Protection", desc: "End-to-end encryption for all personal data" },
    { icon: "🎥", title: "CCTV Integration", desc: "Connect with nearby CCTV cameras for evidence" }
  ];

  // Protection features
  const protectionFeatures = [
    { icon: "👨‍👩‍👧‍👦", title: "Family Protection", desc: "Comprehensive coverage for up to 5 family members" },
    { icon: "⚕️", title: "Medical Emergency", desc: "Ambulance service and medical assistance" },
    { icon: "⚖️", title: "Legal Support", desc: "Free legal consultation and support" },
    { icon: "💊", title: "Health Insurance", desc: "₹5 Lakh coverage for medical emergencies" },
    { icon: "🚗", title: "Roadside Assistance", desc: "24/7 vehicle breakdown support" },
    { icon: "🏥", title: "Hospital Network", desc: "Access to 5000+ empaneled hospitals" }
  ];

  // Emergency alert options
  const emergencyContacts = [
    { name: "Police Control Room", number: "100", type: "Police" },
    { name: "Women Helpline", number: "1091", type: "Women Safety" },
    { name: "Ambulance", number: "102", type: "Medical" },
    { name: "Child Helpline", number: "1098", type: "Child Safety" }
  ];

  const handleEmergencyAlert = () => {
    setShowEmergencyAlert(true);
    setTimeout(() => {
      setShowEmergencyAlert(false);
      alert("🚨 Emergency Alert Sent! Help is on the way. Your location has been shared with authorities.");
    }, 2000);
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
            <span className="text-5xl">🛡️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            KK Raksha Kavach
          </h1>
          
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beti Bachao, Beta Bachao - Your family's comprehensive safety shield with 24/7 protection
          </p>
        </div>

        {/* Emergency Alert Button - Prominent */}
        <div className="mb-12">
          <div className="bg-blue-600 rounded-2xl p-8 text-center shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white text-left">
                <div className="text-3xl mb-2">🚨</div>
                <h2 className="text-2xl font-bold mb-1">Emergency Alert System</h2>
                <p className="text-blue-100">One-tap SOS - Immediate help at your fingertips</p>
              </div>
              <button 
                onClick={handleEmergencyAlert}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                🚨 SOS Emergency Alert
              </button>
            </div>
            
            {/* Emergency Alert Notification */}
            {showEmergencyAlert && (
              <div className="mt-4 bg-red-500 text-white p-3 rounded-lg animate-pulse">
                ⚠️ Alerting authorities... Please stay calm. Help is on the way!
              </div>
            )}
          </div>
        </div>

        {/* 1. Safety System Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🛡️</span> Safety System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Protection Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚡</span> Protection Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectionFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📞</span> Quick Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">
                  {contact.type === "Police" && "👮"}
                  {contact.type === "Women Safety" && "👩"}
                  {contact.type === "Medical" && "🚑"}
                  {contact.type === "Child Safety" && "👧"}
                </div>
                <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-2xl font-bold text-blue-600 my-2">{contact.number}</p>
                <p className="text-gray-500 text-xs">{contact.type}</p>
                <button 
                  onClick={() => alert(`Calling ${contact.name} at ${contact.number}...`)}
                  className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700"
                >
                  Call Now →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How to Activate */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🚀</span> Activate Raksha Kavach
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Register with mobile</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Add family members</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Set emergency contacts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Activate & stay protected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-gray-800">50,000+</div>
            <div className="text-sm text-gray-500">Families Protected</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🚨</div>
            <div className="text-2xl font-bold text-gray-800">10,000+</div>
            <div className="text-sm text-gray-500">Emergencies Handled</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-800">4.9/5</div>
            <div className="text-sm text-gray-500">User Rating</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Activate KK Raksha Kavach now! Your family's safety is our priority.")} 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Activate Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Free activation for first 10,000 members • 24/7 support available
          </p>
        </div>
      </div>
    </section>
  );
}