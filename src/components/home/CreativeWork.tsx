"use client";

export default function CreativeWork() {
    return (
        <section className="py-20 px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <p className="text-saffron text-xs font-black uppercase tracking-[0.25em] mb-2">Portfolio</p>
                <h2 className="text-4xl font-black text-gray-900 mb-10">Creative Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
                    <div className="relative aspect-video overflow-hidden group">
                        <img src="/pandals/pandal1.jpg" alt="Creative Work 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Durga Puja 2025</p>
                            <p className="text-xl font-black">Immersive 360° Experience</p>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden group">
                        <img src="/pandals/pandal4.jpg" alt="Creative Work 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Virtual Reality</p>
                            <p className="text-xl font-black">Pandal Virtual Tours</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}