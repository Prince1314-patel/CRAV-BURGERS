"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "crav-concept-notice-dismissed";

export default function ConceptNotice() {
  // Starts closed to match SSR output; the effect below is a one-time read of
  // persisted external state (sessionStorage), not a derived-render loop.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from sessionStorage on mount, not a render loop
      setOpen(true);
    }
  }, []);

  function close() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-notice-title"
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 p-4 sm:items-center"
    >
      <div className="relative w-full max-w-md rounded-md border-2 border-ink bg-beige p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-beige"
        >
          ×
        </button>

        <p className="font-body text-xs font-bold tracking-[0.2em] text-red uppercase">
          Notice
        </p>
        <h2 id="concept-notice-title" className="mt-2 font-display text-3xl tracking-wide text-ink">
          Concept Website
        </h2>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink/80">
          This is a concept website created by Anyflow Agency. If you are
          looking for brand design and development like this, you can reach
          out to us at{" "}
          <a href="mailto:anyflowagency@gmail.com" className="font-bold text-ink underline">
            anyflowagency@gmail.com
          </a>
          .
        </p>
        <p className="mt-6 font-body text-xs font-bold tracking-[0.15em] text-ink/50 uppercase">
          Designed &amp; Developed By Anyflow
        </p>

        <button
          type="button"
          onClick={close}
          className="mt-6 w-full rounded-full bg-red px-6 py-3.5 font-body text-xs font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-ink"
        >
          Acknowledge &amp; Close
        </button>
      </div>
    </div>
  );
}
