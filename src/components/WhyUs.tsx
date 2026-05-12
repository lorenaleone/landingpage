import { whyUs } from '@/lib/content';

export function WhyUs() {
  return (
    <section className="py-24 lg:py-28 bg-ink-900 text-sand-50">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-rust-400">Por que com a gente</p>
            <h2 className="h-display mt-4 text-4xl sm:text-5xl text-sand-50 max-w-2xl">
              Cinco motivos que ninguém de fora copia.
            </h2>
          </div>
          <p className="text-sand-100/70 max-w-md text-sm leading-relaxed">
            Não é discurso de panfleto. É o que a gente vive desde criança, e
            o que sustenta o serviço há quase quinze anos.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-sand-100/15 overflow-hidden rounded-2xl">
          {whyUs.map((w) => (
            <li key={w.n} className="bg-ink-900 p-7 hover:bg-ink-800 transition">
              <span className="font-display text-rust-400 text-xl">{w.n}</span>
              <h3 className="mt-5 font-display text-2xl text-sand-50">{w.title}</h3>
              <p className="mt-3 text-sand-100/65 text-sm leading-relaxed">{w.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
