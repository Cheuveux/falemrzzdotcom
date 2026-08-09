import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/shopify";

const CARD_TILT = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
const CARD_BG = ["bg-[#FFF7D6]", "bg-[#FFE3E0]", "bg-[#E1EAFF]", "bg-[#E4F7E0]"];

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="px-6 lg:px-10 py-20 bg-[#1A2C6B]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-14">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/produits/${product.handle}`}
            className={`
              group relative block ${CARD_TILT[index % 4]} hover:rotate-0
              transition-transform duration-300
            `}
          >
            <div
              className={`
                relative border-4 border-black rounded-3xl overflow-hidden
                ${CARD_BG[index % 4]}
                shadow-[6px_6px_0_#000] group-hover:shadow-[9px_9px_0_#000]
                group-hover:-translate-y-1 group-hover:-translate-x-1
                transition-all duration-300
              `}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />

                {!product.available && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-white border-4 border-black rounded-xl px-4 py-2 -rotate-12 text-lg font-black uppercase tracking-wider text-[#E8231B]">
                      Épuisé
                    </span>
                  </span>
                )}
              </div>

              <div className="p-4 bg-white border-t-4 border-black">
                <h3 className="font-black uppercase text-sm text-[#1A2C6B] leading-tight mb-1">
                  {product.title}
                </h3>
                <p className="text-xs text-[#5c5c54]">
                  {String(index + 1).padStart(2, "0")} / collection
                </p>
              </div>
            </div>

            {/* Badge prix façon éclat/starburst, en surimpression du coin */}
            <div
              className="
                absolute -top-4 -right-4 w-16 h-16 rotate-12
                bg-[#FFD400] border-4 border-black rounded-full
                flex items-center justify-center
                shadow-[3px_3px_0_#000]
                group-hover:scale-110 transition-transform duration-300
              "
            >
              <span className="text-[11px] font-black text-[#E8231B] rotate-[-12deg] text-center leading-none">
                {formatPrice(product.priceRange)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}