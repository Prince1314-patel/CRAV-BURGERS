"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { siteInfo } from "@/content/site";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Order Online", href: "/#order-online" },
  { label: "Find Us", href: "/#location" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (open) {
      firstLinkRef.current?.focus();
    } else {
      toggleButtonRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-wide text-maroon sm:text-3xl"
          onClick={() => setOpen(false)}
        >
          Street <span className="text-gold">Bites</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/menu"
            className="hidden rounded-full bg-maroon px-5 py-2.5 font-body text-xs font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-maroon-dark sm:inline-block"
          >
            View Menu
          </Link>

          <button
            ref={toggleButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border-2 border-maroon px-4 py-2 font-body text-xs font-semibold tracking-[0.08em] text-maroon uppercase transition-colors hover:bg-maroon hover:text-cream"
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
        inert={!open ? true : undefined}
        className={clsx(
          "fixed inset-x-0 top-[var(--nav-h)] z-40 origin-top overflow-hidden bg-maroon text-cream transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:top-[var(--nav-h-sm)]",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 sm:px-8 lg:px-12">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-cream/15 py-4 font-display text-3xl font-semibold tracking-wide transition-colors hover:text-gold sm:text-4xl"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto max-w-[1280px] px-6 pb-8 font-body text-xs tracking-[0.08em] text-cream/60 uppercase sm:px-8 lg:px-12">
          {siteInfo.address.full}
        </p>
      </nav>
    </header>
  );
}
