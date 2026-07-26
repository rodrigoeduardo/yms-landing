"use client";

import { useEffect } from "react";

/**
 * Opts the page into scroll entrance animations.
 *
 * Renders nothing. On mount it:
 * - bails out entirely if the user prefers reduced motion, or if
 *   IntersectionObserver isn't available — in both cases `[data-reveal]`
 *   elements simply keep their default (fully visible) CSS state.
 * - otherwise adds `.reveal-ready` to <html>, which is what actually arms
 *   the hidden-until-revealed CSS in globals.css, and observes every
 *   `[data-reveal]` element to add `.is-visible` once it scrolls into view.
 *
 * Elements already in the viewport on mount reveal immediately, since
 * IntersectionObserver fires its callback on initial observe.
 */
export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!elements.length) return;

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
