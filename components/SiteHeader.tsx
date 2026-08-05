"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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

// Durée max d'attente avant de naviguer quand même (fichier son cassé, autoplay bloqué, etc.)
const SOUND_TIMEOUT_FALLBACK = 4000;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [cartCount, setCartCount] = useState<number>(0);

  const navigateAfterSound = (href: string, soundPath: string) => {
    const audio = new Audio(soundPath);
    let hasNavigated = false;

    const goTo = () => {
      if (hasNavigated) return;
      hasNavigated = true;
      router.push(href);
    };

    audio.addEventListener("ended", goTo);

    audio.play().catch((error) => {
      console.error("Erreur lors de la lecture du son :", error);
      goTo();
    });

    setTimeout(goTo, SOUND_TIMEOUT_FALLBACK);
  };

  const handleNavClick = (e: React.MouseEvent, href: string, sound: string) => {
    e.preventDefault();
    navigateAfterSound(href, sound);
  };

  useEffect(() => {
    let mounted = true;
    const fetchCart = async () => {
      try {
        const res = await fetch('/api/cart');
        const json = await res.json();
        if (mounted) setCartCount(json.totalQuantity ?? 0);
      } catch {
        if (mounted) setCartCount(0);
      }
    };
    fetchCart();

    const onUpdate = () => fetchCart();
    window.addEventListener('cartUpdated', onUpdate);
    return () => {
      mounted = false;
      window.removeEventListener('cartUpdated', onUpdate);
    };
  }, []);

  return (
    <header className="w-full text-[#2B2B28]">
      {/* Grid 3 colonnes : le logo reste centré peu importe la largeur du bouton menu */}
      <div className="max-w-4xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center">
        <div />

        <Link href="/" className="h-50 flex items-center justify-center">
          <img
            src="/visual_assets/flamerz_logo.png"
            alt="Flamerz Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        <div className="flex justify-end items-center">
          <Link href="/cart" className="relative mr-3 flex items-center">
            <img
              src={cartCount > 0 ? "/flamerzz_nav_icons/cart_full.svg" : "/flamerzz_nav_icons/cart_empty.svg"}
              alt="Panier"
              className="h-8 w-auto"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#E8231B] text-white rounded-full px-1 text-xs font-black">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-xs uppercase tracking-widest border border-[#c9c4b4] px-3 py-1.5 hover:bg-[#EFEAD9] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

      {/* Nav desktop — colonne full-width, hover en balayage gauche->droite, bordures épaisses */}
      <nav className="hidden md:block border-t-5 border-dotted border-[#c9c4b4]">
        <div className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
           <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href, link.sound)}
            className="
              group relative block overflow-hidden
              shadow-[0_1px_2px_rgba(43,43,40,0.06)]
              border-b-2 border-dotted border-[#c9c4b4]
            "
          >
            <span
              className="absolute inset-0 bg-[#f2f2eb] scale-x-0 group-hover:scale-x-100
                        origin-left transition-transform duration-1000 ease-out"
              aria-hidden="true"
            />
            <span className="relative z-10 block px-6 py-3 text-sm uppercase tracking-widest text-[#5c5c54] group-hover:text-[#2B2B28] transition-colors duration-500">
              {link.label}
            </span>
          </Link>
          ))}
        </div>
      </nav>

      {/* Nav mobile — même logique colonne + pointillés, affichée via toggle */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t-2 border-dotted border-[#c9c4b4]"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
             <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.sound)}
              className="
                group relative block overflow-hidden
                shadow-[0_1px_2px_rgba(43,43,40,0.06)]
                hover:shadow-[0_2px_6px_rgba(43,43,40,0.10)]
                transition-shadow duration-300
              "
            >
              <span
                className="absolute inset-0 bg-[#f2f2e8] scale-x-0 group-hover:scale-x-100
                          origin-left transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10 block px-6 py-3 text-sm uppercase tracking-widest text-[#5c5c54] group-hover:text-[#2B2B28] transition-colors duration-500">
                {link.label}
              </span>
            </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}