"use client";

import { useRef, useState, useEffect } from "react";

interface Video {
  id: number;
  src: string;
  title: string;
  mainHeading: string;
  subHeading: string;
}

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos: Video[] = [
    {
      id: 1,
      src: "/Videos/study.mp4",
      title: "Smart Study Techniques",
      mainHeading: "Master Smart Study Techniques",
      subHeading: "Learn How Top Students Study"
    },
    {
      id: 2,
      src: "/Videos/study1.mp4",
      title: "Smart Study Techniques",
      mainHeading: "Master Smart Study Techniques",
      subHeading: "Learn How Top Students Study"
    },
    {
      id: 3,
      src: "/Videos/study2.mp4",
      title: "Exam Preparation Guide",
      mainHeading: "Ace Your Exams With Confidence",
      subHeading: "Proven Exam Preparation Strategies"
    },
    {
      id: 4,
      src: "/Videos/study3.mp4",
      title: "Student Success Stories",
      mainHeading: "Inspiring Student Success Stories",
      subHeading: "Real Stories, Real Achievements"
    },
    {
      id: 5,
      src: "/Videos/study4.mp4",
      title: "Effective Learning Methods",
      mainHeading: "Innovative Learning Methods",
      subHeading: "Make Learning Fun & Effective"
    }
  ];

  // Auto-play carousel every 3 seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveVideo((prev: number) => (prev + 1) % videos.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length]);

  // Play/pause videos based on active state
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((video: HTMLVideoElement | null) => {
      if (video) {
        video.pause();
      }
    });

    // Play the active video
    const activeVideoElement = videoRefs.current[activeVideo];
    if (activeVideoElement) {
      activeVideoElement.play().catch((error: Error) => {
        console.log("Video play failed:", error);
      });
    }
  }, [activeVideo]);

  const handleDotClick = (index: number) => {
    setActiveVideo(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* Main Background Video - Clear without opacity */}
      <div className="absolute inset-0 w-full h-full">
        {videos.map((video: Video, index: number) => (
          <video
            key={video.id}
            ref={(el: HTMLVideoElement | null) => {
              if (el) {
                videoRefs.current[index] = el;
              }
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeVideo === index ? "opacity-100" : "opacity-0"
            }`}
            src={video.src}
            muted
            loop
            playsInline
            preload="auto"
          />
        ))}
        {/* Lighter gradient overlay for better text visibility without affecting video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        
        {/* KK PADHO INDIA - Always at Top */}
        <div className="text-center w-full pt-2">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            KK PADHO INDIA
          </h1>
          <div className="h-0.5 w-16 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-1"></div>
        </div>

        {/* Main Content - Centered */}
        <div className="w-full max-w-5xl mx-auto text-center">
          
          {/* Dynamic Text - Changes with active video */}
          <div className="mb-12 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {videos[activeVideo].mainHeading}
            </h2>
            
            <h3 className="text-2xl md:text-3xl text-blue-400 mb-4 drop-shadow-lg">
              {videos[activeVideo].subHeading}
            </h3>
          </div>

          {/* Dot Carousel */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {videos.map((_: Video, index: number) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group relative"
              >
                {/* Dot */}
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeVideo === index 
                      ? "w-10 bg-blue-400 shadow-lg shadow-blue-500/50" 
                      : "w-3 bg-white/70 hover:bg-white"
                  }`}
                />
                
                {/* Tooltip on Hover */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
                  {videos[index].title}
                </span>
              </button>
            ))}
          </div>

          {/* Current Video Title */}
          <div className="mt-6">
            <p className="text-blue-400 font-semibold drop-shadow-lg">
              Currently: {videos[activeVideo].title}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/40 overflow-hidden backdrop-blur-sm">
            <span className="relative z-10">Explore {videos[activeVideo].title}</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
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