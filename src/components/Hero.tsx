import { hero, stats } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden min-h-[92vh] flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601224335112-b86c2226bd34?w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/20 to-ink-900/80" />
      </div>

      <div className="container-x relative pt-32 pb-20 lg:pb-28">
        <p className="eyebrow text-sand-100/80 tracking-widest2">{hero.eyebrow}</p>

        <h1 className="h-display mt-5 text-5xl sm:text-6xl lg:text-[80px] text-sand-50 leading-[1.02]">
          {hero.title.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
          <em className="not-italic italic font-display font-normal text-sand-200/80">
            {hero.titleEm}
          </em>
        </h1>

        <p className="mt-6 max-w-lg text-sand-100/80 text-base lg:text-lg leading-relaxed">
          {hero.sub}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#circuitos"
            className="btn bg-sand-50 text-ink-900 hover:bg-white shadow-lg shadow-black/10"
          >
            {hero.primaryCta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-sand-50/30 text-sand-50 hover:bg-sand-50/10 backdrop-blur-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11.7 11.7 0 0 0 12.04 0C5.46 0 .1 5.34.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.93 11.93 0 0 0 5.74 1.46h.01c6.58 0 11.94-5.34 11.94-11.9 0-3.18-1.24-6.17-3.49-8.41z"/>
            </svg>
            {hero.secondaryCta}
          </a>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-lagoon-400/50 pl-4">
              <dt className="text-3xl lg:text-4xl font-display text-sand-50 leading-none">{s.value}</dt>
              <dd className="mt-1.5 text-xs uppercase tracking-wider2 text-sand-100/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
