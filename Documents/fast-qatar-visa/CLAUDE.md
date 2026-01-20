# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fast Qatar Visa Center - A professional visa processing service website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
# Development
pnpm dev              # Start dev server at localhost:3000

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Linting
pnpm lint             # Run ESLint
```

No test framework is configured.

## Architecture

### Directory Structure

- **app/** - Next.js App Router pages (home, services, about, contact, track)
- **components/layout/** - Header, Footer, Layout wrapper
- **components/sections/** - Page section components (Hero, ServicesPreview, FAQ, etc.)
- **components/ui/** - Base UI primitives (Button, Card, Input, Badge, Skeleton)
- **lib/** - Utilities and constants
  - `images.ts` - Centralized image URLs organized by category
  - `utils.ts` - `cn()` utility (clsx + tailwind-merge)

### Key Patterns

**Page Composition**: Each page imports the `Layout` component and composes multiple section components.

**Image Management**: All images are centralized in `lib/images.ts` with URLs organized by category (hero, services, about, features, qatar, contact, etc.). Use `getImageUrl()` helper for dynamic dimensions.

**Button Variants**: Custom Button component supports variants (primary, secondary, outline, ghost, gold), sizes (sm, md, lg), loading states, and icons.

**Client Components**: Interactive components (Header, forms, sections with state) use `"use client"` directive.

### Styling

- **Custom Colors**: Qatar Maroon (#8B1538) and Qatar Gold (#D4AF37) with 10-shade palettes defined in globals.css
- **Custom Animations**: fadeIn, fadeInUp, slideInLeft, slideInRight, pulse-subtle with animation-delay utilities
- **Path Alias**: `@/*` maps to project root

### Configuration

- **next.config.ts**: Remote image optimization enabled for all domains
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js core-web-vitals + TypeScript config
