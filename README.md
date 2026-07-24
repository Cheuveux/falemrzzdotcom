# Atelier Nº7 — Starter

Site headless : front Next.js 100% custom, prêt à être branché sur Shopify
(ou tout autre backend e-commerce) sans réécrire les composants.

## Lancer le projet

```bash
npm install
npm run dev
```
Ouvre http://localhost:3000

## Structure

```
app/
  layout.tsx      → polices (Fraunces + Inter), metadata SEO globales
  page.tsx        → homepage, assemble les composants
  globals.css     → design tokens (couleurs, typo) via @theme Tailwind v4

components/
  SiteHeader.tsx      → masthead + navigation (desktop + mobile)
  Hero.tsx            → section d'ouverture
  ProductGrid.tsx      → grille produits façon lookbook
  ArticleTeasers.tsx   → aperçus d'articles du journal
  SiteFooter.tsx       → newsletter + sitemap

lib/
  shopify.ts       → COUCHE D'ABSTRACTION — à lire en premier
  mock-data/
    products.json  → produits factices, au format Shopify Storefront API
    articles.json   → contenu éditorial factice
```

## Le point important : lib/shopify.ts

Toutes les données passent par ce fichier. Aujourd'hui il lit des fichiers
JSON locaux. Le jour où tu as ton compte Shopify :

1. npm install @shopify/hydrogen-react (ou fetch GraphQL natif)
2. Ajoute dans .env.local :
   SHOPIFY_STORE_DOMAIN=ton-shop.myshopify.com
   SHOPIFY_STOREFRONT_TOKEN=xxxxx
3. Remplace uniquement le CORPS des fonctions getProducts(),
   getProductByHandle() dans lib/shopify.ts par de vraies requêtes
   GraphQL vers la Storefront API — aucun composant ne change.
4. Dans next.config.ts, le domaine cdn.shopify.com est déjà
   autorisé pour next/image.

## Images

- Images produits : viennent de Shopify (Media) — déjà pointées vers
  cdn.shopify.com dans next.config.ts, prêtes pour plus tard.
- Images de contenu éditorial (hero, articles) : actuellement Unsplash en
  mock, à remplacer par un CMS headless (Sanity/Contentful) ou par des
  fichiers dans /public si le volume reste simple.
- Assets de marque (logo, favicon) : à mettre directement dans /public.

## Prochaines étapes suggérées

- [ ] Pages dynamiques /produits/[handle] et /journal/[handle]
- [ ] Panier (Context React côté front, synchronisé avec le cart Shopify)
- [ ] Compte Shopify → brancher lib/shopify.ts sur la vraie API
- [ ] CMS pour le contenu éditorial si le volume d'articles grandit
