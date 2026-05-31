# GIANT EAGLE FINANCE

A premium, frontend-only marketing website for a microfinance and money-lending business, built with a luxury black & gold theme.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling & dev server
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
  components/
    ui/              Reusable primitives (Logo, Reveal, SectionHeading, useCountUp)
    Navbar.tsx       Sticky navbar with scroll blur + mobile menu
    Hero.tsx         Hero with custom animated financial visual
    TrustBar.tsx     Trust indicators
    About.tsx        Value cards
    Services.tsx     Loan service cards
    WhyChooseUs.tsx  Reasons + animated statistics
    LoanProcess.tsx  Horizontal / vertical stepper
    LoanCalculator.tsx  Frontend-only repayment estimator
    Testimonials.tsx Customer testimonials
    FAQ.tsx          Animated accordion
    Contact.tsx      Inquiry form (frontend-only success state)
    Footer.tsx       Luxury footer
  data/              Mock content (services, faqs, testimonials)
  App.tsx
  main.tsx
  index.css
```

> This is a **frontend-only** project. There is no backend, database, authentication, or payment
> processing. The loan calculator and contact form use mock, client-side logic only.
