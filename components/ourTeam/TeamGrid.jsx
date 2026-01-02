"use client";

import { useState } from "react";

export default function TeamGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const attorneys = [
        {
            name: "James Sterling",
            role: "Senior Partner",
            specialty: "Corporate",
            description: "Specializing in high-stakes corporate litigation and merger negotiations. James brings 15 years of fierce courtroom advocacy.",
            image: "/image/lawyer1.webp"
        },
        {
            name: "Michael Ross",
            role: "Partner",
            specialty: "Family",
            description: "Expert in family law and mediation. Michael is known for his compassionate approach to complex domestic cases.",
            image: "/image/lawyer2.jpg"
        },
        {
            name: "Elena Rodriguez",
            role: "Partner",
            specialty: "Corporate",
            description: "Leading our real estate division, handling complex commercial transactions and property disputes for major developers.",
            image: "/image/lawyer-girl.webp"
        },
        {
            name: "Sarah Chen",
            role: "Associate Attorney",
            specialty: "Litigation",
            description: "Focusing on intellectual property rights and tech startups. Sarah ensures your innovations are protected.",
            image: "/image/lawyer-girl2.webp"
        },
        {
            name: "Marcus Thorne",
            role: "Senior Associate",
            specialty: "Litigation",
            description: "Criminal defense specialist with an exceptional track record of dismissals and favorable verdicts.",
            image: "/image/lawyer4.jpg"
        },
        {
            name: "David Kim",
            role: "Associate Attorney",
            specialty: "Corporate",
            description: "Bringing a fresh, analytical perspective to civil rights and employment law cases across the state.",
            image: "/image/lawyer2.jpg"
        }
    ];

    const filters = ["All", "Corporate", "Litigation", "Family"];

    const filteredAttorneys = activeFilter === "All" 
        ? attorneys 
        : attorneys.filter(attorney => attorney.specialty === activeFilter);

    return (
        <section className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-px bg-primary-600"></span>
                        <span className="text-primary-600 text-xs font-bold uppercase tracking-widest">Our Experts</span>
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-primary-900">Our Attorneys</h2>
                    <p className="text-gray-600 mt-4 text-lg">Meet the specialized attorneys who drive our practice areas forward with expertise and dedication.</p>
                </div>
                <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-lg shadow-sm border border-primary-200">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded text-sm font-semibold transition-all ${
                                activeFilter === filter
                                    ? 'bg-primary-900 text-white shadow-sm'
                                    : 'bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-900'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttorneys.map((attorney, index) => (
                    <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-primary-200 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                        <div className="relative aspect-[1.5] overflow-hidden bg-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${attorney.image}")`}}></div>
                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <div className="bg-white/90 backdrop-blur text-primary-600 p-2 rounded-lg shadow-lg">
                                    ⚖️
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow relative">
                            <div className="mb-2">
                                <p className="text-primary-600 text-xs font-bold uppercase tracking-widest mb-2">{attorney.role}</p>
                                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">{attorney.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{attorney.description}</p>
                            </div>
                            <div className="mt-auto pt-3 border-t border-primary-200 flex items-center justify-between">
                                <div className="flex gap-3">
                                    <a className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300" href="#" title={`Email ${attorney.name}`}>
                                        ✉
                                    </a>
                                    <a className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300" href="#" title={`Call ${attorney.name}`}>
                                        📞
                                    </a>
                                </div>
                                <a className="text-xs font-bold text-primary-900 uppercase tracking-wider flex items-center gap-1 opacity-60 hover:opacity-100 hover:text-primary-600 transition-all" href="#">
                                    Profile <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
