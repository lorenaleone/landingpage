import { circuitos } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

export function Circuitos() {
  return (
    <section id="circuitos" className="py-24 lg:py-32 bg-sand-100/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Circuitos</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-ink-900 leading-[1.06]">
            Seis rotas. Um ponto de partida: Santo Amaro.
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed text-[15px]">
            Cada circuito acessa uma parte diferente do parque. Você pode
            combinar mais de um — a gente monta o roteiro junto.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {circuitos.map((c, i) => (
            <article
              key={c.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                c.featured
                  ? 'border-lagoon-400/50 ring-1 ring-lagoon-400/30'
                  : 'border-ink-900/10'
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-lagoon-600 px-3 py-1 text-[10px] uppercase tracking-wider2 text-white font-medium">
                  Mais procurado
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-[40px] leading-none text-sand-200 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="eyebrow text-right">{c.duration}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl text-ink-900 leading-snug">{c.name}</h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed flex-1">{c.summary}</p>

              <ul className="mt-6 space-y-2.5">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-ink-800">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-none text-lagoon-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  `Olá! Tenho interesse no ${c.name} (${c.duration}). Qual a disponibilidade?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                Reservar este circuito
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-500">
          Quer combinar dois circuitos?{' '}
          <a
            href={whatsappLink('Quero combinar mais de um circuito. Pode me ajudar a montar o roteiro?')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lagoon-600 underline underline-offset-2 hover:text-lagoon-800"
          >
            Fale com a gente no WhatsApp
          </a>{' '}
          e montamos juntos.
        </p>
      </div>
    </section>
  );
}
