import Link from "next/link";
import SkylineDivider from "@/components/SkylineDivider";
import { siteInfo } from "@/content/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Order Online", href: "/#order-online" },
  { label: "Find Us", href: "/#location" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream">
      <SkylineDivider className="h-10 w-full text-gold/70" />
      <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-10 sm:px-8 lg:px-12">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-b border-cream/15 pb-10 font-body text-sm font-semibold tracking-[0.08em] uppercase">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-bold tracking-wide text-cream">
              Street <span className="text-gold">Bites</span>
            </p>
            <p className="mt-2 font-body text-xs tracking-[0.1em] text-cream/60 uppercase">
              {siteInfo.tagline}
            </p>
          </div>

          <div className="font-body text-sm text-cream/80">
            <p>{siteInfo.address.full}</p>
            <p className="mt-2">
              <a href={`tel:${siteInfo.phone}`} className="hover:text-gold">
                {siteInfo.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteInfo.email}`} className="hover:text-gold">
                {siteInfo.email}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2 font-body text-sm text-cream/80">
            <a
              href={siteInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Instagram @Streetbites
            </a>
            <a
              href={siteInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Facebook @Streetbites
            </a>
            <a
              href={siteInfo.delivery.justEat}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Order on Just Eat
            </a>
            <a
              href={siteInfo.delivery.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/15 pt-6 font-body text-xs tracking-[0.08em] text-cream/80 uppercase">
          © {new Date().getFullYear()} {siteInfo.legalName} (Company No.{" "}
          {siteInfo.companyNumber}). All rights reserved
        </p>
      </div>
    </footer>
  );
}
