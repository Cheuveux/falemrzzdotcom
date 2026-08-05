import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify/cart";
import { formatPrice } from "@/lib/shopify/format";

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
              <div key={line.id} className="flex items-center gap-4 border-b pb-4">
                <img src={line.image} alt={line.title} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="font-black uppercase">{line.title}</div>
                  <div className="text-sm text-[#5c5c54]">{line.quantity} × {formatPrice({ min: line.price, currency: line.currency })}</div>
                </div>
                <div className="font-black">{formatPrice({ min: line.price * line.quantity, currency: line.currency })}</div>
              </div>
            ))}
            <div className="text-right font-black text-xl mt-4">
              Total: {formatPrice({ min: cart.totalAmount, currency: cart.currency })}
            </div>
            <div className="mt-6">
              <a href={cart.checkoutUrl} className="inline-block bg-[#E8231B] text-white border-4 border-black rounded-2xl py-3 px-6 font-black">Passer à la caisse</a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
