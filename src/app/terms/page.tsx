"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl mb-4">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Terms of Service</h1>
            <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using KK PADHO INDIA's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Description of Services</h2>
              <p>KK PADHO INDIA provides free educational resources, scholarship information, and related services to students and educators. We reserve the right to modify or discontinue any service at any time without notice.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Accounts</h2>
              <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>We reserve the right to terminate accounts that violate these terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious content</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with the operation of our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and software, is the property of KK PADHO INDIA and is protected by copyright and intellectual property laws.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Disclaimer of Warranties</h2>
              <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the services will be uninterrupted or error-free.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
              <p>KK PADHO INDIA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of our services after changes constitutes acceptance of the new terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Information</h2>
              <p>For questions about these Terms, please contact us at:</p>
              <p className="mt-2">Email: padoindia873@gmail.com</p>
              <p>Phone: +91 9123744290</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-6">
              <p className="text-sm text-purple-800">
                <strong>Note:</strong> These Terms of Service are effective as of {new Date().toLocaleDateString()}. Please review them periodically for any changes.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}