# New-day-Gym 🏋️‍♂️

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-green?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-purple?logo=tailwindcss)](https://tailwindcss.com/)

A modern, responsive gym & fitness website built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Features personalized programs, BMI calculator, trainers, blog, WhatsApp integration, and glassmorphism animations. Kenyan-focused with KSh pricing.

![Screenshot](https://via.placeholder.com/1200x600/0a0a0a/ffffff?text=New-day-Gym+Hero+Section) <!-- Replace with actual screenshot -->

## ✨ Features

- **Hero & Sections**: Engaging hero, about, programs pricing (Student KSh4k+, couples/family deals), BMI calculator, operating hours, gallery, testimonials, contact.
- **Pages**:
  - Home (`/`): Full landing experience.
  - Trainers (`/trainers`): 4 expert coaches (Allan, Calvin, Mike, Sarah) with specialties & WhatsApp booking.
  - Blog (`/blog`): 8+ articles on workouts (PPL split), nutrition, tips (home gym setup), health.
- **Interactive**: Smooth scrolling nav (hybrid Router + hash), Framer Motion animations, React Hook Form, optimized images.
- **Mobile-First**: Fully responsive, glassmorphism UI, fast loading.
- **Integrations**: WhatsApp links, Tanstack Query, React Router.

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | React 18, Vite 5 |
| Styling | Tailwind CSS 3, shadcn/ui, Tailwind Merge, Animate, Typography |
| State/Data | Tanstack Query, React Hook Form, Zod |
| Routing/UI | React Router, Framer Motion, Lucide Icons |
| Utils | Class Variance Authority (CVA), Clsx |
| Testing | Vitest, Testing Library |
| Other | Embla Carousel, Sonner Toasts, Next Themes |

## 🚀 Quick Start

1. **Clone/Fork**:
   ```bash
   git clone <your-repo-url>
   cd New-day-Gym
   ```

2. **Install**:
   ```bash
   npm install
   ```

3. **Development**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

4. **Build for Production**:
   ```bash
   npm run build
   npm run preview
   ```

5. **Other Scripts**:
   ```
   npm run lint     # ESLint
   npm test         # Vitest
   npm run test:watch
   ```

## 📁 Project Structure

```
New-day-Gym/
├── public/          # Static assets (placeholder.svg, robots.txt)
├── src/
│   ├── pages/       # Routes: Index.tsx, Blog.tsx, Trainers.tsx, BlogPost.tsx
│   ├── components/  # UI: Navbar, HeroSection, BMICalculator, ProgramsSection...
│   │   └── ui/      # shadcn/ui primitives (button, card, toast...)
│   ├── data/        # blogPosts.ts
│   ├── hooks/       #
│   └── lib/         # utils.ts
├── package.json     # Dependencies & scripts
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── TODO.md          # Recent: Navbar fix complete
└── TODO_README.md   # Current progress
```

## 🌐 Demo

- **Live**: [TBD - Deploy to Vercel/Netlify](https://vercel.com/new) (one-click from GitHub).
- **Screenshots**: Hero, trainers grid, blog list, mobile nav.

## 🔮 Roadmap / TODO

See [TODO.md](TODO.md) for recent completions (e.g., Navbar hybrid nav).
- Add more blog posts.
- Deploy to Vercel.
- Analytics (Google/UMG).
- Newsletter signup.
- More trainers/programs.

## 🤝 Contributing

1. Fork & clone.
2. `npm install && npm run dev`.
3. Create branch: `git checkout -b feature/xyz`.
4. Commit: `git commit -m "feat: add xyz"`.
5. PR to `main`.

## 📄 License

MIT - Feel free to use/modify!

---

⭐ **Star/Fork if useful!** Questions? Open an issue.
