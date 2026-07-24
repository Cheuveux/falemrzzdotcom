"use client";

import { useEffect, useState } from "react";

const FOOTER_IMAGES = [
  "/visual_assets/footer_gif_1.gif",
  "/visual_assets/footer_gif_2.gif",
  "/visual_assets/footer_gif_3.gif",
  "/visual_assets/footer_gif_4.gif",
];

export default function SiteFooter() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Dupliquer les images pour un effet de boucle
    setImages([...FOOTER_IMAGES, ...FOOTER_IMAGES, ...FOOTER_IMAGES]);
  }, []);

  return (
    <footer className="absolute bottom-0 w-full overflow-hidden h-18 border-t-4 border-yellow-400">
      <div className="flex animate-scroll h-full">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-full">
            <img
              src={src}
              alt={`Footer GIF ${index}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </footer>
  );
}