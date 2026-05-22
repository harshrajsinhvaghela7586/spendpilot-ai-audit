## Day 1 — 2026-05-20

**Hours worked:** 3

**What I did:**

* Read the complete Credex assignment PDF
* Finalized project direction and stack
* Setup Next.js project with TypeScript and Tailwind CSS
* Initialized shadcn/ui components
* Planned initial architecture and folder structure
* Created documentation files required for submission

**What I learned:**

* This assignment evaluates product thinking and shipping ability more than algorithmic problem solving

**Blockers / what I'm stuck on:**

* Need to design a financially defensible audit engine with accurate pricing logic

**Plan for tomorrow:**

* Build landing page UI
* Create AI spend input form
* Start implementing audit recommendation logic


## Day 2 — 2026-05-21

**Hours worked:** 3

**What I did:**

* Built the initial SpendPilot landing page
* Designed the hero section and responsive UI
* Created the AI spend audit form
* Added localStorage persistence for form state
* Implemented mock audit result generation
* Structured reusable UI components for scalability

**What I learned:**

* Product-focused UI design requires balancing clarity, conversion, and trust

**Blockers / what I'm stuck on:**

* Need to refine the audit engine with realistic financial recommendations

**Plan for tomorrow:**

* Implement real pricing data
* Build audit recommendation engine
* Add charts and savings visualization

 ## Day 3 — 2026-05-22

**Hours worked:** 7

**What I did:**
- Implemented a production-style AI spend audit workflow
- Added real-world pricing datasets for ChatGPT, Claude, Cursor, GitHub Copilot, and Gemini
- Built a deterministic audit recommendation engine with savings calculations
- Improved the landing page UI and added comparison dashboards
- Added persistent form state using localStorage
- Added animated audit results and optimization insights
- Configured CI pipeline using GitHub Actions
- Added automated audit-engine tests using Vitest
- Created engineering documentation including PRICING_DATA.md, ARCHITECTURE.md, TESTS.md, and PROMPTS.md
- Deployed the project to Vercel

**What I learned:**
- Real pricing normalization across vendors is harder than expected because every provider structures plans differently
- Deterministic audit logic is more trustworthy than fully AI-generated financial recommendations
- Lighthouse performance optimization on mobile requires careful control of animations and rendering

**Blockers / what I'm stuck on:**
- Mobile Lighthouse score dropped initially due to browser extension interference and heavier UI rendering
- Still need to implement backend lead capture and shareable audit URLs

**Plan for tomorrow:**
- Integrate Firebase backend for lead capture
- Add AI-generated personalized audit summaries
- Implement shareable audit report URLs
- Improve Lighthouse accessibility score above 90
