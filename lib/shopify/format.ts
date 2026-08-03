import type { Money } from "./types";

export function formatPrice(money: Money): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: money.currency,
    maximumFractionDigits: 0,
  }).format(money.min);
}