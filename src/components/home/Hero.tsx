import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SkylineDivider from "@/components/SkylineDivider";
import { siteInfo } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[85dvh] items-center overflow-hidden text-cream">
      <Image
        src="/img/hero/storefront.jpg"
        alt="Street Bites storefront on North Street, Wolverhampton, with the lit-up OPEN sign"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/85 to-maroon/55" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-white/5 px-4 py-1.5 font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            Now Open
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] font-black tracking-tight text-cream">
            The streets of India
            <br />
            have arrived in <span className="text-gold">Wolverhampton</span>.
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-cream/90 sm:text-lg">
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

          <p className="mt-6 font-body text-xs font-semibold tracking-[0.15em] text-cream/60 uppercase">
            {siteInfo.address.full}
          </p>
        </Reveal>

        <SkylineDivider className="mt-14 h-10 w-full text-cream/40" />
      </div>
    </section>
  );
}
