import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { menuCategories } from "@/content/menu";

// `menuName` is the exact item name as it appears in `src/content/menu.ts`,
// used only to look up the current price. `name` is the display label shown
// on the card (kept short/friendly, may differ slightly from the menu name).
const signatureDishes = [
  { slug: "vada-pav", name: "Vada Pav", menuName: "Vada Pav" },
  { slug: "pani-puri", name: "Pani Puri", menuName: "Pani Puri (8pcs)" },
  { slug: "samosa-chaat", name: "Samosa Chaat", menuName: "Samosa Chaat" },
  { slug: "chole-bhature", name: "Chole Bhature", menuName: "Chole Bhature" },
  { slug: "chicken-momos", name: "Chicken Momos", menuName: "Chicken Momos" },
  { slug: "butter-chicken", name: "Butter Chicken", menuName: "Butter Chicken" },
];

function priceFor(menuName: string): string {
  for (const category of menuCategories) {
    const item = category.items.find((item) => item.name === menuName);
    if (item) return item.price;
  }
  return "";
}

export default function MenuTeaser() {
  return (
    <section id="menu-teaser" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
              Signature Dishes
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-ink">
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
                <div className="relative aspect-[4/3] bg-maroon/5">
                  <Image
                    src={`/img/teaser/${dish.slug}.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{dish.name}</h3>
                  <p className="font-display text-lg font-semibold text-maroon">
                    {priceFor(dish.menuName)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
