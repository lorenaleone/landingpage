import { travessias } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

export function Travessias() {
  return (
    <section id="travessias" className="py-24 lg:py-32 bg-sand-100/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Travessias</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-ink-900">
            Quatro roteiros. Um ponto de partida: Santo Amaro do Maranhão.
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed">
            Você pode combinar mais de um roteiro. Quer uma sugestão pra
            uma viagem em família ou em grupo? A gente desenha junto.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {travessias.map((t) => (
            <article
              key={t.name}
              className={`relative card flex flex-col ${
                t.featured ? 'lg:scale-[1.01] border-rust-500/30 ring-1 ring-rust-500/20' : ''
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-rust-500 px-3 py-1 text-[10px] uppercase tracking-wider2 text-white">
                  Mais procurada
                </span>
              )}
              <p className="eyebrow">{t.duration}</p>
              <h3 className="mt-3 h-display text-3xl text-ink-900">{t.name}</h3>
              <p className="mt-4 text-ink-700 leading-relaxed">{t.summary}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-ink-800">
                    <svg className="mt-1 h-4 w-4 flex-none text-lagoon-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(`Oi Galego! Tenho interesse na travessia de ${t.duration} (${t.name}). Pode me passar disponibilidade?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  Reservar essa travessia
                </a>
                <a href="#reservar" className="btn-outline">Tirar dúvida</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
