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

  // Gallery images from public/images/folder
  const galleryImages: GalleryImage[] = [
    { id: 1, title: "Scholarship Award Ceremony", src: "/images/acting.png", category: "Scholarship" },
    { id: 2, title: "Students Studying Together", src: "/images/aerospace.png", category: "Students" },
    { id: 3, title: "Exam Preparation Class", src: "/images/agriculture.png", category: "Events" },
    { id: 4, title: "Free Tuition Session", src: "/images/automobile.png", category: "Students" },
    { id: 5, title: "Career Counseling", src: "/images/b.ed.png", category: "Events" },
    { id: 6, title: "Scholarship Winners", src: "/images/bba.png", category: "Scholarship" },
    { id: 7, title: "IT Training Workshop", src: "/images/bca.png", category: "Events" },
    { id: 8, title: "Spoken English Class", src: "/images/civil.png", category: "Students" },
    { id: 9, title: "Medical Camp", src: "/images/deled.png", category: "Events" },
    { id: 10, title: "Acting Workshop", src: "/images/graphic.png", category: "Students" },
    { id: 11, title: "Scholarship Distribution", src: "/images/journalism.png", category: "Scholarship" },
    { id: 12, title: "Computer Lab Session", src: "/images/mba.png", category: "Students" },
    { id: 13, title: "Seminar Hall", src: "/images/mbbs.png", category: "Events" },
    { id: 14, title: "Library Study Session", src: "/images/mca.png", category: "Students" },
    { id: 15, title: "Award Ceremony", src: "/images/nuclear.png", category: "Scholarship" },
    { id: 16, title: "Group Discussion", src: "/images/nursing.png", category: "Students" },
    { id: 17, title: "Workshop", src: "/images/phd.png", category: "Events" },
    { id: 18, title: "Mentorship Session", src: "/images/software.png", category: "Students" },
    { id: 19, title: "Scholarship Test", src: "/images/upsc.png", category: "Scholarship" },
    { id: 20, title: "Graduation Ceremony", src: "/images/web development.png", category: "Events" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 mb-4">
            <span className="text-blue-700 text-sm font-semibold">📸 GALLERY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Padho India Exam Preparation Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering dreams through education, support, and opportunity.
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
              {/* Actual Image from public/images/folder */}
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
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      image.category === "Scholarship" ? "bg-yellow-500 text-white" :
                      image.category === "Events" ? "bg-purple-500 text-white" :
                      "bg-green-500 text-white"
                    }`}>
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

              {/* Image Number Badge */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                #{image.id}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Images
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
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          selectedImage.category === "Scholarship" ? "bg-yellow-100 text-yellow-700" :
                          selectedImage.category === "Events" ? "bg-purple-100 text-purple-700" :
                          "bg-green-100 text-green-700"
                        }`}>
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