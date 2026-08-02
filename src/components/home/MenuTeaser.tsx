import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const signatureDishes = [
  { slug: "vada-pav", name: "Vada Pav", price: "£2.50" },
  { slug: "pani-puri", name: "Pani Puri", price: "£3.50" },
  { slug: "samosa-chaat", name: "Samosa Chaat", price: "£5.50" },
  { slug: "chole-bhature", name: "Chole Bhature", price: "£7.99" },
  { slug: "chicken-momos", name: "Chicken Momos", price: "£8.99" },
  { slug: "butter-chicken", name: "Butter Chicken", price: "£10.99" },
];

export default function MenuTeaser() {
  return (
    <section id="menu-teaser" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
              Signature Dishes
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink">
              A Taste of the Menu
            </h2>
          </div>
          <Link
            href="/menu"
            className="rounded-full bg-maroon px-6 py-3 font-body text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-maroon-dark"
          >
            View Full Menu →
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.slug} delay={(i % 3) * 90}>
              <article className="overflow-hidden rounded-md border-2 border-maroon/15 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/img/teaser/${dish.slug}.jpg`}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{dish.name}</h3>
                  <p className="font-display text-lg font-semibold text-maroon">{dish.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
