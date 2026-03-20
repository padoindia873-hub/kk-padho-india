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

  const galleryImages: GalleryImage[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    src: `/Images/gallery-${i + 1}.jpg`,
    category: i % 3 === 0 ? "Scholarship" : i % 3 === 1 ? "Events" : "Students"
  }));

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
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
              className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              {/* Image Placeholder - Replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <span className="text-white text-4xl opacity-50">📷</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium truncate">{image.title}</p>
                  <p className="text-blue-300 text-xs">{image.category}</p>
                </div>
              </div>

              {/* Preview Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Preview
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl">🖼️</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <p className="text-gray-600">Category: {selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}