"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login clicked");
    router.push("/login");
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-5 bg-white shadow-sm sticky top-0 z-50">
      
      {/* Logo */}
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => handleNavigation("/")}
      >
        <div className="w-8 h-8 bg-green-600 rounded-md"></div>
        <span className="text-xl font-bold text-gray-900">KK PADHO INDIA</span>
      </div>

      {/* Menu with Dropdown Icons */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {/* Home - No Dropdown */}
        <li>
          <Link 
            href="/" 
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-1"
          >
            Home
          </Link>
        </li>

        {/* Scholarship with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('scholarship')}
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-1"
          >
            Scholarship
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'scholarship' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {openDropdown === 'scholarship' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link href="/scholarship/merit" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Merit Based</Link>
              <Link href="/scholarship/need" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Need Based</Link>
              <Link href="/scholarship/women" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Women in STEM</Link>
              <Link href="/scholarship/sports" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Sports Excellence</Link>
            </div>
          )}
        </li>

        {/* Events with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('events')}
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-1"
          >
            Events
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'events' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {openDropdown === 'events' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link href="/events/upcoming" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Upcoming Events</Link>
              <Link href="/events/past" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Past Events</Link>
              <Link href="/events/workshops" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Workshops</Link>
              <Link href="/events/seminars" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Seminars</Link>
            </div>
          )}
        </li>

        {/* About - No Dropdown */}
        <li>
          <Link 
            href="/about" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            About
          </Link>
        </li>

        {/* Contact Us - No Dropdown */}
        <li>
          <Link 
            href="/contact" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </li>

        {/* Committee Members with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('committee')}
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-1"
          >
            Committee
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'committee' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {openDropdown === 'committee' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link href="/committee/members" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">All Members</Link>
              <Link href="/committee/board" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Board Members</Link>
              <Link href="/committee/advisors" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Advisors</Link>
            </div>
          )}
        </li>

        {/* Services with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('services')}
            className="hover:text-green-600 transition-colors duration-300 flex items-center gap-1"
          >
            Services
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {openDropdown === 'services' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link href="/services/scholarship" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Scholarship Guidance</Link>
              <Link href="/services/career" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Career Counseling</Link>
              <Link href="/services/skill" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Skill Development</Link>
              <Link href="/services/mentorship" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Mentorship</Link>
              <Link href="/services/study" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Study Material</Link>
              <Link href="/services/exam" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">Exam Preparation</Link>
            </div>
          )}
        </li>
      </ul>

      {/* Buttons - Only Login Button */}
      <div className="flex items-center gap-4">
        <button 
          onClick={handleLogin}
          className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-green-200"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}