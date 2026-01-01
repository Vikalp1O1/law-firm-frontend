export default function WhyChooseUs() {
    const features = [
        {
            icon: "✓",
            title: "Experienced Attorneys",
            description: "Our team brings decades of combined experience across federal and state courts."
        },
        {
            icon: "📚",
            title: "Proven Track Record",
            description: "We have successfully handled thousands of cases, securing millions in settlements."
        },
        {
            icon: "🤝",
            title: "Client-Centric Approach",
            description: "We treat every client with dignity, offering personalized strategies for your unique situation."
        }
    ];

    return (
        <div className="w-full bg-primary-50 border-y border-primary-200">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-16 lg:py-24">
                <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm">Why Choose AKTLAWFIRM</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-900 leading-tight">
                                Proven Results.<br/>Unwavering Commitment.
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Over 20 years of dedicated legal service in the heart of the city. We prioritize client success and integrity above all, ensuring you have a partner you can trust in your corner.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="min-w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-primary-900">{feature.title}</h4>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="h-12 px-8 rounded-lg border-2 border-primary-900 text-primary-900 font-bold hover:bg-primary-900 hover:text-white transition-colors">
                                Read About Our Firm
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 mt-8">
                            <div className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'url("/image/pic1.webp")'}}></div>
                            <div className="w-full h-40 rounded-xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'url("/image/pic2.webp")'}}></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-40 rounded-xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'url("/image/pic3.webp")'}}></div>
                            <div className="w-full h-64 rounded-xl bg-cover bg-center shadow-lg" style={{backgroundImage: 'url("/image/hero.webp")'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
