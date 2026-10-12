# tsg-webdev-p02-IlhamBatool

**ÉLAN EVENTS — Responsive Business Landing Page**
The Sky Gen · Web Development · Project 02 (Beginner) · Ref: TSG/WD/P02/2026

| | |
|---|---|
| **Live site** | `https://ilhambatool.github.io/tsg-webdev-p02-IlhamBatool/` |
| **Repository** | `https://github.com/ilhambatool/tsg-webdev-p02-IlhamBatool` |
| **Author** | Ilham Batool |

---

## 1. Business Concept

**ÉLAN EVENTS** is a fictional event planning and styling company based in Islamabad, Pakistan. Its tagline is *"We plan. You celebrate."*

The company plans and styles weddings, birthdays, graduations, corporate events and private celebrations (engagements, bridal showers, anniversaries). The target customers are families, couples and young professionals who want a polished event without handling every detail themselves.

**Goal of the landing page:** guide a visitor from the first impression, through services, pricing and social proof, to one action: **filling in the "Plan Your Event" enquiry form**.

**Brand feel:** a soft, elegant palette of ivory, beige, champagne gold and sage, with charcoal text, to feel warm, premium and celebratory.

---

## 2. Features

| Requirement from brief | How it is implemented |
|---|---|
| Sticky navigation, smooth scroll, active-link highlight | Sticky header; smooth scrolling for in-page links; the link for the section currently in view is highlighted while scrolling (`aria-current` is set too) |
| Hero section | Full-width background image, headline, sub-headline and a "Plan Your Event" CTA button |
| Services (3–6 cards, icons, hover effects) | 6 cards (Wedding, Birthday, Graduation, Styling, Corporate, Private) with Font Awesome icons and hover lift effects |
| Pricing table (3 plans, highlighted plan) | Essential, Signature (highlighted as *most popular*) and Luxury, each with a feature list |
| Testimonials slider (min. 3) | 5 testimonials, previous/next arrows and dots; arrows disable at either end; adapts to the number of cards visible per screen size |
| FAQ accordion (min. 5) | 6 questions; JavaScript closes the other items when one opens |
| Contact section: form + Google Map | Embedded Google Map plus an enquiry form with name, email, phone, event type, date, guests, budget and message; built-in validation with a confirmation message on success |
| Footer | Business info, quick links, contact details and social icons |
| Fully responsive, 3 breakpoints, hamburger menu | Breakpoints at **1024px**, **768px** and **480px**; the mobile menu toggles open/closed, swaps the bars/close icon and closes after a link is tapped |

**Accessibility touches:** `aria-label` / `aria-expanded` on the menu button, labelled form fields, `role="status"` on the form message, descriptive `alt` text on images.

---

## 3. Tech Stack

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `footer`, `details/summary`)
- **CSS3**: custom properties (design tokens), Flexbox, Grid, media queries
- **JavaScript (vanilla ES6)**: mobile menu, smooth scroll, active link, testimonials slider, FAQ accordion, form validation
- **Font Awesome 6** (CDN): icons
- **Google Maps Embed**: location map
- **Git & GitHub**: version control
- **Chrome DevTools & Lighthouse**: responsive testing and performance audit

---

## 4. Folder Structure

```
tsg-webdev-p02-IlhamBatool/
├── index.html
├── style.css
├── script.js
├── README.md
├── assests/            # images used on the page
```

---

## 5. Lighthouse Report

Audit run on the live deployed page.

| Performance | Accessibility | Best Practices | SEO |
|:72:|:89:|:100:|:100:|
| `__` | `__` | `__` | `__` |

Full report: `![alt text](image.png)`

---

## 6. Credits & Licences

- **Images:** `ADD SOURCE, e.g. "Unsplash, photographer names / links"`. Used under the Unsplash licence.
- **Icons:** [Font Awesome Free](https://fontawesome.com) (icons CC BY 4.0, fonts SIL OFL, code MIT)
- **Map:** Google Maps Embed
- **Code:** written by me. AI tools were used for learning and ideation only, as permitted by the brief.

---

## 7. Notes

- The contact form is a front-end demo: it validates input and shows a confirmation message but does not send data to a server.
- Phone number and social-media links in the footer are placeholders for the fictional business.

---
