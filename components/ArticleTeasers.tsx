import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/shopify";

export default function ArticleTeasers({ articles }: { articles: Article[] }) {
  return (
    <section className="px-6 lg:px-10 py-20 border-b border-line/70 bg-paper-dim/40">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display text-3xl">Le journal d&apos;atelier</h2>
        <Link
          href="/journal"
          className="font-body text-sm uppercase tracking-wide underline underline-offset-4 hover:text-brick"
        >
          Tous les récits
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.id} href={`/journal/${article.handle}`} className="group">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="font-body text-xs uppercase tracking-wide text-brick mb-2">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
              })}
            </p>
            <h3 className="font-display text-xl mb-2">{article.title}</h3>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
