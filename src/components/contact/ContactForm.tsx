"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("A craving from the CRAV site");
    const body = encodeURIComponent(`${message}\n\n— ${email}`);
    window.location.href = `mailto:hello@cravburgers.example?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-md border-2 border-ink bg-white p-8">
        <p className="font-display text-3xl tracking-wide text-ink">Craving sent.</p>
        <p className="mt-3 font-body text-sm text-ink/70">
          Your email client should be opening now — we&rsquo;ll get back to
          you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 font-body text-xs font-bold tracking-[0.08em] text-red uppercase underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="email" className="sr-only">
          Your best email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="YOUR BEST EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-sm border-2 border-ink bg-white px-5 py-4 font-body text-sm tracking-[0.04em] text-ink uppercase placeholder:text-ink/40 focus:border-red focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Tell us your craving
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="TELL US YOUR CRAVING..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-sm border-2 border-ink bg-white px-5 py-4 font-body text-sm tracking-[0.04em] text-ink uppercase placeholder:text-ink/40 focus:border-red focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="self-start rounded-full bg-red px-9 py-4 font-body text-sm font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5 hover:bg-ink"
      >
        Send Craving
      </button>
    </form>
  );
}
