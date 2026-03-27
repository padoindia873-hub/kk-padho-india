"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Teacher {
  id: number;
  name: string;
  qualification: string;
  experience: string;
  expertise: string[];
  state: string;
  city: string;
  rating: number;
  studentsTaught: number;
  image: string;
}

export default function AllTeachersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  // Sample teacher data - Replace with actual data from your backend
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      qualification: "PhD in Mathematics",
      experience: "12+ years",
      expertise: ["Mathematics", "Physics"],
      state: "Delhi",
      city: "New Delhi",
      rating: 4.9,
      studentsTaught: 2500,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Rajesh+Kumar"
    },
    {
      id: 2,
      name: "Prof. Anita Sharma",
      qualification: "M.Sc. in Computer Science",
      experience: "8+ years",
      expertise: ["Computer Science", "Programming"],
      state: "Maharashtra",
      city: "Mumbai",
      rating: 4.8,
      studentsTaught: 1800,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Anita+Sharma"
    },
    {
      id: 3,
      name: "Suresh Reddy",
      qualification: "B.Ed in English",
      experience: "6+ years",
      expertise: ["English", "Communication Skills"],
      state: "Telangana",
      city: "Hyderabad",
      rating: 4.7,
      studentsTaught: 1200,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Suresh+Reddy"
    },
    {
      id: 4,
      name: "Dr. Meena Gupta",
      qualification: "PhD in Chemistry",
      experience: "15+ years",
      expertise: ["Chemistry", "Science"],
      state: "Uttar Pradesh",
      city: "Lucknow",
      rating: 4.9,
      studentsTaught: 3200,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Meena+Gupta"
    },
    {
      id: 5,
      name: "Arjun Singh",
      qualification: "M.Com",
      experience: "5+ years",
      expertise: ["Economics", "Business Studies"],
      state: "Rajasthan",
      city: "Jaipur",
      rating: 4.6,
      studentsTaught: 950,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Arjun+Singh"
    },
    {
      id: 6,
      name: "Priya Patel",
      qualification: "M.Sc. in Biology",
      experience: "7+ years",
      expertise: ["Biology", "Science"],
      state: "Gujarat",
      city: "Ahmedabad",
      rating: 4.8,
      studentsTaught: 1500,
      image: "https://ui-avatars.com/api/?background=amber&color=fff&name=Priya+Patel"
    }
  ];

  // Filter teachers based on search and filters
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesState = !filterState || teacher.state === filterState;
    const matchesSubject = !filterSubject || teacher.expertise.includes(filterSubject);
    return matchesSearch && matchesState && matchesSubject;
  });

  // Get unique states and subjects for filters
  const uniqueStates = [...new Set(teachers.map(t => t.state))];
  const uniqueSubjects = [...new Set(teachers.flatMap(t => t.expertise))];

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button - Fixed with correct path */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Free IT Training</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-3xl mb-6 mx-auto border border-amber-400/50 shadow-xl">
            <span className="text-7xl">👥</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Our Teachers
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our experienced and dedicated educators from across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Filter by State</label>
              <select
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="">All States</option>
                {uniqueStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Filter by Subject</label>
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="">All Subjects</option>
                {uniqueSubjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full border-2 border-amber-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-amber-400 text-sm">{teacher.qualification}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span>📚</span> Experience: {teacher.experience}
                  </p>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span>📍</span> {teacher.city}, {teacher.state}
                  </p>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <span>⭐</span> Rating: {teacher.rating}/5 ({teacher.studentsTaught}+ students)
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.expertise.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => alert(`Book a session with ${teacher.name}`)}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
                >
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No teachers found matching your criteria.</p>
          </div>
        )}
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl text-amber-400 mb-2">👥</div>
            <div className="text-2xl font-bold text-white">{teachers.length}+</div>
            <p className="text-gray-400">Expert Teachers</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl text-amber-400 mb-2">🌍</div>
            <div className="text-2xl font-bold text-white">{uniqueStates.length}</div>
            <p className="text-gray-400">States Covered</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-4xl text-amber-400 mb-2">📚</div>
            <div className="text-2xl font-bold text-white">{uniqueSubjects.length}</div>
            <p className="text-gray-400">Subjects Offered</p>
          </div>
        </div>
      </div>
    </section>
  );
}