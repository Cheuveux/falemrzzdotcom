"use server";

import { cookies } from "next/headers";
import { createCart, addToCart } from "@/lib/shopify/cart";

export async function addProductToCart(variantId: string, quantity: number) {
  const cookieStore = await cookies();
  const existingCartId = cookieStore.get("cartId")?.value;

  const cart = existingCartId
    ? await addToCart(existingCartId, variantId, quantity)
    : await createCart(variantId, quantity);

  cookieStore.set("cartId", cart.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 jours
  });

  return cart;
}