"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MemberThankYouPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Family! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your membership has been successfully registered.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong>Membership ID:</strong> KKPI{Math.floor(Math.random() * 1000000)}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Digital Card:</strong> Available immediately
            </p>
            <p className="text-gray-700">
              <strong>Physical Card:</strong> Will be delivered in 7-10 business days
            </p>
          </div>
          
          <p className="text-gray-600 mb-8">
            You can now enjoy exclusive member benefits including up to 70% discount on all partner services.
            Check your email for your digital membership card and welcome kit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/member-exclusive-discount">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                View Benefits
              </button>
            </Link>
            <button 
              onClick={() => router.push('/')}
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}