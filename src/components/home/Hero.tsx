import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SkylineDivider from "@/components/SkylineDivider";
import { siteInfo } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-maroon pt-16 pb-20 text-cream sm:pt-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-white/5 px-4 py-1.5 font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            Now Open
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] font-black tracking-tight text-cream">
            The streets of India
            <br />
            have arrived in <span className="text-gold">Wolverhampton</span>.
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-cream/80 sm:text-lg">
            Authentic flavours, fresh bites and unforgettable moments: chaat,
            momos, vada pav and curries, cooked fresh every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold tracking-[0.08em] text-ink uppercase transition-[background-color,transform] duration-150 ease-out hover:bg-white active:scale-[0.97]"
            >
              View Menu
            </Link>
            <Link
              href="#order-online"
              className="rounded-full border-2 border-cream/40 px-7 py-3.5 font-body text-sm font-semibold tracking-[0.08em] text-cream uppercase transition-[color,border-color,transform] duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              Order Online
            </Link>
          </div>

          <p className="mt-6 font-body text-xs font-semibold tracking-[0.15em] text-cream/50 uppercase">
            {siteInfo.address.full}
          </p>
        </Reveal>

        <Reveal delay={120} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-maroon/5">
          <Image
            src="/img/hero/storefront.jpg"
            alt="Street Bites storefront on North Street, Wolverhampton, with the lit-up OPEN sign"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <SkylineDivider className="mt-14 h-10 w-full text-cream/40" />
    </section>
  );
}
