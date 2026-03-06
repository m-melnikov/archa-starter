// src/content/site.ts
export type SiteNavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: SocialItem[];
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "Example Site",
  tagline: "A boring, production-ready Astro starter.",
  description:
    "Example Site is a minimal HTML-first starter with senior defaults: SEO, JSON-LD, a11y basics, and clean structure.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "Example",
    email: "hello@example.com",
    url: "https://example.com",
    socials: [
      { label: "Telegram", href: "https://t.me" },
      { label: "WhatsApp", href: "https://wa.me" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ],
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9",
  },
};
