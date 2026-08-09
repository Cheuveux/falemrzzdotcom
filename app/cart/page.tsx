import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify/cart";
import { formatPrice } from "@/lib/shopify/format";
import CartLineItem from "@/components/CartLineItem";

export default async function CartPage() {
  const cookieStore = await cookies();
  const id = cookieStore.get("cartId")?.value;

  if (!id) {
    return (
      <main className="min-h-screen bg-[#1A2C6B] py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white border-4 border-black rounded-3xl p-8">
          <h1 className="font-black uppercase text-3xl text-[#1A2C6B]">Panier</h1>
          <p className="mt-6">Votre panier est vide</p>
        </div>
      </main>
    );
  }

  const cart = await getCart(id);

  return (
    <main className="min-h-screen bg-[#1A2C6B] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black rounded-3xl p-8">
        <h1 className="font-black uppercase text-3xl text-[#1A2C6B] mb-6">Panier</h1>

        {cart.lines.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <div className="space-y-4">
            {cart.lines.map((line) => (
              <CartLineItem key={line.id} line={line} />
            ))}

            <div className="text-right font-black text-xl mt-4">
              Total: {formatPrice({ min: cart.totalAmount, currency: cart.currency })}
            </div>

            <div className="mt-6">
             <a 
                href={cart.checkoutUrl}
                className="inline-block bg-[#E8231B] text-white border-4 border-black rounded-2xl py-3 px-6 font-black"
              >
                Passer à la caisse
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}