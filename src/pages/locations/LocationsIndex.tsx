import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/lib/seo";

const BOOKING_URL = "https://calendly.com/asomogyi-ardentstudio/30min";

const cities = [
  { label: "Boynton Beach", to: "/locations/boynton-beach", note: "Where we are based." },
  { label: "West Palm Beach", to: "/locations/west-palm-beach" },
  { label: "Boca Raton", to: "/locations/boca-raton" },
  { label: "Delray Beach", to: "/locations/delray-beach" },
  { label: "Jupiter", to: "/locations/jupiter" },
  { label: "Palm Beach Gardens", to: "/locations/palm-beach-gardens" },
  { label: "Wellington", to: "/locations/wellington" },
  { label: "Lake Worth Beach", to: "/locations/lake-worth-beach" },
];

const triangle = [
  { label: "Raleigh-Durham", to: "/locations/raleigh-durham", note: "The Triangle overview." },
  { label: "Raleigh", to: "/locations/raleigh" },
  { label: "Durham", to: "/locations/durham" },
  { label: "Cary", to: "/locations/cary", note: "With Apex and Morrisville." },
  { label: "Chapel Hill", to: "/locations/chapel-hill", note: "With Carrboro." },
];

const LocationsIndex = () => {
  usePageMeta({
    title: "Service Areas in Palm Beach County | Ardent Studio",
    description: "Ardent Studio is based in Boynton Beach and works in person across Palm Beach County, Florida, and remotely with teams anywhere.",
  });

  return (
    <>
      <Nav />
      <main className="bg-background font-sans text-[16px] leading-[1.6] text-foreground">
        <section className="bg-blush px-5 pb-14 pt-24 md:px-10 md:pb-[72px] md:pt-32">
          <div className="mx-auto max-w-[1200px]">
            <span className="section-eyebrow">Service areas</span>
            <h1 className="mt-[22px] max-w-[18ch] text-[clamp(36px,5.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em]">Where we work.</h1>
            <p className="mt-6 max-w-[640px] text-[19px] leading-[1.6] text-body-text">
              We are based in Boynton Beach and work in person with businesses across Palm Beach County, Florida. Teams anywhere else work with us remotely.
            </p>
          </div>
        </section>

        <section className="px-5 py-14 md:px-10 md:py-[72px]" aria-labelledby="cities-heading">
          <div className="mx-auto max-w-[1200px]">
            <h2 id="cities-heading" className="text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.12]">Palm Beach County</h2>
            <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {cities.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="workshop-card flex h-full min-h-[112px] flex-col justify-between gap-3 p-6 transition-colors hover:border-foreground">
                    <span className="text-[20px] font-semibold leading-[1.25]">{c.label}</span>
                    <span className="text-[14px] text-body-text">{c.note ?? `AI help for ${c.label} businesses`}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[62ch] text-body-text">
              Not on the list? We cover all of Palm Beach County, and most of our work can be done remotely.{" "}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline hover:text-foreground">Book a free 15-minute call</a> and tell us where you are.
            </p>
          </div>
        </section>

        <section className="px-5 pb-14 md:px-10 md:pb-[72px]" aria-labelledby="triangle-heading">
          <div className="mx-auto max-w-[1200px]">
            <h2 id="triangle-heading" className="text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.12]">Raleigh-Durham, North Carolina</h2>
            <p className="mt-4 max-w-[62ch] text-body-text">We serve Triangle businesses remotely today.</p>
            <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {triangle.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="workshop-card flex h-full min-h-[112px] flex-col justify-between gap-3 p-6 transition-colors hover:border-foreground">
                    <span className="text-[20px] font-semibold leading-[1.25]">{c.label}</span>
                    <span className="text-[14px] text-body-text">{c.note ?? `AI help for ${c.label} businesses`}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocationsIndex;
