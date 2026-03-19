"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login clicked");
    router.push("/login");
  };

  const handleNavigation = (path) => {
    router.push(path);
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

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link 
            href="/" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/scholarship" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Scholarship
          </Link>
        </li>
        <li>
          <Link 
            href="/events" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Events
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link 
            href="/committee" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Committee Members
          </Link>
        </li>
        <li>
          <Link 
            href="/services" 
            className="hover:text-green-600 transition-colors duration-300"
          >
            Services
          </Link>
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

        {/* Mobile Menu Button - Optional for mobile responsiveness */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}