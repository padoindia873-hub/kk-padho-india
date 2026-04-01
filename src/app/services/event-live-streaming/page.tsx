"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventLiveStreamingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('upcoming');

  // Live events list data
  const liveEvents = [
    { id: 1, title: "National Education Summit 2024", speaker: "Dr. Amit Sharma", viewers: 1245, status: "live", thumbnail: "🎓" },
    { id: 2, title: "Future of Digital Learning", speaker: "Prof. Meera Singh", viewers: 876, status: "live", thumbnail: "💻" },
    { id: 3, title: "Scholarship Application Workshop", speaker: "Ms. Priya Patel", viewers: 543, status: "live", thumbnail: "💰" }
  ];

  // Webinars & sessions data
  const webinars = [
    { id: 1, title: "Career Guidance for Students", date: "March 28, 2024", time: "3:00 PM", duration: "90 mins", speaker: "Career Expert Panel", level: "Intermediate" },
    { id: 2, title: "Study Abroad Opportunities", date: "April 5, 2024", time: "11:00 AM", duration: "60 mins", speaker: "International Counselors", level: "All Levels" },
    { id: 3, title: "Research Methodology Workshop", date: "April 12, 2024", time: "2:00 PM", duration: "120 mins", speaker: "Dr. Rajesh Kumar", level: "Advanced" },
    { id: 4, title: "Soft Skills Development", date: "April 20, 2024", time: "10:00 AM", duration: "75 mins", speaker: "Corporate Trainers", level: "Beginner" },
    { id: 5, title: "AI in Education", date: "April 28, 2024", time: "4:00 PM", duration: "90 mins", speaker: "Tech Industry Leaders", level: "Advanced" },
    { id: 6, title: "Parent-Teacher Collaboration", date: "May 5, 2024", time: "5:30 PM", duration: "60 mins", speaker: "Educational Psychologists", level: "All Levels" }
  ];

  // Event schedule data
  const eventSchedule = [
    { date: "March 25-27, 2024", event: "Annual Education Conference", venue: "Virtual + Delhi", type: "Conference" },
    { date: "April 8-10, 2024", event: "Teachers Training Program", venue: "Virtual", type: "Workshop" },
    { date: "April 15-20, 2024", event: "Student Skill Development Week", venue: "Virtual + Multiple Cities", type: "Festival" },
    { date: "May 1-3, 2024", event: "Scholarship Fair 2024", venue: "Virtual", type: "Fair" },
    { date: "May 15-17, 2024", event: "STEM Innovation Summit", venue: "Virtual + Bangalore", type: "Summit" },
    { date: "June 5-7, 2024", event: "Career Counseling Expo", venue: "Virtual", type: "Expo" }
  ];

  // Streaming access features
  const streamingFeatures = [
    { icon: "📱", title: "Multi-Platform", desc: "Watch on mobile, tablet, desktop, or smart TV" },
    { icon: "💬", title: "Live Chat", desc: "Real-time interaction with speakers and attendees" },
    { icon: "📝", title: "Notes & Resources", desc: "Download session materials and presentations" },
    { icon: "🔁", title: "Replay Available", desc: "Access recorded sessions for 30 days" },
    { icon: "🎥", title: "HD Quality", desc: "High-definition streaming up to 1080p" },
    { icon: "🔔", title: "Reminders", desc: "Get notified before events start" }
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
            Watch educational events, webinars, and sessions live from anywhere. Connect with experts and enhance your learning experience.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            📅 Upcoming Events
          </button>
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'live' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                : 'bg-white/70 text-gray-700 hover:bg-white shadow-sm'
            }`}
          >
            🔴 Live Now
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
            📋 Event Schedule
          </button>
        </div>

        {/* 1. Live Events List - Live Now Tab */}
        {activeTab === 'live' && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-2xl font-bold text-gray-800">Live Events Now</h2>
            </div>
            
            {liveEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl">{event.thumbnail}</span>
                        <span className="bg-red-500 px-2 py-1 rounded-full text-xs font-bold animate-pulse">LIVE</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">🎤 {event.speaker}</p>
                      <p className="text-gray-500 text-sm mb-4">👥 {event.viewers} watching now</p>
                      <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all">
                        Watch Live →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-orange-100">
                <div className="text-6xl mb-4">📺</div>
                <p className="text-gray-500">No live events at the moment</p>
                <p className="text-sm text-gray-400 mt-1">Check upcoming events schedule</p>
              </div>
            )}
          </div>
        )}

        {/* 2. Webinars & Sessions Tab */}
        {activeTab === 'webinars' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Upcoming Webinars & Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-xl p-5 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🎓</span>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{webinar.level}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">🎤 {webinar.speaker}</p>
                  <p className="text-gray-500 text-sm mb-1">📅 {webinar.date} • ⏰ {webinar.time}</p>
                  <p className="text-gray-400 text-xs mb-3">⏱️ Duration: {webinar.duration}</p>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-all">
                    Register & Set Reminder
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Event Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">📋</span> Complete Event Schedule
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Event</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Venue</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left p-4 font-semibold text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventSchedule.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50/50 transition-colors">
                        <td className="p-4 text-gray-700 font-medium">{item.date}</td>
                        <td className="p-4 text-gray-800">{item.event}</td>
                        <td className="p-4 text-gray-600">{item.venue}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === 'Conference' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'Workshop' ? 'bg-green-100 text-green-700' :
                            item.type === 'Festival' ? 'bg-purple-100 text-purple-700' :
                            item.type === 'Fair' ? 'bg-pink-100 text-pink-700' :
                            item.type === 'Summit' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="p-4">
                          <button className="text-orange-600 font-medium text-sm hover:text-orange-800">Remind Me →</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. Streaming Access Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎥</span> Streaming Access Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {streamingFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-orange-100 flex items-start gap-3">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Tab - Featured Events */}
        {activeTab === 'upcoming' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">📅</span> Featured Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-2xl font-bold mb-2">National Education Summit 2024</h3>
                <p className="mb-2">March 25-27, 2024 | 10:00 AM - 5:00 PM</p>
                <p className="mb-4 opacity-90">Join 5000+ educators, students, and industry leaders</p>
                <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Register Now →
                </button>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-2xl font-bold mb-2">Scholarship Awareness Week</h3>
                <p className="mb-2">April 15-20, 2024 | Daily Sessions</p>
                <p className="mb-4 opacity-90">Learn about 100+ scholarship opportunities</p>
                <button className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Watch live events and webinars from our streaming platform!")} 
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Watch Live
            </button>
            <button 
              onClick={() => alert("Subscribe to get notified about upcoming events and webinars!")} 
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-orange-300"
            >
              Subscribe for Updates
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            All sessions are recorded and available for 30 days • Watch anytime, anywhere
          </p>
        </div>
      </div>
    </section>
  );
}