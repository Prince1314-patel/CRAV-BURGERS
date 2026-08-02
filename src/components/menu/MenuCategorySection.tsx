import Image from "next/image";
import clsx from "clsx";
import Reveal from "@/components/Reveal";
import type { MenuCategory } from "@/content/menu";

export default function MenuCategorySection({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const imageOnRight = index % 2 === 1;

  return (
    <section
      id={category.slug}
      className="scroll-mt-40 border-b border-maroon/10 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div
          className={clsx(
            "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center",
          )}
        >
          <Reveal
            className={clsx(
              "relative aspect-[4/3] w-full overflow-hidden rounded-lg",
              imageOnRight && "lg:order-2",
            )}
          >
            <Image
              src={category.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={100} className={clsx(imageOnRight && "lg:order-1")}>
            <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
              {category.tagline}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink">
              {category.name}
            </h2>

            <ul className="mt-8 divide-y divide-maroon/10">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-body text-base text-ink">{item.name}</span>
                  <span className="whitespace-nowrap font-display text-base font-semibold text-maroon">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
