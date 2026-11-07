---
name: Pátio
description: Per-item QR inventory control for scrap yards, shown working on screen.
colors:
  bg: "#ffffff"
  ink: "#16181d"
  ink-2: "#3a3f48"
  muted: "#5b616b"
  line: "#e3e6eb"
  line-strong: "#d3d8df"
  panel: "#eef0f3"
  panel-2: "#f6f7f9"
  orange: "#ff6a13"
  orange-display: "#e85a0c"
  orange-hover: "#f05a05"
  orange-text: "#b8430a"
  orange-tint: "#fff1e8"
  orange-line: "#f6c7a8"
  dark: "#16181d"
  dark-2: "#23272e"
  dark-line: "#3a3f48"
  dark-text: "#f2f3f5"
  dark-muted: "#aeb4be"
  success-bg: "#e9f7ef"
  success-ink: "#1d6b3f"
  error-ink: "#b42318"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(40px, 4vw, 58px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 50px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    letterSpacing: "-0.03em"
  body-lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
  data:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "15px"
    fontWeight: 700
    fontFeature: "tnum"
  data-small:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
rounded:
  label: "8px"
  row: "10px"
  control: "12px"
  control-lg: "14px"
  stage: "18px"
  window: "26px"
  pill: "999px"
spacing:
  gutter: "40px"
  gutter-mobile: "16px"
  container: "1280px"
  grid-gap: "72px"
  hero-gap: "64px"
  section-top: "96px"
  section-bottom: "80px"
  band: "112px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control-lg}"
    height: "58px"
    padding: "0 26px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
    textColor: "{colors.ink}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 18px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.control-lg}"
    height: "58px"
    padding: "0 26px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  app-window:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.window}"
    padding: "14px"
  app-stage:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.stage}"
    padding: "24px"
  form-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.window}"
    padding: "32px"
  thermal-label:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "12px"
  locale-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    padding: "7px 9px"
---

# Design System: Pátio

## Overview

**Creative North Star: "Produto em Cena"**

The product is the hero and it is shown working. A light app window sits on a white page and runs the yard's own loop: an NF load arrives, labels print, an item is scanned out, and the stock drops. Every other surface supports that window. The page is white with graphite ink. One scrap orange carries both action and "live": the button you press, the step that is running, the printer light, the scan beam.

Density is calm on the page and dense inside the window. Display type is heavy, tight Manrope. Small mono type appears inside the window, where the data lives. Depth is soft and lifted: one large diffuse shadow under the app window, and a smaller one under each printed label. Elsewhere surfaces are flat and separated by tone (white, cool panel gray) instead of borders. A single graphite band breaks the white for hardware.

The thermal label (QR, item n/120, NF, material, kg) is the recurring object. It overlaps the hero window, feeds from the printer in the demo, and rides a belt in the graphite band. Motion uses an exponential ease-out from content that is already readable. Every animated surface has a complete static rest state.

**Key Characteristics:**
- White ground, graphite ink, one scrap orange for action and live state.
- Heavy, tightly tracked Manrope display; JetBrains Mono only for yard data and machine readouts.
- Large soft radii on app surfaces (26px window, 18px stage, 12px controls).
- Depth by tonal panels plus one soft lifted shadow, never hard offsets.
- The thermal label is the signature object, reused across hero, demo and hardware band.
- Motion that starts from visible content and rests in a full static state under reduced motion.

## Colors

A neutral cool-gray ladder from white to graphite, with one saturated scrap orange split into fill and ink roles.

### Primary
- **Scrap Orange** (`orange`): the only action and live color. Used as a fill: primary buttons, active step numerals, the progress bar, the scan beam, the printer light, the pulse dot, the focus ring, text selection and the caret. Graphite text always sits on top, never white.
- **Scrap Orange, Pressed** (`orange-hover`): hover fill for the primary button.
- **Scrap Orange, Display** (`orange-display`): orange as text on white, for large display type only (the hero accent word, 40px and up). The base orange is 2.9:1 on white, and this deeper step clears the 3:1 large-text floor.
- **Scrap Orange, Ink** (`orange-text`): small orange strokes on light surfaces, such as the contact clock icon and the scan-result check.
- **Orange Tint** (`orange-tint`) and **Orange Rule** (`orange-line`): the highlighted row or result inside the app (the "hot" stock line, the scan result). Tint fill with a 1.5px orange-rule inset or border.

### Neutral
- **Paper White** (`bg`): the page ground and the inner app stage.
- **Graphite** (`ink`): headings, body emphasis, the dark button, the active locale chip, the label printer housing.
- **Slate** (`ink-2`): body and lead paragraphs, nav links.
- **Muted Slate** (`muted`): captions, table headers, inactive step titles, the sample-data tag.
- **Hairline** (`line`) and **Hairline, Strong** (`line-strong`): the nav rule, table row dividers, and input and toggle strokes.
- **Panel Gray** (`panel`): the app window frame and the form card.
- **Panel Gray, Light** (`panel-2`): fields and history strips inside the app stage.
- **Band Graphite** (`dark`, same value as `ink`), **Band Raised** (`dark-2`), **Band Rule** (`dark-line`), **Band Text** (`dark-text`), **Band Muted** (`dark-muted`): the hardware band only.

### Status
- **Success** (`success-bg` with `success-ink`): the sent-form confirmation.
- **Error** (`error-ink`): form error text.

### Named Rules
**The Fill-Not-Ink Rule.** Scrap orange is a fill with graphite on top. When orange must be text on white it uses the display step and only at 40px or larger; small orange marks use the ink step.

**The One Signal Rule.** Orange means "act here" or "this is running now." It is never decoration, never a section tint, never a second accent.

## Typography

**Display Font:** Manrope (with system-ui, sans-serif)
**Body Font:** Manrope (with system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (with monospace), loaded at 500, 600 and 700

**Character:** One heavy, tightly tracked grotesque does every human sentence. A monospace does every machine sentence: the readout on the label, the NF, the kilograms.

### Hierarchy
- **Display** (800, clamp(40px, 4vw, 58px), 1.04, -0.04em, balanced wrap): the hero headline only, with one accent word in display orange.
- **Headline** (800, clamp(32px, 3.6vw, 50px), 1.05, -0.035em): section, hardware and contact headings.
- **Title** (800, 30px, -0.03em): walkthrough step titles. Muted while inactive, graphite when active.
- **Body Lead** (400, 19px, 1.55, max 30 to 36em): the paragraph under each heading. It drops to 17px on the hero at 720px and below.
- **Body** (400, 16px): the base size, demo captions and form inputs.
- **Label** (700, 14 to 15px, sentence case, no tracking): nav links, field labels, table headers, notes.
- **Data** (JetBrains Mono 700, 13 to 17px, tabular numbers): NF numbers, weights, counts, plates and dates inside the app.
- **Data, Small** (JetBrains Mono 600, 12px): the printer model, the "sample data" tag, step numerals and locale codes.
- The thermal label uses its own printed scale (mono, 11px fields, 13px item line, 18px weight). It is a decorative object and sets no UI floor. The live UI floor is 12px mono and 14px sans.

### Named Rules
**The Machine Voice Rule.** Mono marks what a machine prints, reads or counts: yard data, the printer readout, step numerals, locale codes, the sample-data tag. Headings, prose, buttons and field labels are never mono.

**The No-Kicker Rule.** No label sits above a heading. No text is uppercase or letter-spaced for decoration. A heading starts its own section.

## Layout

The page uses a 1280px container with a 40px gutter, and the gutter drops to 16px at 720px and below. Split sections use asymmetric two-column grids: the hero is 5.4fr / 6.6fr with a 64px gap. The walkthrough and contact sections are 5fr / 6fr and the hardware band is 4fr / 7fr, all with 72px gaps. Section rhythm is 96px top and 80px bottom (88px top at 900px and below), with 112px for the graphite band (80px on mobile) and 128px for contact (88px on mobile). Headings sit in a 760px column with a 40px gap before the content.

The nav is sticky, 76px tall (64px on mobile), and sits on white over a 1px hairline. At 720px and below it drops its anchor links and keeps the logo, the locale toggle and the demo button. The footer carries the anchors.

The walkthrough is a sticky scroll. Text steps of 56vh scroll on the left, and the app window stays pinned on the right. At 900px and below the pinned window is removed, and each step shows its own inline window instead.

Breakpoints: 1080px (hero and hardware stack; the floating label moves under the window), 900px (walkthrough and contact stack), 720px (mobile gutter, compact nav, compact demo).

## Elevation & Depth

Hybrid, mostly tonal. Page sections are flat. The app window and form card are panel-gray plates on white, and inner stages return to white. Shadows are soft, long and graphite-tinted, and only lifted objects get them: the app window and the printed thermal label. Selected demo tabs get a faint drop. Orange glows appear only as state feedback (primary button hover, input focus ring, scan beam).

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 30px 70px -28px rgba(22, 24, 29, 0.35), 0 3px 8px -2px rgba(22, 24, 29, 0.08)`): the app window, once per view.
- **Label** (`box-shadow: 0 10px 22px -10px rgba(22, 24, 29, 0.35)`): each thermal label.
- **Tab** (`box-shadow: 0 4px 10px -6px rgba(22, 24, 29, 0.3)`): the selected demo tab.
- **Orange Glow** (`box-shadow: 0 14px 28px -14px rgba(255, 106, 19, 0.8)`): primary button hover only.

### Named Rules
**The Lifted Object Rule.** Only physical-feeling objects cast shadows: the app window and the printed label. Shadows are soft and offset downward, never hard-edged.

## Shapes

Generous rounded rectangles that step down with scale. The window and form card are 26px (20px on mobile), the inner stage 18px, large buttons and callouts 14px, controls, fields and tabs 12px, table rows and the toggle 10px, and the thermal label 8px, like real paper stock. Step numerals, status dots and window dots are full circles, and the sample tag is a pill. Borders are rare: 1.5px strokes on inputs, the toggle and the orange result, a 2px graphite stroke on the scan target, and a 1.5px dashed graphite rule above the label's weight line.

## Components

### Buttons
Heavy, compact and tactile.
- **Shape:** gently rounded (12px; 14px at large size).
- **Primary:** scrap-orange fill with graphite 800-weight text and an inline up-right arrow for outbound links. It ships at large size, 58px high (54px on mobile), or 56px as the form submit.
- **Hover / Focus:** lifts 2px with the ease-out curve. The primary button deepens to the pressed orange and gains the orange glow. Press settles to scale 0.98. Focus is a 3px orange outline at a 3px offset.
- **Dark:** graphite fill with white text, used for the nav demo button. Hover is pure black.
- **Outline:** transparent with a 2px graphite inset ring. Hover fills graphite with white text.
- **Disabled:** 60% opacity with a progress cursor.

### Inputs / Fields
- **Style:** white field, 1.5px strong-hairline stroke, 12px radius, 14px by 16px padding, 16px Manrope 500. Labels sit above in 14px 700 graphite; "optional" is in 500 muted.
- **Hover:** the stroke darkens.
- **Focus:** a graphite stroke plus a 3px orange ring at 35% opacity.
- **Error / Success:** error text in error red at 600; success is a green-tint strip with a check.

### Navigation
- Sticky white bar over a 1px hairline. Links are 15px 700 slate and gain a graphite colour with an orange underline on hover. The locale toggle is a segmented chip: a 1.5px stroke holds two 12px mono buttons, and the active one is graphite with white text. The bar ends with a dark demo button.

### App Window (signature)
- A panel-gray frame (26px radius, 14px padding, Lift shadow) with a title bar (three gray dots, product name, a white "sample data" pill, and a pause button), four step tabs and a white 18px stage. The selected tab turns white with the Tab shadow, and its numeral turns orange. A 3px orange bar under the running tab fills over 4.8s. Hovering or pausing stops the cycle, and a stopped bar shows full at 35% opacity. The window always carries the sample-data tag.

### Thermal Label (signature)
- A white 8px card with a 1px strong-hairline border and the Label shadow. A 64px decorative QR sits beside mono fields: item n/120, NF, material, intake date. A dashed graphite rule sits above the weight. It is the same object everywhere: overlapping the hero window at -7deg, feeding from the printer, and riding the belt in the graphite band.

### Walkthrough Step
- A 44px circular mono numeral with a 2px hairline ring, a 30px title and an 18px body. When active, the numeral fills orange with graphite text and scales to 1.08, and the title turns from muted to graphite.

## Do's and Don'ts

### Do:
- **Do** put graphite text on every scrap-orange fill.
- **Do** use display orange only for orange text at 40px or larger on white, and ink orange for small orange marks.
- **Do** set NF numbers, weights, counts, plates and dates in JetBrains Mono with tabular numbers.
- **Do** label every demo surface with sample data as sample data.
- **Do** start animations from content that is already readable, using `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** give every animated surface a complete static state under reduced motion: the hero rests on the stock step, one label sits still in the feed and on the belt, and the scan beam is hidden.
- **Do** keep the incumbent logo asset in `public/icons/` as is.

### Don't:
- **Don't** put white text on scrap orange, or set the base orange as text on white.
- **Don't** use orange as decoration, a section background or a second accent.
- **Don't** set headings, prose, buttons or field labels in mono.
- **Don't** add eyebrow or kicker labels above headings, or uppercase, letter-spaced labels.
- **Don't** use hard offset shadows or heavy borders to separate surfaces; use panel tone.
- **Don't** add a second graphite band; one per page breaks the white.
- **Don't** extend the logo's blue into the palette.
