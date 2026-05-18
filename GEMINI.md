# Project Architecture & Scalability Guide

This project has been restructured from a flat type-based structure to a **Feature-Based Architecture**. This design allows the application to scale effectively as more content (blogs, UI components, templates) is added.

## Directory Structure

### `src/features/`
Domain-driven modules. Each feature contains its own components, hooks, and logic.
- `portfolio/`: Core portfolio components (Experiences, Skills, etc.)
- `crafts/`: The UI Lab / Showcase. 
  - `components/`: Experimental components and full product templates. Organized into folders that match their URL segments (e.g., `button/index.tsx`, `mobile-chat/index.tsx`).
  - `mobile-chat/`: Shared logic for the mobile chat demo.
  - `mockup/`: Reusable device mockups (e.g., IPhoneMockup).
- `blog/`: Logic and components for the blog engine.

### `src/components/`
Shared cross-feature components.
- `ui/`: Design system primitives (Buttons, Inputs, Cards, Alert, Toast, Label). These are highly reusable, headless-ready atoms used by crafts and the main portfolio.
- `layout/`: Shared layout components (PageLayout, ScrollToTop, Footer).

### `src/content/` (Planned)
Place for non-code content.
- `blogs/`: Store `.md` or `.mdx` files here.
- `projects/`: Store detailed project data or case studies.

### `src/pages/`
Thin wrappers that import features and define routes. They should contain minimal logic.

## How to Scale

### 1. Adding a New Blog Post
- **Phase 1 (Current):** Add a new entry to `src/constants/data.ts` in `BLOGS_DATA`.
- **Phase 2 (Scalable):** Create a new `.md` file in `src/content/blogs/`. Use a Markdown parser in `src/features/blog/` to dynamically load these files.

### 2. Adding a New UI Craft
1. Create a new folder in `src/features/crafts/components/` matching your desired URL (e.g., `src/features/crafts/components/my-new-component/`).
2. Create an `index.tsx` file inside that folder.
3. Register the new craft in `src/constants/data.ts` under `UI_DATA`.
4. Add the route to `src/App.tsx` under the `/ui` prefix. Use `React.lazy` for large templates to keep the initial bundle size small.

### 3. Creating a Reusable Component
If you build a component that should be shared across the whole app, create a folder for it in `src/components/ui/` (e.g., `src/components/ui/MyComponent/index.tsx`).

### 3. Creating a New Feature
If you start building a new large module (e.g., an interactive System Design tool), create a new folder in `src/features/system-design/` and follow the same pattern.

## Guidelines
- **Import Depth:** Avoid deep relative imports where possible. Use the `@/` alias (configured to root) or update `tsconfig.json` to alias `@features`, `@components`, etc.
- **Component Placement:** If a component is used in more than one feature, move it to `src/components/`. If it's specific to a feature, keep it in `src/features/<feature_name>/components/`.
- **Logic Separation:** Keep complex state logic in hooks (`src/hooks/` or `src/features/<feature_name>/hooks/`) rather than inside component files.
