"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventLiveStreamingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('live');

  // Live events list data
  const liveEvents = [
    { id: 1, title: "National Education Summit 2024", speaker: "Dr. Amit Sharma", viewers: 1245, time: "10:00 AM" },
    { id: 2, title: "Future of Digital Learning", speaker: "Prof. Meera Singh", viewers: 876, time: "11:30 AM" },
    { id: 3, title: "Scholarship Application Workshop", speaker: "Ms. Priya Patel", viewers: 543, time: "2:00 PM" }
  ];

  // Webinars & sessions data
  const webinars = [
    { id: 1, title: "Career Guidance for Students", date: "March 28, 2024", time: "3:00 PM", speaker: "Career Expert Panel" },
    { id: 2, title: "Study Abroad Opportunities", date: "April 5, 2024", time: "11:00 AM", speaker: "International Counselors" },
    { id: 3, title: "Research Methodology Workshop", date: "April 12, 2024", time: "2:00 PM", speaker: "Dr. Rajesh Kumar" },
    { id: 4, title: "Soft Skills Development", date: "April 20, 2024", time: "10:00 AM", speaker: "Corporate Trainers" }
  ];

  // Event schedule data
  const eventSchedule = [
    { date: "March 25, 2024", event: "National Education Summit", time: "10:00 AM - 5:00 PM", type: "Conference" },
    { date: "March 28, 2024", event: "Career Guidance Webinar", time: "3:00 PM - 4:30 PM", type: "Webinar" },
    { date: "April 5, 2024", event: "Study Abroad Session", time: "11:00 AM - 12:30 PM", type: "Seminar" },
    { date: "April 12, 2024", event: "Research Workshop", time: "2:00 PM - 4:00 PM", type: "Workshop" },
    { date: "April 20, 2024", event: "Soft Skills Training", time: "10:00 AM - 11:30 AM", type: "Workshop" },
    { date: "April 28, 2024", event: "AI in Education Summit", time: "4:00 PM - 6:00 PM", type: "Conference" }
  ];

  // Streaming access features
  const streamingFeatures = [
    { icon: "📱", title: "Multi-Device Access", desc: "Watch on mobile, tablet, or desktop" },
    { icon: "💬", title: "Live Chat", desc: "Interact with speakers and attendees" },
    { icon: "📝", title: "Download Resources", desc: "Get session materials and slides" },
    { icon: "🔁", title: "Recording Available", desc: "Replay for 30 days after event" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">📡</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Event Live Streaming
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch educational events, webinars, and sessions live from anywhere
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'live' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            🔴 Live Events
          </button>
          <button 
            onClick={() => setActiveTab('webinars')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'webinars' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            🎯 Webinars & Sessions
          </button>
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'schedule' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            📅 Event Schedule
          </button>
          <button 
            onClick={() => setActiveTab('access')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'access' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            🎥 Streaming Access
          </button>
        </div>

        {/* 1. Live Events List */}
        {activeTab === 'live' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">🔴</span> Live Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 px-4 flex justify-between items-center">
                    <span className="text-white font-semibold">LIVE</span>
                    <span className="bg-red-500 px-2 py-1 rounded-full text-xs font-bold animate-pulse">● LIVE</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">🎤 {event.speaker}</p>
                    <p className="text-gray-500 text-sm mb-1">⏰ {event.time}</p>
                    <p className="text-gray-500 text-sm mb-4">👥 {event.viewers} watching</p>
                    <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all">
                      Watch Live →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Webinars & Sessions */}
        {activeTab === 'webinars' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Upcoming Webinars & Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-xl p-5 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                      🎓
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{webinar.title}</h3>
                      <p className="text-gray-600 text-sm">🎤 {webinar.speaker}</p>
                      <p className="text-gray-500 text-sm mt-1">📅 {webinar.date} • ⏰ {webinar.time}</p>
                      <button className="mt-3 text-orange-600 font-medium text-sm hover:text-orange-800">
                        Set Reminder →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Event Schedule */}
        {activeTab === 'schedule' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">📅</span> Event Schedule
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Event</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Time</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left p-4 font-semibold text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventSchedule.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                        <td className="p-4 text-gray-700 font-medium">{item.date}</td>
                        <td className="p-4 text-gray-800">{item.event}</td>
                        <td className="p-4 text-gray-600">{item.time}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === 'Conference' ? 'bg-purple-100 text-purple-700' :
                            item.type === 'Webinar' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'Workshop' ? 'bg-green-100 text-green-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="p-4">
                          <button className="text-orange-600 text-sm hover:text-orange-800">Remind</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. Streaming Access */}
        {activeTab === 'access' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎥</span> Streaming Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {streamingFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => alert("Watch live events and webinars now!")} 
            className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
          >
            Watch Live
          </button>
          <p className="text-gray-500 text-sm mt-4">
            All sessions are recorded • Watch anytime, anywhere
          </p>
        </div>
      </div>
    </section>
  );
}