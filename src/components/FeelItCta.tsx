import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FeelItCta() {
  return (
    <section className="relative overflow-hidden bg-mustard">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-28">
        <Reveal>
          <p className="font-body text-xs font-bold tracking-[0.2em] text-ink/70 uppercase">
            Feel It
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] tracking-wide text-ink">
            Feel the
            <br />
            Change
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            Smashed for the bold, built for the hungry. Dive into a legendary
            craft experience where every crispy edge and juicy layer rules.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex rounded-full bg-red px-9 py-4 font-body text-sm font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5 hover:bg-ink"
          >
            Order Now
          </Link>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div
            className="absolute inset-4 rounded-lg bg-ink/10"
            aria-hidden="true"
          />
          <Image
            src="/img-webp/cta.webp"
            alt="Premium smashed burger on a wooden board"
            fill
            sizes="(min-width: 1024px) 420px, 80vw"
            className="rounded-lg border-2 border-ink object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
