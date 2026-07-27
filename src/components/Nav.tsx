"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Spices", href: "/spices" },
  { label: "Locations", href: "/#takeaway" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-beige/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-3xl leading-none tracking-wide text-ink sm:text-4xl"
          onClick={() => setOpen(false)}
        >
          CRAV
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/menu"
            className="hidden rounded-full bg-red px-5 py-2.5 font-body text-xs font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-ink sm:inline-block"
          >
            Burgers
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 font-body text-xs font-bold tracking-[0.08em] text-ink uppercase transition-colors hover:bg-ink hover:text-beige"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={clsx(
                  "absolute left-0 h-[2px] w-4 bg-current transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 h-[2px] w-4 bg-current transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={clsx(
          "fixed inset-x-0 top-[72px] z-40 origin-top overflow-hidden bg-ink text-beige transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 sm:px-8 lg:px-12">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-beige/15 py-4 font-display text-4xl tracking-wide transition-colors hover:text-mustard sm:text-5xl"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto max-w-[1280px] px-6 pb-8 font-body text-xs tracking-[0.08em] text-beige/60 uppercase sm:px-8 lg:px-12">
          Est. 1997 — Navarra, España
        </p>
      </nav>
    </header>
  );
}
