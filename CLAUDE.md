# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application called "knock-store" displaying company information pages. The app uses the Pages Router (not App Router) and displays a series of client-facing images with Thai-language comments suggesting content about company contact, history, and services.
The brand identity colors (Corporate Identity or CI) of this companyare primarily:
This project is mainly use Thai language

Royal Blue (#2E3192) – used as the main background on the left and for graphic accents.

Orange (#F7931E) – used for highlight elements and parts of the logo.

White (#FFFFFF) – used for clean contrast and readability.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

- **Framework**: Next.js 16 with Pages Router
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **React**: v19.2.0 with React Compiler enabled in next.config.ts
- **Package Manager**: Uses Bun lock file (bun.lock)

## Key Files Structure

- `src/pages/index.tsx` - Main page displaying image gallery
- `src/pages/_app.tsx` - Next.js app wrapper
- `src/styles/globals.css` - Global styles with Tailwind CSS and CSS variables
- `next.config.ts` - Next.js config with React Compiler enabled
- `tsconfig.json` - TypeScript config with strict mode and path aliases

## Image Assets

The app expects images in the `public/pages/` directory with the naming pattern:

- `client_01_01.png` through `client_01_07.png`
- Images are displayed at 800x600 resolution with responsive scaling

## Development Notes

- React Compiler is enabled (experimental feature)
- TypeScript strict mode is enabled
- Uses absolute imports with `@/` prefix for src directory
- Tailwind CSS v4 with custom theme configuration
- App is set up for both light and dark mode via CSS variables

