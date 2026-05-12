import { about } from '@/lib/content';

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=85')",
              }}
              role="img"
              aria-label="Galego, fundador da agência"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-900/80 to-transparent">
              <p className="text-sand-50 font-display text-xl">Antônio &ldquo;Galego&rdquo; Pereira</p>
              <p className="text-sand-100/70 text-sm">Guia desde 2010 · Santo Amaro do Maranhão</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl lg:text-6xl text-ink-900 max-w-xl">
            {about.title}
          </h2>
          <div className="mt-7 space-y-5 max-w-prose2 text-ink-700 leading-relaxed">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
