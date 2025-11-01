# Espaze Landing Page

A modern, optimized Next.js landing page for Espaze e-commerce logistics platform.

## 🚀 Getting Started

```bash
npm install          # Install dependencies
npm run dev         # Start development server at http://localhost:3000
npm run build       # Build for production
npm start           # Run production build
```

## 📁 Project Structure

```
espazeLandingPage/
├── app/
│   ├── page.tsx                 # Home page
│   └── seller/page.tsx          # Seller page
├── src/
│   └── components/
│       ├── shared/              # Shared components
│       │   ├── Button.tsx       # Reusable button
│       │   └── Navbar.tsx       # Navigation bar
│       ├── home/                # Home page components
│       │   ├── HowItWorksSection.tsx
│       │   └── BuyersSellersSection.tsx
│       └── seller/              # Seller page components
│           ├── HeroSection.tsx
│           ├── FeaturesSection.tsx
│           └── JoinNetworkSection.tsx
└── public/                      # Static assets
```

## 🎨 Components

### Button (Shared)
```tsx
import Button from "@/src/components/shared/Button";

<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary" size="md">Cancel</Button>
```
**Variants:** primary | secondary | outline  
**Sizes:** sm | md | lg

### Using Components
Components are organized by page:

```tsx
// Shared components
import Button from "@/src/components/shared/Button";
import Navbar from "@/src/components/shared/Navbar";

// Home page components
import HowItWorksSection from "@/src/components/home/HowItWorksSection";

// Seller page components
import HeroSection from "@/src/components/seller/HeroSection";
```

## 📝 Common Tasks

### Update Content
Edit data directly in component files:
```tsx
// src/components/seller/FeaturesSection.tsx
const FEATURES = [
  {
    id: 1,
    title: "Your new feature",
    description: "Description here",
  },
  // ...
];
```

### Add New Component
```tsx
// 1. Create: src/components/home/NewSection.tsx
export default function NewSection() {
  return <section>{/* content */}</section>;
}

// 2. Import in page: app/page.tsx
import NewSection from "@/src/components/home/NewSection";
```

## 🎯 Import Pattern

```tsx
// Organized by page
import Button from "@/src/components/shared/Button";
import Navbar from "@/src/components/shared/Navbar";
import HowItWorksSection from "@/src/components/home/HowItWorksSection";
import HeroSection from "@/src/components/seller/HeroSection";
```

## 💡 Key Features

- ✅ Organized by page (shared/, home/, seller/)
- ✅ Easy to find page-specific components
- ✅ Shared components in one place
- ✅ TypeScript for type safety
- ✅ Performance optimized with React.memo
- ✅ Responsive design with Tailwind CSS
- ✅ Custom spacing system with CSS variables

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package Manager:** npm

## 📦 Adding New Components

1. Choose the right folder:
   - **Shared** (used by multiple pages) → `src/components/shared/`
   - **Home page only** → `src/components/home/`
   - **Seller page only** → `src/components/seller/`

2. Create file and add component code

3. Import in your pages

**Clear organization by page!**
