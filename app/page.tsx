import MainPageHeader from '@/components/layerNav/mainPageHeader'
import { getProducts, getFeaturedProducts} from "@/lib/shopify";
import HomePage from '@/components/dotsAimation';

export default async function Home() {
  return (
    <main className="min-h-100vh">
      <MainPageHeader/>
      <HomePage/>
    </main>
  );
}
