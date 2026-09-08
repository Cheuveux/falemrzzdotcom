import MainPageHeader from '@/components/layerNav/mainPageHeader';
import RetroHomeLayout from '@/components/RetroHomeLayout';
import HomePage from '@/components/dotsAimation';
import { retroCards } from '@/data/retroCards';

export default function Home() {
  return (
    <main className="min-h-100vh">
      <MainPageHeader />
      <RetroHomeLayout cards={retroCards} />
      <HomePage />
    </main>
  );
}