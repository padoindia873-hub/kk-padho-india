"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Director {
  name: string;
  role: string;
  image?: string;
}

interface GalleryImage {
  id: number;
  title: string;
  src: string;
}

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const directors: Director[] = [
    { name: "Bholanath De", role: "Director", image: "/images/bholenath de.png" },
    { name: "Bipul Mondal", role: "Director", image: "/images/bipul.png" },
    { name: "Afsasur Rahaman Sardar", role: "Director", image: "/images/Afsasur Rahaman Sardar.png" },
    { name: "Anirban Saha", role: "Director", image: "/images/Anirban Saha.png" },
    { name: "Pradip Kumar Goswami", role: "Director", image: "/images/Pradip Kumar Goswami.png" },
    { name: "Jaggu Sahani", role: "Director", image: "/images/Jaggu Sahani.png" },
    { name: "Kiran Mondal", role: "Director", image: "/images/Kiran Mondal.png" },
  ];

  const galleryImages: GalleryImage[] = [
    { id: 1, title: "Bholanath De", src: "/images/image1.png" },
    { id: 2, title: "Bipul Mondal", src: "/images/image2.png" },
    { id: 3, title: "Afsasur Rahaman Sardar", src: "/images/image3.png" },
    { id: 4, title: "Anirban Saha", src: "/images/image4.png" },
    { id: 5, title: "Pradip Kumar Goswami", src: "/images/image5.png" },
    { id: 6, title: "Jaggu Sahani", src: "/images/image6.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Hero Section - Modern Gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-medium">Who We Are</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-yellow-300">KK Padho India</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto">
            Empowering dreams through quality education and equal opportunities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 hover:shadow-2xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Believe</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-center text-white">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-90">Students Impacted</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-center text-white">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm opacity-90">Free Education</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-center text-white">
            <div className="text-3xl font-bold">25+</div>
            <div className="text-sm opacity-90">Courses Offered</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-center text-white">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm opacity-90">Expert Mentors</div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p className="text-gray-600">Equal education for every child regardless of background</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p className="text-gray-600">Bridging the digital divide in rural areas</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p className="text-gray-600">Cultivating lifelong learning culture</p>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <p className="text-gray-600">Providing fully-funded scholarships</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <p className="text-gray-600">Empowering through expert mentorship</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <p className="text-gray-600">Enhancing digital literacy skills</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Chairman's Desk */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">From the Chairman's Desk</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/images/kk khan.png"
                  alt="Md. K. Khan"
                  fill
                  className="rounded-2xl object-cover border-2 border-yellow-400 shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4">Md. K. Khan</h3>
              <p className="text-yellow-400 text-center text-sm">Founder, Chairman & CEO</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Honourable Founder, Chairman, CEO Cum Managing Director Mr. Md. K. Khan Sir is the proud recipient of the <span className="text-yellow-400 font-semibold">Bharat Gaurav Award</span> and <span className="text-yellow-400 font-semibold">Rashtriya Vikas Ratan Award</span>, achieved on 23rd August 2012 from the Indian Achievers Forum, New Delhi.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                He is a great achiever and a relentless force working towards propelling India into the forefront of the 21st Century. An ICON, a visionary, and a true leader, Mr. Khan has the unique capability to think out of the box.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With immense knowledge and experience across almost every field of life, he consistently delivers outstanding results. His brilliant mind and high IQ empower him to complete any project efficiently within a remarkably short span of time.
              </p>
              <p className="text-right mt-4 text-yellow-400 italic">— Md. K. Khan</p>
            </div>
          </div>
        </div>

        {/* Board of Directors */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Board of Directors</h2>
          <p className="text-center text-gray-500 mb-8">Our dedicated leadership team</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {directors.map((director, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                  <Image
                    src={director.image || "/images/avatar-placeholder.png"}
                    alt={director.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">
                  {director.name}
                </h3>
                <p className="text-sm text-gray-500">{director.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery - 3 columns */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Gallery</h2>
          <p className="text-center text-gray-500 mb-8">Moments that define our journey</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be a part of something bigger. Help us empower the next generation of leaders through education.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* Gallery Modal */}
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
              <div className="relative aspect-video w-full bg-gray-900">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}