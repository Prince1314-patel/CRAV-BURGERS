import Image from "next/image";
import Reveal from "@/components/Reveal";
import { InfiniteSlider } from "@/components/core/infinite-slider";

const galleryImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/img/gallery/dish-${i + 1}.jpg`,
  alt: `Street Bites dish photo ${i + 1}`,
}));

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-ink">
            From Our Kitchen
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <InfiniteSlider gap={16} duration={40} durationOnHover={120} className="px-6 sm:px-8 lg:px-12">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative h-64 w-64 shrink-0 overflow-hidden rounded-md bg-maroon/5 sm:h-80 sm:w-80"
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
        </InfiniteSlider>
      </Reveal>
    </section>
  );
}
