import Reveal from "@/components/Reveal";

const team = [
  { role: "Founder & Head Chef", note: "Leads the kitchen and every recipe on the menu." },
  { role: "Kitchen Lead", note: "Keeps every chaat, curry and momo fresh and consistent." },
  { role: "Front of House", note: "The friendly face that greets you at the counter." },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
            Our Team
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink">
            The People Behind Street Bites
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.role} delay={i * 90}>
              <article className="flex h-full flex-col items-center rounded-md border-2 border-maroon/15 bg-white p-8 text-center">
                <div
                  className="h-20 w-20 rounded-full bg-maroon/10"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {member.role}
                </h3>
                <p className="mt-2 font-body text-sm text-ink/70">{member.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
