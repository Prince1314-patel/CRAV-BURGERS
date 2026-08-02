import Image from "next/image";
import Reveal from "@/components/Reveal";

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/gallery/dish-${i + 1}.jpg`,
  alt: `Street Bites dish photo ${i + 1}`,
}));

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink">
            From Our Kitchen
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <div className="scrollbar-none flex gap-4 overflow-x-auto px-6 pb-4 sm:px-8 lg:px-12">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative h-64 w-64 shrink-0 overflow-hidden rounded-md sm:h-80 sm:w-80"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
