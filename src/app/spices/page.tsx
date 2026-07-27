import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import IngredientCallout from "@/components/spices/IngredientCallout";
import FeelItCta from "@/components/FeelItCta";

export const metadata: Metadata = {
  title: "Our Spices & Ingredients | CRAV Burgers",
};

const ingredients = [
  {
    title: "Freshly Greens",
    copy: "Grilled to perfection — juicy, smoky, unforgettable.",
    image: "/img-webp/lettuceimg.webp",
    alt: "Crispy garden lettuce",
  },
  {
    title: "Juicy Tomatoes",
    copy: "Sun-ripened tomatoes that bring natural sweetness and balance.",
    image: "/img-webp/tomatoimg.webp",
    alt: "Fresh sliced tomatoes",
  },
  {
    title: "Creamy Cheese",
    copy: "Rich, creamy cheese that melts into every bite.",
    image: "/img-webp/cheeseimg.webp",
    alt: "Melting cheddar cheese",
  },
  {
    title: "Perfect Patty",
    copy: "Grilled to perfection — juicy, smoky, unforgettable.",
    image: "/img-webp/tikki.webp",
    alt: "Smashed beef patty",
  },
  {
    title: "Artisan Bun",
    copy: "Soft, toasted buns crafted to hold everything together.",
    image: "/img-webp/bun.webp",
    alt: "Toasted brioche bun",
  },
];

export default function SpicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
              What&rsquo;s Inside
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] tracking-wide text-ink">
              Simple Things
              <br />
              Done Right
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
              We don&rsquo;t have a long list of ingredients. We have a short
              one — and we&rsquo;re obsessive about every single item on it.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/img-webp/farmtobite.webp"
                alt="From farm to bite"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={160}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.95] tracking-wide text-ink">
                From Farm To Bite
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
                We didn&rsquo;t just pick ingredients off a list. We thought
                about where they come from, why they matter, and what they
                bring to the burger.
              </p>
              <Link
                href="/menu"
                className="mt-8 inline-flex rounded-full bg-red px-9 py-4 font-body text-sm font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5 hover:bg-ink"
              >
                Order Now
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
              A Story In Every Bite
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-wide text-ink">
              From Fresh Farms To
              <br />
              Your Hands
            </h2>
            <p className="mt-4 font-body text-base text-ink/70 sm:text-lg">
              Every layer matters.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-16">
            {ingredients.map((ingredient, i) => (
              <IngredientCallout
                key={ingredient.title}
                {...ingredient}
                reverse={i % 2 === 1}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <FeelItCta />
    </>
  );
}
