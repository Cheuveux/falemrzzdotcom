import SiteHeader from "@/components/SiteHeader";
// import Hero from "@/components/Hero";
// import ProductGrid from "@/components/ProductGrid";
// import ArticleTeasers from "@/components/ArticleTeasers";
import SiteFooter from "@/components/SiteFooter";
import { getFeaturedProducts, getArticles } from "@/lib/shopify";

export default async function Home() {
  // Aujourd'hui : lecture de fichiers JSON locaux (lib/mock-data)
  // Demain : ces mêmes fonctions liront la vraie Storefront API Shopify
  const [products, articles] = await Promise.all([
    getFeaturedProducts(4),
    getArticles(),
  ]);

  return (
    <main className="">
      <SiteHeader />
      {/* <Hero /> */}
      {/* <ProductGrid products={products} /> */}
      {/* <ArticleTeasers articles={articles} /> */}
      <SiteFooter />
    </main>
  );
}
