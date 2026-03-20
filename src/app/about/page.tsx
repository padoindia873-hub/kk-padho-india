"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

interface Director {
  name: string;
  role: string;
  image?: string;
}

interface GalleryImage {
  id: number;
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
    { id: 1, src: "/images/image1.png" },
    { id: 2, src: "/images/image2.png" },
    { id: 3, src: "/images/image3.png" },
    { id: 4, src: "/images/image4.png" },
    { id: 5, src: "/images/image5.png" },
    { id: 6, src: "/images/image6.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Hero Section with Video Background */}
      <section className="relative text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/study7.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-1">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
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
        
        {/* Introduction Section with Video Background */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/study5.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">About KK Padho India</h2>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background. Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              We believe that education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12. Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              At Padho India, we understand the aspirations of parents who dream of seeing their children become successful professionals in fields like IT, engineering, and medicine. To support these dreams, we provide free training programs in engineering, software development, and other in-demand sectors. Our goal is to bridge the gap between talent and opportunity by offering accessible and high-quality education.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              In addition to empowering students, Padho India also supports junior advocates by arranging financial assistance. This helps them remain dedicated to their legal profession without being burdened by financial struggles.
            </p>
            <p className="text-gray-200 leading-relaxed font-semibold">
              Padho India is not just an educational platform—it is a movement dedicated to building a stronger, smarter, and brighter nation by ensuring that every child has the opportunity to learn, grow, and succeed.
            </p>
            
            {/* Bengali Quote */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border-l-4 border-yellow-400">
              <p className="text-lg text-gray-200 italic">
                চলুন আমরা এবং আপনারা মিলে সেই সমস্ত ফুটফুটে বাচ্চাদের ভবিষ্যৎ গড়ে তুলি, যারা আমাদের দেশের সম্পদ. আমাদের দেশের স্তম্ভ এবং আমাদের দেশের ভবিষ্যৎ.
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

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100 hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">🎯</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Equal education for all</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every child, regardless of their socioeconomic background, has access to quality education that empowers them to build a brighter future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Bridging the digital divide</h3>
              <p className="text-gray-600 leading-relaxed">
                By integrating technology into learning, we aim to connect students in rural and underserved areas with global educational resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Promoting lifelong learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to cultivate a culture of continuous learning, equipping students with the skills needed to thrive in a rapidly evolving world.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border border-purple-100 hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Providing scholarships</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer fully-funded scholarships to students from economically disadvantaged backgrounds, ensuring they have the resources to pursue their education without barriers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Empowering through mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mentorship programs connect students with industry experts, guiding them through career planning and skill development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Enhancing digital literacy</h3>
              <p className="text-gray-600 leading-relaxed">
                We equip students with essential digital skills to thrive in the modern workforce, closing the gap between education and employment.
              </p>
            </div>
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

        {/* Gallery */}
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
                  alt="Gallery"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
}