"use client";

import { useState, useTransition } from "react";
import type { Product } from "@/lib/shopify";
import { addProductToCart } from "@/app/actions/cart";

export default function AddToCartForm({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.id ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAddToCart = () => {
    startTransition(async () => {
      try {
        await addProductToCart(selectedVariant, quantity);
        setFeedback("Ajouté au panier !");
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("cartUpdated"));
        }
      } catch {
        setFeedback("Erreur — réessaie");
      }
    });
  };

  return (
    <div className="mt-auto">
      {product.variants && product.variants.length > 1 && (
        <div className="mb-4">
          <label className="block text-xs uppercase font-bold tracking-wide text-[#5c5c54] mb-2">
            Choisir une option
          </label>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedVariant(variant.id)}
                disabled={!variant.available}
                className={`
                  px-4 py-2 border-4 border-black rounded-xl font-bold text-sm uppercase
                  disabled:opacity-40 disabled:cursor-not-allowed
                  ${selectedVariant === variant.id
                    ? "bg-[#FFD400] shadow-[3px_3px_0_#000]"
                    : "bg-white hover:bg-[#FFF7D6]"}
                `}
              >
                {variant.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <label className="text-xs uppercase font-bold tracking-wide text-[#5c5c54]">
          Quantité
        </label>
        <div className="flex items-center border-4 border-black rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 font-black hover:bg-[#FFF7D6]"
          >
            −
          </button>
          <span className="px-4 font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 font-black hover:bg-[#FFF7D6]"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!product.available || !selectedVariant || isPending}
        className="
          w-full bg-[#E8231B] text-white border-4 border-black rounded-2xl
          py-4 font-black uppercase text-lg shadow-[5px_5px_0_#000]
          hover:shadow-[7px_7px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5
          active:shadow-[2px_2px_0_#000] active:translate-y-0.5 active:translate-x-0.5
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-150
        "
      >
        {isPending ? "Ajout..." : "Ajouter au panier"}
      </button>

      {feedback && (
        <p className="text-center text-sm font-bold text-[#1A2C6B] mt-3">
          {feedback}
        </p>
      )}
    </div>
  );
}