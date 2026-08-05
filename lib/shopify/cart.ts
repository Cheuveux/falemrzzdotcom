import { shopifyFetch } from "./client";
import { mapCart } from "./mappers";
import type { Cart, ShopifyCartNode } from "./types";

const CART_FIELDS = `
  id checkoutUrl totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 50) {
    edges {
      node {
        id quantity
        merchandise {
          ... on ProductVariant {
            id title
            price { amount currencyCode }
            product { title images(first: 1) { edges { node { url } } } }
          }
        }
      }
    }
  }
`;

const CART_CREATE = `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`;

export async function createCart(variantId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCartNode } }>(
    CART_CREATE, { lines: [{ merchandiseId: variantId, quantity }] }
  );
  return mapCart(data.cartCreate.cart);
}

export async function addToCart(cartId: string, variantId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCartNode } }>(
    CART_LINES_ADD, { cartId, lines: [{ merchandiseId: variantId, quantity }] }
  );
  return mapCart(data.cartLinesAdd.cart);
}

const CART_QUERY = `
  query Cart($id: ID!) {
    cart(id: $id) { ${CART_FIELDS} }
  }
`;

export async function getCart(cartId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cart: ShopifyCartNode }>(CART_QUERY, { id: cartId });
  return mapCart(data.cart);
}