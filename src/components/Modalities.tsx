import { modalities } from '@/lib/content';

export function Modalities() {
  return (
    <section id="modalidades" className="py-24 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Modalidades</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-ink-900">
            Cinco formas de cruzar o parque.
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed">
            Cada estilo de viajante pede um ritmo. A gente combina o seu
            no WhatsApp antes da reserva.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {modalities.map((m, i) => (
            <article
              key={m.key}
              className="group relative overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-100/40 p-6 transition hover:bg-white hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="font-display text-xl text-rust-500">0{i + 1}</p>
              <h3 className="mt-4 font-display text-2xl text-ink-900">{m.label}</h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
