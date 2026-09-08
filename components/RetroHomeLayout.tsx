// components/RetroHomeLayout.tsx
"use client";

import React, { useState } from 'react';
import { RetroCard } from '@/types/RetroCard';

interface RetroHomeLayoutProps {
  cards: RetroCard[];
}

export default function RetroHomeLayout({ cards }: RetroHomeLayoutProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCard = cards[selectedIndex];

  return (
    <div className="flex h-[60vh] w-full p-4 gap-4">
      {/* Colonne de gauche avec hauteur fixe et scroll interne */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
        {/* Conteneur interne avec scroll */}
        <div className="h-full overflow-y-auto retro-scrollbar">
          {selectedCard?.content}
        </div>
      </div>

      {/* Colonne de droite (inchangée) */}
      <div className="w-80 flex flex-col gap-4">
       <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
 		 <h2 className="text-lg font-bold mb-2 text-gray-800 bg-[#FFFFF3] border-1 border-gray-200 p-1 rounded text-center">CONTENT</h2>
			<div className="">
				{cards.map((card, index) => (
				<div
					key={index}
					onClick={() => setSelectedIndex(index)}
					className={`
					p-1 cursor-pointer 
					${index === selectedIndex
						? 'text-purple-600 underline'  // ✅ Actif : violet + souligné + gras
						: 'text-blue-600 underline hover:text-blue-800' // ✅ Inactif : bleu + souligné + effet hover
					}
					`}
				>
					{card.title}
     			 </div>
    ))}
  </div>
</div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
          <h2 className="text-lg font-bold mb-2 text-gray-800 bg-[#FFFFF3] border-1 border-gray-200 p-1 rounded">Instructions</h2>
          <div className="p-2 bg-[#FFFFF3] border-2 border-gray-400 border-t-white border-l-white rounded">
            <ul className="list-disc pl-5">
              {selectedCard?.techInfos.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
			<div className="mt-3">
			  <p className='text-xs'> Powered by Shopify @2026</p>
			  <p className='text-xs'> Certified Hood Classic</p> 
			  <p className='text-xs'> Promoted by Black Rock Edge funders</p>
			  <p className='text-xs'> Blessed by contemporary Godfellas</p>
			</div>
        </div>
      </div>
    </div>
  );
}