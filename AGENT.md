# AGENT.md — Contexte pour Claude Code

Ce fichier est lu automatiquement par Claude Code à chaque session. Il décrit l'architecture du projet et les conventions à respecter lors de toute modification.

---

## Qu'est-ce que ce projet ?

Un **boilerplate Astro SSG** (Static Site Generation) destiné à produire des **sites vitrines professionnels** simples, rapides à déployer et bien optimisés pour le SEO.

- Framework : **Astro 4** en mode `output: "static"`
- Styling : **Tailwind CSS 3** (dark mode `class`)
- Blog : **Astro Content Collections** (Markdown)
- Déploiement : **Cloudflare Workers** (via Wrangler) ou tout hébergeur static
- Langue par défaut : **Français**, modifiable dans `src/data/site.config.ts`

---

## Fichier de configuration principal

> **`src/data/site.config.ts`** est le point d'entrée unique pour personnaliser un site client.

Il contient :
- Nom, tagline, description, mots-clés SEO
- Coordonnées (email, téléphone, adresse)
- Liens sociaux (LinkedIn, Instagram, Twitter, GitHub, YouTube)
- Liens de navigation (`navLinks`)
- Couleurs de thème

**Toujours modifier ce fichier en premier** avant de toucher les composants.

---

## Architecture du projet

```
src/
├── assets/
│   └── global.css          # Tailwind directives + overrides prose
├── components/
│   ├── global/
│   │   ├── Header.astro    # Barre de navigation principale
│   │   ├── Footer.astro    # Pied de page (lit site.config.ts)
│   │   ├── Navigation.astro # Liens nav (desktop + mobile overlay)
│   │   ├── Logo.astro      # Logo / nom du site (lien vers /)
│   │   ├── Hamburger.astro # Bouton menu mobile
│   │   ├── ThemeToggle.astro # Toggle dark/light mode
│   │   └── HeadMeta.astro  # Tags SEO injectés dans <head>
│   └── blog/
│       └── PostCard.astro  # Carte d'aperçu d'un article
├── content/
│   ├── config.ts           # Schéma Zod de la collection "blog"
│   └── blog/               # Articles en Markdown (.md)
├── data/
│   └── site.config.ts      # ← CONFIGURATION PRINCIPALE
├── layouts/
│   ├── BaseLayout.astro    # Layout de base (head + header + footer)
│   └── BlogPostLayout.astro # Layout article de blog
├── pages/
│   ├── index.astro         # Page d'accueil (Hero, Services, About, Contact)
│   ├── 404.astro           # Page d'erreur
│   ├── rss.xml.ts          # Flux RSS auto-généré
│   ├── blog/
│   │   ├── [...page].astro # Liste paginée des articles (/blog/1/, /blog/2/…)
│   │   └── [slug].astro    # Article individuel (/blog/mon-article/)
│   └── tags/
│       └── [tag].astro     # Articles filtrés par tag (/tags/nom-du-tag/)
└── scripts/
    ├── menu.js             # Toggle menu mobile
    └── remark-reading-time.mjs # Plugin remark pour le temps de lecture
```

---

## Conventions de code

### Composants Astro
- Chaque composant reçoit ses données via `Astro.props` avec interface TypeScript explicite.
- Les composants globaux lisent `siteConfig` depuis `@data/site.config` — pas de texte en dur.
- Utiliser `export const prerender = true` est inutile ici (le build entier est SSG).

### CSS / Tailwind
- **Pas de classes couleur en dur** dans les composants (`bg-green-600` etc.) : utiliser les variables sémantiques `brand-*` et `accent-*` définies dans `tailwind.config.cjs`.
- Dark mode via préfixe `dark:` Tailwind.
- Prose (articles) : classe `prose prose-slate dark:prose-invert` sur le conteneur de l'article.

### Markdown / Blog
Frontmatter obligatoire pour chaque article :
```yaml
---
title: "Titre"
description: "Résumé SEO (150 chars max)"
pubDate: 2024-01-15        # ISO date
author: "Prénom Nom"
tags: ["tag1", "tag2"]
draft: false               # true = non publié
image: "/images/blog/mon-image.jpg"  # optionnel
---
```

### Typographie
- `font-sans` → corps du texte (Inter par défaut, à remplacer selon le client)
- `font-title` → titres / headings
- `font-mono` → code (JetBrains Mono par défaut)
- Ces familles sont configurées dans `tailwind.config.cjs` et chargées dans `BaseLayout.astro` via Google Fonts (ou auto-hébergées si besoin de confidentialité).

---

## Checkliste de démarrage pour un nouveau site client

1. **Éditer `src/data/site.config.ts`** — nom, tagline, description, email, liens sociaux, nav
2. **Mettre à jour `astro.config.mjs`** — changer `site:` en URL de production du client
3. **Remplacer les polices** dans `BaseLayout.astro` (balise `<link>` Google Fonts) et `tailwind.config.cjs`
4. **Adapter les couleurs** `brand.*` et `accent.*` dans `tailwind.config.cjs`
5. **Personnaliser `src/pages/index.astro`** — contenu des sections Hero, Services, About, Contact
6. **Remplacer `public/favicon.svg`** + générer les icônes manquantes sur [realfavicongenerator.net](https://realfavicongenerator.net)
7. **Ajouter `public/og-meta-img.jpg`** — image de prévisualisation sociale (1200×630 px)
8. **Mettre à jour `wrangler.toml`** — changer `name` = nom du projet Cloudflare
9. **Configurer les secrets GitHub** : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `SITE_URL`
10. **Supprimer l'article de démo** `src/content/blog/bienvenue.md` et ajouter le vrai contenu

---

## SEO

- **Sitemap** : auto-généré par `@astrojs/sitemap` au build → `/sitemap-index.xml`
- **RSS** : disponible à `/rss.xml`
- **robots.txt** : dans `public/robots.txt`
- **Canonical URL** : injectée automatiquement par `HeadMeta.astro` depuis `Astro.site`
- **Open Graph + Twitter Card** : injectés par `HeadMeta.astro`
- **Structured data** : `Schema.org/Article` dans `BlogPostLayout.astro`
- **Temps de lecture** : calculé au build par le plugin remark, disponible dans `remarkPluginFrontmatter.minutesRead`

---

## Déploiement

### Cloudflare Workers (recommandé)
```bash
npm run build
npx wrangler deploy
```
CI/CD automatique via `.github/workflows/deploy.yml` sur push vers `main`.

### Netlify / Vercel / tout hébergeur static
```bash
npm run build
# Déployer le dossier dist/
```

---

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (port 3000) |
| `npm run build` | Build SSG → `dist/` |
| `npm run preview` | Prévisualisation du build |

---

## Points d'attention

- **Pas de JavaScript côté serveur** : tout est pré-rendu. Les formulaires de contact doivent utiliser un service externe (Resend, Formspree, etc.).
- **Fonts** : pour des clients sensibles à la vie privée, passer les polices en auto-hébergées (`@font-face` dans `global.css`) plutôt que Google Fonts.
- **Images** : placer les images du blog dans `public/images/blog/` et les référencer par chemin absolu (`/images/blog/mon-image.jpg`).
- **Draft** : les articles avec `draft: true` ne sont pas inclus dans le build.
