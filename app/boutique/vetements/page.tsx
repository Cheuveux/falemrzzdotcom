import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/shopify/products";
import EshopHeader from "@/components/layerNav/EshopHeader";

export default async function EshopPage() {
  const products = await getProducts();

  return (
    <main className="relative min-h-screen overflow-hidden  bg-[#1A2C6B]">
      {/* Voile pour garder le contenu lisible par-dessus le pattern */}
      <EshopHeader/>
      <div className="relative z-10">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}