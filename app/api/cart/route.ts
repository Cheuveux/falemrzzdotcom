import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify/cart";

export async function GET() {
  const cookieStore = await cookies();
  const id = cookieStore.get("cartId")?.value;
  if (!id) return NextResponse.json({ totalQuantity: 0 });
  try {
    const cart = await getCart(id);
    return NextResponse.json({ totalQuantity: cart.totalQuantity ?? 0 });
  } catch (err) {
    return NextResponse.json({ totalQuantity: 0 }, { status: 200 });
  }
}
