"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login clicked");
    router.push("/login");
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-4 bg-white shadow-lg sticky top-0 z-50 border-b border-green-100">
      
      {/* Logo */}
      <div 
        className="flex items-center cursor-pointer group" 
        onClick={() => handleNavigation("/")}
      >
        <img 
          src="/Images/logo.png"
          alt="KK Padho India Logo" 
          className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
        {/* Home */}
        <li>
          <Link 
            href="/" 
            className="hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            Home
          </Link>
        </li>

        {/* Scholarship - Link to scholarship details page */}
        <li>
          <Link 
            href="/services/scholarship-details"
            className="hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            Scholarship
          </Link>
        </li>

        {/* Events - Simple Link without dropdown */}
        <li>
          <Link 
            href="/events"
            className="hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            Events
          </Link>
        </li>

        {/* About */}
        <li>
          <Link 
            href="/about" 
            className="hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            About
          </Link>
        </li>

        {/* Contact Us */}
        <li>
          <Link 
            href="/contact" 
            className="hover:text-green-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-green-50"
          >
            Contact Us
          </Link>
        </li>

        {/* Committee with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('committee')}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
              openDropdown === 'committee' 
                ? 'text-green-600 bg-green-50' 
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
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
          
          {/* Desktop Dropdown Menu */}
          {openDropdown === 'committee' && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-green-100">
              <Link href="/committee/members" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">👥 All Members</Link>
              <Link href="/committee/board" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">📋 Board Members</Link>
              <Link href="/committee/advisors" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700">💡 Advisors</Link>
            </div>
          )}
        </li>

        {/* Services with Dropdown */}
        <li className="relative">
          <button 
            onClick={() => toggleDropdown('services')}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
              openDropdown === 'services' 
                ? 'text-green-600 bg-green-50' 
                : 'hover:text-green-600 hover:bg-green-50'
            }`}
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
          
          {/* Desktop Dropdown Menu */}
          {openDropdown === 'services' && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 z-50 border border-green-100 max-h-96 overflow-y-auto">
              <Link href="/services/live-stream" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">📺 Live Stream</Link>
              <Link href="/services/prize-list" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🏆 Prize List</Link>
              <Link href="/services/exam-system" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">📝 Scholarship Exam System</Link>
              <Link href="/services/qar" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🚗 QAR</Link>
              <Link href="/services/vision-mission" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🎯 Vision & Mission</Link>
              <Link href="/services/kk-raksha-kavach" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🛡️ KK Raksha Kavach</Link>
              <Link href="/services/kk-membership" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">💳 KK Membership Card</Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link href="/services/scholarship" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🎯 Scholarship Guidance</Link>
              <Link href="/services/career" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">💼 Career Counseling</Link>
              <Link href="/services/skill" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🔧 Skill Development</Link>
              <Link href="/services/mentorship" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">🤝 Mentorship</Link>
              <Link href="/services/study" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700 border-b border-gray-50 last:border-0">📚 Study Material</Link>
              <Link href="/services/exam" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors text-gray-700">📝 Exam Preparation</Link>
            </div>
          )}
        </li>
      </ul>

      {/* Desktop Login Button */}
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={handleLogin}
          className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Login
        </button>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center gap-2 md:hidden">
        <button 
          onClick={handleLogin}
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-sm font-medium shadow-md flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Login
        </button>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-green-50 transition-colors border border-gray-200"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 md:hidden z-50 max-h-[80vh] overflow-y-auto border-t border-green-100">
          <ul className="space-y-2">
            {/* Home */}
            <li>
              <Link 
                href="/" 
                className="flex items-center gap-3 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
                onClick={() => handleNavigation("/")}
              >
                <span className="text-green-600">🏠</span>
                Home
              </Link>
            </li>

            {/* Scholarship Mobile - Link to scholarship details page */}
            <li>
              <Link 
                href="/services/scholarship-details"
                className="flex items-center gap-3 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
                onClick={() => handleNavigation("/services/scholarship-details")}
              >
                <span className="text-green-600">🎓</span>
                Scholarship
              </Link>
            </li>

            {/* Events Mobile - Simple Link */}
            <li>
              <Link 
                href="/events"
                className="flex items-center gap-3 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
                onClick={() => handleNavigation("/events")}
              >
                <span className="text-green-600">📅</span>
                Events
              </Link>
            </li>

            {/* About */}
            <li>
              <Link 
                href="/about" 
                className="flex items-center gap-3 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
                onClick={() => handleNavigation("/about")}
              >
                <span className="text-green-600">ℹ️</span>
                About
              </Link>
            </li>

            {/* Contact Us */}
            <li>
              <Link 
                href="/contact" 
                className="flex items-center gap-3 py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
                onClick={() => handleNavigation("/contact")}
              >
                <span className="text-green-600">📞</span>
                Contact Us
              </Link>
            </li>

            {/* Committee Mobile with Dropdown */}
            <li>
              <button 
                onClick={() => toggleMobileDropdown('committee')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
              >
                <span className="flex items-center gap-3">
                  <span className="text-green-600">👥</span>
                  Committee
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'committee' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'committee' && (
                <div className="pl-11 mt-1 space-y-1 bg-gray-50 rounded-xl p-2">
                  <Link href="/committee/members" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/members")}>👥 All Members</Link>
                  <Link href="/committee/board" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/board")}>📋 Board Members</Link>
                  <Link href="/committee/advisors" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/advisors")}>💡 Advisors</Link>
                </div>
              )}
            </li>

            {/* Services Mobile with Dropdown */}
            <li>
              <button 
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-green-50 hover:text-green-600 rounded-xl transition-colors text-gray-700 font-medium"
              >
                <span className="flex items-center gap-3">
                  <span className="text-green-600">⚙️</span>
                  Services
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'services' && (
                <div className="pl-11 mt-1 space-y-1 bg-gray-50 rounded-xl p-2 max-h-60 overflow-y-auto">
                  <Link href="/services/live-stream" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/live-stream")}>📺 Live Stream</Link>
                  <Link href="/services/prize-list" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/prize-list")}>🏆 Prize List</Link>
                  <Link href="/services/exam-system" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/exam-system")}>📝 Scholarship Exam System</Link>
                  <Link href="/services/qar" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/qar")}>🚗 QAR</Link>
                  <Link href="/services/vision-mission" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/vision-mission")}>🎯 Vision & Mission</Link>
                  <Link href="/services/kk-raksha-kavach" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/kk-raksha-kavach")}>🛡️ KK Raksha Kavach</Link>
                  <Link href="/services/kk-membership" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/kk-membership")}>💳 KK Membership Card</Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link href="/services/scholarship" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/scholarship")}>🎯 Scholarship Guidance</Link>
                  <Link href="/services/career" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/career")}>💼 Career Counseling</Link>
                  <Link href="/services/skill" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/skill")}>🔧 Skill Development</Link>
                  <Link href="/services/mentorship" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/mentorship")}>🤝 Mentorship</Link>
                  <Link href="/services/study" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/study")}>📚 Study Material</Link>
                  <Link href="/services/exam" className="block py-2.5 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/exam")}>📝 Exam Preparation</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}