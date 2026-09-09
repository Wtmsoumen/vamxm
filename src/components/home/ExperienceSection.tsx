export default function ExperienceSection() {
  return (
    <>
      {/* Value proposition — 3 color blocks */}
      {/* Stats */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
            {/* Left — text + stats */}
            <div className="p-10 sm:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-saffron text-xs font-black uppercase tracking-[0.25em] mb-3">Numbers speak</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Let us show you some stats</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                We have done great stuff over the past few years. As each &amp; every product of VR is based upon some storyline &amp; there are thousands of variations of resources used in building such products, &amp; also we just not build to serve our client, but to also add value to their products &amp; services &amp; even to serve our society at the best possible means.
              </p>
              <div className="grid grid-cols-3 gap-0 border border-gray-200">
                {[
                  { num: "10+", label: "Happy Clients" },
                  { num: "1000+", label: "Resources" },
                  { num: "20+", label: "Project Completed" },
                ].map((s, i) => (
                  <div key={i} className="p-6 text-center border-r border-gray-200 last:border-r-0">
                    <p className="text-3xl sm:text-4xl font-black text-saffron mb-1">{s.num}</p>
                    <p className="text-black text-[11px] uppercase tracking-widest font-semibold leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — VR headset image */}
            <div className="relative bg-gray-950 flex items-center justify-center p-10 min-h-[360px] overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 60% 50%, #0066ff 0%, transparent 60%)"
              }} />
              <img
                src="/vr-headset2.png"
                alt="VR Headset"
                className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
