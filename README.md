# Nassau County Home Inspector — Vue 3 One-Pager Site

A complete, modern, reactive **Vue 3 + Vite** single-page application built for **HomeStar Inspection Services, LLC** ([homestarinspectionsny.com](https://homestarinspectionsny.com/)) and **Queens Home Inspector NY** ([queenshomeinspectorny.com](https://queenshomeinspectorny.com/)), targeting home buyers, sellers, and real estate professionals across **Nassau County, Long Island, NY**.

---

## ⚡ Tech Stack & Architecture

- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Bundler & Dev Server:** Vite 6
- **Architecture:** Clean, modular Single File Components (SFCs)
- **Styling:** Custom CSS with CSS variables, responsive design, glassmorphism, and micro-animations
- **SEO & Structured Data:** JSON-LD `HomeAndConstructionBusiness` schema, Open Graph metadata, Google Fonts preconnect

---

## 📁 Project Structure

```
c:\Users\DELL\Desktop\Nassau\
├── index.html                   # HTML entry point with LocalBusiness JSON-LD schema
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite + Vue plugin configuration
├── dist/                        # Production build output (ready to deploy)
│   ├── index.html
│   └── assets/
│       ├── index-*.css
│       └── index-*.js
├── src/
│   ├── main.js                  # Vue 3 createApp entry point
│   ├── App.vue                  # Master root component with modal & lead state
│   ├── assets/
│   │   └── main.css             # Global styles, typography & responsive utility classes
│   ├── data/
│   │   ├── inspectionSystems.js # Detailed 1,700-point systems checklist data
│   │   ├── townsData.js         # Nassau County towns, regions & zip codes
│   │   ├── servicesData.js      # Inspection packages, features & pricing info
│   │   ├── challengesData.js    # Long Island specific building & environmental issues
│   │   ├── reviewsData.js       # Verified customer testimonials
│   │   └── faqsData.js          # Frequently asked questions & answers
│   └── components/
│       ├── TopAnnouncement.vue  # Top banner with Nassau exclusivity & phone number
│       ├── AppHeader.vue        # Sticky header with brand logo & mobile drawer
│       ├── HeroSection.vue      # Hero banner with trust seals & quick quote card
│       ├── MetricsRibbon.vue    # Proof metrics ribbon (1,700+ pts, 20+ yrs, etc.)
│       ├── NassauTowns.vue      # Filterable towns directory (North/Central/South/West)
│       ├── LocalChallenges.vue  # Long Island housing nuances (high water tables, oil tanks)
│       ├── ServicesGrid.vue     # Inspection packages (Buyer, Condo, Multi-Family, etc.)
│       ├── ChecklistExplorer.vue# Interactive 8-system checklist tab viewer
│       ├── WhyInspector.vue     # Daren Koniuk profile & franchise comparison table
│       ├── FeeCalculator.vue    # Reactive Nassau fee estimator with live pricing
│       ├── ReportPreview.vue    # Executive summary report mockup with defect tags
│       ├── ReviewsSection.vue   # Client reviews grid with 5-star badges
│       ├── FaqAccordion.vue     # Smooth toggle FAQ accordion
│       ├── BookingSection.vue   # Direct phone/email blocks & scheduling form
│       ├── AppFooter.vue        # Comprehensive footer with license & legal info
│       ├── BookingModal.vue     # Reusable popup booking modal with confirmation state
│       └── MobileContactBar.vue # Sticky bottom bar on mobile screens (Call / Book)
```

---

## 🛠️ Commands & Scripts

### 1. Run Development Server
```powershell
npm run dev
```
Starts the Vite dev server at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### 2. Build for Production
```powershell
npm run build
```
Compiles and bundles the application into optimized static assets in the `dist/` directory.

### 3. Preview Production Build
```powershell
npm run preview
```
Spins up a local preview server serving the production `dist/` build.

---

## 📱 Fully Responsive Features

1. **Reactive Nassau Fee Calculator (`FeeCalculator.vue`)**:
   - Computes fee estimates in real time as the user selects property type (Single Family, Condo/Co-op, 2-Family, 3-4 Family), moves the square footage slider (800–5,000 sq ft), or switches the property age era.
   - 1-click booking button passes the estimated quote directly into the booking modal.

2. **Real-Time Town Search & Region Tabs (`NassauTowns.vue`)**:
   - Filter by *All*, *North Shore*, *Central Nassau*, *South Shore*, and *Western / Queens Border*.
   - Instant search input matching town names, zip codes, and neighborhood architectural descriptions.

3. **1,700-Point Interactive Systems Explorer (`ChecklistExplorer.vue`)**:
   - Switch between 8 core systems (*Roofing, Foundation & Crawlspaces, Electrical Panels, HVAC & Boilers, Plumbing & Waste Stacks, Attics & Framing, Exteriors & Lot Grading, Wood Destroying Insects*).

4. **Mobile Sticky Action Bar (`MobileContactBar.vue`)**:
   - Persistent bottom bar on smartphones offering quick 1-tap calling to `(718) 208-7092` and 1-tap booking.

5. **Smooth FAQ Accordion (`FaqAccordion.vue`)**:
   - Single-active accordion mode with smooth CSS height transition.

---

## 🌐 Deploying to Live Domains

To deploy this site under `https://homestarinspectionsny.com/nassau/` or `https://queenshomeinspectorny.com/nassau/`:

1. Run `npm run build` to generate the production build.
2. Upload the contents of the `dist/` folder to the `/nassau/` directory on your server (`public_html/nassau/`).
3. It will run as a high-speed, static single-page app with zero server runtime overhead!
