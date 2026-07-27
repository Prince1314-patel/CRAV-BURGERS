import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-8 lg:px-12">
        <Reveal>
          <h1 className="font-display leading-[0.82] tracking-wide text-red">
            <span className="block text-[clamp(1.75rem,5vw,3.25rem)]">The</span>
            <span className="block text-[clamp(4.5rem,17vw,10.5rem)]">Burger</span>
          </h1>
        </Reveal>

        <Reveal
          delay={80}
          className="relative mx-auto -mt-[16vw] aspect-square w-[68vw] max-w-[520px] sm:-mt-[11vw] sm:w-[46vw]"
        >
          <span className="absolute -left-2 top-[8%] z-10 -rotate-[14deg] rounded-full border-2 border-ink bg-mustard px-4 py-2 font-body text-xs leading-none font-bold tracking-wide text-ink uppercase shadow-[0_6px_0_0_var(--ink)] sm:-left-6 sm:px-5 sm:py-3">
            Smashed
            <br />
            Fresh
          </span>
          <span className="absolute -right-2 top-[8%] z-10 rotate-[14deg] rounded-full border-2 border-ink bg-mustard px-4 py-2 font-body text-xs leading-none font-bold tracking-wide text-ink uppercase shadow-[0_6px_0_0_var(--ink)] sm:-right-6 sm:px-5 sm:py-3">
            Bold
            <br />
            Flavor
          </span>

          <Image
            src="/img-webp/burgerH.webp"
            alt="CRAV Artisan Smashed Burger with fresh ingredients"
            fill
            priority
            sizes="(min-width: 640px) 480px, 68vw"
            className="object-contain drop-shadow-[0_35px_45px_rgba(27,27,27,0.4)]"
          />
        </Reveal>

        <Reveal delay={160}>
          <p
            className="-mt-[7vw] font-display text-[clamp(4rem,15vw,9rem)] leading-[0.75] tracking-wide text-mustard sm:-mt-[5vw] [-webkit-text-stroke:3px_var(--ink)]"
            style={{ paintOrder: "stroke fill" }}
          >
            CRAV
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="relative mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 pt-6 pb-16 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:pb-24">
            <p className="font-body text-sm leading-relaxed text-ink/80 sm:pr-6 sm:text-right sm:text-base">
              Smashed hot on the flat top, our prime patties lock in ultimate
              juiciness under a caramelized crust.
            </p>

            <span className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-beige bg-red font-display text-sm tracking-wide text-white sm:h-20 sm:w-20 sm:text-base">
              CRAV
            </span>

            <p className="font-body text-sm leading-relaxed text-ink/80 sm:pl-6 sm:text-left sm:text-base">
              Topped with melted cheddar and our signature chili honey glaze —
              crafted to satisfy your cravings since 1997.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
