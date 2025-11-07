# Espaze Landing Page

A modern, responsive landing page for Espaze - a smart warehousing and instant delivery platform.

## 🎨 Design Features

- **Purple/Violet Theme**: Modern color scheme with purple gradients and accents
- **Smooth Animations**: CSS-based animations with scroll-triggered reveals
- **Parallax Effects**: Subtle parallax scrolling on hero section
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Elements**: Hover effects, smooth transitions, and dynamic components

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📁 Project Structure

```
espazeLandingPage/
├── app/
│   ├── page.tsx           # Main landing page composition
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles and animations
├── components/
│   ├── sections/          # Page sections
│   │   ├── Header.tsx     # Navigation header with mobile menu
│   │   ├── Hero.tsx       # Hero section with gradient background
│   │   ├── Services.tsx   # Services showcase
│   │   ├── Steps.tsx      # 3-step process timeline
│   │   ├── BuyersSellers.tsx  # Benefits for both audiences
│   │   ├── Products.tsx   # Product showcase
│   │   └── Footer.tsx     # Footer with branding
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Custom button component
│   │   ├── Card.tsx       # Card component with hover effects
│   │   └── Container.tsx  # Max-width container wrapper
│   └── animations/        # Animation utilities
│       ├── ScrollReveal.tsx   # Intersection Observer wrapper
│       └── useParallax.ts     # Parallax scroll hook
└── component/
    └── steps.tsx          # (Legacy - migrated to components/sections)
```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

### Hero
- Gradient purple background
- Animated floating elements with parallax
- Call-to-action buttons
- Responsive typography

### Services
- Service cards with icons
- Placeholder areas for images
- Hover animations
- Scroll-triggered reveals

### How It Works (3 Steps)
- Timeline visualization
- Alternating card layout
- Feature checklist
- Purple theme integration

### Buyers & Sellers
- Two-column benefit lists
- Distinct styling for each audience
- Placeholder image areas
- Responsive grid layout

### Products
- Product showcase cards
- Navigation dots
- Placeholder content areas
- Interactive elements

## 🎨 Color Palette

- **Primary Purple**: `#7C3AED`
- **Secondary Purple**: `#8B5CF6`
- **Accent**: `#A78BFA`
- **Light Purple**: `#EDE9FE`
- **Background**: `#F3F4F6`
- **Text**: `#1F2937`

## ✨ Animation Features

- **Fade In**: Elements fade in on scroll
- **Slide In**: Left and right slide animations
- **Scale In**: Gentle scale-up effect
- **Float**: Continuous floating animation
- **Parallax**: Scroll-based movement
- **Hover Effects**: Smooth transitions on interactive elements

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --primary: #7C3AED;
  --secondary: #8B5CF6;
  /* ... */
}
```

### Modifying Animations

Edit animation keyframes in `app/globals.css` or adjust timing in component files.

### Adding New Sections

1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Wrap with `ScrollReveal` for scroll animations

## 📄 License

Private project for Espaze.

## 🤝 Contributing

This is a proprietary project. For questions or contributions, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
