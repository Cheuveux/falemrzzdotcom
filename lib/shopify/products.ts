import { shopifyFetch, isShopifyConfigured } from "./client";
import { mapProduct } from "./mappers";
import type { Product, ShopifyProductNode } from "./types";
// import productsMock from "../mock-data/products.json";

const PRODUCT_FIELDS = `
  id handle title description availableForSale
  priceRange {
    minVariantPrice { amount currencyCode }
    maxVariantPrice { amount currencyCode }
  }
  images(first: 5) { edges { node { url altText } } }
  variants(first: 20) {
    edges { node { id title availableForSale price { amount currencyCode } } }
  }
`;

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) { edges { node { ${PRODUCT_FIELDS} } } }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) { ${PRODUCT_FIELDS} }
  }
`;

export async function getProducts(): Promise<Product[]> {
  // if (!isShopifyConfigured) return productsMock as Product[];

  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProductNode }[] } }>(
    PRODUCTS_QUERY, { first: 20 }
  );
  return data.products.edges.map((e) => mapProduct(e.node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  // if (!isShopifyConfigured) {
  //   const product = (productsMock as Product[]).find((p) => p.handle === handle);
  //   return product ?? null;
  // }

  const data = await shopifyFetch<{ productByHandle: ShopifyProductNode | null }>(
    PRODUCT_BY_HANDLE_QUERY, { handle }
  );
  return data.productByHandle ? mapProduct(data.productByHandle) : null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const products = await getProducts();
  return products.slice(0, limit);
}