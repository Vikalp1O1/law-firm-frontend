export default function TeamHero() {
    return (
        <section className="w-full bg-white">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-10">
                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-12 bg-primary-600"></span>
                        <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs">Legal Excellence Since 2018</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-primary-900">
                        Strategic Counsel.<br/>
                        <i className="font-serif font-normal text-primary-600">Unwavering</i> Advocacy.
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed font-light">
                        We are a collective of legal strategists dedicated to your success. With passion, precision, and perspective, we ensure justice isn&apos;t just a goal—it&apos;s a guarantee.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="h-12 px-8 rounded bg-primary-900 text-white font-bold hover:bg-primary-600 hover:shadow-lg transition-all duration-300">
                            Meet the Partners
                        </button>
                        <button className="h-12 px-8 rounded border border-primary-200 text-primary-900 font-bold hover:bg-white hover:border-transparent hover:shadow-md transition-all duration-300 flex items-center gap-2">
                            <span>Join Our Team</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div className="absolute -top-20 -right-20 w-fit md:w-[140%] h-[140%] bg-primary-100 rounded-full blur-[80px] opacity-60 -z-10"></div>
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/50">
                        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("/image/team-bg.webp")'}}></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-primary-400">✓</span>
                                <span className="font-bold text-xs tracking-widest uppercase">Top Rated Firm</span>
                            </div>
                            <p className="text-sm opacity-90 font-light">Recognized for Excellence in Corporate Litigation</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
