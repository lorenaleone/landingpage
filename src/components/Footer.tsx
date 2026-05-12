import { site, whatsappLink } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-sand-100/80">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-2xl">
            <span className="text-rust-400">Galego</span> Trekking
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/65">
            {site.tagline}. Operação cadastrada no Cadastur · CNPJ 00.000.000/0001-00 (fictício).
          </p>
        </div>

        <nav className="md:col-span-3 text-sm space-y-2">
          <p className="uppercase tracking-wider2 text-xs text-sand-100/45 mb-3">Navegação</p>
          {site.nav.map((i) => (
            <a key={i.href} href={i.href} className="block hover:text-sand-50">{i.label}</a>
          ))}
        </nav>

        <div className="md:col-span-4 text-sm space-y-2">
          <p className="uppercase tracking-wider2 text-xs text-sand-100/45 mb-3">Contato</p>
          <p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-sand-50">
              {site.whatsappDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-sand-50">{site.email}</a>
          </p>
          <p>
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-sand-50">
              @{site.instagram}
            </a>
          </p>
          <p className="text-sand-100/60">
            {site.address.street} · {site.address.city}/{site.address.state} · {site.address.zip}
          </p>
        </div>
      </div>

      <div className="border-t border-sand-100/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand-100/55">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>Feito com ♥ nos Lençóis.</p>
        </div>
      </div>
    </footer>
  );
}
