"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { DemoBar, DemoPanel, STEPS, type Step } from "@/components/hero-demo";

type Funcoes = Dictionary["funcoes"];
type Demo = Dictionary["demo"];

// Each function scrolls the same app window the hero runs, to the state it owns.
// Load intake covers both the Entrada and Etiquetas tabs; its scene is the printing.
const SCENES: { tabs: Step[]; panel: Step }[] = [
  { tabs: ["intake", "labels"], panel: "labels" },
  { tabs: ["checkout"], panel: "checkout" },
  { tabs: ["stock"], panel: "stock" },
];

function AppFrame({ demo, f, lang, scene }: { demo: Demo; f: Funcoes; lang: string; scene: (typeof SCENES)[number] }) {
  return (
    <div className="demo-window walk-window">
      <DemoBar demo={demo} />
      <div className="demo-tabs">
        {STEPS.map((s, i) => (
          <span key={s} className="demo-tab" data-selected={scene.tabs.includes(s)}>
            <span className="demo-tab-num">{i + 1}</span>
            {demo.tabs[s]}
          </span>
        ))}
      </div>
      <div className="demo-stage">
        <DemoPanel step={scene.panel} demo={demo} rows={f.step3.rows} closed={f.step3.closed} lang={lang} />
      </div>
    </div>
  );
}

export function Walkthrough({ f, demo, lang }: { f: Funcoes; demo: Demo; lang: string }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [f.step1, f.step2, f.step3];

  return (
    <div className="walk">
      <ol className="walk-steps">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="walk-step"
            data-index={i}
            data-active={active === i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
          >
            <span className="walk-num" aria-hidden>
              {i + 1}
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <div className="walk-inline" aria-hidden>
              {/* Remount on activation so the scene replays as it scrolls in. */}
              <AppFrame key={active === i ? "on" : "off"} demo={demo} f={f} lang={lang} scene={SCENES[i]} />
            </div>
          </li>
        ))}
      </ol>
      <div className="walk-stage" aria-hidden>
        <AppFrame demo={demo} f={f} lang={lang} scene={SCENES[active]} />
      </div>
    </div>
  );
}
