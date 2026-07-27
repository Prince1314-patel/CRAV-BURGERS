import Image from "next/image";
import Reveal from "@/components/Reveal";

const blocks = [
  {
    title: "Bold Flavour",
    image: "/img-webp/burgerwithhands.webp",
    alt: "burger with hands",
    tags: ["450 KCAL", "High Protein", "Fresh Ingredients"],
    align: "left" as const,
  },
  {
    title: "Pure Quality",
    image: "/img-webp/cheesyBurger.webp",
    alt: "CRAV Signature Cheesy Burger with dripping cheese",
    tags: ["100% Organic", "Zero Guilt", "True Taste"],
    align: "right" as const,
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
            Experience
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-wide text-ink">
            Food That Feels Good
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {blocks.map((block, i) => (
            <Reveal
              key={block.title}
              delay={i * 100}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                block.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-ink">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.95] tracking-wide text-ink">
                  {block.title}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {block.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border-2 border-ink/20 px-5 py-2 font-body text-xs font-bold tracking-[0.06em] text-ink uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
                Every Layer
              </p>
              <h3 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.95] tracking-wide text-ink">
                Packed With
                <br />
                Signature Flavor
              </h3>
            </div>
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { src: "/img-webp/tomato.webp", alt: "Fresh organic tomato slice" },
                { src: "/img-webp/cheese.webp", alt: "Premium cheddar cheese slice" },
                { src: "/img-webp/meat.webp", alt: "Smashed artisan beef patty" },
                { src: "/img-webp/lettuce.webp", alt: "Crispy garden lettuce leaf" },
              ].map((item) => (
                <div key={item.src} className="relative h-20 w-20 shrink-0 sm:h-28 sm:w-28">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="112px"
                    className="object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.45)]"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
