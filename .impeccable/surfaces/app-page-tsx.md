---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/globals.css"]
---

# Landing page (app/page.tsx)

Scope: the whole public landing page, PT-BR first with an EN locale. Visitor mode: Persuade.
Audience: owners of small and medium scrap yards who run on paper or spreadsheets today. Action: open the live demo (primary) or send the contact form.
Proof: the live demo with sample data. Pilot screenshots and a pilot testimonial will come from the owner; none are invented here. Demonstration data in the animations is sample data and is labeled as such.
Constraints: the copy must stay readable without motion (the user ruled out animation that hides information). Reduced motion gets a static, complete state.

## Direction contract

THESIS: The product proves itself by working on screen. A live app window runs the yard's real loop: an NF load arrives, 120 labels print, an item is scanned out, and the stock drops. This replaces the category's static screenshot plus three equal feature cards.

OWN-WORLD: White ground, graphite #16181D ink, scrap-orange #FF6A13 as the single action and "live" signal (fills, with graphite text on top; orange set as large text on white uses #E85A0C, because #FF6A13 is only 2.9:1 there), cool panel gray #EEF0F3. Manrope at heavy weights sets the display, and JetBrains Mono is used only for data (NF numbers, kg, plates). App panels have generous radii and one soft offset shadow. The thermal label (QR, item n/120, NF, material, kg) is the recurring hero object. One graphite band breaks the white for the hardware section.

STORY: Within seconds the visitor sees that each item gets a QR label, each checkout is a scan, and the stock is always right. They believe it because they watched it happen with real-looking yard data, and they open the demo, which needs no signup.

FIRST VIEWPORT: Nav: logo, links, PT/EN, and a graphite Ver demo button. Left 45%: a three-line headline at up to 58px, a subtitle, an orange Ver demo button, a Falar com a gente button, and a sample-data note. Right 60%: the app window with step tabs (Entrada · Etiquetas · Saída · Estoque) that cycle automatically and can be clicked. A printed label overlaps the window's lower-left edge (on narrow screens it sits under the window).

FORM: Produto em Cena, the first of three safer-register grounded candidates, chosen by the user after two re-rolls. seed:022ac717fa7f4974

Signature interaction: the hero app window loop (label printing, scan beam, stock tick-down), with a sticky scroll walkthrough below that drives the same app frame through the three functions. Motion grammar: exponential ease-out, starting from content that is already visible.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open
- Pilot screenshots and testimonial: the owner will supply them, and a section is added when they arrive.
