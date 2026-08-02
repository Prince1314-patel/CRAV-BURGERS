import Reveal from "@/components/Reveal";
import { siteInfo } from "@/content/site";

export default function OrderOnline() {
  return (
    <section id="order-online" className="bg-maroon py-16 text-cream sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-body text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Order Online
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-cream">
            Get Street Bites Delivered
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-cream/80">
            Order for delivery or collection through our partners below.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteInfo.delivery.justEat}
            className="rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:bg-white"
          >
            Order on Just Eat
          </a>
          <a
            href={siteInfo.delivery.uberEats}
            className="rounded-full border-2 border-cream/40 px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Order on Uber Eats
          </a>
        </Reveal>
      </div>
    </section>
  );
}
