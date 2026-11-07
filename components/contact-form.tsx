"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm({ messages }: { messages: Dictionary["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="field">
          {messages.name}
          <input name="name" required placeholder={messages.namePlaceholder} autoComplete="name" />
        </label>
        <label className="field">
          {messages.email}
          <input name="email" type="email" required placeholder={messages.emailPlaceholder} autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>
          {messages.phone} <span className="optional">{messages.phoneOptional}</span>
        </span>
        <input name="phone" type="tel" placeholder={messages.phonePlaceholder} autoComplete="tel" />
      </label>
      <label className="field">
        {messages.message}
        <textarea name="message" required placeholder={messages.messagePlaceholder} />
      </label>
      {status === "sent" ? (
        <div className="form-success" role="status">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {messages.success}
        </div>
      ) : (
        <button className="btn btn-primary btn-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? messages.submitting : messages.submit}
        </button>
      )}
      {status === "error" && (
        <span className="form-error" role="alert">
          {messages.error}
        </span>
      )}
      <span className="form-note">{messages.note}</span>
    </form>
  );
}
