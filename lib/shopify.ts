/**
 * COUCHE D'ABSTRACTION "SHOPIFY"
 * ------------------------------------------------------------------
 * Aujourd'hui : ces fonctions lisent des fichiers JSON locaux (lib/mock-data)
 * Demain      : on remplace uniquement le CORPS de ces fonctions par de vrais
 *               appels à la Storefront API (GraphQL), sans rien changer
 *               dans les composants qui les consomment (Home, ProductGrid, etc.)
 *
 * Quand tu auras ton compte Shopify, il faudra :
 * 1. npm install @shopify/hydrogen-react (ou faire un simple fetch GraphQL)
 * 2. Ajouter les variables d'env SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_TOKEN
 * 3. Remplacer le corps de getProducts()/getProduct() par des requêtes GraphQL
 *    qui renvoient exactement les mêmes types (Product, Money, etc.)
 */

import productsData from "./mock-data/products.json";
import articlesData from "./mock-data/articles.json";

export type Money = {
  min: number;
  max: number;
  currency: string;
};

export type ProductImage = {
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  collection: string;
  priceRange: Money;
  images: ProductImage[];
  available: boolean;
};

export type Article = {
  id: string;
  handle: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

// --- PRODUITS -------------------------------------------------------------

export async function getProducts(): Promise<Product[]> {
  // TODO(shopify): remplacer par un appel Storefront API `products(first: N)`
  return productsData as Product[];
}

export async function getProductByHandle(
  handle: string
): Promise<Product | null> {
  // TODO(shopify): remplacer par `product(handle: $handle)`
  const product = (productsData as Product[]).find((p) => p.handle === handle);
  return product ?? null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const products = await getProducts();
  return products.slice(0, limit);
}

// --- CONTENU ÉDITORIAL ------------------------------------------------------
// Reste indépendant de Shopify : viendra d'un CMS (Sanity/Contentful) plus tard,
// ou de Shopify Metaobjects si le volume de contenu reste simple.

export async function getArticles(): Promise<Article[]> {
  return articlesData as Article[];
}

export function formatPrice(money: Money): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: money.currency,
    maximumFractionDigits: 0,
  }).format(money.min);
}
