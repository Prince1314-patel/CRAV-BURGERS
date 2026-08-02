import Reveal from "@/components/Reveal";
import { siteInfo } from "@/content/site";

export default function OrderOnline() {
  return (
    <section id="order-online" className="scroll-mt-24 bg-maroon py-16 text-cream sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-cream">
            Ready to Order?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-cream/80">
            Order for delivery or collection through our partners below.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteInfo.delivery.justEat}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-ink uppercase transition-[background-color,transform] duration-150 ease-out hover:bg-white active:scale-[0.97]"
          >
            Order on Just Eat
          </a>
          <a
            href={siteInfo.delivery.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-cream/40 px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-cream uppercase transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
          >
            Order on Uber Eats
          </a>
          <a
            href={`tel:${siteInfo.phone}`}
            className="rounded-full border-2 border-gold px-8 py-4 font-body text-sm font-semibold tracking-[0.08em] text-gold uppercase transition-[background-color,color,transform] duration-150 ease-out hover:bg-gold hover:text-ink active:scale-[0.97]"
          >
            Or call us: {siteInfo.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
