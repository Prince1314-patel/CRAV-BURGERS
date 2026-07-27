import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ConceptNotice from "@/components/contact/ConceptNotice";
import FeelItCta from "@/components/FeelItCta";

export const metadata: Metadata = {
  title: "Contact Us | CRAV | CRAV Burgers",
};

export default function ContactPage() {
  return (
    <>
      <ConceptNotice />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
                Say Hello
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] tracking-wide text-ink">
                Got A Craving?
                <br />
                Let&rsquo;s Talk
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <FeelItCta />
    </>
  );
}
