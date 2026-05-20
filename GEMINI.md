# Project Structure & Component Guide

This document provides a comprehensive overview of the project structure and the function of each component.

## 🛠 Development Mandates

### 1. Standard Commands
- **Dev:** `pnpm run dev` (Starts Vite on port 3000)
- **Lint:** `pnpm run lint` (Runs `tsc --noEmit` to verify types)
- **Build:** `pnpm run build`
- **Clean:** `pnpm run clean`

### 2. State & Architecture
- **Source of Truth:** All content (Experience, Projects, Building, etc.) MUST be managed in `src/data/`. Do not hardcode content in components.
- **UI Data:** `UI_DATA` in `src/data/ui.ts` MUST be a flat array of `UIItem`. DO NOT create separate sections for apps, components, or elements.
- **Animations:** Use `motion/react` (Framer Motion) exclusively. Reference shared variants in `src/constants/animations.ts` before creating new ones.
- **Routing:** All new pages must be `lazy` loaded in `src/App.tsx`.
- **Styling:** Use Tailwind CSS 4 utility classes. Avoid external CSS files.

### 3. Naming Conventions
- **Components:** `PascalCase` (e.g., `PageLayout.tsx`)
- **Folders:** `kebab-case` (e.g., `mobile-chat`)
- **Assets:** `snake_case` or `kebab-case` (e.g., `favicon_x.png`)

### 4. 🚫 Anti-Patterns
- **No Hardcoding:** Do not put personal data or text strings directly in component files.
- **No External CSS:** Avoid `<style>` tags or `.css` files unless absolutely necessary for third-party overrides.
- **No Div-Soup:** Use `PageLayout` for pages and semantic tags (`section`, `article`, `header`, `footer`) where appropriate.
- **No Type-Casting:** Avoid `as any`. Use proper TypeScript interfaces defined in `data.ts`.

---

## 1. Layout Components (`/src/components/layout`)
These components form the structural shell of the application.

- **`PageLayout.tsx`**: The primary wrapper for all pages. Handles centering, max-width constraints, and the global entrance animation.
- **`UiShowcaseLayout.tsx`**: A shared layout for all UI craft showcase pages to ensure visual consistency.
- **`CommandPalette.tsx`**: A global search and navigation tool triggered by `Cmd+K`. Allows users to jump between pages and themes.
- **`SEO.tsx`**: Manages document head metadata (Title, Description, OpenGraph, Canonical) using standard DOM APIs.
- **`SectionHeading.tsx`**: Consistent styling for section titles within a page.
- **`LinkCard.tsx`**: A reusable card component for external links with hover effects.

---

## 2. Portfolio Components (`/src/components/portfolio`)
Components specific to the personal portfolio sections.

- **`Experiences.tsx`**: Renders professional history with title, company, duration, and technologies.
- **`Skills.tsx`**: Displays categorized technical skills in a clean, list-based format.
- **`Projects.tsx`**: Previews key engineering projects with links to GitHub/Live sites.
- **`Talks.tsx`**: Lists public speaking engagements and workshops.
- **`Blogs.tsx`**: Previews medium/dev.to articles with reading time and excerpts.
- **`Socials.tsx`**: A dedicated section for social media and contact links.
- **`FooterTime.tsx`**: Displays the current time in the user's/owner's locale (Kolkata).
- **`ScrollToTop.tsx`**: Utility to reset scroll position on route changes.
- **`PrintStyles.tsx`**: Optimizes the layout for PDF generation/printing (e.g., for Resume).
- **`Building.tsx`**: Displays "Current Building" status for active side projects.

---

## 3. UI Library (`/src/components/ui`)
Independent components designed for the `/ui` showcase. The landing page (`Ui.tsx`) uses a **Bento Grid** layout with a "laboratory" aesthetic, featuring:
- **`BentoCard`**: A specialized card with monospaced index prefixes (`Index_01`), varied grid spans, and glassmorphic hover effects.
- **`button`**: Collection of button varieties (Solid, Ghost, Async, Destructive).
- **`chat-bubble`**: Modern chat interface elements with status indicators.
- **`llm-chat-input`**: A complex textarea component with file uploads and model selection.
- **`command-palette`**: The standalone component used by the global palette.
- **`mobile-chat`**: A full iPhone-mockup based mobile chat application showcase.
- **`accordion`**, **`alert`**, **`dropdown`**, **`label`**, **`toast`**: Standard UI primitives crafted with custom animations and accessibility in mind.
- **`multi-step-form`**: Complex flow-based components.

---

## 4. Pages (`/src/pages`)
Top-level route components that orchestrate the layout and portfolio/UI sections.

- **`Portfolio.tsx`**: The home page, aggregating Experience, Skills, and Building sections.
- **`Ui.tsx`**: The catalog of all available UI crafts.
- **`Spotify.tsx`**: A dedicated music page showcasing live status, curated playlists, and top artists.
- **`About.tsx`**: Personal background and philosophy.
- **`Projects.tsx`**: Full list of technical projects.
- **`Blogs.tsx`**, **`Talks.tsx`**, **`Socials.tsx`**: Dedicated archive pages.
- **`Resume.tsx`**: A print-optimized view of professional credentials.
- **`Meet.tsx`**: Integration for scheduling meetings.
- **`NotFound.tsx`**: Custom 404 error page.

---

## 5. Constants & Utilities (`/src/constants`)
- **`data.ts`**: The single source of truth for all content (Experience, Projects, Skills, etc.).
- **`animations.ts`**: Centralized Framer Motion variants (container, items, fade-in) used across the project to ensure consistent motion.
