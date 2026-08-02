import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const gallery = [
  { src: "/img-webp/about-1.webp", alt: "Chef preparing a fresh smashed burger" },
  { src: "/img-webp/about-2.webp", alt: "Close-up of melted cheese on a burger patty" },
  { src: "/img-webp/about-3.webp", alt: "CRAV restaurant atmosphere" },
];

const galleryTilt = ["rotate-[-3deg]", "mt-6 rotate-[2deg]", "rotate-[-2deg]"];

export default function TopClassic() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
              Top Classic
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-wide text-ink">
              Juicy Cheesy
              <br />
              Fully Loaded
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
              CRAV is back and bolder than ever. Honoring our rich roots, we
              bring you the ultimate smashed experience — fully loaded, hot,
              and crafted fresh.
            </p>
            <Link
              href="/menu"
              className="mt-8 inline-flex rounded-full bg-red px-9 py-4 font-body text-sm font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5 hover:bg-ink"
            >
              Order Now
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              {gallery.map((image, i) => (
                <div key={image.src} className={galleryTilt[i % galleryTilt.length]}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-2 border-ink">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 220px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto -mt-6 aspect-[2/3] w-2/3 sm:-mt-10">
              <Image
                src="/img/burgerselfie.png"
                alt=""
                fill
                sizes="320px"
                className="object-contain drop-shadow-[0_30px_36px_rgba(27,27,27,0.35)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
