import { Logo } from './Logo';
import { site, whatsappLink } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-sand-100/75">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo variant="light" size="md" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-100/55">
            {site.tagline}. Empresa fictícia para fins de portfólio.
          </p>
        </div>

        <nav className="md:col-span-3 text-sm space-y-2">
          <p className="uppercase tracking-wider2 text-xs text-sand-100/40 mb-3">Navegação</p>
          {site.nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="block hover:text-sand-50 transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="md:col-span-4 text-sm space-y-2.5">
          <p className="uppercase tracking-wider2 text-xs text-sand-100/40 mb-3">Contato</p>
          <p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sand-50 transition-colors"
            >
              {site.whatsappDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-sand-50 transition-colors">
              {site.email}
            </a>
          </p>
          <p>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sand-50 transition-colors"
            >
              @{site.instagram}
            </a>
          </p>
          <p className="text-sand-100/45 text-xs leading-relaxed pt-1">
            {site.address.street} · {site.address.city}/{site.address.state}
          </p>
        </div>
      </div>

      <div className="border-t border-sand-100/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand-100/45">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>Feito com ♥ nos Lençóis Maranhenses.</p>
        </div>
      </div>
    </footer>
  );
}
