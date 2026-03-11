# Archa Starter (Astro)

A modern **Astro starter for marketing and company websites**.

This project provides a clean, practical foundation for building static
sites with **Astro**, **Tailwind CSS**, and a small set of reusable UI
components. It focuses on clear structure, sensible defaults, and
content-driven development without unnecessary complexity.

The goal is to give you a **solid starting point** that stays out of
your way as your project grows.

---

## Features

- **Astro-first architecture** (HTML-first components)
- **Tailwind CSS v4** styling
- **Reusable UI components**
- **Content Collections support**
- **SEO-ready setup**
- **Accessible defaults**
- **Minimal client-side JavaScript**

---

## Project Structure

    .
    ├─ public
    ├─ src
    │  ├─ components
    │  │  ├─ per-page-components...
    │  │  └─ shared
    │  │     ├─ head
    │  │     └─ layouts
    │  ├─ content
    │  ├─ pages
    │  ├─ styles
    │  │  ├─ partials
    │  │  │  ├─ animation.css
    │  │  │  ├─ base.css
    │  │  │  ├─ components.css
    │  │  │  ├─ fonts.css
    │  │  │  ├─ starwind.css
    │  │  │  ├─ theme.css
    │  │  │  ├─ tokens-dark.css
    │  │  │  └─ tokens.css
    │  │  └─ global.css
    │  ├─ utils
    │  └─ content.config.ts
    │
    ├─ astro.config.mjs (Astro)
    ├─ tsconfig.json (TypeScript)
    ├─ .prettierrc.mjs (Prettier)
    ├─ eslint.config.mjs (ESLint)
    ├─ starwind.config.json (Starwind UI)
    └─ components.json (Starwind Pro)

### Key directories

**`src/pages`**\
Astro routes and site pages.

**`src/components`**\
Reusable UI components and layout primitives.

**`src/content`**\
Structured content using Astro Content Collections.

**`src/styles`**\
Global styles and Tailwind-based design tokens.

**`src/utils`**\
Shared utilities used across the project.

---

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev --host
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

---

## Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Example:

    SITE_URL=https://example.com

This is typically used for:

- canonical URLs
- SEO metadata
- sitemap generation

---

## Development Philosophy

This starter favors:

- **clear structure over abstraction**
- **content-driven development**
- **progressive enhancement**
- **minimal client-side JavaScript**

Astro handles rendering, while interactivity can be added only where
needed.

---

## Tech Stack

- **Astro**
- **Tailwind CSS**
- **TypeScript**
- **Starwind UI components**
- **Starwind Pro components**
- **Tabler Icons**
- **ESLint + Prettier**

---

## License

MIT
