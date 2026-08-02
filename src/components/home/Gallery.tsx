import Image from "next/image";
import Reveal from "@/components/Reveal";
import { InfiniteSlider } from "@/components/core/infinite-slider";

// Only the gallery photos not already shown in the Menu Teaser section above
// are listed here, so the same dish doesn't appear twice on one screen.
const galleryImages = [
  { src: "/img/gallery/dish-3.jpg", alt: "Crispy spring rolls" },
  { src: "/img/gallery/dish-4.jpg", alt: "Masala fries with dips" },
  { src: "/img/gallery/dish-5.jpg", alt: "Burger and sandwich" },
  { src: "/img/gallery/dish-7.jpg", alt: "Fresh dosa with sauces" },
  { src: "/img/gallery/dish-8.jpg", alt: "Fruit milkshakes" },
];

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
