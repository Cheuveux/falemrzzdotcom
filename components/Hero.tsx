import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-[auto_1fr_1fr] border-b border-line/70">
      {/* Signature : texte vertical façon dos de magazine, visible desktop uniquement */}
      <div className="hidden md:flex items-center justify-center px-3 border-r border-line/70">
        <span className="vertical-rl font-body text-xs uppercase tracking-[0.3em] text-ink-soft">
          Automne 01 — Édition limitée
        </span>
      </div>

      {/* Bloc texte */}
      <div className="flex flex-col justify-center px-6 lg:px-14 py-16 lg:py-24">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brick mb-6">
          Nouvelle collection
        </p>
        <h1 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-6 text-balance">
          Des pièces façonnées à la main, pensées pour durer.
        </h1>
        <p className="font-body text-ink-soft max-w-md mb-10 leading-relaxed">
          Douze silhouettes, une seule teinturerie, trois artisans. Chaque
          pièce de cette édition est numérotée et documentée dans notre
          journal d&apos;atelier.
        </p>
        <div className="flex gap-4">
          <Link
            href="/collections/automne-01"
            className="bg-ink text-paper px-7 py-3 font-body text-sm uppercase tracking-wide hover:bg-brick transition-colors"
          >
            Voir la collection
          </Link>
          <Link
            href="/journal/atelier"
            className="border border-ink px-7 py-3 font-body text-sm uppercase tracking-wide hover:border-brick hover:text-brick transition-colors"
          >
            Lire le journal
          </Link>
        </div>
      </div>

      {/* Image bleed */}
      <div className="relative min-h-[340px] md:min-h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Silhouette de la collection Automne 01, veste en lin brut"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
