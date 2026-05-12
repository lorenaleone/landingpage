import { gallery } from '@/lib/content';

export function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-28 bg-ink-900">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-rust-400">Galeria</p>
            <h2 className="h-display mt-4 text-4xl sm:text-5xl text-sand-50 max-w-xl">
              Um pedaço do que te espera.
            </h2>
          </div>
          <p className="text-sand-100/70 text-sm max-w-sm leading-relaxed">
            Fotos feitas em roteiros reais. Sem retoque exagerado e sem stock.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`relative overflow-hidden rounded-xl ${
                i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
