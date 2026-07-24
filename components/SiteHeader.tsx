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

  // Fonction pour jouer un son
  const playSound = (soundPath: string) => {
    const audio = new Audio(soundPath);
    audio.play().catch(error => {
      console.error("Erreur lors de la lecture du son :", error);
    });
  };

  // Gestion du clic sur un lien de navigation
  const handleNavClick = (soundPath: string) => {
    playSound(soundPath);
  };

  return (
    <header className="flex flex-col items-center justify-between h-32">
      {/* Logo en haut au centre */}
      <div className="flex justify-center w-full">
        <Link href="/" className="header_logo">
          <img src="/visual_assets/flamerz_logo.png" alt="Flamerz Logo" />
        </Link>
      </div>

      {/* Bouton menu mobile */}
      <button
        className="md:hidden font-body text-sm uppercase tracking-wide absolute top-4 left-4"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        {menuOpen ? "Fermer" : "Menu"}
      </button>

      {/* Bouton panier mobile */}
      <Link
        href="/panier"
        className="md:hidden font-body text-sm uppercase tracking-wide absolute top-4 right-4"
      >
        Panier
      </Link>

      {/* Navigation desktop en bas */}
      <nav className="hidden md:flex w-full justify-between px-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center"
            onClick={(e) => {
              e.preventDefault(); // Empêche la navigation
              handleNavClick(link.sound);
            }}
          >
            {/* Conteneur de taille fixe pour les images */}
            <div className="w-40 h-20 flex items-center justify-center">
              <img
                src={link.image}
                alt={link.label}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        ))}
      </nav>

      {/* Navigation mobile */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden flex flex-col border-t border-line/70 bg-paper w-full"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-4 border-b border-line/40 font-display text-xl text-center"
              onClick={(e) => {
                e.preventDefault(); // Empêche la navigation
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