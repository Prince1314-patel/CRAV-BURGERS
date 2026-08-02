import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Story() {
  return (
    <section id="story" className="bg-maroon py-16 text-cream sm:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-cream">
            Taste of Street Culture
          </h2>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-cream/80 sm:text-lg">
            Across India, street food is never just something you grab between
            errands. It is shared with neighbours, argued over with friends,
            and remembered long after the plate is empty. That is the feeling
            we have carried with us to Wolverhampton.
          </p>

          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-cream/80 sm:text-lg">
            No shortcuts, no reinvention, just real street-vendor cooking,
            made fresh every day and served with the same pride it is served
            with on every street corner from Mumbai to Delhi.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-cream/5 sm:aspect-[16/10] lg:aspect-[4/3]">
          <Image
            src="/img/menu/chaat-corner.jpg"
            alt="A Street Bites chaat plate, shared the way it's eaten on India's street corners"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
