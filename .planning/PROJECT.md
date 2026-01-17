# FormBridge

## What This Is

A full-stack web application that helps users complete Ontario Works (social assistance) forms by explaining complex questions in plain language and providing conversational AI Q&A. Built for a hackathon demo to show how government forms can be made accessible to everyone.

## Core Value

Make government assistance forms understandable to people who struggle with bureaucratic language — when someone needs help, the form itself shouldn't be a barrier.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Demo Critical (Must Have):**
- [ ] Form displays all sections with questions and appropriate input fields
- [ ] Help button on each question triggers AI explanation in chat panel
- [ ] Multi-turn conversation about specific questions with context
- [ ] AI suggests answers based on conversation → user clicks to auto-fill form
- [ ] Chat panel shows question context, message history, and quick action buttons

**Should Have:**
- [ ] Canadian validation (SIN with Luhn, Ontario postal codes)
- [ ] Progress bar showing section completion
- [ ] Session persistence via MongoDB
- [ ] Mobile responsive layout

**Nice to Have:**
- [ ] Consistency validation (AI checks for contradictions across answers)
- [ ] Export/print completed form

### Out of Scope

- Actual form submission to Ontario Works — demo only
- User authentication/accounts — session-based only
- Multiple form types — Ontario Works 2024 only for MVP
- Offline support — requires API for AI features
- Multi-language support — English only for MVP

## Context

**Target Users:** People applying for Ontario Works who may have:
- Limited English proficiency
- Low literacy levels
- Confusion about government terminology
- Complex living situations that don't fit neat categories

**Ontario Works Specifics:**
- Common-law in Ontario is 3 months (not 1 year like federal)
- Earnings exemption: first $200 + 50% of remainder
- Maximum shelter allowance: $390 single, $642 couple
- Eligibility excludes international students, limits work permit holders

**Form Sections (5 total):**
1. Eligibility — residency status
2. Household (Benefit Unit) — who lives with you
3. Income — employment, self-employment, gig work
4. Housing — shelter costs
5. Review — declaration

## Constraints

- **Tech Stack**: Next.js 14 + Express.js + TypeScript + Tailwind — specified for hackathon
- **AI Provider**: Google Gemini via @google/generative-ai SDK — API key required
- **Database**: MongoDB with Mongoose — for session persistence
- **Timeline**: Hackathon MVP — demo-critical features first
- **Ports**: Frontend :3000, Backend :5000

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Gemini over OpenAI | Specified in requirements | — Pending |
| Zustand for state | Lightweight, simple API for form state | — Pending |
| Separate frontend/backend | Clear API boundaries, standard hackathon pattern | — Pending |
| Static form data in frontend | No need for CMS, form structure won't change during demo | — Pending |
| User must accept AI suggestions | Safer UX, user stays in control | — Pending |

---
*Last updated: 2026-01-17 after initialization*
