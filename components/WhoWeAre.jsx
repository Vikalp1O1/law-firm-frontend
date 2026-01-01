export default function WhoWeAre() {
    return (
        <div className="w-full bg-primary-50">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-16 lg:py-24">
                <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image */}
                            <div className="col-span-2 h-80 rounded-xl bg-primary-300 bg-cover bg-center shadow-lg overflow-hidden"
                                style={{backgroundImage: 'url("/image/pic2.webp")'}}>
                            </div>
                            
                            {/* Quote Card */}
                            <div className="col-span-2 -mt-16 mx-8 bg-white rounded-xl p-6 shadow-xl border border-primary-200 relative z-10">
                                <div className="flex flex-col gap-3">
                                    <div className="text-primary-600 text-4xl leading-none">&quot;</div>
                                    <p className="text-primary-900 font-semibold text-lg leading-relaxed">
                                        Justice delayed is justice denied, and we fight to ensure your rights are protected swiftly.
                                    </p>
                                    <p className="text-sm text-gray-600 font-medium">
                                        - Founding Partner, AKTLAWFIRM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm">
                                WHO WE ARE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary-900 leading-tight">
                                A Legacy of Trust &<br/>Legal Excellence
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                For over two decades, AKTLAWFIRM has been a pillar of integrity and expertise in the legal community. We are dedicated to defending your rights with unwavering commitment and personalized attention.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our team of seasoned attorneys brings a wealth of knowledge across multiple practice areas, ensuring that whether you&apos;re facing a corporate challenge, personal dispute, or family matter, you have the strongest advocate by your side. We don&apos;t just represent clients—we build lasting relationships founded on trust, transparency, and results.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl md:text-5xl font-black text-primary-600">
                                    20+
                                </div>
                                <p className="text-sm font-semibold text-primary-900">Years of Experience</p>
                                <p className="text-xs text-gray-600">Serving clients with dedication</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-4xl md:text-5xl font-black text-primary-600">
                                    98%
                                </div>
                                <p className="text-sm font-semibold text-primary-900">Success Rate</p>
                                <p className="text-xs text-gray-600">In resolved cases</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="h-12 px-8 rounded-lg border-2 border-primary-900 text-primary-900 font-bold hover:bg-primary-900 hover:text-white transition-colors">
                                Learn More About Us
                            </button>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    );
}
