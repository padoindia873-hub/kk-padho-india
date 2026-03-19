"use client";

import { useRef, useState } from "react";

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    {
      id: 1,
      src: "/Videos/study.mp4",
      title: "Smart Study Techniques",
      description: "Learn proven methods to study efficiently and retain more information in less time",
      mainHeading: "Master Smart Study Techniques",
      subHeading: "Learn How Top Students Study"
    },
    {
      id: 2,
      src: "/Videos/study2.mp4",
      title: "Exam Preparation Guide",
      description: "Comprehensive strategies to prepare for and ace your exams with confidence",
      mainHeading: "Ace Your Exams With Confidence",
      subHeading: "Proven Exam Preparation Strategies"
    },
    {
      id: 3,
      src: "/Videos/study3.mp4",
      title: "Student Success Stories",
      description: "Real stories of students who transformed their lives through education",
      mainHeading: "Inspiring Student Success Stories",
      subHeading: "Real Stories, Real Achievements"
    },
    {
      id: 4,
      src: "/Videos/study4.mp4",
      title: "Effective Learning Methods",
      description: "Discover innovative learning techniques that make studying enjoyable",
      mainHeading: "Innovative Learning Methods",
      subHeading: "Make Learning Fun & Effective"
    }
  ];

  const handleVideoHover = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleVideoLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const handleVideoClick = (index) => {
    setActiveVideo(index);
  };

  return (
    <section className="relative w-full min-h-screen bg-black">
      
      {/* Main Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          key={activeVideo} // This forces video to reload when source changes
          className="w-full h-full object-cover opacity-70"
          src={videos[activeVideo].src}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content Overlay - Text changes based on active video */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-white">
        
        {/* Main Heading - Changes with video click */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {videos[activeVideo].mainHeading}
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-blue-400 mb-4">
            {videos[activeVideo].subHeading}
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            {videos[activeVideo].description}
          </p>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative group cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeVideo === index 
                  ? "border-blue-400 scale-105 shadow-xl shadow-blue-500/20" 
                  : "border-transparent hover:border-white/50"
              }`}
              onMouseEnter={() => handleVideoHover(index)}
              onMouseLeave={() => handleVideoLeave(index)}
              onClick={() => handleVideoClick(index)}
            >
              {/* Video Thumbnail */}
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                src={video.src}
                className="w-full h-48 object-cover"
                muted
                loop
                playsInline
              />
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{video.description}</p>
              </div>

              {/* Play Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              {/* Active Indicator */}
              {activeVideo === index && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Text Section - Changes with video click */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Currently Exploring
          </p>
          <h3 className="text-2xl font-semibold text-blue-400">
            {videos[activeVideo].title}
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {videos[activeVideo].description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-12 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
          Explore {videos[activeVideo].title}
        </button>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}