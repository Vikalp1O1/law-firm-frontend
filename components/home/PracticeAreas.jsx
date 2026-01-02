"use client";

import { useState, useEffect } from "react";

export default function PracticeAreas() {
    const [activeIndex, setActiveIndex] = useState(0);

    const areas = [
        {
            icon: "💼",
            title: "Corporate Law",
            description: "Navigating complex business regulations, mergers, and high-stakes contracts."
        },
        {
            icon: "⚖️",
            title: "Litigation",
            description: "Aggressive and strategic representation for civil, commercial, and criminal disputes."
        },
        {
            icon: "🏢",
            title: "Real Estate",
            description: "Protecting your property interests, zoning rights, and closing commercial transactions."
        },
        {
            icon: "👨‍👩‍👧",
            title: "Family Law",
            description: "Compassionate guidance through divorce, custody, and estate planning matters."
        }
    ];

    // Auto-slide effect - change active card every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % areas.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [areas.length]);

    return (
        <>
            {/* Practice Areas Header */}
            <div className="w-full bg-white">
                <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                    <div className="w-full max-w-[1200px] border-b border-primary-200 pb-2">
                        <h2 className="text-primary-600 text-sm font-bold uppercase tracking-wider mb-2">Our Expertise</h2>
                    </div>
                </div>
            </div>

            {/* Practice Areas Section */}
            <div className="w-full bg-white">
                <div className="px-4 md:px-10 lg:px-40 flex justify-center py-10 lg:py-16">
                    <div className="w-full max-w-[1200px] flex flex-col gap-12">
                        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 tracking-tight">Practice Areas</h2>
                                <p className="text-gray-600 text-lg">We specialize in a wide range of legal fields to support your personal and business needs with precision and care.</p>
                            </div>
                            <a className="text-primary-600 font-bold hover:underline flex items-center gap-1 group" href="#">
                                View all services 
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {areas.map((area, index) => (
                                <div 
                                    key={index} 
                                    className={`group flex flex-col gap-4 rounded-xl border p-6 transition-all duration-500 cursor-pointer
                                        ${activeIndex === index 
                                            ? 'border-primary-400 bg-white shadow-lg scale-105' 
                                            : 'border-primary-200 bg-white hover:shadow-lg hover:border-primary-400 hover:scale-105'
                                        }`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <div className={`size-12 rounded-full flex items-center justify-center text-3xl transition-all duration-500
                                        ${activeIndex === index 
                                            ? 'bg-primary-400 scale-110' 
                                            : 'bg-primary-100 group-hover:bg-primary-400 group-hover:scale-110'
                                        }`}>
                                        {area.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary-900 mb-2">{area.title}</h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-500
                                            ${activeIndex === index 
                                                ? 'text-primary-500' 
                                                : 'text-gray-600 group-hover:text-primary-500'
                                            }`}>
                                            {area.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Slider Indicators */}
                        <div className="flex justify-center gap-2 mt-4">
                            {areas.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 
                                        ${activeIndex === index 
                                            ? 'w-8 bg-primary-600' 
                                            : 'w-2 bg-primary-300 hover:bg-primary-500'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
