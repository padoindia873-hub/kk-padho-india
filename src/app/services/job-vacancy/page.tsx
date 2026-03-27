"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobVacancyPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobs = [
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
      requirements: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "Git"],
      benefits: ["Health insurance", "Work from home", "Flexible hours", "Learning budget"]
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
      requirements: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
      benefits: ["Performance bonus", "Stock options", "Free meals", "Gym membership"]
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
      requirements: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      benefits: ["Creative environment", "Team outings", "Flexible timing", "Design tools license"]
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
      requirements: ["SEO", "Google Analytics", "Social Media Marketing", "Content Writing", "Email Marketing"],
      benefits: ["Performance bonus", "Certification courses", "Flexible hours", "Annual retreat"]
    },
    { 
      id: 5, 
      title: "Python Developer (Intern)", 
      company: "Code Labs", 
      location: "Hyderabad", 
      experience: "Fresher", 
      salary: "₹15-20K/month", 
      type: "internship", 
      posted: "3 days ago", 
      description: "Internship opportunity for passionate Python developers.",
      requirements: ["Python", "Basic Django", "SQL", "Problem Solving"],
      benefits: ["Stipend", "Certificate", "PPO opportunity", "Mentorship"]
    },
    { 
      id: 6, 
      title: "Full Stack Developer", 
      company: "Digital Innovations", 
      location: "Pune", 
      experience: "2-5 years", 
      salary: "₹6-9 LPA", 
      type: "full-time", 
      posted: "4 days ago", 
      description: "Full stack developer with MERN stack expertise.",
      requirements: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS"],
      benefits: ["Health insurance", "WFH options", "Annual bonus", "Skill development"]
    },
    { 
      id: 7, 
      title: "Content Writer", 
      company: "Content Factory", 
      location: "Remote", 
      experience: "0-2 years", 
      salary: "₹2-4 LPA", 
      type: "part-time", 
      posted: "1 day ago", 
      description: "Content writer for blogs, articles, and social media content.",
      requirements: ["Excellent writing skills", "SEO knowledge", "Research ability", "Creativity"],
      benefits: ["Flexible schedule", "Work from home", "Performance bonus", "Free courses"]
    },
    { 
      id: 8, 
      title: "HR Executive", 
      company: "People Solutions", 
      location: "Chennai", 
      experience: "1-3 years", 
      salary: "₹3-4.5 LPA", 
      type: "full-time", 
      posted: "6 days ago", 
      description: "HR executive for recruitment, onboarding, and employee engagement.",
      requirements: ["Recruitment", "Employee relations", "HR policies", "Communication skills"],
      benefits: ["Health insurance", "Provident fund", "Annual leave", "Training programs"]
    }
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.type === filter);

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Facilities</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-3xl mb-6 mx-auto border border-orange-400/50 shadow-xl">
            <span className="text-7xl">💼</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Job Vacancy
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find your dream job with our partner companies. Exclusive opportunities for members.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-orange-400">{jobs.length}+</div>
            <p className="text-gray-400 text-sm mt-2">Open Positions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-orange-400">20+</div>
            <p className="text-gray-400 text-sm mt-2">Companies Hiring</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-orange-400">10+</div>
            <p className="text-gray-400 text-sm mt-2">Cities Covered</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-orange-400">500+</div>
            <p className="text-gray-400 text-sm mt-2">Placements Done</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            All Jobs
          </button>
          <button 
            onClick={() => setFilter('full-time')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'full-time' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Full Time
          </button>
          <button 
            onClick={() => setFilter('part-time')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'part-time' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Part Time
          </button>
          <button 
            onClick={() => setFilter('internship')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'internship' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
          >
            Internship
          </button>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  job.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                  job.type === 'part-time' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {job.type.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{job.company}</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <span>📍</span> {job.location}
                </p>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <span>📚</span> {job.experience}
                </p>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <span>💰</span> {job.salary}
                </p>
                <p className="text-gray-300 text-sm flex items-center gap-2">
                  <span>⏰</span> Posted {job.posted}
                </p>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {job.description}
              </p>
              
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No jobs found in this category.</p>
          </div>
        )}

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-orange-400/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md p-6 border-b border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-orange-400">{selectedJob.title}</h2>
                    <p className="text-gray-300">{selectedJob.company}</p>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white text-sm font-semibold">{selectedJob.location}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-gray-400 text-xs">Experience</p>
                    <p className="text-white text-sm font-semibold">{selectedJob.experience}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-gray-400 text-xs">Salary</p>
                    <p className="text-white text-sm font-semibold">{selectedJob.salary}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-gray-400 text-xs">Type</p>
                    <p className="text-white text-sm font-semibold capitalize">{selectedJob.type}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Job Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-orange-400">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-green-400">🎁</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => alert(`Application submitted for ${selectedJob.title} position!`)}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => alert("Job alerts will be sent to your email!")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Job Alerts
          </button>
          <p className="text-gray-400 text-sm mt-4">New jobs added daily • Free placement assistance</p>
        </div>
      </div>
    </section>
  );
}