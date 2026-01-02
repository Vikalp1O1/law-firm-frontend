export default function TeamCulture() {
    const stats = [
        { value: "25+", label: "Years Experience" },
        { value: "500+", label: "Cases Won" },
        { value: "40", label: "Legal Experts" },
        { value: "100%", label: "Commitment" }
    ];

    return (
        <section className="w-full bg-primary-800 text-primary-100 py-20 px-4 sm:px-8 lg:px-12">
            <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-serif font-bold mb-6 text-white">Our Culture</h2>
                    <div className="space-y-6 text-primary-100/70 leading-relaxed text-lg">
                        <p>
                            At AKT, we foster an environment where rigorous debate and collaborative problem-solving thrive. We believe that diverse perspectives lead to stronger legal strategies and better outcomes.
                        </p>
                        <p>
                            Our team is united by a shared commitment to ethics, excellence, and the relentless pursuit of favorable outcomes for our clients. We invest in our people so they can invest in your case.
                        </p>
                    </div>
                    <a className="inline-flex items-center text-primary-400 font-bold hover:text-white transition-colors mt-8 group" href="#">
                        <span>View Careers at AKT</span>
                        <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <span className="text-4xl font-serif font-bold text-primary-200 block mb-2">{stat.value}</span>
                            <span className="text-sm font-medium text-primary-100 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
                </div>
            
        </section>
    );
}
