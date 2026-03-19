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
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-5 bg-white shadow-sm sticky top-0 z-50">
      
      {/* Logo */}
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => handleNavigation("/")}
      >
        <div className="w-8 h-8 bg-green-600 rounded-md"></div>
        <span className="text-xl font-bold text-gray-900">KK PADHO INDIA</span>
      </div>

      {/* Desktop Menu */}
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
          
          {/* Desktop Dropdown Menu */}
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
          
          {/* Desktop Dropdown Menu */}
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
          
          {/* Desktop Dropdown Menu */}
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
          
          {/* Desktop Dropdown Menu */}
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

      {/* Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={handleLogin}
          className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-green-200"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="flex items-center gap-2 md:hidden">
        <button 
          onClick={handleLogin}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all duration-300"
        >
          Login
        </button>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 md:hidden z-50 max-h-[80vh] overflow-y-auto">
          <ul className="space-y-2">
            {/* Home */}
            <li>
              <Link 
                href="/" 
                className="block py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => handleNavigation("/")}
              >
                Home
              </Link>
            </li>

            {/* Scholarship Mobile */}
            <li className="border-t border-gray-100 pt-2">
              <button 
                onClick={() => toggleMobileDropdown('scholarship')}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                <span>Scholarship</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'scholarship' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'scholarship' && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link href="/scholarship/merit" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/scholarship/merit")}>Merit Based</Link>
                  <Link href="/scholarship/need" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/scholarship/need")}>Need Based</Link>
                  <Link href="/scholarship/women" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/scholarship/women")}>Women in STEM</Link>
                  <Link href="/scholarship/sports" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/scholarship/sports")}>Sports Excellence</Link>
                </div>
              )}
            </li>

            {/* Events Mobile */}
            <li>
              <button 
                onClick={() => toggleMobileDropdown('events')}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                <span>Events</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'events' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'events' && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link href="/events/upcoming" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/events/upcoming")}>Upcoming Events</Link>
                  <Link href="/events/past" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/events/past")}>Past Events</Link>
                  <Link href="/events/workshops" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/events/workshops")}>Workshops</Link>
                  <Link href="/events/seminars" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/events/seminars")}>Seminars</Link>
                </div>
              )}
            </li>

            {/* About */}
            <li>
              <Link 
                href="/about" 
                className="block py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => handleNavigation("/about")}
              >
                About
              </Link>
            </li>

            {/* Contact Us */}
            <li>
              <Link 
                href="/contact" 
                className="block py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </Link>
            </li>

            {/* Committee Mobile */}
            <li>
              <button 
                onClick={() => toggleMobileDropdown('committee')}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                <span>Committee</span>
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
                <div className="pl-4 mt-1 space-y-1">
                  <Link href="/committee/members" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/members")}>All Members</Link>
                  <Link href="/committee/board" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/board")}>Board Members</Link>
                  <Link href="/committee/advisors" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/committee/advisors")}>Advisors</Link>
                </div>
              )}
            </li>

            {/* Services Mobile */}
            <li>
              <button 
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                <span>Services</span>
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
                <div className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2">
                  <Link href="/services/scholarship" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/scholarship")}>Scholarship Guidance</Link>
                  <Link href="/services/career" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/career")}>Career Counseling</Link>
                  <Link href="/services/skill" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/skill")}>Skill Development</Link>
                  <Link href="/services/mentorship" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/mentorship")}>Mentorship</Link>
                  <Link href="/services/study" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/study")}>Study Material</Link>
                  <Link href="/services/exam" className="block py-2 px-4 text-sm hover:bg-green-50 hover:text-green-600 rounded-lg" onClick={() => handleNavigation("/services/exam")}>Exam Preparation</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}