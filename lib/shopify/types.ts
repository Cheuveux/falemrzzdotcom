// Types "propres" utilisés par les composants — jamais les types bruts Shopify ici
export type Money = { min: number; max: number; currency: string };

export type ProductImage = { url: string; alt: string };

export type ProductVariant = {
  id: string;
  title: string;
  price: number;
  currency: string;
  available: boolean;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: Money;
  images: ProductImage[];
  variants: ProductVariant[];
  available: boolean;
};

export type CartLine = {
  id: string;
  quantity: number;
  merchandiseId: string;
  title: string;
  price: number;
  currency: string;
  image?: string;
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  totalAmount: number;
  currency: string;
  lines: CartLine[];
};

// Types "bruts" tels que Shopify les renvoie (utilisés uniquement dans mappers.ts)
export type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
      };
    }[];
  };
};

export type ShopifyCartNode = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { totalAmount: { amount: string; currencyCode: string } };
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          product: { title: string; images: { edges: { node: { url: string } }[] } };
        };
      };
    }[];
  };
};