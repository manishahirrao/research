# Sugoi Insights — Corporate Website

An institutional-grade corporate website for Sugoi Insights, a full-service market research agency. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

Sugoi Insights specializes in market research across five key sectors:
- **FMCG** (Fast-Moving Consumer Goods)
- **Media & Entertainment**
- **Cosmetics & Personal Care**
- **Automotive**
- **Real Estate**

This website serves as the primary digital touchpoint for C-suite clients, procurement teams, and strategic partners.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router, React 18+, TypeScript)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animation:** Framer Motion v11
- **Forms:** React Hook Form v7 + Zod v3
- **Content:** MDX for blog articles
- **SEO:** next-sitemap, JSON-LD structured data
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd sugoi-insights

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design System

### Brand Colors
- **Primary Red:** `#C8102E` (brand-red)
- **Red Dark:** `#A00D24` (hover states)
- **Red Light:** `#E8374F` (accents)

### Typography
- **Display:** Playfair Display (headings)
- **Body:** DM Sans (body text, UI)
- **Mono:** JetBrains Mono (code)

### Spacing Scale
Base unit: 4px
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Shadows
- `shadow-sm`: Subtle elevation
- `shadow-card`: Card elevation
- `shadow-hover`: Hover state
- `shadow-overlay`: Modal/drawer

## 📁 Project Structure

```
sugoi-insights/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About Us page
│   │   ├── services/           # Services page
│   │   ├── industries/         # Industries page
│   │   ├── insights/           # Blog listing & articles
│   │   ├── contact/            # Contact page
│   │   └── api/                # API routes
│   ├── components/
│   │   ├── animations/         # Framer Motion wrappers
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── shared/             # Reusable UI components
│   │   ├── home/               # Home page sections
│   │   ├── about/              # About page sections
│   │   ├── services/           # Services page sections
│   │   ├── industries/         # Industries page sections
│   │   ├── insights/           # Blog components
│   │   └── contact/            # Contact form
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   ├── motion.ts           # Animation variants
│   │   ├── validation.ts       # Zod schemas
│   │   ├── content.ts          # MDX content utilities
│   │   └── seo.ts              # SEO helpers
│   ├── hooks/
│   │   └── useReducedMotion.ts # Accessibility hook
│   ├── types/
│   │   ├── content.ts          # Content type definitions
│   │   └── forms.ts            # Form type definitions
│   └── styles/
│       └── globals.css         # Global styles & design tokens
├── content/
│   └── insights/               # MDX blog articles
├── public/
│   └── images/                 # Static images
├── .env.local.example          # Environment variables template
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
SITE_URL=https://sugoiinsights.com
CONTACT_EMAIL=contact@sugoiinsights.com
RESEND_API_KEY=your_resend_api_key_here
```

## 🎯 Performance Targets

- **Lighthouse Performance:** ≥ 95
- **Lighthouse Accessibility:** ≥ 95
- **Lighthouse Best Practices:** ≥ 95
- **Lighthouse SEO:** ≥ 95
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **INP (Interaction to Next Paint):** < 200ms

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader friendly
- Focus management
- Reduced motion support
- Semantic HTML5

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Analysis
ANALYZE=true npm run build  # Bundle size analysis
```

## 🚢 Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to `main` branch

## 📄 License

© 2025 Sugoi Insights. All rights reserved.

## 🤝 Contributing

This is a private corporate website. For internal development guidelines, see the project documentation.

---

**Built with precision by senior developers with 25+ years of experience.**
