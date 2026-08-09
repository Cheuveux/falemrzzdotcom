"use client";

import { useTransition } from "react";
import { updateLineQuantity, removeLine } from "@/app/actions/cart";
import { formatPrice } from "@/lib/shopify/format";
import type { CartLine } from "@/lib/shopify/types";

export default function CartLineItem({ line }: { line: CartLine }) {
  const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (newQuantity: number) => {
    startTransition(async () => {
      await updateLineQuantity(line.id, newQuantity);
    });
  };

  const handleRemove = () => {
    startTransition(async () => {
      await removeLine(line.id);
    });
  };

  return (
    <div
      className={`
        flex items-center gap-4 border-b-4 border-dotted border-[#c9c4b4] pb-4
        transition-opacity duration-200 ${isPending ? "opacity-40" : "opacity-100"}
      `}
    >
      <img
        src={line.image}
        alt={line.title}
        className="w-24 h-24 object-cover rounded-xl border-4 border-black"
      />

      <div className="flex-1">
        <div className="font-black uppercase text-[#1A2C6B]">{line.title}</div>
        <div className="text-sm text-[#5c5c54] mb-2">
          {formatPrice({ min: line.price, max: line.price, currency: line.currency })} / unité
        </div>

        <div className="flex items-center border-4 border-black rounded-xl overflow-hidden w-fit">
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleQuantityChange(line.quantity - 1)}
            className="px-3 py-1 font-black hover:bg-[#FFF7D6] disabled:opacity-40 transition-colors"
            aria-label="Diminuer la quantité"
          >
            −
          </button>
          <span className="px-4 font-bold">{line.quantity}</span>
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleQuantityChange(line.quantity + 1)}
            className="px-3 py-1 font-black hover:bg-[#FFF7D6] disabled:opacity-40 transition-colors"
            aria-label="Augmenter la quantité"
          >
            +
          </button>
        </div>
      </div>

      <div className="font-black text-lg text-[#1A2C6B] whitespace-nowrap">
        {formatPrice({
          min: line.price * line.quantity,
          max: line.price * line.quantity,
          currency: line.currency,
        })}
      </div>

      <button
        type="button"
        disabled={isPending}
        onClick={handleRemove}
        aria-label="Retirer du panier"
        className="
          p-3 border-4 border-black rounded-xl bg-white
          hover:bg-[#FFE3E0] disabled:opacity-40
          shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000]
          hover:-translate-y-0.5 transition-all duration-150
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#E8231B]"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  );
}