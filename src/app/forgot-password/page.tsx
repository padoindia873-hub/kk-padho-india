"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Password reset requested for:", email);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Reset email resent to:", email);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Side - Image with Overlay */}
        <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-green-600 to-blue-600">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="relative h-full flex flex-col items-center justify-center p-12 text-white z-20">
            <Image
              src="/Images/illustration.png"
              alt="Reset password illustration"
              width={600}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
            <div className="relative z-30 text-center">
              <h3 className="text-4xl font-bold mb-4">Reset Password</h3>
              <p className="text-xl mb-8">Don't worry, we'll help you recover your account</p>

              {/* Tips */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold mb-3">Quick Tips:</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    Check your spam folder
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    Link expires in 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    Contact support if needed
                  </li>
                </ul>
              </div>

              {/* Support Contact */}
              <div className="mt-8 text-sm">
                <p>Need help? Contact us at</p>
                <a href="mailto:support@kkpadhoindia.org" className="text-green-300 hover:underline">
                  support@kkpadhoindia.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-green-600 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">KK PADHO INDIA</span>
            </div>

            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password? 🔐</h2>
                  <p className="text-gray-600">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your registered email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Hint Text */}
                  <p className="text-sm text-gray-500">
                    We'll send a password reset link to this email if it's registered with us.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </form>

                {/* Back to Login */}
                <div className="mt-8 text-center">
                  <button
                    onClick={handleBackToLogin}
                    className="text-green-600 hover:text-green-700 font-medium hover:underline flex items-center justify-center gap-2 mx-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Login
                  </button>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Check Your Email! 📧</h2>
                  <p className="text-gray-600 mb-2">
                    We've sent a password reset link to:
                  </p>
                  <p className="text-green-600 font-semibold text-lg mb-4">{email}</p>
                  <p className="text-sm text-gray-500">
                    Click the link in the email to reset your password. The link will expire in 24 hours.
                  </p>
                </div>

                {/* Resend Email */}
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Didn't receive the email?{" "}
                    <button
                      onClick={handleResendEmail}
                      disabled={isLoading}
                      className="text-green-600 hover:text-green-700 font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Resend"}
                    </button>
                  </p>

                  <button
                    onClick={handleBackToLogin}
                    className="text-green-600 hover:text-green-700 font-medium hover:underline"
                  >
                    Return to Login
                  </button>
                </div>

                {/* Additional Help */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Still having trouble?{" "}
                    <a href="mailto:support@kkpadhoindia.org" className="text-green-600 hover:underline">
                      Contact Support
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}