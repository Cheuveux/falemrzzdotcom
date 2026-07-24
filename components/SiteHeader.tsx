"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  {
    label: "Eshop",
    href: "/boutique/vetements",
    image: "/flamerzz_nav_icons/flamerzz_eshop.png",
    sound: "/sound_assets/eviltag flamerz og.mp3"
  },
  {
    label: "BeatStore",
    href: "/boutique/accessoires",
    image: "/flamerzz_nav_icons/flamerzz_beatstore.png",
    sound: "/sound_assets/Flamerzdotcom.mp3"
  },
  {
    label: "Radio",
    href: "/collections",
    image: "/flamerzz_nav_icons/flamerzz_radio.png",
    sound: "/sound_assets/hype flamerz low pitch.mp3"
  },
  {
    label: "Atelier",
    href: "/atelier",
    image: "/flamerzz_nav_icons/flamerzz_beatstore.png",
    sound: "/sound_assets/hype flamerz low pitch.mp3"
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const playSound = (soundPath: string) => {
    const audio = new Audio(soundPath);
    audio.play().catch(error => {
      console.error("Erreur lors de la lecture du son :", error);
    });
  };

  const handleNavClick = (soundPath: string) => {
    playSound(soundPath);
  };

  return (
    <header className="flex flex-col w-full items-center justify-between bg-gradient-to-b from-gray-800 to-black shadow-2xl border-b-4 border-yellow-400 h-fitcontent">
      {/* Logo en haut au centre */}
      <div className="flex justify-center w-70 mb-4">
        <Link href="/" className="flex justify-center">
          <img
            src="/visual_assets/flamerz_logo.png"
            alt="Flamerz Logo"
            className="drop-shadow-[0_0_10px_#FFD700] transform hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Bouton menu mobile */}
      <button
        className="md:hidden font-body text-sm uppercase tracking-wide absolute top-6 left-4 bg-yellow-400 text-black px-3 py-1 rounded border-2 border-black hover:bg-yellow-300 transition-colors"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        {menuOpen ? "Fermer" : "Menu"}
      </button>

      {/* Bouton panier mobile */}
      <Link
        href="/panier"
        className="md:hidden font-body text-sm uppercase tracking-wide absolute top-6 right-4 bg-yellow-400 text-black px-3 py-1 rounded border-2 border-black hover:bg-yellow-300 transition-colors"
      >
        Panier
      </Link>

      {/* Navigation desktop en bas */}
      <nav className="md:flex w-full justify-around items-center border-b-5 border-t-5 border-yellow-700 bg-yellow-800 h-32 ">

        {NAV_LINKS.map((link) => (
          <div
            key={link.href}
            className="flex flex-col items-center justify-center group h-full"
            onClick={() => handleNavClick(link.sound)}
          >
            {/* Conteneur de taille fixe pour les images */}
            <div className="w-40 h-20 flex items-center justify-center bg-yellow-400 border-2 border-black rounded-lg p-2 overflow-hidden">
              <img
                src={link.image}
                alt={link.label}
                className="w-full h-full object-contain drop-shadow-[0_0_5px_#000000] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
            {/* Label plus visible */}
            <span className="font-bold text-sm uppercase tracking-wider mt-2 text-yellow-400 drop-shadow-[0_0_2px_#000000] group-hover:text-white transition-colors">
              {link.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Navigation mobile */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden flex flex-col border-t-2 border-yellow-400 bg-black/80 w-full mt-4"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-4 border-b-2 border-yellow-400 font-display text-xl text-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.sound);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}