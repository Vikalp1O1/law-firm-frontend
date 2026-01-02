export default function FeaturedPartner() {
    return (
        <section className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-primary-200">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 -skew-x-12 translate-x-12 opacity-50 pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
                    <div className="w-full lg:w-5/12">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary-600 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-1000"></div>
                            <div className="aspect-[6/7] w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
                                <div className="w-full h-full bg-cover bg-top transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: 'url("/image/akphoto.webp")'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 flex flex-col gap-6">
                        <div>
                            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-2 block">Founder &amp; Managing Partner</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">Abhishek Thakur</h2>
                        </div>
                        <blockquote className="text-xl md:text-2xl text-primary-900/80 leading-relaxed font-serif italic border-l-4 border-primary-600 pl-6 py-2 my-4">
                            &quot;True advocacy requires more than just knowledge of the law; it demands the courage to challenge it when necessary.&quot;
                        </blockquote>
                        <p className="text-gray-600 leading-relaxed">
                            With over 8 years of litigation experience, Abhishek leads the firm with a vision for justice and a commitment to client advocacy. His strategic approach has secured millions in settlements and set new precedents in corporate law.
                        </p>
                        <div className="pt-6 flex flex-wrap items-center gap-8">
                            <button className="text-primary-600 font-bold hover:text-primary-900 transition-colors flex items-center gap-2 group">
                                <span>Read Full Bio</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-full border border-primary-200 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300" href="#">
                                    ✉
                                </a>
                                <a className="w-10 h-10 rounded-full border border-primary-200 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300" href="#">
                                    📞
                                </a>
                                <a className="w-10 h-10 rounded-full border border-primary-200 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300" href="#">
                                    📄
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    );
}
