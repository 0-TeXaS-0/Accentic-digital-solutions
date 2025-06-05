# Accentic Digital Solutions Website

A modern, responsive website for a digital marketing agency built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- Responsive design that works on all devices
- Smooth animations and transitions using Framer Motion
- Optimized performance with Next.js
- Modern UI components with Shadcn/UI
- Fully customizable
- SEO-friendly structure

## 📋 Pages

- Home
- About
- Services
- Portfolio
- Blog
- Contact
- Privacy Policy

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful, customizable icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- pnpm (recommended) or npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/accentic-digital.git
cd accentic-digital
```

2. Install dependencies
```bash
pnpm install
# or
npm install
```

3. Run the development server
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Project Structure

```
├── .next/           # Next.js build output (generated)
├── app/             # App router pages
│   ├── about/       # About page
│   ├── blog/        # Blog page
│   ├── contact/     # Contact page
│   ├── portfolio/   # Portfolio page
│   ├── privacy/     # Privacy policy page
│   ├── services/    # Services page
│   ├── globals.css  # Global styles
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── components/      # React components
│   ├── ui/          # UI components (from shadcn/ui)
│   ├── About.tsx    # About section component
│   ├── Brands.tsx   # Brands showcase component
│   ├── CTA.tsx      # Call to action component
│   └── ...          # Other components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── public/          # Static assets
└── styles/          # Additional styles
```

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn UI configuration

## 🚢 Deployment

This project can be deployed using [Vercel](https://vercel.com/) (recommended for Next.js projects):

```bash
pnpm build
# or
npm run build
```

The build output will be in the `.next` folder.

## ⚠️ Important Notes

- The `.next` folder contains build artifacts and should not be committed to your repository.
- Make sure to include it in your `.gitignore` file.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

