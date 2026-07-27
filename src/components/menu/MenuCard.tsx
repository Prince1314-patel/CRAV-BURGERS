"use client";

import { useState } from "react";
import clsx from "clsx";
import type { MenuItem } from "@/lib/menu";

const spiceColor: Record<MenuItem["spice"], string> = {
  Mild: "text-ink/70",
  Medium: "text-mustard-dark",
  Hot: "text-red",
};

export default function MenuCard({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}) {
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    onAdd(item);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  }

  return (
    <article className="flex h-full flex-col rounded-md bg-white p-8">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-b border-ink/10 pb-6 font-body text-xs">
        <div>
          <dt className="font-bold tracking-[0.08em] text-ink/50 uppercase">Quick Details</dt>
          <dd className="mt-1 font-display text-lg tracking-wide text-ink">{item.prepTime}</dd>
        </div>
        <div>
          <dt className="font-bold tracking-[0.08em] text-ink/50 uppercase">Bun</dt>
          <dd className="mt-1 font-display text-lg tracking-wide text-ink">{item.bun}</dd>
        </div>
        <div>
          <dt className="font-bold tracking-[0.08em] text-ink/50 uppercase">Patty</dt>
          <dd className="mt-1 font-display text-lg tracking-wide text-ink">{item.patty}</dd>
        </div>
        <div>
          <dt className="font-bold tracking-[0.08em] text-ink/50 uppercase">Spice</dt>
          <dd className={clsx("mt-1 font-display text-lg tracking-wide", spiceColor[item.spice])}>
            {item.spice}
          </dd>
        </div>
      </dl>

      <p className="mt-6 font-body text-xs font-bold tracking-[0.08em] text-ink/50 uppercase">
        Calories: {item.calories} &nbsp;·&nbsp; Protein: {item.protein}g
      </p>

      <h3 className="mt-3 font-display text-3xl tracking-wide text-ink">{item.name}</h3>

      <div className="mt-auto flex items-center justify-between pt-8">
        <p className="font-display text-3xl tracking-wide text-red">${item.price}</p>
        <button
          type="button"
          onClick={handleAdd}
          className={clsx(
            "rounded-full px-6 py-3 font-body text-xs font-bold tracking-[0.08em] uppercase transition-colors",
            justAdded ? "bg-ink text-beige" : "bg-red text-white hover:bg-ink",
          )}
        >
          {justAdded ? "Added ✓" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
