"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventLiveStreamingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    { title: "National Scholarship Summit", date: "March 25, 2024", time: "10:00 AM", speaker: "Dr. Rajesh Kumar" },
    { title: "Career Guidance Webinar", date: "March 28, 2024", time: "3:00 PM", speaker: "Prof. Anita Sharma" },
    { title: "Skill Development Workshop", date: "April 5, 2024", time: "11:00 AM", speaker: "Industry Experts" },
    { title: "Educational Technology Conference", date: "April 12, 2024", time: "9:30 AM", speaker: "Tech Leaders" },
  ];

  const pastEvents = [
    { title: "Scholarship Awareness Program", date: "February 15, 2024", views: "2.5K", recording: true },
    { title: "Exam Preparation Strategies", date: "February 10, 2024", views: "1.8K", recording: true },
    { title: "College Admission Guidance", date: "January 28, 2024", views: "3.2K", recording: true },
  ];

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl mb-6 mx-auto border border-cyan-400/50 shadow-xl">
            <span className="text-7xl">📺</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Event Live Streaming
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch educational events, workshops, and seminars live from anywhere.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'upcoming' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Upcoming Events
          </button>
          <button 
            onClick={() => setActiveTab('live')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'live' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Live Now
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'past' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Past Recordings
          </button>
        </div>

        {/* Live Events Section */}
        {activeTab === 'live' && (
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-2xl font-bold text-white">Currently Live</h2>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 text-center">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl animate-pulse">🔴</span>
                  </div>
                  <p className="text-gray-400">No live events at the moment</p>
                  <p className="text-sm text-gray-500 mt-2">Check back during scheduled event times</p>
                </div>
              </div>
              <p className="text-cyan-400 font-semibold">Next Live Event: March 25, 2024 at 10:00 AM</p>
            </div>
          </div>
        )}

        {/* Upcoming Events Grid */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">Upcoming</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-1">📅 {event.date} • ⏰ {event.time}</p>
                <p className="text-gray-400 mb-4">👨‍🏫 Speaker: {event.speaker}</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Past Events Grid */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Recording Available</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-1">📅 {event.date}</p>
                <p className="text-gray-400 mb-4">👁️ {event.views} views</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Watch Recording
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-Device Access</h3>
            <p className="text-gray-400 text-sm">Watch on mobile, tablet, or desktop</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400 text-sm">Interact with speakers and attendees</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-white mb-2">Download Resources</h3>
            <p className="text-gray-400 text-sm">Get presentation slides and materials</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Subscribe to get notified about upcoming events!")}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Subscribe for Updates
          </button>
          <p className="text-gray-400 text-sm mt-4">Get notified about new events • Never miss a live session</p>
        </div>
      </div>
    </section>
  );
}