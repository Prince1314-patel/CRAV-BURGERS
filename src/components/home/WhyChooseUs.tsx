import Reveal from "@/components/Reveal";

const reasons = [
  {
    title: "Authentic Recipes",
    description:
      "Every dish follows real street-vendor recipes from across India — no shortcuts, no substitutes.",
  },
  {
    title: "Fresh, Made Daily",
    description:
      "Chutneys, doughs and marinades are made fresh in-house each day, never frozen or pre-mixed.",
  },
  {
    title: "A Whole Street of Flavour",
    description:
      "From chaat to momos to curries — one menu covers every corner of India's street food scene.",
  },
  {
    title: "London Meets India",
    description:
      "Rooted in Indian street culture, served right here in Wolverhampton, for everyone to enjoy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink">
            Why We Are Your Best Choice
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <article className="h-full rounded-md border-2 border-maroon/15 bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-maroon">
                  {reason.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
