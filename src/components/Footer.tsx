"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSubscribeStatus(""), 3000);
    }
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center cursor-pointer group">
                <img
                  src="/Images/logo.png"
                  alt="KK PADHO INDIA Logo"
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students through free education and exclusive scholarships.
              Building a brighter future for India's youth.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.533-3.802 13.94 13.94 0 001.54-6.162c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/scholarship" className="text-gray-300 hover:text-blue-400 transition-colors">Scholarships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/committee" className="text-gray-300 hover:text-blue-400 transition-colors">Committee</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400">📞</span>
                <span>+91 9123744290</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400">✉️</span>
                <span>padoindia873@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400">📍</span>
                <span>Kolkata, West Bengal, India, 700125</span>
              </li>
            </ul>
          </div>

          {/* Our Promise + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Promise</h3>
            <p className="text-gray-300 text-sm leading-relaxed italic border-l-4 border-blue-400 pl-4">
              Let us come together to build the future of our children, who are the resources of our country, the pillars of our nation, and the future of India.
            </p>
            <p className="text-white text-sm mt-3 font-semibold">
              Together We Rise, Together We Shine.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-700 text-white text-sm px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 border border-gray-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-r-lg text-sm hover:bg-blue-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              {subscribeStatus && (
                <p className="text-green-400 text-xs mt-2">{subscribeStatus}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} All Rights Reserved. KK PADHO INDIA
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}