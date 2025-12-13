# Deepgital — Agence Web et Créative

Portfolio minisite pour Deepgital, une agence web et créative, développé avec Next.js 14, Tailwind CSS et Framer Motion.

## 🚀 Stack Technique

- **Framework**: Next.js 14 avec App Router
- **Styling**: Tailwind CSS 3.4 avec configuration custom
- **Animations**: Framer Motion 11
- **Icônes**: Lucide React
- **Police**: Inter (Google Fonts) avec variable font
- **Déploiement**: Configuration Vercel-ready

## ✨ Fonctionnalités

- **Animation d'entrée unique**: Écran d'accueil avec le titre "Deepgital" qui se transforme en navbar au clic
- **Effet Liquid Glass**: Animations subtiles avec réfractions lumineuses sur le titre
- **Design System Apple**: Exécution pixel-perfect inspirée des principes de design Apple
- **Glassmorphism**: Cartes et navbar avec effet glass moderne
- **Animations fluides**: Scroll reveal, stagger animations, et micro-interactions
- **Responsive**: Design adaptatif avec bottom tab bar sur mobile
- **Accessibilité**: Support prefers-reduced-motion, skip links, ARIA labels
- **Performance**: Optimisation images, lazy loading, CSS critique

## 🏗️ Architecture

```
src/
├── app/
│   ├── layout.tsx          # Layout racine avec police Inter
│   ├── page.tsx            # Page d'accueil principale
│   └── globals.css         # Styles globaux et variables CSS
├── components/
│   ├── LandingTitle.tsx    # Titre d'accueil animé
│   ├── Navbar.tsx          # Navigation desktop et mobile
│   ├── Hero.tsx            # Section héro
│   ├── Services.tsx        # Grille des services
│   ├── Projects.tsx        # Showcase projets bento grid
│   ├── About.tsx           # Section à propos
│   ├── Contact.tsx         # CTA contact
│   ├── Footer.tsx          # Pied de page
│   └── ui/
│       ├── GlassCard.tsx   # Carte glassmorphism réutilisable
│       ├── Button.tsx      # Boutons primaire/secondaire
│       ├── Badge.tsx       # Badge/étiquette
│       └── Container.tsx   # Container responsive
├── hooks/
│   └── useTransition.ts    # Hooks pour transitions et animations
└── lib/
    └── animations.ts       # Variants Framer Motion
```

## 🎨 Design System

### Couleurs

- **Blanc pur**: `#FFFFFF`
- **Blanc doux**: `#FAFAFA`
- **Noir doux**: `#0A0A0A`
- **Gris palette**: `#E8E8ED` → `#1D1D1F`
- **Glass**: `rgba(255, 255, 255, 0.72)` avec backdrop-blur

### Typographie

- Police: Inter (variable font)
- Hero: `clamp(3.5rem, 8vw, 6rem)`
- Titres: `clamp(2rem, 4vw, 3rem)`
- Corps: `1.0625rem`

### Espacements

- Base: 4px → 128px (système en puissances de 2)
- Border radius généreux style iOS

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start
```

## 🌐 Déploiement

Le projet est prêt pour un déploiement sur Vercel:

```bash
# Via Vercel CLI
vercel

# Ou connecter le repo GitHub à Vercel
```

## 📱 Responsive

- **Desktop** (> 1024px): Navigation horizontale
- **Tablette** (768px - 1024px): Grilles adaptées
- **Mobile** (< 768px): Bottom tab bar, layout vertical

## ♿ Accessibilité

- Skip link vers le contenu principal
- Support `prefers-reduced-motion`
- Focus visible sur éléments interactifs
- ARIA labels sur boutons icône
- Contraste minimum 4.5:1

## 📄 License

MIT © Deepgital
