const pptxgen = require("pptxgenjs");

const THEME = { name: "TSAT Signal", headFontFace: "Cambria", bodyFontFace: "Calibri" };
const INK = "15202B", SOFT = "4A5765", FAINT = "8795A3";
const TEAL = "0C7C8C", TEAL_D = "0A5B67", TEAL_DARK = "0B3A42";
const NAVY = "223A5E", AMBER = "D6872B", GREEN = "1C8A5B";
const PAPER = "FFFFFF", MIST = "EEF3F8", LINE = "DCE4EC", TEALSOFT = "E1F0F1";
const AMBERSOFT = "FBEEDA", GREENSOFT = "E2F3EA", NAVYSOFT = "E6ECF4";

const pres = new pptxgen();
pres.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pres.layout = "W";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = "Proposal for TSAT Communications LTD";
pres.company = "TSAT AI Assistant Proposal";

pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: PAPER },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.42, w: 12.1, h: 0.85,
      color: INK, fontSize: 30, bold: true, align: "left", fontFace: "Cambria", valign: "middle" }, text: "" } },
    { text: { text: "TSAT AI Assistant  ·  Proposal  ·  Confidential", options: {
      x: 0.6, y: 7.04, w: 9, h: 0.3, fontSize: 9, color: FAINT, align: "left", fontFace: "Calibri" } } },
  ],
  slideNumber: { x: 12.55, y: 7.04, color: FAINT, fontSize: 9, fontFace: "Calibri" },
});
pres.defineSlideMaster({
  title: "DARK",
  background: { color: TEAL_DARK },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.75, y: 2.5, w: 11.8, h: 2.0,
      color: "FFFFFF", fontSize: 40, bold: true, align: "left", fontFace: "Cambria", valign: "top" }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 0.8, y: 4.65, w: 11.6, h: 1.2,
      color: "BFE0E4", fontSize: 16, align: "left", fontFace: "Calibri", valign: "top" }, text: "" } },
  ],
});

// ---------- helpers ----------
function badge(slide, x, y, d, fill, letter, lcolor) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w: d, h: d, rectRadius: d * 0.28, fill: { color: fill }, line: { type: "none" } });
  slide.addText(letter, { x, y, w: d, h: d, align: "center", valign: "middle", fontSize: d * 26, bold: true, color: lcolor || "FFFFFF", fontFace: "Cambria", margin: 0, isTextBox: true });
}
function card(slide, x, y, w, h, fill) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: fill || PAPER },
    line: { color: LINE, width: 1 }, shadow: { type: "outer", color: "9AA6B2", blur: 8, offset: 3, angle: 90, opacity: 0.28 } });
}
function tag(slide, x, y, text, fg, bg) {
  const w = 0.22 + text.length * 0.082;
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h: 0.32, rectRadius: 0.16, fill: { color: bg }, line: { type: "none" } });
  slide.addText(text, { x, y, w, h: 0.32, align: "center", valign: "middle", fontSize: 10.5, bold: true, color: fg, fontFace: "Calibri", margin: 0, isTextBox: true });
  return w;
}
function th(t, align) { return { text: t, options: { bold: true, color: "FFFFFF", fill: { color: NAVY }, fontSize: 11.5, fontFace: "Calibri", align: align || "left", valign: "middle" } }; }
function td(t, align, i) { return { text: t, options: { color: INK, fill: { color: i % 2 ? MIST : "FFFFFF" }, fontSize: 11, fontFace: "Calibri", align: align || "left", valign: "middle" } }; }
function tsub(t, align) { return { text: t, options: { bold: true, color: "FFFFFF", fill: { color: TEAL }, fontSize: 11.5, fontFace: "Calibri", align: align || "left", valign: "middle" } }; }

// =========================================================
// 1 — COVER
// =========================================================
let s = pres.addSlide({ masterName: "DARK" });
s.addShape(pres.ShapeType.roundRect, { x: 0.75, y: 0.7, w: 0.72, h: 0.72, rectRadius: 0.2, fill: { color: TEAL }, line: { type: "none" } });
s.addShape(pres.ShapeType.chevron, { x: 0.93, y: 0.9, w: 0.36, h: 0.32, fill: { color: "FFFFFF" }, line: { type: "none" }, rotate: 270 });
s.addText("TSAT COMMUNICATIONS LTD", { x: 1.62, y: 0.78, w: 9, h: 0.3, fontSize: 12, bold: true, color: "7FC3CE", charSpacing: 2, fontFace: "Calibri", isTextBox: true });
s.addText("Nigeria  ·  Abuja & Kano launch", { x: 1.62, y: 1.08, w: 9, h: 0.3, fontSize: 11, color: "9FC9CF", fontFace: "Calibri", isTextBox: true });
s.addText("An AI Assistant that\nsells while you sleep", { placeholder: "title" });
s.addText("A sales, social media and reporting assistant for the Sky Phone — answering every customer in seconds, managing TSAT's social channels safely, and briefing executives each morning.", { placeholder: "body" });
const chips = ["Sells 24/7 on WhatsApp", "Manages social media", "Briefs executives daily"];
let chx = 0.8;
chips.forEach((c) => {
  const w = 0.5 + c.length * 0.092;
  s.addShape(pres.ShapeType.roundRect, { x: chx, y: 6.15, w, h: 0.5, rectRadius: 0.25, fill: { color: "0F4A54" }, line: { color: "15707F", width: 1 } });
  s.addText(c, { x: chx, y: 6.15, w, h: 0.5, align: "center", valign: "middle", fontSize: 12.5, bold: true, color: "DFF1F3", fontFace: "Calibri", margin: 0, isTextBox: true });
  chx += w + 0.25;
});
s.addText("Prepared for TSAT executives  ·  November 2026", { x: 5.2, y: 6.85, w: 7.3, h: 0.35, align: "right", fontSize: 10.5, color: "6FA2A9", fontFace: "Calibri", isTextBox: true });

// =========================================================
// 2 — OPPORTUNITY
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("The opportunity: a connectivity gap only TSAT can fill", { placeholder: "title" });
s.addText("Across Abuja and Kano, premium phones can't reach a 5G signal — and no rival device bridges mobile and satellite the way the Sky Phone does.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const stats = [
  { v: "70.9%", l: "5G coverage gap in Lagos", c: TEAL },
  { v: "65.6%", l: "5G coverage gap in Abuja", c: TEAL },
  { v: "~5M", l: "smartphone users (Kano + Abuja)", c: NAVY },
  { v: "99%", l: "WhatsApp penetration in Kano", c: GREEN },
];
let sx = 0.6; const sw = 2.95;
stats.forEach((st) => {
  card(s, sx, 2.05, sw, 1.7);
  s.addText(st.v, { x: sx, y: 2.22, w: sw, h: 0.85, align: "center", valign: "middle", fontSize: 40, bold: true, color: st.c, fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(st.l, { x: sx + 0.15, y: 3.05, w: sw - 0.3, h: 0.6, align: "center", valign: "top", fontSize: 12, color: SOFT, fontFace: "Calibri", margin: 0, isTextBox: true });
  sx += sw + 0.17;
});
card(s, 0.6, 4.1, 12.13, 2.35, MIST);
s.addText("Why the Sky Phone wins", { x: 0.95, y: 4.35, w: 11, h: 0.4, fontSize: 18, bold: true, color: NAVY, fontFace: "Cambria", isTextBox: true });
const usps = [
  ["5G / 4G / 3G / 2G + Thuraya satellite", "Works across Africa, Europe, Asia & Australia — even with no mobile network."],
  ["Built for executives on the move", "A must-have for Abuja officials travelling to satellite-blind northern regions."],
  ["The only consistent option in the Sahel", "Kano's business community travels where ordinary phones go dark."],
];
let ux = 0.95; const uw = 3.75;
usps.forEach((u) => {
  s.addText(u[0], { x: ux, y: 4.85, w: uw, h: 0.6, fontSize: 13, bold: true, color: INK, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  s.addText(u[1], { x: ux, y: 5.45, w: uw, h: 0.85, fontSize: 11.5, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  ux += uw + 0.28;
});

// =========================================================
// 3 — CHALLENGE
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("The challenge: great product, but sales leak and leaders fly blind", { placeholder: "title" });
s.addText("A strong launch will drive thousands of enquiries. Without the right system, most never convert — and executives can't see what's working in time to act.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const chal = [
  ["01", "Enquiries go cold", "Customers message at all hours. A reply that comes hours later — or in the wrong language — is a lost sale."],
  ["02", "Social is a full-time job", "Posting consistently, at the right times, on every platform — and replying to DMs — is more than one team can keep up."],
  ["03", "Spend is guesswork", "Marketing money spreads across channels with no live read on which ones actually bring buyers."],
  ["04", "Leaders fly blind", "Executives wait on manual reports — by the time numbers arrive, the week is already gone."],
];
chal.forEach((c, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const cw = 5.97, ch = 2.05;
  const x = 0.6 + col * (cw + 0.19), y = 2.1 + row * (ch + 0.2);
  card(s, x, y, cw, ch);
  badge(s, x + 0.3, y + 0.32, 0.7, AMBERSOFT, c[0], AMBER);
  s.addText(c[1], { x: x + 1.2, y: y + 0.3, w: cw - 1.5, h: 0.5, fontSize: 16, bold: true, color: INK, fontFace: "Cambria", valign: "middle", margin: 0, isTextBox: true });
  s.addText(c[2], { x: x + 1.2, y: y + 0.85, w: cw - 1.5, h: 1.0, fontSize: 12.5, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
});

// =========================================================
// 4 — SOLUTION
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("The solution: one AI assistant, three jobs", { placeholder: "title" });
s.addText("A single system — owned by TSAT — that sells, runs social media, and reports. All three parts share one source of truth about products, leads, and results.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const agents = [
  ["S", TEAL, TEALSOFT, "Sales Assistant", "Chats with customers on WhatsApp in Hausa & English, answers product questions, qualifies buyers, and books demos — 24/7."],
  ["V", AMBER, AMBERSOFT, "Social & Visibility", "Plans, drafts and schedules posts on Facebook & Instagram at the best times, adopts safe trends, and replies to DMs — every post human-approved."],
  ["E", GREEN, GREENSOFT, "Executive App", "A phone dashboard that writes a plain-English briefing each morning and answers questions from live sales data."],
];
let ax = 0.6; const aw = 3.97;
agents.forEach((a) => {
  card(s, ax, 2.1, aw, 3.1);
  badge(s, ax + 0.35, 2.45, 0.8, a[2], a[0], a[1]);
  s.addText(a[3], { x: ax + 0.35, y: 3.4, w: aw - 0.7, h: 0.5, fontSize: 17, bold: true, color: INK, fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(a[4], { x: ax + 0.35, y: 3.95, w: aw - 0.7, h: 1.25, fontSize: 12, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  ax += aw + 0.21;
});
s.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 5.4, w: 12.13, h: 1.0, rectRadius: 0.1, fill: { color: NAVY }, line: { type: "none" } });
s.addText([
  { text: "Shared data layer   ", options: { fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Cambria" } },
  { text: "CRM · product catalog · campaign results · sales pipeline — one source of truth all three assistants read and write.", options: { fontSize: 12.5, color: "CFE0EC" } },
], { x: 0.95, y: 5.4, w: 11.4, h: 1.0, valign: "middle", align: "left", fontFace: "Calibri", margin: 0, isTextBox: true });

// =========================================================
// 5 — HOW IT WORKS (Musa)
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("How it works: one message becomes a sale", { placeholder: "title" });
s.addText("Follow Musa, a fleet owner in Kano, from a billboard to the CEO's morning report.", { x: 0.6, y: 1.32, w: 12.1, h: 0.4, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const steps = [
  ["1", "Customer reaches out", "Musa texts the WhatsApp number from a billboard."],
  ["2", "Instant answer", "The assistant explains satellite coverage in Hausa, in seconds."],
  ["3", "Books a demo", "It spots a 20-truck fleet, saves the lead, schedules a demo."],
  ["4", "Human closes", "A rep meets a warm, informed customer and seals the sale."],
  ["5", "Social keeps working", "Approved posts run on Facebook & Instagram, pulling in more Musas."],
  ["6", "Boss is briefed", "Next morning the CEO reads: 12 leads, 3 sales, Kano ahead."],
];
steps.forEach((st, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const stw = 3.97, sth = 1.95;
  const x = 0.6 + col * (stw + 0.21), y = 2.0 + row * (sth + 0.25);
  card(s, x, y, stw, sth);
  badge(s, x + 0.3, y + 0.3, 0.6, TEAL, st[0], "FFFFFF");
  s.addText(st[1], { x: x + 1.05, y: y + 0.32, w: stw - 1.3, h: 0.55, fontSize: 14.5, bold: true, color: INK, fontFace: "Cambria", valign: "middle", margin: 0, isTextBox: true });
  s.addText(st[2], { x: x + 0.3, y: y + 1.0, w: stw - 0.6, h: 0.85, fontSize: 12, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
});

// =========================================================
// 6 — HOW IT CONNECTS
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("How it connects to the website and your apps", { placeholder: "title" });
s.addText("Every channel talks to one secure TSAT Agent API — never to the AI directly. That keeps keys safe, answers consistent, and data private.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const surf = ["Website\nchat widget", "WhatsApp\nBusiness API", "Executive\napp", "Facebook &\nInstagram"];
let fx = 0.95; const fw = 2.7;
surf.forEach((t) => {
  card(s, fx, 2.1, fw, 0.95, MIST);
  s.addText(t, { x: fx, y: 2.1, w: fw, h: 0.95, align: "center", valign: "middle", fontSize: 12.5, bold: true, color: NAVY, fontFace: "Calibri", margin: 0, isTextBox: true });
  fx += fw + 0.18;
});
s.addText("▼     ▼     ▼     ▼", { x: 0.95, y: 3.12, w: 11.4, h: 0.3, align: "center", fontSize: 12, color: TEAL, fontFace: "Calibri", isTextBox: true });
s.addShape(pres.ShapeType.roundRect, { x: 0.95, y: 3.5, w: 11.43, h: 1.25, rectRadius: 0.1, fill: { color: TEAL }, line: { type: "none" } });
s.addText([
  { text: "TSAT Agent API\n", options: { fontSize: 17, bold: true, color: "FFFFFF", fontFace: "Cambria" } },
  { text: "Holds the AI key · runs the assistants · enforces login, NDPR consent & logging", options: { fontSize: 12.5, color: "DFF1F3" } },
], { x: 1.2, y: 3.5, w: 11, h: 1.25, valign: "middle", align: "left", fontFace: "Calibri", margin: 0, isTextBox: true });
s.addText("▼            ▼", { x: 2.6, y: 4.82, w: 8, h: 0.3, align: "center", fontSize: 12, color: NAVY, fontFace: "Calibri", isTextBox: true });
card(s, 2.0, 5.2, 4.4, 1.1, NAVYSOFT);
s.addText([{ text: "Claude AI\n", options: { fontSize: 14, bold: true, color: NAVY, fontFace: "Cambria" } }, { text: "the reasoning engine", options: { fontSize: 11.5, color: SOFT } }], { x: 2.0, y: 5.2, w: 4.4, h: 1.1, align: "center", valign: "middle", margin: 0, isTextBox: true });
card(s, 6.9, 5.2, 4.4, 1.1, NAVYSOFT);
s.addText([{ text: "Data layer\n", options: { fontSize: 14, bold: true, color: NAVY, fontFace: "Cambria" } }, { text: "CRM · catalog · live KPIs", options: { fontSize: 11.5, color: SOFT } }], { x: 6.9, y: 5.2, w: 4.4, h: 1.1, align: "center", valign: "middle", margin: 0, isTextBox: true });

// =========================================================
// 7 — SOCIAL MEDIA MANAGER (NEW)
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("Plus: a social media manager with a safety catch", { placeholder: "title" });
s.addText("Connects Facebook & Instagram, plans and drafts posts — but a human approves everything, and nothing risky ever gets through.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
// left: what it does
card(s, 0.6, 2.1, 6.0, 4.3);
s.addText("What it does", { x: 0.9, y: 2.35, w: 5.4, h: 0.45, fontSize: 17, bold: true, color: NAVY, fontFace: "Cambria", isTextBox: true });
const did = [
  "Connects Facebook & Instagram — analyses each handle",
  "Schedules posts at the best time for your audience",
  "Adopts only brand-safe trends (flagged words & images blocked)",
  "Auto-replies to DMs — directs people to call a human agent",
  "Feeds every DM enquiry into the CRM as a lead",
];
s.addText(did.map((t) => ({ text: t, options: { bullet: { code: "2713", indent: 18 }, color: INK, breakLine: true, paraSpaceAfter: 14 } })), { x: 0.95, y: 2.95, w: 5.35, h: 3.3, fontSize: 13.5, color: INK, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
// right top: the 5-hour rule (teal)
s.addShape(pres.ShapeType.roundRect, { x: 6.76, y: 2.1, w: 5.97, h: 2.05, rectRadius: 0.1, fill: { color: TEAL }, line: { type: "none" }, shadow: { type: "outer", color: "9AA6B2", blur: 8, offset: 3, angle: 90, opacity: 0.28 } });
s.addText("🔒  The 5-hour approval rule", { x: 7.06, y: 2.32, w: 5.4, h: 0.45, fontSize: 16, bold: true, color: "FFFFFF", fontFace: "Cambria", isTextBox: true });
s.addText("Every post goes to your Comms Manager first. It must be approved at least 5 hours before it is due — if it is not, it is automatically held and never posted. Nothing goes out without a human's yes.", { x: 7.06, y: 2.85, w: 5.4, h: 1.2, fontSize: 12.5, color: "EAF6F7", fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
// right bottom: brand-safe (amber tint)
card(s, 6.76, 4.35, 5.97, 2.05, AMBERSOFT);
s.addText("Brand-safe by design", { x: 7.06, y: 4.57, w: 5.4, h: 0.45, fontSize: 16, bold: true, color: "9A5E12", fontFace: "Cambria", isTextBox: true });
s.addText("Trends with flagged words or unsafe images are filtered out automatically — before anyone even sees them. No political, religious, or controversial trends, ever.", { x: 7.06, y: 5.1, w: 5.4, h: 1.2, fontSize: 12.5, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
s.addText("Optional module — it adds ~$4,000 to the pilot and can be deferred to a Phase 2 review update whenever TSAT is ready.", { x: 0.6, y: 6.55, w: 12.13, h: 0.35, align: "center", fontSize: 11.5, italic: true, color: FAINT, fontFace: "Calibri", isTextBox: true });

// =========================================================
// 8 — WHAT TSAT GAINS (value)
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("What TSAT gains", { placeholder: "title" });
s.addText("This is not software for its own sake — it is sales, visibility and control, delivered as one asset TSAT owns.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const gains = [
  ["Never miss a sale", "Every customer gets an instant, helpful reply — day or night, in Hausa or English."],
  ["Social, handled safely", "Consistent, on-brand posting across Facebook & Instagram — with a human approving every post."],
  ["Spend that proves itself", "Budget follows the channels that actually bring buyers — not guesswork."],
  ["Leaders always informed", "A plain-English briefing every morning, straight from live data. No waiting on reports."],
  ["An asset you own", "This is TSAT's own system and data — not a rented tool you can't control."],
  ["Built to scale", "Prove it in the pilot, then add LinkedIn, X and more cities with confidence."],
];
gains.forEach((g, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const gw = 3.97, gh = 1.95;
  const x = 0.6 + col * (gw + 0.21), y = 2.15 + row * (gh + 0.25);
  card(s, x, y, gw, gh);
  badge(s, x + 0.3, y + 0.32, 0.55, GREENSOFT, "✓", GREEN);
  s.addText(g[0], { x: x + 1.0, y: y + 0.32, w: gw - 1.25, h: 0.55, fontSize: 15, bold: true, color: INK, fontFace: "Cambria", valign: "middle", margin: 0, isTextBox: true });
  s.addText(g[1], { x: x + 0.3, y: y + 1.0, w: gw - 0.6, h: 0.85, fontSize: 11.5, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
});

// =========================================================
// 9 — KPIs (the return)
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("The return we'll hold ourselves to", { placeholder: "title" });
s.addText("Clear targets agreed up front, tracked live in the Executive App — so TSAT sees the return, not just the spend.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const kpis = [
  ["< 60 sec", "Sales Assistant\nfirst-reply time", TEAL],
  ["70%+", "leads AI-qualified\nbefore handoff", TEAL],
  ["500 / 300", "leads target\nAbuja / Kano", NAVY],
  ["30%", "lead-to-sale\nconversion", GREEN],
  ["0", "unapproved posts\never published", GREEN],
  ["80%+", "execs using the\napp each week", AMBER],
];
kpis.forEach((k, i) => {
  const col = i % 3, row = Math.floor(i / 3);
  const kw = 3.97, kh = 1.95;
  const x = 0.6 + col * (kw + 0.21), y = 2.15 + row * (kh + 0.25);
  card(s, x, y, kw, kh);
  s.addText(k[0], { x: x + 0.25, y: y + 0.3, w: kw - 0.5, h: 0.8, align: "left", fontSize: 34, bold: true, color: k[2], fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(k[1], { x: x + 0.27, y: y + 1.12, w: kw - 0.5, h: 0.7, align: "left", fontSize: 13, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
});

// =========================================================
// 10 — SCOPE
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("What the pilot includes", { placeholder: "title" });
s.addText("A focused build: WhatsApp sales, a Meta (Facebook & Instagram) social manager, and the executive app — live in Abuja and Kano. LinkedIn, X and wider scale come next.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 14.5, color: SOFT, fontFace: "Calibri", isTextBox: true });
card(s, 0.6, 2.1, 5.97, 4.3);
s.addText([{ text: "✓  ", options: { color: GREEN, bold: true } }, { text: "Included in the pilot", options: { color: GREEN, bold: true } }], { x: 0.9, y: 2.35, w: 5.4, h: 0.45, fontSize: 17, fontFace: "Cambria", margin: 0, isTextBox: true });
const inc = ["WhatsApp Sales Assistant (Hausa & English)", "Social manager — Facebook & Instagram", "Scheduling, safe-trend filter & 5-hour approval gate", "DM auto-replies that route to a human agent", "Executive App — daily briefings, KPIs, Q&A", "CRM + shared data layer · NDPR review", "Live pilot across Abuja & Kano"];
s.addText(inc.map((t) => ({ text: t, options: { bullet: { code: "2713", indent: 18 }, color: INK, breakLine: true, paraSpaceAfter: 9 } })), { x: 0.95, y: 2.95, w: 5.35, h: 3.3, fontSize: 13, color: INK, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
card(s, 6.76, 2.1, 5.97, 4.3, MIST);
s.addText([{ text: "→  ", options: { color: NAVY, bold: true } }, { text: "Next phase (separate budget)", options: { color: NAVY, bold: true } }], { x: 7.06, y: 2.35, w: 5.4, h: 0.45, fontSize: 17, fontFace: "Cambria", margin: 0, isTextBox: true });
const def = ["LinkedIn & X social management", "Native iOS / Android apps", "Full-scale paid advertising spend", "Expansion beyond the two pilot cities", "Advanced analytics / BI build-out", "Year-2+ maintenance & retraining"];
s.addText(def.map((t) => ({ text: t, options: { bullet: { code: "2192", indent: 18 }, color: SOFT, breakLine: true, paraSpaceAfter: 11 } })), { x: 7.11, y: 2.95, w: 5.3, h: 3.3, fontSize: 13, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });

// =========================================================
// 11 — TIMELINE
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("Timeline: from kickoff to live pilot in ~16 weeks", { placeholder: "title" });
s.addText("Seven phases. Each ends with something you can see and sign off before the next begins.", { x: 0.6, y: 1.32, w: 12.1, h: 0.4, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const phases = [
  ["Wk 1–2", "Discovery", "Lock scope, budget, CRM choice"],
  ["Wk 2–4", "Data foundation", "Stand up CRM + shared data layer"],
  ["Wk 4–7", "Sales Assistant", "WhatsApp agent live in pilot group"],
  ["Wk 6–10", "Social manager", "FB/IG scheduling + approval gate live"],
  ["Wk 8–12", "Executive App", "Execs using daily briefings"],
  ["Wk 12–14", "QA & security", "NDPR sign-off, all agents tested"],
  ["Wk 14–16", "Pilot launch", "Live in Abuja & Kano, KPIs tracked"],
];
s.addShape(pres.ShapeType.line, { x: 1.0, y: 2.75, w: 11.3, h: 0, line: { color: LINE, width: 2 } });
let px = 0.72; const pw = 1.68;
phases.forEach((p, i) => {
  const cxx = px + pw / 2;
  s.addShape(pres.ShapeType.ellipse, { x: cxx - 0.14, y: 2.61, w: 0.28, h: 0.28, fill: { color: TEAL }, line: { color: "FFFFFF", width: 2 } });
  tag(s, cxx - 0.62, 2.1, p[0], TEAL_D, TEALSOFT);
  card(s, px, 3.25, pw, 2.5);
  s.addText((i + 1).toString(), { x: px + 0.12, y: 3.38, w: pw - 0.24, h: 0.45, align: "left", fontSize: 19, bold: true, color: "C7D2DC", fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(p[1], { x: px + 0.12, y: 3.82, w: pw - 0.24, h: 0.9, fontSize: 12, bold: true, color: INK, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  s.addText(p[2], { x: px + 0.12, y: 4.68, w: pw - 0.24, h: 1.0, fontSize: 10.5, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  px += pw + 0.1;
});

// =========================================================
// 12 — BUDGET AT A GLANCE
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("The investment at a glance", { placeholder: "title" });
s.addText("A complete, all-in figure for the pilot. The new Meta social media manager is the reason it rose above the earlier number — and it can be removed if TSAT prefers to start leaner.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 14.5, color: SOFT, fontFace: "Calibri", isTextBox: true });
const big = [
  ["$16,800", "₦26.04M", "One-time build", TEAL],
  ["$2,100", "₦3.26M", "Year-1 running", NAVY],
  ["$3,500", "₦5.43M", "Professional & admin", AMBER],
  ["$22,400", "₦34.72M", "Grand total (all-in)", GREEN],
];
let bx = 0.6; const bw = 2.95;
big.forEach((b, i) => {
  const emph = i === 3;
  card(s, bx, 2.1, bw, 2.2, emph ? GREENSOFT : PAPER);
  s.addText(b[0], { x: bx, y: 2.45, w: bw, h: 0.7, align: "center", fontSize: 31, bold: true, color: b[3], fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(b[1], { x: bx, y: 3.15, w: bw, h: 0.4, align: "center", fontSize: 14, color: SOFT, fontFace: "Calibri", margin: 0, isTextBox: true });
  s.addText(b[2], { x: bx + 0.1, y: 3.62, w: bw - 0.2, h: 0.5, align: "center", fontSize: 12, color: emph ? GREEN : FAINT, bold: emph, fontFace: "Calibri", margin: 0, isTextBox: true });
  bx += bw + 0.17;
});
card(s, 0.6, 4.6, 12.13, 1.85, MIST);
s.addText("Planning assumptions", { x: 0.95, y: 4.8, w: 11, h: 0.4, fontSize: 15, bold: true, color: NAVY, fontFace: "Cambria", isTextBox: true });
const asmp = [
  ["Blended build rate", "$25 / hour — experienced local developer. The single biggest lever on the total."],
  ["Exchange rate", "₦1,550 = $1 (November 2026). Figures move with the rate."],
  ["Social manager = the increase", "The Meta module adds $4,000 build + $500/yr. Remove it and defer to a Phase 2 review → $17,900 all-in."],
];
let mx = 0.95; const mw = 3.75;
asmp.forEach((a) => {
  s.addText(a[0], { x: mx, y: 5.3, w: mw, h: 0.35, fontSize: 12.5, bold: true, color: INK, fontFace: "Calibri", margin: 0, isTextBox: true });
  s.addText(a[1], { x: mx, y: 5.65, w: mw, h: 0.7, fontSize: 11, color: SOFT, fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  mx += mw + 0.28;
});

// =========================================================
// 13 — BUILD COST DETAIL
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("Where the build budget goes", { placeholder: "title" });
s.addText("One-time development — 680 hours across eight work areas, $16,800 total (includes the Meta social manager).", { x: 0.6, y: 1.32, w: 12.1, h: 0.4, fontSize: 15, color: SOFT, fontFace: "Calibri", isTextBox: true });
const buildRows = [
  ["Social manager (Meta: FB + IG)", 160, 4000],
  ["Agent API backend", 120, 3000],
  ["Executive App (PWA)", 110, 2750],
  ["WhatsApp Sales Assistant", 90, 2250],
  ["Visibility Assistant", 70, 1750],
  ["QA, NDPR & deployment", 50, 1250],
  ["CRM setup + data layer", 40, 1000],
  ["Requirements & coordination", 40, 800],
];
s.addChart(pres.ChartType.bar, [{ name: "Cost (USD)", labels: buildRows.map((r) => r[0]), values: buildRows.map((r) => r[2]) }], {
  x: 0.6, y: 1.95, w: 6.5, h: 4.55, barDir: "bar", chartColors: [TEAL],
  showTitle: false, showLegend: false, showValue: true, dataLabelPosition: "outEnd",
  dataLabelFormatCode: '"$"#,##0', dataLabelColor: INK, dataLabelFontFace: "+mn-lt", dataLabelFontSize: 9.5,
  catAxisLabelColor: INK, catAxisLabelFontFace: "+mn-lt", catAxisLabelFontSize: 10,
  valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  valAxisMaxVal: 4700, barGapWidthPct: 40,
});
const bt = [[th("Work area"), th("Hrs", "center"), th("USD", "right")]];
buildRows.forEach((r, i) => bt.push([td(r[0], "left", i), td(r[1].toString(), "center", i), td("$" + r[2].toLocaleString(), "right", i)]));
bt.push([tsub("Build subtotal"), tsub("680", "center"), tsub("$16,800", "right")]);
s.addTable(bt, { x: 7.35, y: 2.1, w: 5.38, colW: [3.28, 0.7, 1.4], rowH: 0.4, border: { type: "solid", color: LINE, pt: 1 }, valign: "middle" });

// =========================================================
// 14 — RUNNING + PROFESSIONAL + TOTAL
// =========================================================
s = pres.addSlide({ masterName: "CONTENT" });
s.addText("Running costs, professional fees & the total", { placeholder: "title" });
s.addText("After the one-time build, modest recurring services keep it live; professional and administrative fees cover delivery, training and compliance.", { x: 0.6, y: 1.32, w: 12.1, h: 0.5, fontSize: 14.5, color: SOFT, fontFace: "Calibri", isTextBox: true });
const runRows = [
  ["Claude AI usage (pilot scale)", 600, 930000],
  ["Social: moderation + Meta API", 500, 775000],
  ["Hosting & infrastructure", 300, 465000],
  ["WhatsApp Business API / BSP", 300, 465000],
  ["CRM subscription (year 1)", 300, 465000],
  ["Domain, SSL & miscellaneous", 100, 155000],
];
const rt = [[th("Year-1 running"), th("USD", "right"), th("Naira (₦)", "right")]];
runRows.forEach((r, i) => rt.push([td(r[0], "left", i), td("$" + r[1].toLocaleString(), "right", i), td("₦" + r[2].toLocaleString(), "right", i)]));
rt.push([tsub("Running subtotal"), tsub("$2,100", "right"), tsub("₦3,255,000", "right")]);
s.addTable(rt, { x: 0.6, y: 2.2, w: 5.9, colW: [3.3, 1.2, 1.4], rowH: 0.4, border: { type: "solid", color: LINE, pt: 1 }, valign: "middle" });
const proRows = [
  ["Project management & professional services", 1800, 2790000],
  ["Staff training & handover", 800, 1240000],
  ["Legal, NDPR compliance & documentation", 500, 775000],
  ["Administrative & contingency", 400, 620000],
];
const pt = [[th("Professional & admin fees"), th("USD", "right"), th("Naira (₦)", "right")]];
proRows.forEach((r, i) => pt.push([td(r[0], "left", i), td("$" + r[1].toLocaleString(), "right", i), td("₦" + r[2].toLocaleString(), "right", i)]));
pt.push([tsub("Professional subtotal"), tsub("$3,500", "right"), tsub("₦5,425,000", "right")]);
s.addTable(pt, { x: 6.75, y: 2.2, w: 5.98, colW: [3.38, 1.2, 1.4], rowH: 0.4, border: { type: "solid", color: LINE, pt: 1 }, valign: "middle" });
s.addShape(pres.ShapeType.roundRect, { x: 0.6, y: 5.55, w: 12.13, h: 1.0, rectRadius: 0.1, fill: { color: TEAL_DARK }, line: { type: "none" } });
s.addText([
  { text: "Grand total   ", options: { fontSize: 17, bold: true, color: "FFFFFF", fontFace: "Cambria" } },
  { text: "$22,400", options: { fontSize: 24, bold: true, color: "FFFFFF", fontFace: "Cambria" } },
  { text: "   ≈ ₦34,720,000", options: { fontSize: 14, color: "BFE0E4" } },
], { x: 0.95, y: 5.55, w: 8.0, h: 1.0, valign: "middle", align: "left", fontFace: "Calibri", margin: 0, isTextBox: true });
s.addShape(pres.ShapeType.roundRect, { x: 8.7, y: 5.78, w: 3.8, h: 0.55, rectRadius: 0.1, fill: { color: "0F4A54" }, line: { type: "none" } });
s.addText([{ text: "Without social manager → ", options: { color: "BFE0E4" } }, { text: "$17,900", options: { color: "FFFFFF", bold: true } }], { x: 8.7, y: 5.78, w: 3.8, h: 0.55, align: "center", valign: "middle", fontSize: 11.5, fontFace: "Calibri", margin: 0, isTextBox: true });

// =========================================================
// 15 — NEXT STEPS
// =========================================================
s = pres.addSlide({ masterName: "DARK" });
s.addText("Next steps", { x: 0.75, y: 0.8, w: 11.8, h: 1.0, fontSize: 40, bold: true, color: "FFFFFF", fontFace: "Cambria", isTextBox: true });
s.addText("Three decisions and we begin building within the week.", { x: 0.8, y: 1.8, w: 11.6, h: 0.5, fontSize: 16, color: "BFE0E4", fontFace: "Calibri", isTextBox: true });
const ns = [
  ["1", "Approve the budget", "Confirm the $22,400 all-in pilot (or $17,900 without the social manager)."],
  ["2", "Name a TSAT owner", "A point of contact plus the Comms Manager who approves social posts."],
  ["3", "Start platform access", "Begin Meta Business & App Review setup so social is ready at launch."],
];
let nx = 0.8; const nw = 3.84;
ns.forEach((n) => {
  s.addShape(pres.ShapeType.roundRect, { x: nx, y: 2.75, w: nw, h: 2.3, rectRadius: 0.1, fill: { color: "0F4A54" }, line: { color: "15707F", width: 1 } });
  badge(s, nx + 0.3, 3.05, 0.65, TEAL, n[0], "FFFFFF");
  s.addText(n[1], { x: nx + 0.3, y: 3.85, w: nw - 0.6, h: 0.5, fontSize: 16, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(n[2], { x: nx + 0.3, y: 4.35, w: nw - 0.6, h: 0.72, fontSize: 12.5, color: "BFE0E4", fontFace: "Calibri", valign: "top", margin: 0, isTextBox: true });
  nx += nw + 0.2;
});
s.addText([
  { text: "Ready to proceed.  ", options: { bold: true, color: "FFFFFF" } },
  { text: "TSAT AI Assistant pilot  ·  $22,400 all-in (≈ ₦34.72M)  ·  live in ~16 weeks", options: { color: "9FC9CF" } },
], { x: 0.8, y: 5.55, w: 11.7, h: 0.5, fontSize: 14, align: "left", fontFace: "Calibri", isTextBox: true });
s.addText("Prepared for TSAT Communications LTD  ·  bekaji007@gmail.com", { x: 0.8, y: 6.75, w: 11.7, h: 0.35, fontSize: 10.5, color: "6FA2A9", fontFace: "Calibri", isTextBox: true });

pres.writeFile({ fileName: "TSAT_AI_Assistant_Pitch_Deck.pptx" }).then((f) => console.log("WROTE", f));
