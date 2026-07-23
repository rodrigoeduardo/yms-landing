"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
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
          Nome
          <input name="name" required placeholder="Seu nome" autoComplete="name" />
        </label>
        <label className="field">
          E-mail
          <input name="email" type="email" required placeholder="voce@empresa.com.br" autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>
          Telefone <span className="optional">(opcional)</span>
        </span>
        <input name="phone" type="tel" placeholder="(11) 99999-0000" autoComplete="tel" />
      </label>
      <label className="field">
        Mensagem
        <textarea name="message" required placeholder="Como funciona seu pátio hoje?" />
      </label>
      {status === "sent" ? (
        <div className="form-success" role="status">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Mensagem enviada. Obrigado!
        </div>
      ) : (
        <button className="btn btn-primary btn-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar mensagem"}
        </button>
      )}
      {status === "error" && (
        <span className="form-error" role="alert">
          Não foi possível enviar. Tente de novo em instantes.
        </span>
      )}
      <span className="form-note">Sua mensagem chega direto no nosso e-mail.</span>
    </form>
  );
}
