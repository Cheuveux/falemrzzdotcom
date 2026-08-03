import type {
  Product, Cart, ShopifyProductNode, ShopifyCartNode,
} from "./types";

export function mapProduct(node: ShopifyProductNode): Product {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    priceRange: {
      min: Number(node.priceRange.minVariantPrice.amount),
      max: Number(node.priceRange.maxVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
    },
    images: node.images.edges.map((e) => ({
      url: e.node.url,
      alt: e.node.altText ?? node.title,
    })),
    variants: node.variants.edges.map((e) => ({
      id: e.node.id,
      title: e.node.title,
      price: Number(e.node.price.amount),
      currency: e.node.price.currencyCode,
      available: e.node.availableForSale,
    })),
    available: node.availableForSale,
  };
}

export function mapCart(node: ShopifyCartNode): Cart {
  return {
    id: node.id,
    checkoutUrl: node.checkoutUrl,
    totalQuantity: node.totalQuantity,
    totalAmount: Number(node.cost.totalAmount.amount),
    currency: node.cost.totalAmount.currencyCode,
    lines: node.lines.edges.map((e) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      merchandiseId: e.node.merchandise.id,
      title: e.node.merchandise.product.title,
      price: Number(e.node.merchandise.price.amount),
      currency: e.node.merchandise.price.currencyCode,
      image: e.node.merchandise.product.images.edges[0]?.node.url,
    })),
  };
}