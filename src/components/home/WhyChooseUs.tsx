import Image from "next/image";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    title: "Authentic Recipes",
    description: "Real street-vendor recipes from across India, no shortcuts, no substitutes.",
  },
  {
    title: "Fresh, Made Daily",
    description: "Chutneys, doughs and marinades made fresh in-house every day.",
  },
  {
    title: "A Whole Street of Flavour",
    description: "Chaat, momos, curries and more: one menu, every corner of India's street food scene.",
  },
  {
    title: "London Meets India",
    description: "Rooted in Indian street culture, served fresh right here in Wolverhampton.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-12">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-maroon/5 sm:aspect-[16/10] lg:aspect-[4/5]">
          <Image
            src="/img/menu/mains-rice.jpg"
            alt="A spread of Street Bites curries, rice and freshly made bread"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight text-ink">
            Why We Are Your Best Choice
          </h2>

          <dl className="mt-8 divide-y divide-maroon/15 border-t border-maroon/15">
            {reasons.map((reason) => (
              <div key={reason.title} className="py-5">
                <dt className="font-display text-lg font-bold text-maroon">{reason.title}</dt>
                <dd className="mt-1.5 font-body text-sm leading-relaxed text-ink/70">
                  {reason.description}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
