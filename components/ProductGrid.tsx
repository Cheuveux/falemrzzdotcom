import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/shopify";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="px-6 lg:px-10 py-20 border-b border-line/70">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display text-3xl">Automne 01 — La sélection</h2>
        <Link
          href="/collections/automne-01"
          className="font-body text-sm uppercase tracking-wide underline underline-offset-4 hover:text-brick"
        >
          Tout voir
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/produits/${product.handle}`}
            className="group"
          >
            <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-paper-dim">
              <Image
                src={product.images[0].url}
                alt={product.images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {!product.available && (
                <span className="absolute top-3 left-3 bg-ink text-paper text-xs uppercase tracking-wide px-2 py-1">
                  Épuisé
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <span className="look-index text-sm text-brick shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-body text-sm mb-1">{product.title}</h3>
                <p className="font-body text-sm text-ink-soft">
                  {formatPrice(product.priceRange)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
