"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Director {
  name: string;
  role: string;
}

interface GalleryImage {
  id: number;
  title: string;
  src: string;
}

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const directors: Director[] = [
    { name: "Bholanath De", role: "Director" },
    { name: "Bipul Mondal", role: "Director" },
    { name: "Afsasur Rahaman Sardar", role: "Director" },
    { name: "Anirban Saha", role: "Director" },
    { name: "Pradip Kumar Goswami", role: "Director" },
    { name: "Jaggu Sahani", role: "Director" },
    { name: "Kiran Mondal", role: "Director" },
  ];

  const galleryImages: GalleryImage[] = [
    { id: 1, title: "Gallery 1", src: "/images/gallery1.jpg" },
    { id: 2, title: "Gallery 2", src: "/images/gallery2.jpg" },
    { id: 3, title: "Gallery 3", src: "/images/gallery3.jpg" },
    { id: 4, title: "Gallery 4", src: "/images/gallery4.jpg" },
    { id: 5, title: "Gallery 5", src: "/images/gallery5.jpg" },
    { id: 6, title: "Gallery 6", src: "/images/gallery6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-400"> KK Padho India</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background. Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We believe that education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12. Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Padho India, we understand the aspirations of parents who dream of seeing their children become successful professionals in fields like IT, engineering, and medicine. To support these dreams, we provide free training programs in engineering, software development, and other in-demand sectors. Our goal is to bridge the gap between talent and opportunity by offering accessible and high-quality education.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In addition to empowering students, Padho India also supports junior advocates by arranging financial assistance. This helps them remain dedicated to their legal profession without being burdened by financial struggles.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            Padho India is not just an educational platform—it is a movement dedicated to building a stronger, smarter, and brighter nation by ensuring that every child has the opportunity to learn, grow, and succeed.
          </p>
          
          {/* Bengali Quote */}
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
            <p className="text-lg text-gray-800 italic">
              চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি, যারা আমাদের দেশের সম্পদ. আমাদের দেশের স্তম্ভ এবং আমাদের দেশের ভবিষ্যৎ.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              Our Vision
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Equal education for all:</span> We envision a future where every child, regardless of their socioeconomic background, has access to quality education that empowers them to build a brighter future.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Bridging the digital divide:</span> By integrating technology into learning, we aim to connect students in rural and underserved areas with global educational resources.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Promoting lifelong learning:</span> Our goal is to cultivate a culture of continuous learning, equipping students with the skills needed to thrive in a rapidly evolving world.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              Our Mission
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Providing scholarships:</span> We offer fully-funded scholarships to students from economically disadvantaged backgrounds, ensuring they have the resources to pursue their education without barriers.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Empowering through mentorship:</span> Our mentorship programs connect students with industry experts, guiding them through career planning and skill development.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700"><span className="font-semibold">Enhancing digital literacy:</span> We equip students with essential digital skills to thrive in the modern workforce, closing the gap between education and employment.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Chairman's Desk */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">From the Chairman's Desk</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  MK
                </div>
                <h3 className="text-xl font-bold text-gray-800">Md. K. Khan</h3>
                <p className="text-blue-600 text-sm">Founder, Chairman & CEO</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Our Honourable Founder, Chairman, CEO Cum Managing Director Mr. Md. K. Khan Sir is the proud recipient of the <span className="font-semibold">Bharat Gaurav Award</span> and <span className="font-semibold">Rashtriya Vikas Ratan Award</span>, achieved on 23rd August 2012 from the Indian Achievers Forum, New Delhi.
              </p>
              <p className="text-gray-700 mb-4">
                He is a great achiever and a relentless force working towards propelling India into the forefront of the 21st Century. An ICON, a visionary, and a true leader, Mr. Khan has the unique capability to think out of the box.
              </p>
              <p className="text-gray-700">
                With immense knowledge and experience across almost every field of life, he consistently delivers outstanding results. His brilliant mind and high IQ empower him to complete any project efficiently within a remarkably short span of time.
              </p>
              <p className="text-right mt-4 text-gray-600 italic">— Md. K. Khan</p>
            </div>
          </div>
        </div>

        {/* Board of Directors */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Board of Directors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="font-semibold text-gray-800">{director.name}</h3>
                <p className="text-sm text-blue-600">{director.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                  <span className="text-white text-4xl opacity-50">📷</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Preview</span>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">K</span>
                </div>
                <span className="text-xl font-bold">KK PADHO INDIA</span>
              </div>
              <p className="text-blue-200 text-sm">
                Empowering students through free education and exclusive scholarships.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-200 hover:text-yellow-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-blue-200 hover:text-yellow-400 transition-colors">About</Link></li>
                <li><Link href="/scholarship" className="text-blue-200 hover:text-yellow-400 transition-colors">Scholarships</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">📞</span>
                  +91 9123744290
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✉️</span>
                  padoindia873@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">📍</span>
                  Kolkata, West Bengal, India - 700125
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white">in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300 text-sm">
            © 2026 All Rights Reserved. KK PADHO INDIA
          </div>
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
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-6xl">🖼️</span>
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