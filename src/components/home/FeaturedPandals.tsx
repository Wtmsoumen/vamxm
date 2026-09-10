import { Eye, Map, MapPin, Pin } from "lucide-react";
import Link from "next/link";

const pandals = [
  { img: "/pandals/pandal1.jpg", name: "Santosh Mitra Square", views: "2.1M", location: "Central Kolkata" },
  { img: "/pandals/pandal2.jpg", name: "Baghbazar Sarbojanin", views: "1.5M", location: "North Kolkata" },
  { img: "/pandals/pandal3.jpg", name: "College Square", views: "1.2M", location: "Central Kolkata" },
  { img: "/pandals/pandal4.jpg", name: "Ekdalia Evergreen", views: "1.8M", location: "South Kolkata" },
  { img: "/pandals/pandal1.jpg", name: "Santosh Mitra Square", views: "2.1M", location: "Central Kolkata" },
];

export default function FeaturedPandals() {
  return (
    <section id="pandals" className="mx-auto max-w-[1450px] px-6 py-14 lg:px-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="label">EXPLORE KOLKATA</p>
          <h2 className="serif mt-2 text-4xl font-semibold">Famous <span className="red">Pandals</span></h2>
          <p className="mt-1 text-xs text-black">Discover the most beautiful and famous pandals across Kolkata.</p>
        </div>
        <Link href="#" className="hidden text-[11px] font-bold red sm:block">View All Pandals &nbsp;→</Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
        {pandals.map(({ img, name, views, location }) => (
          <div key={name} className="pandal overflow-hidden rounded-xl border bg-white soft">
            <img src={img} className="h-60 w-full object-cover" alt="" />
            <div className="p-3">
              <div className="flex justify-between">
                <b className="text-sm">{name}</b>
                <span className="red text-xs flex items-center gap-1"><Eye size={13} /> {views}</span>
              </div>
              <p className="mt-1 text-[12px] text-black flex items-center gap-1"><MapPin size={14} /> {location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
