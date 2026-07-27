import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Burgers", href: "/menu" },
  { label: "Spices", href: "/spices" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-beige">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-10 sm:px-8 lg:px-12">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-b border-beige/15 pb-10 font-body text-sm font-bold tracking-[0.08em] uppercase">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-mustard">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[clamp(3.5rem,16vw,9rem)] leading-[0.85] tracking-wide text-beige">
              CRAV
            </p>
            <p className="mt-2 font-body text-xs tracking-[0.1em] text-beige/60 uppercase">
              Smashed patties · toasted buns · est. 1997
            </p>
          </div>
          <p className="font-body text-xs tracking-[0.08em] text-beige/60 uppercase">
            © 2026 CRAV — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
