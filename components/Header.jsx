"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white backdrop-blur-md bg-opacity-70 shadow-sm sticky top-0 z-50">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/logo2.webp" 
                                alt="Law Firm Logo" 
                                width={100} 
                                height={100}
                                className="object-contain"
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-primary-800 font-serif text-xl font-bold leading-none">
                                    AKTLawFirm
                                </span>
                                <span className="text-primary-600 text-xs font-sans tracking-wider">
                                      Fiat Justitia Raut Caelum
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-primary"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-primary-700 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200 px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200 px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200 px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-primary mx-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
