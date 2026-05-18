# Design System: Syncra Studio

## Philosophy
Syncra Studio is a minimalist, high-contrast design system optimized for modern AI applications. It blends brutalist layout structures with soft, glassmorphic surfaces to create a "Technical Premium" aesthetic.

## Core Principles
1.  **High Contrast / Low Noise**: Use deep blacks (`#000000`, `#0A0A0A`) as the canvas. Text is either pure white or highly desaturated (`white/40`).
2.  **Context-Aware Surfaces**: Surfaces should feel like they are floating above the canvas. Use `backdrop-filter: blur()` and subtle borders (`white/5` or `white/10`).
3.  **Kinetic Typography**: Use serif fonts for narrative elements and index navigation to provide a "magazine" feel, while using clean sans-serif for functional UI.
4.  **Tactile Interaction**: Buttons and interactive elements should have a clear physical response (scaling on click, subtle border glows on hover).

## Color Palette
- **Canvas**: `#000000` (Background), `#0A0A0A` (Secondary panels)
- **Text**: `white` (Primary), `white/40` (Secondary), `white/20` (Disabled/Muted)
- **Accents**: 
  - Emerald (`#10b981`): Success / Online / Ready
  - Amber (`#f59e0b`): Warning / Processing / Pending
  - Red (`#ef4444`): Error / Critical / Offline
  - Blue (`#3b82f6`): Info / System / Link

## Components & Mockups
To ground the UI Lab designs in reality, all application-level prototypes must be presented within device mockups.

### 1. Mobile (iPhone Mockup)
- **Specs**: 280px x 570px
- **Features**: Dynamic Island, status bar (9:41), home indicator.
- **Usage**: LLM Mobile Chat, Mobile Auth, Voice Interface.

### 2. Desktop (MacBook/iMac Mockup)
- **Specs**: 16:10 or 16:9 aspect ratio.
- **Features**: Notch (optional), rounded bezel, window controls (red/yellow/green), glass footer.
- **Usage**: Web Chat Interface, System Dashboards, IDE Prototypes.

## Motion Guidelines
- **Staggered Entry**: Use `containerVariants` and `itemVariants` for all page transitions.
- **Spring Transitions**: Favor `type: "spring"` for physical movements (opening menus, switching views).
- **Layout Animations**: Use `layout` prop in Framer Motion for automatic height/width adjustments (e.g., Accordions, Chat Bubbles).

## Implementation Rules
- Never use a border-radius of 0. Favor `rounded-xl` (12px) or `rounded-2xl` (16px) for cards, and `rounded-full` for buttons.
- Every border must be semi-transparent: `border-white/5` or `border-white/10`.
- Use `backdrop-blur-md` or `backdrop-blur-xl` on any fixed or floating element.
