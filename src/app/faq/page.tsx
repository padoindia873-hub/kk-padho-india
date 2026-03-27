"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FAQPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is KK PADHO INDIA?",
      answer: "KK PADHO INDIA is a non-profit organization dedicated to providing free education, scholarships, and career guidance to students across India. We aim to empower the youth through quality education and skill development."
    },
    {
      question: "Is the tuition program really free?",
      answer: "Yes! Our core tuition program is 100% free for eligible students. We believe that quality education should be accessible to everyone regardless of their financial background."
    },
    {
      question: "Who can apply for scholarships?",
      answer: "Scholarships are available for students from class 8 to post-graduation. Eligibility criteria include academic performance, family income, and specific category requirements. Check our scholarship page for detailed criteria."
    },
    {
      question: "How do I register for courses?",
      answer: "You can register by clicking on the 'Register Now' button on our website. Fill in your details, select your preferred course, and our team will contact you with further instructions."
    },
    {
      question: "What courses are available?",
      answer: "We offer a wide range of courses including Engineering, Medical, Commerce, Arts, IT & Computer Science, and various skill development programs. New courses are added regularly."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, there are absolutely no hidden charges. All our core educational services are completely free. Some optional services or advanced certifications may have nominal fees, which will be clearly communicated."
    },
    {
      question: "How can I become a volunteer?",
      answer: "We welcome passionate individuals to join our mission. You can apply as a volunteer through our 'Join Our Mission' page. Fill out the application form, and our team will reach out to you."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide certificates of completion for our courses and programs. These certificates can be added to your resume and professional profiles."
    },
    {
      question: "Is the program available nationwide?",
      answer: "Yes, our online programs are available across India. We also have physical centers in select cities. Check our website for location-specific availability."
    },
    {
      question: "How can I support KK PADHO INDIA?",
      answer: "You can support us by donating, volunteering, becoming a mentor, or spreading awareness about our programs. Contact us to learn more about partnership opportunities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors group"
          >
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-500">Find answers to common questions about our programs</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
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