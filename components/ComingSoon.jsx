"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add email subscription logic here
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="relative min-h-[calc(100vh-20rem)] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-gray-50 to-accent-50">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative container-custom py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-8 animate-fade-in">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-primary-700 font-medium text-sm">
                            Something Amazing is Coming
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 mb-6 animate-fade-in-up">
                        We&apos;re Launching
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 mt-2">
                            Something Special
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-primary-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        Our new website is under construction. We&apos;re working hard to bring you an exceptional experience in legal excellence.
                    </p>

                    {/* Email Subscription Form */}
                    <div className="max-w-md mx-auto mb-12 animate-fade-in-up animation-delay-400">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200 bg-white shadow-sm"
                            />
                            <button
                                type="submit"
                                className="btn-primary whitespace-nowrap px-8 py-4 text-lg"
                            >
                                Notify Me
                            </button>
                        </form>
                        {submitted && (
                            <p className="mt-4 text-accent-700 font-medium animate-fade-in">
                                ✓ Thank you! We&apos;ll notify you when we launch.
                            </p>
                        )}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-600">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2">
                                Trusted Expertise
                            </h3>
                            <p className="text-primary-600">
                                Years of experience delivering exceptional legal services
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2">
                                Client Focused
                            </h3>
                            <p className="text-primary-600">
                                Your success is our priority, every step of the way
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2">
                                Fast Results
                            </h3>
                            <p className="text-primary-600">
                                Efficient solutions without compromising quality
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in-up animation-delay-800">
                        <p className="text-primary-700 mb-4">
                            Need immediate assistance?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="mailto:info@lawfirm.com"
                                className="flex items-center space-x-2 text-primary-800 hover:text-accent-600 transition-colors duration-200 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@lawfirm.com</span>
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center space-x-2 text-primary-800 hover:text-accent-600 transition-colors duration-200 font-medium"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+1 (234) 567-890</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
}
