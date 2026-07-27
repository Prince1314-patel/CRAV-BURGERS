"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems } from "@/lib/menu";

export default function MenuExperience() {
  const [cartCount, setCartCount] = useState(0);

  function handleAdd() {
    setCartCount((c) => c + 1);
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between gap-6">
          <Reveal>
            <p className="font-body text-xs font-bold tracking-[0.25em] text-red uppercase">
              Eat Like You Mean It
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] tracking-wide text-ink">
              The Best
            </h1>
            <p className="mt-4 font-body text-base text-ink/70 sm:text-lg">
              Our finest burger picks — {menuItems.length} items
            </p>
          </Reveal>

          <Reveal delay={80} className="hidden shrink-0 items-center gap-3 rounded-full border-2 border-ink bg-white px-5 py-3 sm:flex">
            <span className="relative h-8 w-8">
              <Image src="/img-webp/smile.png" alt="" fill sizes="32px" className="object-contain" />
            </span>
            <span className="font-body text-xs font-bold tracking-[0.08em] text-ink uppercase">
              Added to cart
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red font-body text-xs font-bold text-white">
              {cartCount}
            </span>
          </Reveal>
        </div>

        <div className="mt-6 flex items-center gap-3 sm:hidden">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red font-body text-xs font-bold text-white">
            {cartCount}
          </span>
          <span className="font-body text-xs font-bold tracking-[0.08em] text-ink/70 uppercase">
            Added to cart
          </span>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 90}>
              <MenuCard item={item} onAdd={handleAdd} />
            </Reveal>
          ))}
        </div>

        <div className="pointer-events-none absolute -right-6 bottom-0 hidden w-40 opacity-90 lg:block xl:-right-2 xl:w-52">
          <Image
            src="/img/burger-boy.png"
            alt=""
            width={400}
            height={412}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
