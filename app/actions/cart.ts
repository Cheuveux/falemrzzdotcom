"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createCart, addToCart, updateCartLine, removeCartLine } from "@/lib/shopify/cart";

export async function addProductToCart(variantId: string, quantity: number) {
  const cookieStore = await cookies();
  const existingCartId = cookieStore.get("cartId")?.value;

  const cart = existingCartId
    ? await addToCart(existingCartId, variantId, quantity)
    : await createCart(variantId, quantity);

  cookieStore.set("cartId", cart.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });

  revalidatePath("/cart"); // <- corrigé, matche le vrai chemin du fichier
  return cart;
}

export async function updateLineQuantity(lineId: string, quantity: number) {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;
  if (!cartId) throw new Error("Panier introuvable");

  if (quantity < 1) {
    await removeCartLine(cartId, lineId);
  } else {
    await updateCartLine(cartId, lineId, quantity);
  }

  revalidatePath("/cart"); // <- corrigé
}

export async function removeLine(lineId: string) {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;
  if (!cartId) throw new Error("Panier introuvable");

  await removeCartLine(cartId, lineId);
  revalidatePath("/cart"); // <- corrigé
}