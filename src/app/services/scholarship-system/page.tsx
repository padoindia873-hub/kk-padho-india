"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ScholarshipSystemPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);

  // System workflow steps
  const workflowSteps = [
    { id: 1, title: "Application Submission", icon: "📝", description: "Student submits application with required documents" },
    { id: 2, title: "Document Verification", icon: "🔍", description: "Initial verification of submitted documents" },
    { id: 3, title: "Eligibility Assessment", icon: "📊", description: "Automated eligibility criteria check" },
    { id: 4, title: "Selection Committee", icon: "👥", description: "Committee review and scoring" },
    { id: 5, title: "Final Approval", icon: "✅", description: "Approval and fund disbursement" }
  ];

  // Selection process details
  const selectionCriteria = [
    { criteria: "Academic Performance", weight: 40, details: "Based on last examination marks (minimum 60% required)" },
    { criteria: "Financial Need", weight: 30, details: "Family income assessment and economic background" },
    { criteria: "Entrance Test", weight: 20, details: "Scholarship aptitude test performance" },
    { criteria: "Personal Interview", weight: 10, details: "Communication skills and motivation assessment" }
  ];

  // Verification steps
  const verificationSteps = [
    { step: 1, title: "Document Upload", status: "Student Action", desc: "Upload all required documents in PDF/JPG format" },
    { step: 2, title: "Auto Verification", status: "System Check", desc: "AI-based document validation and format check" },
    { step: 3, title: "Manual Review", status: "Admin Action", desc: "Verification officer reviews document authenticity" },
    { step: 4, title: "Income Verification", status: "Third Party", desc: "Income certificate validation with issuing authority" },
    { step: 5, title: "Institution Confirmation", status: "School/College", desc: "Academic records confirmation from institution" }
  ];

  // Result process timeline
  const resultTimeline = [
    { phase: "Application Review", duration: "7-10 days", status: "completed", description: "Initial screening and document check" },
    { phase: "Test Evaluation", duration: "5-7 days", status: "in-progress", description: "Scholarship test results compilation" },
    { phase: "Interview Process", duration: "3-5 days", status: "pending", description: "Personal interview for shortlisted candidates" },
    { phase: "Final Selection", duration: "2-3 days", status: "pending", description: "Committee finalization and ranking" },
    { phase: "Result Declaration", duration: "1 day", status: "pending", description: "Results published on portal and email notification" }
  ];

  return (
    <section className="relative w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Simple decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors group bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 mx-auto shadow-lg">
            <span className="text-5xl">⚙️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Scholarship System
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, efficient, and automated system designed to manage scholarships from application to disbursement
          </p>
        </div>

        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-2xl font-bold text-gray-800">5,000+</div>
            <div className="text-sm text-gray-500">Applications/Year</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-gray-800">98%</div>
            <div className="text-sm text-gray-500">Verification Rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-gray-800">15 Days</div>
            <div className="text-sm text-gray-500">Avg Processing Time</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-800">2,500+</div>
            <div className="text-sm text-gray-500">Scholars Awarded</div>
          </div>
        </div>

        {/* 1. How System Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚙️</span> How the System Works
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {workflowSteps.map((step, idx) => (
                <div key={step.id} className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 md:block hidden">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Selection Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎯</span> Selection Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {selectionCriteria.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">{item.criteria}</h3>
                  <span className="text-2xl font-bold text-blue-600">{item.weight}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-blue-600 rounded-full h-2" style={{ width: `${item.weight}%` }}></div>
                </div>
                <p className="text-sm text-gray-500">{item.details}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
            <p className="text-gray-700 text-sm text-center">
              <strong>Selection Formula:</strong> Total Score = (Academic Score × 40%) + (Financial Score × 30%) + (Test Score × 20%) + (Interview Score × 10%)
            </p>
          </div>
        </div>

        {/* 3. Verification Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🔍</span> Verification Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {verificationSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h3>
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full mb-2">{step.status}</span>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Verification Documents */}
          <div className="mt-6 bg-white rounded-xl p-5 shadow-sm border border-blue-100">
            <h3 className="font-semibold text-gray-800 mb-3">📋 Documents Verified</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Academic Marksheets</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Income Certificate</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Identity Proof</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Category Certificate</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Bank Account Details</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Institution Confirmation</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Photograph & Signature</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Residential Proof</div>
            </div>
          </div>
        </div>

        {/* 4. Result Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">📊</span> Result Process Timeline
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
            {resultTimeline.map((item, idx) => (
              <div key={idx} className={`flex items-center p-4 ${idx !== resultTimeline.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-12 text-center">
                  {item.status === 'completed' && <span className="text-green-500 text-xl">✓</span>}
                  {item.status === 'in-progress' && <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>}
                  {item.status === 'pending' && <span className="text-gray-400 text-xl">○</span>}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.phase}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-blue-600">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Result Declaration Info */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-2xl mb-1">📧</div>
              <h4 className="font-semibold text-gray-800 text-sm">Email Notification</h4>
              <p className="text-xs text-gray-500">Results sent to registered email</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-2xl mb-1">📱</div>
              <h4 className="font-semibold text-gray-800 text-sm">SMS Alert</h4>
              <p className="text-xs text-gray-500">Instant SMS notification</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="text-2xl mb-1">💻</div>
              <h4 className="font-semibold text-gray-800 text-sm">Portal Access</h4>
              <p className="text-xs text-gray-500">Download result from dashboard</p>
            </div>
          </div>
        </div>

        {/* Additional System Features */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-10">
          <h3 className="text-xl font-bold mb-3 text-center">✨ System Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-1">🤖</div>
              <p className="font-semibold">AI-Powered Verification</p>
              <p className="text-sm opacity-90">Automated document validation</p>
            </div>
            <div>
              <div className="text-2xl mb-1">📱</div>
              <p className="font-semibold">Real-Time Tracking</p>
              <p className="text-sm opacity-90">Check application status anytime</p>
            </div>
            <div>
              <div className="text-2xl mb-1">🔒</div>
              <p className="font-semibold">Secure & Transparent</p>
              <p className="text-sm opacity-90">Blockchain-based record keeping</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Learn more about our scholarship system! Our team will contact you with detailed information.")} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Learn More
            </button>
            <button 
              onClick={() => alert("Track your scholarship application status. Please login to your dashboard.")} 
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all border border-blue-300"
            >
              Track Application
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Need help? Contact Scholarship Helpdesk: scholarship@support.edu | +91-98765-43210
          </p>
        </div>
      </div>
    </section>
  );
}