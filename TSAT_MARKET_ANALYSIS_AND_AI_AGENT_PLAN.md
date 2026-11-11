# TSAT Communications LTD — Market Analysis & AI Agent Development Plan

**Version 2 (2026)** — Updated from the original *Market Analysis & Algorithm for TSAT Communication 2026*.

## Revision Notes (what changed in this update)

The original document laid out market segmentation, Abuja/Kano deployment algorithms, channel/budget allocation, and a Phase 5 list of third-party marketing-automation tools (OpenSoul, MoEngage, Google Ads AI). It did not answer the brief TSAT actually needs answered: *a single AI agent, owned by TSAT, that drives sales, drives visibility, and gives executives a running picture of both.* This update:

- Keeps the market analysis (Sections 1–4 below), condensed, with the original figures intact.
- Replaces the generic "AI Agents for Execution" tool list with a purpose-built **TSAT AI Agent Suite**: one shared data layer, three agents, one executive-facing app.
- Adds a full **step-by-step development roadmap** (Section 6) — the concrete build plan requested.
- Adds a tech stack recommendation, a data governance/NDPR section, and updated success metrics.
- Replaces every `₦X` placeholder with real ₦ and $ figures (Section 4A), built on a stated total budget and exchange rate that TSAT finance can confirm or adjust.
- Adds Section 7A explaining how the Agent API connects to the TSAT website, WhatsApp, the executive app, and other systems.

---

## 1. Market Opportunity: The 5G Gap Advantage

- Lagos and Abuja generate 31% of Nigeria's telecom sector revenue and hold the densest 5G infrastructure.
- 5G coverage gaps of 70.9% (Lagos) and 65.6% (Abuja) mean thousands of premium-phone owners still cannot get a 5G signal.
- MTN Nigeria lit its first commercial 5G in September 2022, rolling out to Kano and six other cities since.
- **TSAT's Sky Phone** is the differentiator: it runs on 5G/4G/3G/2G terrestrial networks *plus* Thuraya's satellite network across Africa, Europe, Asia, and Australia — a genuine must-have for Abuja executives who travel to satellite-blind zones and Kano's Sahel-crossing business community.

## 2. Market Segmentation

Total addressable market: Kano + Abuja ≈ 5M smartphone users. Target 50% across three segments:

| Segment | Share | Profile |
|---|---|---|
| Executive & Corporate | 15% | Abuja executives traveling to dead zones; Kano HNWIs and business owners; Oil/Gas, Mining, NGO |
| Security & Government | 10% | Military, police, paramilitary; officials in rural Northern Nigeria; emergency/humanitarian workers |
| Early Adopter Premium | 25% | High-income tech enthusiasts; affluent students/professionals in tech hubs; diaspora buying for family |

## 3. Go-to-Market: Abuja & Kano

**Abuja (Executive/Government focus)** — government liaison (Defense, Interior, Petroleum ministries), diplomatic corps briefings, executive demonstrations at 5-star hotels, retail partnerships in Wuse/Maitama plus Jumia/Konga.
Budget split: Government Outreach 25% · Executive Events 30% · Digital Advertising 20% · Retail Activation 15% · PR 10%.

**Kano (Commercial/Business focus)** — Chamber of Commerce engagement, traditional/religious leader advocacy, retail presence in Farm Center/Sabon Gari, transportation/logistics sector partnerships.
Budget split: Business Outreach 30% · Community Programs 20% · Retail Activation 30% · Digital/Social 20%.

## 4. Channels & Budget Allocation

- **Abuja digital:** Facebook/Instagram (35+ executives), LinkedIn (government/corporate), X (tech influencers/diplomats), YouTube demos.
- **Kano digital:** WhatsApp (99% penetration — primary channel), Facebook, Hausa YouTube, TikTok/Instagram for younger buyers.
- **Traditional/OOH:** premium magazines and direct mail in Abuja; Hausa radio, market signage, billboards in Kano.

Recommended overall split: Media Placement 35–40% · Events & Demonstrations 15–20% · Staff & Training 10–15% · **AI Agents & Technology 10–15%** · PR 5–10% · Retail/Channel Activation 10–15%.

---

## 4A. Budget — Real Figures

> **Planning assumptions (confirm with TSAT finance before this becomes a funding document):**
> **Total launch budget = ₦250,000,000** · **Exchange rate = ₦1,550 per US$1 (2026)** ⇒ **≈ US$161,300**.
> Every figure below is derived from these two numbers plus the percentage ranges already in the original document. Change the total or the rate and the tables scale proportionally — the percentages stay valid.

### By category

| Category | % | Naira (₦) | USD ($) |
|---|---:|---:|---:|
| Media Placement | 37% | 92,500,000 | 59,680 |
| Events & Demonstrations | 18% | 45,000,000 | 29,030 |
| AI Agents & Technology | 13% | 32,500,000 | 20,970 |
| Staff & Training | 12% | 30,000,000 | 19,350 |
| Retail / Channel Activation | 12% | 30,000,000 | 19,350 |
| Public Relations | 8% | 20,000,000 | 12,900 |
| **Total** | **100%** | **250,000,000** | **161,300** |

### By region (Abuja 50% · Kano 40% · Reserve 10%)

| Region | Naira (₦) | USD ($) |
|---|---:|---:|
| Abuja | 125,000,000 | 80,650 |
| Kano | 100,000,000 | 64,520 |
| Reserve (market intelligence, competitive response) | 25,000,000 | 16,130 |
| **Total** | **250,000,000** | **161,300** |

**Abuja allocation (of ₦125,000,000):** Digital/Performance 25% = ₦31,250,000 ($20,160) · Executive Events 20% = ₦25,000,000 ($16,130) · Government Relations 15% = ₦18,750,000 ($12,100) · Retail & Channel 20% = ₦25,000,000 ($16,130) · Public Relations 10% = ₦12,500,000 ($8,060) · Staff & Support 10% = ₦12,500,000 ($8,060).

**Kano allocation (of ₦100,000,000):** Community & Business Outreach 30% = ₦30,000,000 ($19,350) · Digital/Social 20% = ₦20,000,000 ($12,900) · Retail Activation 20% = ₦20,000,000 ($12,900) · Radio & Traditional Media 15% = ₦15,000,000 ($9,680) · Staff & Support 15% = ₦15,000,000 ($9,680).

### AI Agent build & first-year run cost (the ₦32,500,000 technology line, itemized)

| Item | Naira (₦) | USD ($) | Type |
|---|---:|---:|---|
| Agent + Executive App development (≈16-week build) | 18,000,000 | 11,610 | One-time |
| Maintenance & tuning (year 1) | 3,500,000 | 2,260 | Annual |
| Claude API usage (year 1, pilot scale) | 4,000,000 | 2,580 | Annual |
| CRM subscription (HubSpot/Zoho, year 1) | 2,500,000 | 1,610 | Annual |
| Hosting & infrastructure (year 1) | 2,500,000 | 1,610 | Annual |
| WhatsApp Business API / BSP fees (year 1) | 2,000,000 | 1,290 | Annual |
| **Total** | **32,500,000** | **20,970** | |

The build is a one-time ₦18M (~$11.6K); the remaining ₦14.5M (~$9.4K) is recurring and should be re-budgeted each year. Claude API usage at pilot scale is small — a customer-facing agent on Claude Sonnet 5 ($2 / $10 per million tokens) processes millions of tokens well within ₦4M — so the recurring cost is dominated by the CRM, hosting, and WhatsApp fees, not the model.

---

## 5. The TSAT AI Agent Suite

One shared data layer (product catalog, CRM/lead pipeline, campaign performance, market intelligence) feeding **three purpose-built agents**, each built on Claude (Anthropic) rather than assembled from disconnected marketing-automation SaaS tools. This is what turns "AI agents" from a line item into an owned system.

### 5.1 Sales & Lead Agent (customer-facing)
Runs primarily on WhatsApp Business API (Kano's dominant channel) with a web-chat mirror for Abuja's digital audience.
- Answers product questions in English and Hausa (5G/4G/3G/2G + Thuraya satellite coverage, pricing, device comparisons).
- Qualifies leads against the three segments above and scores them by likelihood to convert.
- Books demo slots (executive briefings in Abuja, community demonstrations in Kano) directly into the sales calendar.
- Hands warm/qualified leads to a human rep with full conversation context — never closes a sale unsupervised.
- Tracks referral codes to measure the community-led growth loop already identified in the original ROI algorithm.

### 5.2 Visibility & Growth Agent (marketing-facing)
- Generates localized ad copy, social posts, and product descriptions (English/Hausa) for review before publishing.
- Maintains the content calendar across the channels in Section 4.
- Monitors brand mentions, competitor activity (other satellite/hybrid devices), and market signals.
- Reallocates recommendations across the digital budget lines based on real performance data (with human sign-off — it advises, finance approves).
- Produces a weekly visibility report: reach, engagement, share of voice by city.
- **Can be expanded into a full multi-platform Social Media Manager** (Facebook, LinkedIn, X, Instagram) with scheduling, trend-safety filtering, a human-approval gate, and DM auto-replies — see Section 5.5.

### 5.3 Executive Intelligence App (leadership-facing)
This is the app TSAT executives actually use — a lightweight, mobile-first dashboard, not another marketing tool.
- **Daily/weekly AI-written briefings**: what happened in Abuja and Kano, in plain English, pushed to executives each morning.
- **Natural-language Q&A**: "How many qualified leads did Kano generate this week versus target?" answered directly from the live data layer, not a static report.
- **KPI dashboard**: leads, conversions, spend-to-plan by region, referral rate, sentiment — the metrics already defined in Section 7 below.
- **Threshold alerts**: flags automatically when a region falls behind plan or a competitor move is detected — executives don't have to go looking.
- **Board-ready export**: one click turns the week's data into a shareable PDF/deck for board updates.

### 5.4 How they connect

```
                    ┌─────────────────────────────┐
                    │   Shared Data Layer          │
                    │   CRM · Product Catalog ·    │
                    │   Campaign Data · Pipeline    │
                    └───────────────┬───────────────┘
                 ┌──────────────────┼──────────────────┐
                 ▼                  ▼                  ▼
        ┌────────────────┐ ┌────────────────┐ ┌─────────────────────┐
        │ Sales & Lead    │ │ Visibility &    │ │ Executive            │
        │ Agent           │ │ Growth Agent    │ │ Intelligence App      │
        │ (WhatsApp/Web)  │ │ (Content/Ads)   │ │ (Briefings/Dashboard) │
        └────────────────┘ └────────────────┘ └─────────────────────┘
```

The Executive Intelligence App does not duplicate work — it reads and summarizes what the Sales and Visibility agents are already doing, so leadership sees one coherent picture instead of three disconnected tools.

### 5.5 Social Media Manager (Facebook · LinkedIn · X · Instagram)

An expansion of the Visibility & Growth Agent into a full, multi-platform social media manager. TSAT connects its official accounts once; the module then analyses, plans, schedules, and drafts — but **nothing is ever published without a human Comms Manager's approval**, and nothing is published if that approval is late. It is a drafting-and-safety assistant, not an autopilot.

**What it does**
- **Connect accounts** — links TSAT's Facebook Page, Instagram Business account, LinkedIn Company Page, and X account through each platform's official API (secure OAuth; no passwords stored).
- **Analyse each handle** — audience make-up, engagement patterns, best-performing content, and the times followers are most active per platform.
- **Build the schedule** — a content calendar with each post placed at the optimal time for that platform's audience (so posts land when people are watching, not at random).
- **Draft the posts** — localized English/Hausa copy, on-brand, with suggested image/hashtag.
- **Adopt safe trends** — watches trending topics and adapts the brand-relevant ones, while automatically screening out any trend containing flagged words or images (see the safety filter below).
- **Route for approval** — every post goes to the human Comms Manager, who must approve it **at least 5 hours before** its scheduled time, or it is **automatically held and not posted**.
- **Reply to DMs** — answers Direct Messages with a short, polite message directing the person to call the human agent, and logs them as a lead in the CRM.

**The approval workflow — the 5-hour gate (core safety rule)**

Every post moves through this state machine. The 5-hour rule means the AI drafts well ahead (drafts are created ≥24 hours before the slot) so the Comms Manager always has time to review.

```
  AI drafts post + proposed time ─► PENDING APPROVAL ─► (Comms Manager reviews)
                                           │
              ┌────────────────────────────┼─────────────────────────────┐
              ▼                             ▼                             ▼
   Approved BEFORE T–5h          NOT approved by T–5h              Rejected / edit
   → SCHEDULED                   → AUTO-HELD, NOT POSTED           → back to AI or
   → publishes at the time       → Comms Manager notified it         Comms Manager to
                                   lapsed; can reschedule             revise & re-queue
                                   (clock restarts)
```

- **Hard rule:** no approval by 5 hours before go-live = the post does **not** go out. Silence never results in a post.
- Nothing is ever published without an explicit human approval — the AI drafts and schedules; a person always makes the final call.
- Approvals happen in the Comms Manager's queue (web + mobile), with reminders as the T–5h cutoff approaches.

**Trend adoption with a brand-safety filter**

Before any trend reaches a human, it passes an automatic filter — this is what stops the system embarrassing TSAT:
- **Flagged-word blocklist** (configurable with TSAT) — profanity, political, religious, tribal/ethnic-sensitive, competitor-bashing, and misinformation terms. This matters especially for the Kano / Northern Nigeria audience, where a tone-deaf trend can do real brand damage.
- **Image moderation** — trend images are screened; anything unsafe or off-brand is rejected automatically.
- **Category blocks** — no political, religious, or otherwise controversial trends are ever drafted, regardless of how viral they are.
- Only trends that pass the filter become drafts — and even then, the Comms Manager still approves.

**Direct-message auto-reply**
- Short, on-brand reply on each platform, e.g.: *"Thank you for contacting TSAT Communications! For the fastest help, please call us on 0XXX-XXX-XXXX, or send your number and an agent will call you. — TSAT Team"* (English/Hausa).
- Captures the sender as a lead in the CRM, so DM enquiries feed the same pipeline as WhatsApp.
- By design it **never tries to resolve or close** — it always routes the person to a human agent.

**Honest platform constraints (must be set up with TSAT before go-live)**

Each platform has its own rules, and automation is not equal across them — the proposal is built around what the official APIs actually allow:
- **Meta (Facebook + Instagram)** — the most capable: Graph API supports scheduled publishing, analytics, and messaging auto-replies (within Meta's rules and the 24-hour messaging window). Requires Business accounts and Meta App Review.
- **X (Twitter)** — posting and DM automation require a **paid API tier**, with rate and feature limits. Trends data is gated.
- **LinkedIn** — Company Page posting and analytics are available via LinkedIn's Marketing/Community Management API (partner access). **LinkedIn does not offer general automated DM replies** for inboxes — so on LinkedIn the module **forwards messages to the Comms Manager** rather than auto-replying.
- **Approvals & timelines** — each platform requires app registration and review (Meta App Review, LinkedIn partner access, an X paid tier). These take time and must be started early. Trend-data coverage varies by platform; where a platform's trends are not accessible, a curated trend source is used.
- The flagged-word blocklist and brand-safety categories are agreed with TSAT and owned by TSAT — the system enforces TSAT's rules, not generic ones.

**Where it fits & cost** — this is **new scope beyond the $19,400 pilot** (which keeps a *lean* Visibility Agent). It is best delivered as a **Phase 2 add-on module** once the core pilot is proven. Indicative additional cost:

| Item | USD ($) | Naira (₦) | Type |
|---|---:|---:|---|
| 4 platform connectors (OAuth, posting, analytics) | 2,800 | 4,340,000 | One-time |
| Scheduler + optimal-time engine | 1,000 | 1,550,000 | One-time |
| Trend monitoring + brand-safety filter (words + image moderation) | 1,500 | 2,325,000 | One-time |
| Approval workflow + 5-hour gate + Comms Manager approval screen | 1,600 | 2,480,000 | One-time |
| DM auto-reply across platforms + CRM lead capture | 1,200 | 1,860,000 | One-time |
| QA + platform app-review support | 900 | 1,395,000 | One-time |
| **Module build subtotal** | **9,000** | **13,950,000** | One-time |
| Recurring (X API tier, image-moderation API, extra hosting) — year 1 | 1,500 | 2,325,000 | Annual |
| **Module all-in (year 1)** | **10,500** | **16,275,000** | |

Adding this to the core pilot would take the all-in figure past the $20,000 ceiling, which is why it is scoped as a separate Phase 2 module with its own budget. It can also be trimmed (e.g. Meta-only first, LinkedIn/X later) if a smaller first step is preferred.

---

## 6. Step-by-Step Development Roadmap

| Phase | Weeks | Goal | Key Tasks | Exit Criteria |
|---|---|---|---|---|
| **0. Discovery & Requirements** | 1–2 | Lock scope and success criteria | Interview sales/marketing/exec stakeholders; audit existing CRM/data; confirm the ₦250M total and rate assumptions in Section 4A; pick the CRM system of record | Signed-off requirements doc + confirmed budget |
| **1. Data Foundation** | 2–4 | Build the shared data layer | Stand up CRM (or connect existing one); load product catalog; define lead-scoring schema; set up analytics/BI (e.g. Metabase) | Data layer live, queryable, and populated with real product/pricing data |
| **2. Sales & Lead Agent (MVP)** | 4–7 | Launch WhatsApp sales assistant | Register WhatsApp Business API; build conversation flows (English + Hausa); connect to CRM for lead capture; build human-handoff | Agent handling live inbound WhatsApp queries in a controlled pilot group |
| **3. Visibility & Growth Agent** | 6–9 | Automate content & monitoring (overlaps Phase 2) | Build content-generation workflows with human review queue; connect social scheduling; build brand/competitor monitoring; weekly report template | First fully AI-drafted, human-approved content week live |
| **4. Executive Intelligence App** | 8–12 | Ship the exec-facing app | Build mobile-first PWA; wire daily briefing generation; build KPI dashboard and NL Q&A over the data layer; set up threshold alerts | 3–5 executives using the app daily in internal testing |
| **5. Integration, QA & Security Review** | 12–14 | Make it production-ready | End-to-end testing across all three agents; NDPR data-handling review (Section 8); load/failover testing; role-based access control on the exec app | Security sign-off + all three agents passing QA scenarios |
| **6. Pilot — Abuja & Kano** | 14–16 | Real-world validation | Run the pilot alongside the marketing launch in Section 3; track leads/conversions/exec app usage against KPIs (Section 7) | Pilot KPIs reviewed; go/no-go decision for full rollout |
| **7. Scale & Continuous Improvement** | Month 5+ | Full rollout and iteration | Expand beyond pilot cities per demand; retrain/tune agents on real conversation data; quarterly roadmap review | Agents operating at full market scope with a standing improvement cadence |

Each phase should have a named owner on the TSAT side (even part-time) — an agent this connected to sales and executive reporting cannot run as a vendor-only project.

---

## 7. Recommended Tech Stack & Build-vs-Buy

| Layer | Recommendation | Why |
|---|---|---|
| Conversational/reasoning engine | Claude (Anthropic) via API / Agent SDK | Strong tool-use and reasoning for lead-qualification and executive Q&A; one model family across all three agents keeps behavior consistent |
| Primary customer channel | WhatsApp Business API | 99% penetration cited for Kano; already the default channel for Nigerian SMEs and consumers |
| Executive app | Progressive Web App (React/Next.js) | Works on any executive's phone with no app-store approval delay; upgrade to React Native later only if native push/offline is needed |
| System of record | CRM (HubSpot or Zoho — Nigeria-friendly pricing) + Postgres for agent-specific data | Buy the commodity CRM; build only what's TSAT-specific on top |
| Orchestration | Lightweight backend service (Node or Python) coordinating the three agents' tool calls | Keeps the shared data layer as the single source of truth |
| Analytics/BI | Metabase or existing BI tool | Feeds the Executive Agent's dashboard and NL Q&A without building analytics from scratch |
| Hosting | Cloud provider with the best Nigeria/West-Africa latency and cost profile at the time of build | Evaluate against actual pilot traffic, not assumed at this stage |

**Build vs. buy principle:** build the three agents and the executive app — that's TSAT's owned IP and workflow. Buy the commodity infrastructure underneath (CRM, WhatsApp BSP, hosting, BI).

---

## 7A. How the Agent API Works with the TSAT Website & Other Applications

The three agents are not three separate products — they are one backend service, the **TSAT Agent API**, that every TSAT surface talks to. Nothing calls Claude directly; the website, WhatsApp, and the executive app all call the Agent API, and the Agent API is the only thing holding the Claude API key and the connection to the data layer. That single boundary is what makes the system secure and consistent.

### The architecture

```
   TSAT Website        WhatsApp          Executive App        Social / Ad
   (chat widget)       Business API       (PWA)               platforms
        │                   │                  │                   │
        │  HTTPS / webhook   │  webhook          │  authenticated    │  scheduled
        ▼                   ▼                  ▼   API calls         ▼  API calls
   ┌──────────────────────────────────────────────────────────────────────┐
   │                        TSAT AGENT API  (backend service)               │
   │   • Holds the Claude API key (never exposed to any browser or phone)   │
   │   • Runs the agent logic (Sales, Visibility, Executive)                │
   │   • Enforces auth, rate limits, NDPR consent & logging                 │
   └───────────────┬───────────────────────────────┬───────────────────────┘
                   │                               │
                   ▼                               ▼
         ┌───────────────────┐           ┌───────────────────────┐
         │  Claude API        │           │  Shared Data Layer     │
         │  (reasoning engine)│           │  CRM · Catalog · KPIs  │
         └───────────────────┘           └───────────────────────┘
```

### How each surface connects

| Surface | How it connects to the Agent API | What flows |
|---|---|---|
| **TSAT website** | A small JavaScript chat widget embedded on the site (a `<script>` snippet on product/landing pages) calls the Agent API over HTTPS. Product pages and the "request a demo" form post lead data to the same API. | Visitor question → Agent API → Claude → answer rendered in the widget; captured lead → CRM. |
| **WhatsApp** | The WhatsApp Business API sends every inbound message to a **webhook** on the Agent API. The Agent API replies through the WhatsApp send-message endpoint. | Customer message (EN/Hausa) → webhook → Claude → reply sent back on WhatsApp; qualified lead → CRM. |
| **Executive app (PWA)** | The app makes **authenticated** API calls (each executive logs in; role-based token) to dedicated endpoints for briefings, KPI data, and natural-language questions. | "How did Kano do this week?" → Agent API → queries data layer → Claude summarizes → answer + chart. |
| **CRM** | The Agent API writes leads and reads pipeline status through the CRM's own REST API. | New/qualified leads written; conversion status read back for reporting. |
| **Social & ad platforms** | The Visibility Agent, running inside the Agent API on a schedule, calls the Meta/LinkedIn/X APIs to publish approved content and pull performance data. | Approved posts out; reach/engagement metrics in. |

### The request flow, concretely

1. A surface (website widget, WhatsApp webhook, or exec app) sends a message or question to the Agent API.
2. The Agent API attaches context — product catalog, the customer's history, or live KPIs from the data layer — and calls the **Claude API** (`POST /v1/messages`).
3. Claude may use **tools** the Agent API exposes to it: look up a price, check inventory, create a CRM lead, book a demo slot, or query this week's sales numbers. The Agent API runs those tool calls against the data layer and returns the results to Claude.
4. Claude returns the final answer; the Agent API sends it back to the surface that asked — as a chat reply, a WhatsApp message, or a dashboard answer.

### Why route everything through one API (not call Claude from each app)

- **Security:** the Claude API key and CRM credentials live only on the server, never in a browser or on a phone — a public website must never hold them.
- **Consistency:** all three agents share one product catalog, one lead-scoring logic, and one set of guardrails, so the website and WhatsApp give the same answers.
- **Compliance:** NDPR consent capture, conversation logging, and retention rules are enforced in one place (Section 8).
- **Swappable parts:** the CRM, hosting, or even the model can change behind the Agent API without touching the website or the app.

*Implementation note:* the customer-facing Sales Agent runs well on **Claude Sonnet 5** (fast, cost-efficient for high message volume); the Executive Intelligence App's reasoning and briefing generation is better served by a higher-capability model such as **Claude Opus 5**. Same API, different model per workload — chosen inside the Agent API, invisible to the surfaces.

---

## 8. Data Governance, Security & Compliance

- **NDPR (Nigeria Data Protection Regulation):** every WhatsApp/lead conversation captures personal data — get consent language into the first message, designate a Data Protection Officer, and define a retention/deletion policy before Phase 2 goes live.
- **Role-based access on the Executive App:** not every dashboard view should be open to every login — segment by role (CEO, regional sales lead, marketing).
- **Human-in-the-loop:** the Sales Agent qualifies and hands off, it does not close high-value or government deals unsupervised; the Visibility Agent drafts, a human approves before anything publishes.
- **Model/data retention policy:** define how long conversation transcripts and lead data are kept, and document it — this is both an NDPR requirement and good practice.

---

## 9. Success Metrics / KPIs

Carried forward from the original deployment plan, plus AI-specific measures:

| Metric | Target |
|---|---|
| Contacts identified (pre-launch) | 1,000+ |
| Leads generated | 500 (Abuja) / 300 (Kano) |
| Conversion rate | 30% |
| Referral growth | 2x |
| **AI Agent response time (Sales Agent)** | Under 60 seconds for first response |
| **% of leads qualified by AI before human handoff** | 70%+ |
| **Executive App weekly active use** | 80%+ of named executives per week |
| **Briefing/report accuracy** (spot-checked against source data) | No material discrepancies |

---

## 10. Immediate Next Steps

**Week 1–2**
- Confirm or adjust the ₦250,000,000 total budget and ₦1,550/$1 rate that Section 4A is built on, then lock the category and regional figures.
- Assign a TSAT-side owner for the AI Agent Suite (Phase 0 above).
- Begin stakeholder mapping (Abuja government contacts, Kano business community) — as in the original plan.
- Audit current CRM/lead-tracking state to scope Phase 1 accurately.

**Month 1–2**
- Execute Phases 0–2 of the roadmap (Section 6).
- Source demonstration devices in parallel, per the original marketing timeline.
- Secure retail channel partnerships.

**Month 3–4**
- Simultaneous marketing launch in Abuja & Kano alongside the Sales and Visibility agents going live.
- Executive App in daily use ahead of full public launch, so leadership is reading real pilot data from day one.
