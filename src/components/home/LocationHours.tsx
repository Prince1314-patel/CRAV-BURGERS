import Reveal from "@/components/Reveal";
import { siteInfo } from "@/content/site";

export default function LocationHours() {
  return (
    <section id="location" className="scroll-mt-24 bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
        <Reveal>
          <p className="font-body text-xs font-semibold tracking-[0.25em] text-maroon uppercase">
            Find Us
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink">
            Visit Street Bites
          </h2>

          <p className="mt-6 font-body text-base text-ink/80">{siteInfo.address.full}</p>
          <p className="mt-2 font-body text-base text-ink/80">
            <a href={`tel:${siteInfo.phone}`} className="hover:text-maroon">
              {siteInfo.phoneDisplay}
            </a>
          </p>
          <p className="font-body text-base text-ink/80">
            <a href={`mailto:${siteInfo.email}`} className="hover:text-maroon">
              {siteInfo.email}
            </a>
          </p>

          <dl className="mt-8 space-y-2 border-t border-maroon/15 pt-6">
            {siteInfo.hours.map((slot) => (
              <div key={slot.day} className="flex justify-between font-body text-sm">
                <dt className="text-ink/70">{slot.day}</dt>
                <dd className="font-semibold text-ink">{slot.time}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100} className="overflow-hidden rounded-md">
          <iframe
            src={siteInfo.mapEmbedSrc}
            title="Map showing Street Bites location at 1A North Street, Wolverhampton"
            className="h-80 w-full border-0 lg:h-full lg:min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
