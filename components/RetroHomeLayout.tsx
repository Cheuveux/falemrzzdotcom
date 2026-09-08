// components/RetroHomeLayout.tsx
import React, { ReactNode } from 'react';

interface RetroHomeLayoutProps {
  leftContent: ReactNode;
  rightTopTitles: string[];
  rightBottomInfo: ReactNode;
}

export default function RetroHomeLayout({
  leftContent,
  rightTopTitles,
  rightBottomInfo,
}: RetroHomeLayoutProps) {
  return (
    <div className="flex h-80vh w-full p-4 gap-4">
      {/* Colonne de gauche (pleine) */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
        {leftContent}
      </div>

      {/* Colonne de droite (divisée en deux) */}
      <div className="w-80 flex flex-col gap-4">
        {/* Partie haute : titres */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
          <h2 className="text-lg font-bold mb-2 text-gray-800 bg-gray-200 p-1 rounded">Contenus</h2>
          <div className="space-y-2">
            {rightTopTitles.map((title, index) => (
              <div
                key={index}
                className="p-2 bg-blue-100 border-2 border-blue-400 border-t-white border-l-white rounded"
              >
                {title}
              </div>
            ))}
          </div>
        </div>

        {/* Partie basse : infos fixes */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border-4 border-gray-400 border-t-white border-l-white">
          <h2 className="text-lg font-bold mb-2 text-gray-800 bg-gray-200 p-1 rounded">Informations</h2>
          <div className="p-2 bg-gray-100 border-2 border-gray-400 border-t-white border-l-white rounded">
            {rightBottomInfo}
          </div>
        </div>
      </div>
    </div>
  );
}