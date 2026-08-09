import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/shopify/products";
import EshopHeader from "@/components/layerNav/EshopHeader";

export default async function EshopPage() {
  const products = await getProducts();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* GIF en pattern répété, taille fixe par tuile */}
      <div
        className="fixed inset-0 -z-10"
        // style={{
        //   backgroundImage: "url('/visual_assets/eshop_flamerzz_bg.gif')",
        //   backgroundRepeat: "repeat",
        //   backgroundSize: "400px 400px", // taille d'une tuile — ajuste selon ton gif
        // }}
        aria-hidden="true"
      />

      {/* Voile pour garder le contenu lisible par-dessus le pattern */}
      <EshopHeader/>
      <div className="fixed inset-0 " aria-hidden="true" />

      <div className="relative z-10">
        <h1 className="font-display text-4xl px-6 py-10">
          <img
            src="/flamerzz_nav_icons/flamerzz_eshop.png"
            alt="Eshop"
            className="h-auto w-100"
          />
        </h1>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}