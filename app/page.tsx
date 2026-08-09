// import Hero from "@/components/Hero";
// import ProductGrid from "@/components/ProductGrid";
// import ArticleTeasers from "@/components/ArticleTeasers";
import MainPageHeader from '@/components/layerNav/mainPageHeader'
import SiteFooter from "@/components/SiteFooter";
import { getProducts, getFeaturedProducts} from "@/lib/shopify";

export default async function Home() {
  // Aujourd'hui : lecture de fichiers JSON locaux (lib/mock-data)
  // Demain : ces mêmes fonctions liront la vraie Storefront API Shopify
  const [products, articles] = await Promise.all([
    getFeaturedProducts(4),
    getProducts(),
  ]);

  return (
    <main className="min-h-100vh">
      <MainPageHeader/>
      {/* <Hero /> */}
      {/* <ProductGrid products={products} /> */}
      {/* <ArticleTeasers articles={articles} /> */}
      <SiteFooter />
    </main>
  );
}
