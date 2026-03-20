"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1400);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/study5.mp4" type="video/mp4" />
        </video>
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all group"
        aria-label="Go back"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 px-5 sm:px-8">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              Contact <span className="text-blue-300">Us</span>
            </h1>
            <p className="mt-5 text-lg text-gray-100 max-w-xl mx-auto drop-shadow-md">
              Have a question or want to collaborate? Drop us a message — we'd love to hear from you.
            </p>
          </div>

          {/* Success message */}
          {isSubmitted && (
            <div className="mb-10 p-5 bg-green-500/20 backdrop-blur-sm border border-green-400/50 rounded-2xl text-center text-white max-w-lg mx-auto animate-fadeIn">
              <p className="font-medium">✓ Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left – Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all ${
                      errors.name ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-300 text-sm mt-1 ml-2">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-300 text-sm mt-1 ml-2">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all ${
                      errors.subject ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-300 text-sm mt-1 ml-2">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows={5}
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all resize-none ${
                      errors.message ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1 ml-2">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            </div>

            {/* Right – Contact Info */}
            <div className="lg:col-span-2 space-y-8 text-white">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Visit Us</p>
                    <p className="text-gray-300 text-sm">Kolkata, West Bengal, India - 700125</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <p className="text-gray-300 text-sm">+91 9123744290</p>
                    <p className="text-gray-400 text-xs mt-1">Mon-Sat, 9AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <p className="text-gray-300 text-sm break-all">padoindia873@gmail.com</p>
                    <p className="text-gray-400 text-xs mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Small map */}
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235803.30487599998!2d88.26495077499999!3d22.5355649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908e667%3A0x43e330e68f3c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white text-sm mb-2">📅 Business Hours</p>
                <div className="space-y-1 text-gray-300 text-xs">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-blue-300">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300 mt-16 text-sm">
            Prefer reading FAQs first? →{" "}
            <a href="/faq" className="text-blue-300 hover:text-blue-200 underline">
              Check FAQ
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}