import MainPageHeader from '@/components/layerNav/mainPageHeader';
import HomePage from '@/components/dotsAimation';
import RetroHomeLayout from '@/components/RetroHomeLayout';

export default async function Home() {
  const leftContent = <HomePage />;
  const rightTopTitles = ["Produits phares", "Nouveautés", "Promotions"];
  const rightBottomInfo = "Informations relatives au contenu de gauche.";

  return (
    <main className="min-h-100vh">
      <MainPageHeader />
      <RetroHomeLayout
        leftContent={leftContent}
        rightTopTitles={rightTopTitles}
        rightBottomInfo={rightBottomInfo}
      />
    </main>
  );
}