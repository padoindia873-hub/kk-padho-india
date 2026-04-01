"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobVacancyPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState<any>(null);

  // Latest job openings data
  const jobOpenings = [
    { 
      id: 1, 
      title: "Web Developer", 
      company: "Tech Solutions Inc.", 
      location: "Remote", 
      experience: "1-3 years", 
      salary: "₹4-6 LPA", 
      type: "full-time", 
      posted: "2 days ago", 
      description: "Looking for a skilled web developer with React and Node.js experience.",
      requirements: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "Git"]
    },
    { 
      id: 2, 
      title: "Data Scientist", 
      company: "Analytics Corp", 
      location: "Bangalore", 
      experience: "2-4 years", 
      salary: "₹8-12 LPA", 
      type: "full-time", 
      posted: "3 days ago", 
      description: "Seeking data scientist with Python, ML, and AI expertise.",
      requirements: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"]
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      company: "Creative Studio", 
      location: "Mumbai", 
      experience: "1-2 years", 
      salary: "₹5-7 LPA", 
      type: "full-time", 
      posted: "5 days ago", 
      description: "Creative UI/UX designer needed for web and mobile applications.",
      requirements: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
    },
    { 
      id: 4, 
      title: "Digital Marketing Specialist", 
      company: "Growth Hackers", 
      location: "Delhi NCR", 
      experience: "1-3 years", 
      salary: "₹3-5 LPA", 
      type: "full-time", 
      posted: "1 week ago", 
      description: "Digital marketing expert for SEO, social media, and content strategy.",
      requirements: ["SEO", "Google Analytics", "Social Media Marketing", "Content Writing", "Email Marketing"]
    },
    { 
      id: 5, 
      title: "Full Stack Developer", 
      company: "Digital Innovations", 
      location: "Pune", 
      experience: "2-5 years", 
      salary: "₹6-9 LPA", 
      type: "full-time", 
      posted: "4 days ago", 
      description: "Full stack developer with MERN stack expertise.",
      requirements: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS"]
    }
  ];

  // Internship opportunities data
  const internships = [
    { 
      id: 6, 
      title: "Python Developer Intern", 
      company: "Code Labs", 
      location: "Hyderabad", 
      duration: "3-6 months", 
      stipend: "₹15-20K/month", 
      type: "internship", 
      posted: "3 days ago", 
      description: "Internship opportunity for passionate Python developers.",
      requirements: ["Python", "Basic Django", "SQL", "Problem Solving"]
    },
    { 
      id: 7, 
      title: "Content Writing Intern", 
      company: "Content Factory", 
      location: "Remote", 
      duration: "2-3 months", 
      stipend: "₹8-12K/month", 
      type: "internship", 
      posted: "1 day ago", 
      description: "Content writing internship for blogs, articles, and social media.",
      requirements: ["Excellent writing", "SEO basics", "Research skills", "Creativity"]
    },
    { 
      id: 8, 
      title: "Graphic Design Intern", 
      company: "Creative Studio", 
      location: "Mumbai", 
      duration: "3 months", 
      stipend: "₹10-15K/month", 
      type: "internship", 
      posted: "5 days ago", 
      description: "Graphic design intern for social media and branding materials.",
      requirements: ["Photoshop", "Illustrator", "Canva", "Creativity", "Portfolio"]
    },
    { 
      id: 9, 
      title: "HR Intern", 
      company: "People Solutions", 
      location: "Chennai", 
      duration: "2-3 months", 
      stipend: "₹8-10K/month", 
      type: "internship", 
      posted: "6 days ago", 
      description: "HR intern for recruitment and employee engagement activities.",
      requirements: ["Communication skills", "MS Office", "Organization", "Team player"]
    },
    { 
      id: 10, 
      title: "Digital Marketing Intern", 
      company: "Growth Hackers", 
      location: "Delhi NCR", 
      duration: "3 months", 
      stipend: "₹12-15K/month", 
      type: "internship", 
      posted: "4 days ago", 
      description: "Digital marketing intern for SEO and social media management.",
      requirements: ["Social Media", "Content Creation", "Analytics", "Creativity"]
    }
  ];

  // Eligibility criteria
  const eligibilityCriteria = [
    { category: "Educational Qualification", details: "Minimum 60% in graduation for full-time roles; pursuing degree for internships" },
    { category: "Experience", details: "Freshers welcome for internships; 1-5 years experience for full-time positions" },
    { category: "Skills", details: "Relevant technical/domain skills as per job description" },
    { category: "Age Limit", details: "18-30 years for full-time; 18-25 years for internships" },
    { category: "Location", details: "Open to candidates from all locations; remote options available" }
  ];

  // Apply process steps
  const applySteps = [
    { step: 1, title: "Register", desc: "Create your profile on our portal" },
    { step: 2, title: "Upload Resume", desc: "Upload updated resume/CV" },
    { step: 3, title: "Apply", desc: "Select job and submit application" },
    { step: 4, title: "Shortlist", desc: "Get shortlisted for interview" },
    { step: 5, title: "Selection", desc: "Offer letter and onboarding" }
  ];

  const allJobs = [...jobOpenings, ...internships];
  const filteredJobs = filter === 'all' ? allJobs : allJobs.filter(job => job.type === filter);

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">💼</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Job Vacancy
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your dream job with our partner companies. Exclusive opportunities for members.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200'
            }`}
          >
            All Openings
          </button>
          <button 
            onClick={() => setFilter('full-time')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              filter === 'full-time' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200'
            }`}
          >
            Full Time
          </button>
          <button 
            onClick={() => setFilter('internship')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              filter === 'internship' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200'
            }`}
          >
            Internship
          </button>
        </div>

        {/* 1. Latest Job Openings & Internship Opportunities */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    job.type === 'full-time' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {job.type === 'full-time' ? 'FULL TIME' : 'INTERNSHIP'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{job.company}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <span>📍</span> {job.location}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <span>📚</span> {job.experience || job.duration}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <span>💰</span> {job.salary || job.stipend}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <span>⏰</span> Posted {job.posted}
                  </p>
                </div>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl font-semibold hover:shadow-md transition-all">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">✅</span> Eligibility Criteria
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {eligibilityCriteria.map((item, idx) => (
                <div key={idx} className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.category}</h3>
                  <p className="text-gray-600 text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Apply Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span> How to Apply
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {applySteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h2>
                    <p className="text-gray-500">{selectedJob.company}</p>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-600 text-3xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs">Location</p>
                    <p className="text-gray-800 text-sm font-semibold">{selectedJob.location}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs">Experience/Duration</p>
                    <p className="text-gray-800 text-sm font-semibold">{selectedJob.experience || selectedJob.duration}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs">Salary/Stipend</p>
                    <p className="text-gray-800 text-sm font-semibold">{selectedJob.salary || selectedJob.stipend}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs">Type</p>
                    <p className="text-gray-800 text-sm font-semibold capitalize">{selectedJob.type}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <span className="text-blue-500">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => alert(`Application submitted for ${selectedJob.title} position!`)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center pt-6">
          <button 
            onClick={() => alert("Start your application process now!")} 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Apply Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            New jobs added daily • Free placement assistance
          </p>
        </div>
      </div>
    </section>
  );
}