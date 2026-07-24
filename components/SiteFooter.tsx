export default function SiteFooter() {
  return (
    <footer className="px-6 lg:px-10 py-16">
      {/* <div className="grid md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 mb-16">
        <div>
          <p className="font-display text-2xl mb-4">Atelier Nº7</p>
          <p className="font-body text-sm text-ink-soft leading-relaxed max-w-xs">
            Recevez le journal d&apos;atelier et les nouvelles collections
            avant tout le monde.
          </p>
          <form className="flex mt-4 border-b border-ink max-w-xs">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-transparent py-2 font-body text-sm outline-none placeholder:text-ink-soft"
            />
            <button className="font-body text-xs uppercase tracking-wide hover:text-brick">
              S&apos;inscrire
            </button>
          </form>
        </div>

        <FooterColumn
          title="Boutique"
          links={["Vêtements", "Accessoires", "Collections", "Éditions passées"]}
        />
        <FooterColumn
          title="Atelier"
          links={["Journal", "Notre méthode", "Matières", "Contact"]}
        />
        <FooterColumn
          title="Aide"
          links={["Livraison", "Retours", "Guide des tailles", "FAQ"]}
        />
      </div>

      <div className="border-t border-line/70 pt-6 flex flex-col md:flex-row justify-between gap-2 font-body text-xs text-ink-soft">
        <span>© 2026 Atelier Nº7. Tous droits réservés.</span>
        <span>Mentions légales — CGV — Confidentialité</span>
      </div> */}
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-wide mb-4">{title}</p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="font-body text-sm text-ink-soft hover:text-brick">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
