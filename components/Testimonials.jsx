export default function Testimonials() {
    const testimonials = [
        {
            quote: "The team at AKTLAWFIRM was incredibly supportive during the most difficult time of my life. Their expertise in family law is unmatched.",
            name: "Sarah Jenkins",
            role: "Business Owner",
            image: "/image/avatar1.webp"
        },
        {
            quote: "Professional, sharp, and results-driven. They handled our corporate merger flawlessly. I wouldn't trust anyone else with our business.",
            name: "Michael Ross",
            role: "CEO, TechStart",
            image: "/image/avatar2.webp"
        },
        {
            quote: "I was facing serious litigation and felt hopeless. AKTLAWFIRM gave me confidence and won my case against all odds.",
            name: "David Chen",
            role: "Architect",
            image: "/image/pic3.webp"
        }
    ];

    return (
        <div className="w-full bg-white">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-16 lg:py-24">
                <div className="w-full max-w-[1200px]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary-900">Client Testimonials</h2>
                        <p className="text-gray-600 mt-2">What our clients say about our service</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-primary-200">
                                <div className="text-primary-600 mb-4 text-4xl">"</div>
                                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                                <div className="flex items-center gap-3">
                                    <div 
                                        className="size-10 rounded-full bg-gray-200 bg-cover bg-center"
                                        style={{backgroundImage: `url("${testimonial.image}")`}}
                                    ></div>
                                    <div>
                                        <p className="font-bold text-sm text-primary-900">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
