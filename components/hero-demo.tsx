"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { useReducedMotion, useTick } from "@/lib/use-reduced-motion";
import { QrMark, ThermalLabel } from "@/components/thermal-label";

export const STEPS = ["intake", "labels", "checkout", "stock"] as const;
export type Step = (typeof STEPS)[number];
const STEP_MS = 4800;

type Demo = Dictionary["demo"];
type Rows = Dictionary["funcoes"]["step3"]["rows"];

function IntakePanel({ demo, rows }: { demo: Demo; rows: Rows }) {
  const fields = [
    [demo.intake.invoiceLabel, demo.label.invoice],
    [demo.intake.materialLabel, rows[0].material],
    [demo.intake.weightLabel, rows[0].value],
    [demo.intake.itemsLabel, demo.intake.items],
    [demo.intake.dateLabel, demo.label.intake.replace(/^\S+\s/, "")],
  ];
  return (
    <div className="panel-intake">
      {fields.map(([k, v], i) => (
        <div className="intake-field" key={k} style={{ "--i": i } as React.CSSProperties}>
          <span>{k}</span>
          <strong className="type-in">{v}</strong>
        </div>
      ))}
      <span className="intake-submit">{demo.intake.submit}</span>
    </div>
  );
}

function LabelsPanel({ demo, active }: { demo: Demo; active: boolean }) {
  const printed = Math.round(useTick(1, demo.numbers.startItems, active, 3600, 300));
  return (
    <div className="panel-labels">
      <div className="printer">
        <span className="printer-light" />
        <span className="printer-name">{demo.labels.printer}</span>
        <span className="printer-count">
          {demo.labels.printing} <strong>{String(printed).padStart(3, "0")}/{demo.numbers.startItems}</strong>
        </span>
      </div>
      <div className="printer-slot" />
      <div className="label-feed">
        {[0, 1, 2].map((i) => (
          <ThermalLabel key={i} label={demo.label} className="feed-label" />
        ))}
      </div>
    </div>
  );
}

function CheckoutPanel({ demo }: { demo: Demo }) {
  return (
    <div className="panel-checkout">
      <div className="scan-target">
        <QrMark className="scan-qr" />
        <span className="scan-beam" />
      </div>
      <div className="scan-out">
        <div className="scan-result">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <strong>{demo.checkout.removed}</strong>
          <dl>
            <dt>{demo.checkout.plateLabel}</dt>
            <dd>{demo.checkout.plate}</dd>
            <dt>{demo.checkout.dateLabel}</dt>
            <dd>{demo.checkout.date}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

function StockPanel({ demo, rows, closed, lang, active }: { demo: Demo; rows: Rows; closed: string; lang: string; active: boolean }) {
  const { startKg, itemKg, startItems } = demo.numbers;
  const kg = useTick(startKg, startKg - itemKg, active, 1100, 700);
  const items = Math.round(useTick(startItems, startItems - 1, active, 400, 700));
  const fmt = new Intl.NumberFormat(lang, { maximumFractionDigits: 1 });
  return (
    <div className="panel-stock">
      <div className="stock-head">
        <span>{demo.stock.loadCol}</span>
        <span>{demo.stock.itemsCol}</span>
        <span>{demo.stock.weightCol}</span>
      </div>
      {rows.map((r, i) => (
        <div className={i === 0 ? "stock-line hot" : i === 2 ? "stock-line done" : "stock-line"} key={r.invoice}>
          <span>
            <strong>{r.invoice}</strong> {r.material}
          </span>
          <span>{i === 0 ? items : r.items}</span>
          <span>{i === 0 ? `${fmt.format(kg)}\u00a0kg` : i === 2 ? closed : r.value}</span>
        </div>
      ))}
      <div className="stock-history">
        <span>{demo.stock.historyTitle}</span>
        <strong>{demo.stock.historyRow}</strong>
      </div>
    </div>
  );
}

type PanelProps = { demo: Demo; rows: Rows; closed: string; lang: string };

/** One state of the app window. Remounts per step so its entrance motion replays. */
export function DemoPanel({ step, ...p }: PanelProps & { step: Step }) {
  return (
    <div className="demo-panel" key={step}>
      {step === "intake" && <IntakePanel demo={p.demo} rows={p.rows} />}
      {step === "labels" && <LabelsPanel demo={p.demo} active />}
      {step === "checkout" && <CheckoutPanel demo={p.demo} />}
      {step === "stock" && <StockPanel demo={p.demo} rows={p.rows} closed={p.closed} lang={p.lang} active />}
    </div>
  );
}

export function DemoBar({ demo, children }: { demo: Demo; children?: React.ReactNode }) {
  return (
    <div className="demo-bar">
      <span className="demo-dots" aria-hidden>
        <i />
        <i />
        <i />
      </span>
      <span className="demo-title">{demo.windowTitle}</span>
      <span className="demo-sample">{demo.sample}</span>
      {children}
    </div>
  );
}

export function HeroDemo(props: PanelProps) {
  const { demo } = props;
  const reduced = useReducedMotion();
  const [picked, setPicked] = useState<Step | null>(null);
  const [autoStep, setAutoStep] = useState<Step>("intake");
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const running = !reduced && !paused && !hovered;
  // Without motion the window rests on the payoff: the stock after a scan.
  const step: Step = picked ?? (reduced ? "stock" : autoStep);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      setPicked(null);
      setAutoStep(STEPS[(STEPS.indexOf(step) + 1) % STEPS.length]);
    }, STEP_MS);
    return () => clearTimeout(t);
  }, [step, running]);

  return (
    <div
      className="demo"
      data-running={running}
      style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="demo-window">
        <DemoBar demo={demo}>
          {!reduced && (
            <button
              type="button"
              className="demo-pause"
              aria-label={paused ? demo.play : demo.pause}
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="5" y="4" width="5" height="16" rx="1" />
                  <rect x="14" y="4" width="5" height="16" rx="1" />
                </svg>
              )}
            </button>
          )}
        </DemoBar>
        <div className="demo-tabs" role="tablist" aria-label={demo.tabsLabel}>
          {STEPS.map((s, i) => (
            <button
              key={s}
              type="button"
              role="tab"
              id={`demo-tab-${s}`}
              aria-selected={step === s}
              aria-controls="demo-panel"
              className="demo-tab"
              onClick={() => setPicked(s)}
            >
              <span className="demo-tab-num">{i + 1}</span>
              {demo.tabs[s]}
              {step === s && <span className="demo-progress" key={`${s}-${running}`} />}
            </button>
          ))}
        </div>
        <div className="demo-stage" id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${step}`}>
          <DemoPanel step={step} {...props} />
        </div>
      </div>
      <ThermalLabel label={demo.label} className="demo-float" />
      <p className="demo-caption">{demo.captions[step]}</p>
    </div>
  );
}
