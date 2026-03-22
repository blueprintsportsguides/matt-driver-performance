# Matt Driver Performance

A modern, professional website for Matt Driver Performance - elite youth football strength and conditioning coaching.

## Overview

This website showcases the services offered by Matt Driver, a Premier League academy strength and conditioning coach, to youth athletes seeking to improve their athletic performance.

**Live Site:** [mattdriverperformance.com](https://mattdriverperformance.com)

## Features

- **Modern Design**: Clean, professional UI built with Tailwind CSS
- **Responsive**: Fully optimised for mobile, tablet, and desktop
- **Performance Optimised**: Fast loading with Next.js Image optimisation
- **SEO Ready**: Includes sitemap, robots.txt, and meta tags
- **Animated**: Smooth animations with Framer Motion
- **Accessible**: Built with accessibility in mind

## Pages

- **Home**: Hero section, mission statement, services overview, testimonials
- **About**: Matt's background, credentials, and coaching philosophy
- **Services**: Detailed service descriptions (Performance Profiling, 1-1 Training, Small Group Training)
- **Pricing**: Clear pricing structure with FAQs
- **Contact**: Contact methods and booking information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matt-driver-performance.git
   cd matt-driver-performance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development server

Run the dev server (with hot reload):

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Vercel deployment

The project is set up for Vercel:

1. Connect this GitHub repo in [Vercel](https://vercel.com).
2. **Root Directory** (Project → Settings → General): leave **empty** (repository root). The Next.js app must be at the repo root so `.next` is created where Vercel expects it.
3. **Build Command** (Settings → General): leave **default** or use `next build`. Do **not** use a script that runs `npm run build --prefix matt-driver-performance` unless Root Directory is set to that folder — that puts `.next` in the wrong place and causes `routes-manifest.json` errors.
4. `vercel.json` sets `"buildCommand": "next build"` so production builds always run at the project root.

**CLI:** Run `npx vercel --prod` from **this** directory (`matt-driver-performance`), not from a parent folder.

**`vercel.json`** config includes:

- **Framework**: `nextjs`
- **Region**: `lhr1` (London)
- **Security headers**: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- **Cache headers**: long cache for `/images/*` and `/videos/*`

## Project Structure

```
matt-driver-performance/
├── public/
│   ├── images/          # Optimised images
│   └── videos/          # Training videos
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── pricing/     # Pricing page
│   │   ├── privacy/     # Privacy policy
│   │   ├── services/    # Services page
│   │   ├── terms/       # Terms of service
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── robots.ts    # Robots.txt
│   │   └── sitemap.ts   # Sitemap
│   └── components/
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── PricingCard.tsx
│       ├── SectionHeader.tsx
│       ├── ServiceCard.tsx
│       └── TestimonialCard.tsx
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Contact

- **Email**: matthewdriver1759@gmail.com
- **Phone**: 07938 244 735

## License

This project is private and not licensed for public use.
