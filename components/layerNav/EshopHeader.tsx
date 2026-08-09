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

const SOUND_TIMEOUT_FALLBACK = 4000;

export default function EshopHeader() {
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
    <header className="w-full bg-[#1A2C6B] text-white border-b-4 border-black">
      {/* Grid 3 colonnes : le logo reste centré peu importe la largeur du bouton menu */}
      <div className="max-w-4xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <div />

        <Link href="/" className="h-32 flex items-center justify-center">
          <img
            src="/visual_assets/flamerz_logo.png"
            alt="Flamerz Logo"
            className="h-full w-auto object-contain drop-shadow-[3px_3px_0_#000]"
          />
        </Link>

        <div className="flex justify-end items-center gap-3">
          {/* Icône panier — même traitement "carte jouet" que le badge prix du ProductGrid */}
          <Link
            href="/cart"
            className="
              relative flex items-center justify-center w-12 h-12
              bg-[#FFD400] border-4 border-black rounded-full
              shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000]
              hover:-translate-y-0.5 hover:-translate-x-0.5
              transition-all duration-150
            "
          >
            <img
              src={cartCount > 0 ? "/flamerzz_nav_icons/cart_full.svg" : "/flamerzz_nav_icons/cart_empty.svg"}
              alt="Panier"
              className="h-6 w-auto"
            />
            {cartCount > 0 && (
              <span
                className="
                  absolute -top-2 -right-2 bg-[#E8231B] text-white rounded-full
                  w-6 h-6 flex items-center justify-center
                  text-xs font-black border-2 border-black
                "
              >
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="
              md:hidden text-xs uppercase tracking-widest font-black
              bg-white text-[#1A2C6B] border-4 border-black rounded-xl px-3 py-2
              shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000]
              hover:-translate-y-0.5 transition-all duration-150
            "
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

{/* Nav desktop — items alignés sur une seule ligne, chaque item = une boîte jouet */}
<nav className="hidden md:block border-t-4 border-black px-3 py-3">
  <div className="w-full flex flex-row justify-around gap-3">
    {NAV_LINKS.map((link) => (
      <Link
  key={link.href}
  href={link.href}
  onClick={(e) => handleNavClick(e, link.href, link.sound)}
  className="
    group relative overflow-hidden flex items-center justify-center
    border-4 border-black rounded-2xl bg-white
    shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000]
    hover:-translate-y-0.5 hover:-translate-x-0.5
    transition-all duration-200
    w-lg p-6
  "
>
        <span
          className="absolute inset-0 bg-[#FFF7D6] scale-x-0 group-hover:scale-x-100
                    origin-left transition-transform duration-500 ease-out"
          aria-hidden="true"
        />
        <span className="relative z-10 block text-sm uppercase tracking-widest font-black text-[#1A2C6B] group-hover:text-[#E8231B] transition-colors duration-300 whitespace-nowrap">
          {link.label}
        </span>
      </Link>
    ))}
  </div>
</nav>

      {/* Nav mobile — même principe, colonne + boîtes */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t-4 border-black px-3 py-3"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.sound)}
                className="
                  group relative block overflow-hidden
                  border-4 border-black rounded-2xl bg-white
                  shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000]
                  hover:-translate-y-0.5 hover:-translate-x-0.5
                  transition-all duration-200
                "
              >
                <span
                  className="absolute inset-0 bg-[#FFF7D6] scale-x-0 group-hover:scale-x-100
                            origin-left transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-between px-6 py-4 text-sm uppercase tracking-widest font-black text-[#1A2C6B] group-hover:text-[#E8231B] transition-colors duration-300">
                  {link.label}
                  <span className="text-[#c9c4b4]">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}