import { about } from '@/lib/content';
import { whatsappLink } from '@/lib/site';
import { images } from '@/lib/img';

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-[center_30%]"
              style={{
                backgroundImage:
                  `url('${images.about}')`,
              }}
              role="img"
              aria-label="Marcos Ribeiro, fundador da Brisa Azul Viagens"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-900/85 to-transparent">
              <p className="text-sand-50 font-display text-xl">Marcos Ribeiro</p>
              <p className="text-sand-100/65 text-sm">Fundador · Brisa Azul Viagens · desde 2016</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-xl leading-[1.05]">
            {about.title}
          </h2>
          <div className="mt-7 space-y-5 max-w-prose2 text-ink-700 leading-relaxed text-[15px]">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-8 inline-flex"
          >
            Falar com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
