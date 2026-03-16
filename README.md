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

1. Push to your GitHub repository and connect the repo in [Vercel](https://vercel.com).
2. Vercel will detect Next.js and use the existing config.
3. Deployments run on each push; `npm run build` is used automatically.

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
