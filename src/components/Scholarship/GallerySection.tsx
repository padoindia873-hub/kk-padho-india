"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  src: string;
  category: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Gallery images from public/Images/folder with proper titles
  const galleryImages: GalleryImage[] = [
    { id: 1, title: "Acting Course", src: "/Images/acting.png", category: "Acting" },
    { id: 2, title: "Aerospace Engineering", src: "/Images/aerospace.png", category: "Engineering" },
    { id: 3, title: "Agriculture Science", src: "/Images/agriculture.png", category: "Agriculture" },
    { id: 4, title: "Automobile Engineering", src: "/Images/automobile.png", category: "Engineering" },
    { id: 5, title: "B.Ed Program", src: "/Images/b.ed.png", category: "Education" },
    { id: 6, title: "BBA Course", src: "/Images/bba.png", category: "Management" },
    { id: 7, title: "BCA Program", src: "/Images/bca.png", category: "Computer" },
    { id: 8, title: "Civil Engineering", src: "/Images/civil.png", category: "Engineering" },
    { id: 9, title: "D.El.Ed Course", src: "/Images/deled.png", category: "Education" },
    { id: 10, title: "Graphic Design", src: "/Images/graphic.png", category: "Design" },
    { id: 11, title: "Journalism", src: "/Images/journalism.png", category: "Media" },
    { id: 12, title: "MBA Program", src: "/Images/mba.png", category: "Management" },
    { id: 13, title: "MBBS Course", src: "/Images/mbbs.png", category: "Medical" },
    { id: 14, title: "MCA Program", src: "/Images/mca.png", category: "Computer" },
    { id: 15, title: "Nuclear Science", src: "/Images/nuclear.png", category: "Science" },
    { id: 16, title: "Nursing Course", src: "/Images/nursing.png", category: "Medical" },
    { id: 17, title: "PhD Program", src: "/Images/phd.png", category: "Research" },
    { id: 18, title: "Software Engineering", src: "/Images/software.png", category: "Engineering" },
    { id: 19, title: "UPSC Coaching", src: "/Images/upsc.png", category: "Civil Services" },
    { id: 20, title: "Web Development", src: "/Images/web%20development.png", category: "Computer" }
  ];

  // Function to get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Acting": "bg-purple-500",
      "Engineering": "bg-blue-500",
      "Agriculture": "bg-green-500",
      "Education": "bg-yellow-500",
      "Management": "bg-indigo-500",
      "Computer": "bg-cyan-500",
      "Design": "bg-pink-500",
      "Media": "bg-orange-500",
      "Medical": "bg-red-500",
      "Science": "bg-teal-500",
      "Research": "bg-violet-500",
      "Civil Services": "bg-emerald-500"
    };
    return colors[category] || "bg-gray-500";
  };

  const getCategoryBadgeColor = (category: string) => {
    const colors: Record<string, string> = {
      "Acting": "bg-purple-100 text-purple-700",
      "Engineering": "bg-blue-100 text-blue-700",
      "Agriculture": "bg-green-100 text-green-700",
      "Education": "bg-yellow-100 text-yellow-700",
      "Management": "bg-indigo-100 text-indigo-700",
      "Computer": "bg-cyan-100 text-cyan-700",
      "Design": "bg-pink-100 text-pink-700",
      "Media": "bg-orange-100 text-orange-700",
      "Medical": "bg-red-100 text-red-700",
      "Science": "bg-teal-100 text-teal-700",
      "Research": "bg-violet-100 text-violet-700",
      "Civil Services": "bg-emerald-100 text-emerald-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-700 text-sm font-semibold">📸 COURSE GALLERY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Padho India Course Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore various educational courses and programs we offer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Actual Image from public/Images/folder */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                onLoadingComplete={() => setIsLoading(false)}
              />
              
              {/* Loading Placeholder */}
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium truncate">{image.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white ${getCategoryColor(image.category)}`}>
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Preview Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-transform">
                  🔍 Preview
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Courses
          </button>
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video w-full bg-gray-900">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm px-3 py-1 rounded-full ${getCategoryBadgeColor(selectedImage.category)}`}>
                          {selectedImage.category}
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const prevId = selectedImage.id > 1 ? selectedImage.id - 1 : galleryImages.length;
                  setSelectedImage(galleryImages.find(img => img.id === prevId) || null);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const nextId = selectedImage.id < galleryImages.length ? selectedImage.id + 1 : 1;
                  setSelectedImage(galleryImages.find(img => img.id === nextId) || null);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}