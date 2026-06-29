---
name: Calm Technical Utility
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 12px
  margin-desktop: 24px
---

## Brand & Style
The design system is centered on **Operational Efficiency** and **Technical Clarity**. It is a utility-first framework designed for systems engineers and developers who require high-density data visualization without cognitive overload. 

The aesthetic follows a **Calm Product UI** philosophy:
- **Minimalism & Precision:** Eliminates all decorative flourishes to prioritize data.
- **Functional Hierarchy:** Uses subtle tonal shifts rather than loud colors to guide the eye.
- **Utility-Focused:** The interface feels like a high-end instrument—reliable, predictable, and robust.
- **Atmosphere:** Professional, quiet, and stable, reducing stress during root-cause analysis or high-frequency monitoring.

## Colors
The palette is grounded in a deep slate primary to establish authority and professional stability. 

- **Primary (#1E293B):** Used for navigation, primary actions, and high-level structural elements.
- **Neutral/Secondary (#64748B):** Used for metadata, labels, and secondary supporting text.
- **Semantic States:** Emerald, Amber, and Red are reserved strictly for status communication (Success, Warning, Error) to ensure they pop against the neutral background.
- **Surfaces:** The background uses a very cool-toned white (#F8FAFC) to reduce glare, with hairline borders (#E2E8F0) providing structure without the weight of heavy shadows.

## Typography
Typography is optimized for legibility in data-heavy environments. 

- **Primary Sans (Inter):** Chosen for its tall x-height and exceptional readability at small sizes. Used for all UI controls and standard text.
- **Monospace (JetBrains Mono):** Used for all technical data points, including IP addresses, timestamps, terminal outputs, and hash IDs. This ensures vertical alignment of characters, making it easier to scan lists of numbers.
- **Scale:** The type scale is compact. We favor `13px` and `14px` for body text to maintain high information density. 
- **Caps:** Small caps are used for section headers and table column headers to differentiate them from actionable data.

## Layout & Spacing
This design system utilizes a **strict 4px grid system** to maintain mathematical alignment in dense layouts.

- **Grid:** A 12-column fluid grid for desktop with 16px gutters. For utility views, use a "Sidebar + Main Dashboard" layout where the sidebar is fixed at 240px.
- **Density:** Padding within components (like table cells and inputs) should be kept to `8px` (vertical) and `12px` (horizontal) to allow more rows of data to be visible above the fold.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, condensed margins (12px). 
  - **Tablet (768px - 1280px):** Content reflows to 2 columns where appropriate; margins expand to 16px.
  - **Desktop (>1280px):** Full 12-column layout; maximum content width capped at 1600px to prevent excessive line lengths.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ghost Outlines** rather than heavy shadows.

- **Level 0 (Background):** #F8FAFC. The base canvas.
- **Level 1 (Cards/Containers):** White (#FFFFFF) with a 1px border of #E2E8F0. This is the primary surface for data tables and forms.
- **Level 2 (Popovers/Modals):** White (#FFFFFF) with a slightly more pronounced border (#CBD5E1) and a very soft, diffused shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **Focus States:** Elements should use a 2px offset ring in the primary color (#1E293B) to ensure clear keyboard navigation.

## Shapes
The shape language is **Precise and Geometric**. 

- **Border Radius:** A consistent `4px` (Soft) radius is applied to buttons, input fields, and cards. This creates a technical, modern feel that avoids the "consumer" look of highly rounded corners.
- **Status Indicators:** Icons and status dots remain sharp or use minimal rounding to maintain the "utility tool" aesthetic.
- **Interactive Areas:** Hover states should be indicated by subtle background color shifts (e.g., #F1F5F9) rather than dramatic shape changes.

## Components

### Buttons
- **Primary:** Solid #1E293B background, white text. Bold, authoritative.
- **Secondary:** Outline 1px #E2E8F0, #1E293B text. White background.
- **Ghost:** No border or background unless hovered. Used for secondary toolbar actions.

### Data Tables
- **Header:** #F8FAFC background, `label-caps` typography, #64748B text color.
- **Rows:** 1px bottom border #E2E8F0. No alternating zebra stripes; use hover highlighting instead.
- **Cells:** Use `code-sm` for technical identifiers to ensure alignment.

### Status Chips
- **Success:** Emerald text on light emerald tint background (e.g., 10% opacity). Includes "Check" icon.
- **Warning:** Amber text on light amber tint background. Includes "Alert" icon.
- **Error:** Red text on light red tint background. Includes "X" or "Circle-Slash" icon.

### Input Fields
- **Default:** White background, 1px #E2E8F0 border, `body-md` text.
- **Active/Focus:** 1px #1E293B border with a subtle inner glow.
- **Labels:** Always placed above the field in `body-sm` bold, color #1E293B.

### Cards & Panels
- Used to group related metrics or logs. 
- Use a simple 1px #E2E8F0 border.
- Headers should have a subtle bottom divider to separate title from content.