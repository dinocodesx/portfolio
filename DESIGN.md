# Design System

This document outlines the design principles, color palette, typography, and interactive patterns used in the portfolio and UI showcase.

## Core Aesthetic
The project follows a **Minimalist Dark** aesthetic, prioritizing high contrast, ample whitespace (breathing room), and subtle micro-interactions. It draws inspiration from modern "developer-centric" designs and "craft" UI movements.

## Color Palette
The system uses a strictly controlled monochromatic base with functional accents.

| Role | Value | Usage |
| :--- | :--- | :--- |
| **Background (Base)** | `#111` | Primary body background. |
| **Background (Elevated)** | `#0A0A0A` | Preview areas, cards, and tooltips. |
| **Background (Pure)** | `#000` | Fullscreen loaders and deep contrast areas. |
| **Text (Primary)** | `white` | Headings and critical information. |
| **Text (Secondary)** | `#888888` | Body text and descriptions. |
| **Text (Muted)** | `rgba(255, 255, 255, 0.4)` | Subtitles, labels, and metadata. |
| **Accent (Success)** | `rgba(16, 185, 129, 0.1)` | Success states (Emerald 500/10). |
| **Accent (Destructive)** | `rgba(239, 68, 68, 0.1)` | Error/Destructive states (Red 500/10). |
| **Border** | `rgba(255, 255, 255, 0.05)` | Subtle separation of elements. |
| **Selection** | `bg: white, text: #111` | Text highlighting. |

## Typography
The system uses a blend of sans-serif for clarity and serif for character.

- **Primary Sans:** [Inter](https://fonts.google.com/specimen/Inter)
  - Used for all interface elements, body text, and headings.
  - Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold).
- **Secondary Serif:** System Serif (Italic)
  - Used sparingly for breadcrumbs, UI labels, and "craft" feel.
- **Monospace:** System Mono
  - Used for code snippets and technical metadata.

## Layout & Spacing
- **Container Widths:**
  - Portfolio Pages: `max-w-2xl` (672px) for optimal reading.
  - UI Showcases: `max-w-4xl` (896px) to allow for grid previews.
- **Page Padding:** `py-24 md:py-32` providing significant vertical rhythm.
- **Vertical Rhythm:** `space-y-12` between major sections.
- **Inner Spacing:** `space-y-4` or `space-y-6` for sub-sections.

## Design Tokens (Tailwind 4)
- **Border Radii:**
  - Standard Cards: `rounded-2xl`
  - Interactive Elements (Buttons): `rounded-full` or `rounded-xl`
  - Small Elements (Badges): `rounded-full`
- **Opacity Scale:**
  - Primary Text: `opacity-100` (white)
  - Secondary/Body: `opacity-50` to `opacity-70`
  - Muted/Metadata: `opacity-30` to `opacity-40`

## Interactive Patterns
### Motion & Transitions
Leverages `motion/react` (formerly Framer Motion) for fluid state transitions.
- **Page Entrances:** Staggered fade-in/slide-up for all elements using `containerVariants` and `itemVariants`.
- **Haptics:** `active:scale-95` on all buttons and clickable cards for immediate tactile feedback.
- **Hover States:** 
  - Text: `hover:text-white` and `transition-colors`.
  - Icons: `group-hover:translate-x-1` or `group-hover:scale-110`.
- **Transition Quality:** Always use `transition-all` or specific property transitions (e.g., `transition-transform`) with default durations.

### Glassmorphism
Used for elevated components like Navigation Bars and Mobile Chat interfaces.
- **Blur:** `backdrop-blur-md`
- **Surface:** `bg-white/5`
- **Edge:** `border-white/10`
- **Shadow:** `shadow-xl` or custom glow effects for emphasized actions.

## UI Library Components
The `/ui` section serves as a showcase for independent component "crafts":
1. **Async States:** Buttons that transition from loading to success without layout shifts.
2. **Tactile Elements:** Icons that bounce or scale on interaction.
3. **Layered Interfaces:** Command palettes and sidebars using z-index and backdrop filters for depth.
