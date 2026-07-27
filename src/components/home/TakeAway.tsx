import Image from "next/image";
import Reveal from "@/components/Reveal";

const cities = [
  { name: "Berlin", src: "/img-webp/berlin.webp", alt: "CRAV Burger takeaway packaging in Berlin" },
  { name: "London", src: "/img-webp/london.webp", alt: "CRAV Burger takeaway packaging in London" },
  { name: "New York", src: "/img-webp/newyork.webp", alt: "CRAV Burger takeaway packaging in New York" },
  { name: "Sydney", src: "/img-webp/sydney.webp", alt: "CRAV Burger takeaway packaging in Sydney" },
  { name: "Tokyo", src: "/img-webp/tokyo.webp", alt: "CRAV Burger takeaway packaging in Tokyo" },
];

export default function TakeAway() {
  return (
    <section id="takeaway" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
            Take Away
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-wide text-ink">
            Quality That Travels
            <br />
            With You
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            Freshly packed smash burgers, ready to go wherever you crave. From
            our flat-top to any corner of the globe, we ensure every layer
            stays hot and juicy.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 border-t-2 border-dashed border-ink/25 sm:block"
            aria-hidden="true"
          />
          <div className="absolute top-1/2 left-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-90 sm:block" aria-hidden="true">
            <Image src="/img/plane.png" alt="" fill sizes="64px" className="object-contain" />
          </div>

          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5 sm:gap-x-6">
            {cities.map((city, i) => (
              <Reveal
                key={city.name}
                delay={i * 80}
                className={`flex flex-col items-center gap-4 ${i % 2 === 1 ? "sm:mt-10" : ""}`}
              >
                <div className="relative aspect-[4/5] w-full max-w-[140px] overflow-hidden rounded-md border-2 border-ink">
                  <Image
                    src={city.src}
                    alt={city.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <p className="font-display text-xl tracking-wide text-ink sm:text-2xl">
                  {city.name}˝
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
