const dates = [
  { month: "OCT", day: "09", name: "Mahalaya", sub: "The Beginning", active: true },
  { month: "OCT", day: "20", name: "Shasthi", sub: "Puja Arrives", active: false },
  { month: "OCT", day: "21", name: "Saptami", sub: "Rituals & Joy", active: false },
  { month: "OCT", day: "22", name: "Ashtami", sub: "The Divine Power", active: false },
  { month: "OCT", day: "23", name: "Navami", sub: "Grandeur Continues", active: false },
  { month: "OCT", day: "24", name: "Dashami", sub: "Bidoy Maa", active: false },
];

export default function CountdownSection() {
  return (
    <section id="countdown" style={{ background: "#fffaf5" }}>
      <div className="mx-auto grid max-w-[1450px] gap-8 px-6 py-14 lg:grid-cols-[280px_1fr] lg:px-10">
        <div>
          <p className="label">UPCOMING PUJA</p>
          <h2 className="serif mt-2 text-4xl font-semibold">The Countdown <span className="red">Begins</span></h2>
          <p className="mt-3 text-xs leading-5 text-slate-600">Be ready for another year of devotion, celebration and togetherness.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {dates.map(({ month, day, name, sub, active }) =>
            active ? (
              <div key={name} className="count-active rounded-xl p-4 text-center text-white">
                <b className="text-[12px]">{month}</b>
                <strong className="block text-3xl">{day}</strong>
                <span className="mt-2 block text-sm font-bold">{name}</span>
                <small className="text-xs font-normal">{sub}</small>
              </div>
            ) : (
              <div key={name} className="rounded-xl border bg-white p-4 text-center">
                <b className="text-[12px] red">{month}</b>
                <strong className="block text-3xl red">{day}</strong>
                <span className="mt-2 block text-sm font-bold">{name}</span>
                <small className="text-xs font-normal text-black">{sub}</small>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
