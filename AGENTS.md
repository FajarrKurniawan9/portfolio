<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-ux-design-system -->
# PORTFOLIO DESIGN SYSTEM & ANTI-AI SLOP DIRECTIVE 

You are operating inside the portfolio repository of a Backend Engineer. The design standard here is uncompromising. You MUST adhere to the "High-end Developer Tools" aesthetic (inspired by Vercel, Linear, Geist UI, and Shadcn UI) and strictly avoid typical "AI Slop" templates.

## 1. ABSOLUTE FORBIDDEN ELEMENTS (DO NOT USE)
- NO NEON GLOWS: Do not use blurry drop shadows or radial gradients behind components (especially neon green).
- NO GENERIC COLOR PALETTES: Do not use `text-green-400`, `bg-green-500` or typical "hacker green" as primary accents.
- NO BORING GRIDS: Do not map data into repetitive, identical, 50/50 split box cards with typical drop shadows. 
- NO FAKE JSON: Do not render generic JS/JSON objects (e.g., `const developer = { ... }`) as visual elements.

## 2. COLOR PALETTE (HIGH-END MONOCHROME)
- Backgrounds: Solid Pitch Black (`bg-black` or `bg-zinc-950`).
- Text Primary: Pure White or light gray (`text-zinc-100`).
- Text Secondary: Muted gray (`text-zinc-500` or `text-zinc-400`).
- Borders: Hairline subtlety (`border-zinc-800` or `border-white/10`).
- Accents: Use inverted monochrome for CTAs (Black text on White bg, or Ghost text on `hover:bg-white/5`). If status indicators are needed, use a tiny `w-2 h-2 rounded-full bg-emerald-500` (Never larger).

## 3. TYPOGRAPHY (GEIST & MONO)
- Base/Headers: Use sans-serif with tight tracking (`tracking-tight` or `-tighter`) for H1/H2 heading elements to appear technical and sharp (Geist Sans if available).
- Numbers/Code/Metadata: Use Monospace fonts (Geist Mono, JetBrains Mono) with relaxed tracking (`tracking-widest`, `text-[10px]`, `uppercase`) for labels, badges, or terminal-like UI elements.

## 4. COMPONENT ARCHITECTURE (NO BORING GRIDS)
- Borders & Cards: Favor borderless lists separated by subtle bottom-borders (`border-b border-zinc-800`) instead of floating cards. If cards are essential, they must have zero shadows (`shadow-none`) and only 1px hairline borders.
- Terminal Vibe: Represent Backend focus via hyper-realistic terminal outputs, stdout logs, or JSON/table presentations replacing standard skills/experience cards.
- Hover Effects: Interactions should be subtle (background shifts like `hover:bg-white/5`, not glowing dropshadows).
- Assets: Use `/avatar.webp` for profile images. Embed them in clean, high-contrast frames.

When modifying UI components, ALWAYS CROSS-REFERENCE THESE DIRECTIVES FIRST. DO NOT GENERATE SLOP.
<!-- END:ui-ux-design-system -->