# Astro Vitrine Boilerplate

Un boilerplate **Astro SSG** minimaliste et neutre, conçu pour produire rapidement des sites vitrines professionnels. Optimisé pour le SEO, le dark mode, et le déploiement sur Cloudflare.

## Stack technique

| Outil | Rôle |
|-------|------|
| [Astro 4](https://astro.build) | Framework SSG |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling utility-first |
| [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) | Prose articles |
| [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) | Blog Markdown |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap auto |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | Flux RSS |
| [astro-compressor](https://github.com/gazelmx/astro-compressor) | Brotli/Gzip |
| [Cloudflare Workers](https://workers.cloudflare.com/) | Hébergement |

---

## Démarrage rapide

```bash
# Cloner / copier le boilerplate
cp -r path/to/boilerplate mon-projet-client
cd mon-projet-client

# Installer les dépendances
npm install

# Configurer le projet
cp .env.example .env
# → éditer .env pour mettre la vraie URL de production

# Lancer le serveur de dev
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Configuration du site client

Tout est centralisé dans **`src/data/site.config.ts`** :

```typescript
const siteConfig = {
  name: "Nom du Client",
  tagline: "Votre tagline ici",
  description: "Description SEO...",
  email: "contact@example.com",
  social: {
    linkedin: "https://linkedin.com/in/...",
    instagram: "",
    // ...
  },
  navLinks: [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog/1/" },
    { label: "Contact", href: "/#contact" },
  ],
};
```

---

## Personnalisation

### 1. Couleurs (brand palette)
Éditer `tailwind.config.cjs` → remplacer les valeurs `colors.brand.*` et `colors.accent.*` par les couleurs du client.

### 2. Typographie
Dans `tailwind.config.cjs`, modifier `fontFamily.sans` / `fontFamily.title` / `fontFamily.mono`.
Mettre à jour le lien Google Fonts dans `src/layouts/BaseLayout.astro`.

### 3. Page d'accueil
Éditer `src/pages/index.astro` directement — les sections Hero, Services, About, Contact sont toutes dans ce fichier.

### 4. Favicon
Remplacer `public/favicon.svg` puis générer les variantes PNG sur [realfavicongenerator.net](https://realfavicongenerator.net).

### 5. Image OG
Placer une image `1200×630` dans `public/og-meta-img.jpg`.

---

## Blog

Les articles sont des fichiers Markdown dans `src/content/blog/`.

**Frontmatter obligatoire :**
```yaml
---
title: "Titre de l'article"
description: "Résumé SEO (150 chars max)"
pubDate: 2024-01-15
author: "Prénom Nom"
tags: ["tag1", "tag2"]
draft: false
image: "/images/blog/mon-image.jpg"  # optionnel
---

Contenu en Markdown...
```

**Routes générées automatiquement :**
- `/blog/1/` — liste paginée (9 par page)
- `/blog/mon-article/` — article individuel
- `/tags/mon-tag/` — articles par tag
- `/rss.xml` — flux RSS

---

## SEO inclus

- Sitemap automatique (`/sitemap-index.xml`)
- `robots.txt`
- Balises Open Graph + Twitter Card
- URL canonique
- `Schema.org/Article` sur les articles
- Temps de lecture calculé au build
- Polices via Google Fonts (ou auto-hébergées pour la confidentialité)

---

## Déploiement

### Cloudflare Workers

1. Mettre à jour `wrangler.toml` → changer `name`
2. Configurer les secrets GitHub :
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `SITE_URL` (ex: `https://monsite.fr`)
3. Push sur `main` → déploiement automatique via GitHub Actions

### Build manuel
```bash
npm run build
# Le dossier dist/ est prêt à être déposé sur n'importe quel hébergeur static
```

---

## Structure des fichiers

```
src/
├── assets/global.css          # Tailwind + overrides
├── components/
│   ├── global/                # Header, Footer, Nav, Logo, ThemeToggle…
│   └── blog/                  # PostCard
├── content/
│   ├── config.ts              # Schéma Content Collection
│   └── blog/                  # Articles .md
├── data/site.config.ts        # ← CONFIG PRINCIPALE
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogPostLayout.astro
└── pages/
    ├── index.astro            # Page d'accueil
    ├── 404.astro
    ├── rss.xml.ts
    ├── blog/[...page].astro   # Liste paginée
    ├── blog/[slug].astro      # Article
    └── tags/[tag].astro       # Filtre par tag
```

---

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur dev (port 3000) |
| `npm run build` | Build SSG → `dist/` |
| `npm run preview` | Prévisualisation du build |

---

*Boilerplate maintenu par Pickle Agency.*
