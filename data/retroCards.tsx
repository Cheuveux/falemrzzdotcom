import React from 'react';
import { RetroCard } from '@/types/RetroCard';

export const retroCards: RetroCard[] = [
  // ARTICLE NUM 1
  {
    title: "Website Manifesto",
    content: (
      <div className="flex flex-col">
        <h2 className="text-center font-bold mb-5"> Study about the human behaviour in 2026, at the most fucked age of humankind</h2>
        <div className="absolute right-70 w-60">
          <img src="./illu_homePage/website_manifesto_illu.png" alt="" />
        </div>
        <div>Oh glory age of the past, why should no embrace the sacred time ? Once the human beigns decided to stab his brother from his back everything began to become dark.</div>
        <div> Dont give a shit about none, except that none is playing CSGo any more. All those deserted servers, those fievers which never goin to happen again. All this world created to be forget. The pills are hard to be swallowed. Where is our space ? Where is mine ? How to define it ? </div>
        <div className='text-center mt-2 nmb-2'>= = = = = = = = = = = = = = = = = = = = = = = = =</div>
        <div className='ml-1'>Another o n e</div>
        <div className='ml-2'>Another one</div>
        <div className='ml-3'>A n o t h er one</div>
        <div className='ml-4'>Another one</div>
        <div className='ml-5'>An o t h er one</div>
        <div className='ml-6'>A n o t h e r o n e </div>
        <div className=" mt-5 text-italic underline text-2xl">
          <h2>1) Technical stack of the website </h2>
        </div>
        <div className="flex items-center">
        </div>

      </div>
    ),
    techInfos: ["Poids: 1kg", "Couleur: Bleu", "Matériau: Plastique"],
  },
  // ARTICLE NUM 2
  {
    title: "No one should be prepared",
    content: <div>Contenu du produit 2</div>,
    techInfos: ["Poids: 2kg", "Couleur: Rouge", "Matériau: Métal"],
  },
  // ARTICLE NUM 3
  {
    title: "Watch Wacka Flocka tweaks the fuck out",
    content: <div>Contenu du produit 3</div>,
    techInfos: ["Poids: 500g", "Couleur: Vert", "Matériau: Bois"],
  },
];