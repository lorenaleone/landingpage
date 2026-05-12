import { whyUs } from '@/lib/content';

export function WhyUs() {
  return (
    <section className="py-24 lg:py-28 bg-lagoon-800 text-sand-50">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-lagoon-300">Por que a Brisa Azul</p>
            <h2 className="h-display mt-4 text-4xl sm:text-5xl text-sand-50 max-w-xl leading-[1.06]">
              Cinco motivos para escolher quem mora no parque.
            </h2>
          </div>
          <p className="text-sand-100/65 max-w-xs text-sm leading-relaxed lg:text-right">
            Não é propaganda. É o que nos diferencia na prática, circuito após circuito.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-lagoon-600/20 overflow-hidden rounded-2xl">
          {whyUs.map((w) => (
            <li
              key={w.n}
              className="bg-lagoon-800 p-7 hover:bg-lagoon-700/60 transition-colors duration-200"
            >
              <span className="font-display text-lagoon-300 text-xl">{w.n}</span>
              <h3 className="mt-5 font-display text-[22px] text-sand-50 leading-snug">{w.title}</h3>
              <p className="mt-3 text-sand-100/60 text-sm leading-relaxed">{w.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
