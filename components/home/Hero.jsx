"use client";

export default function Hero() {
    return (
        <div className="w-full bg-white">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-8 lg:py-12">
                <div className="w-full max-w-[1200px]">
                    <div 
                        className="rounded-xl overflow-hidden relative min-h-[560px] flex flex-col justify-end p-8 md:p-16 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(20, 15, 10, 0.4) 0%, rgba(20, 15, 10, 0.8) 100%), url("/image/hero.webp")`
                        }}
                    >
                        <div className="max-w-2xl flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                                    Defending Your Rights with Integrity
                                </h1>
                                <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                    Expert legal representation for complex litigation, corporate matters, and personal advocacy. We are dedicated to your success.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="h-12 px-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                    Schedule a Case Review
                                </button>
                                <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
       
    );
}
