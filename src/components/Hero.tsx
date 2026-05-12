import { hero, stats } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pt-24 lg:pt-28">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601224335112-b86c2226bd34?w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/30 to-sand-50" />
      </div>

      <div className="container-x relative pt-12 pb-20 lg:pt-24 lg:pb-28">
        <p className="eyebrow text-sand-100/90">{hero.eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-7xl text-sand-50">
          {hero.title}
          <br />
          <em className="not-italic text-sand-100/90 font-display font-normal italic">
            {hero.titleEm}
          </em>
        </h1>
        <p className="mt-6 max-w-xl text-sand-100/85 text-base lg:text-lg leading-relaxed">
          {hero.sub}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#travessias" className="btn-primary bg-sand-50 text-ink-900 hover:bg-white">
            {hero.primaryCta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline border-sand-100/40 text-sand-50 hover:bg-sand-50 hover:text-ink-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.04 0C5.46 0 .1 5.34.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.93 11.93 0 0 0 5.74 1.46h.01c6.58 0 11.94-5.34 11.94-11.9 0-3.18-1.24-6.17-3.49-8.41z"/></svg>
            {hero.secondaryCta}
          </a>
        </div>

        {/* stats */}
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl lg:text-4xl font-display text-sand-50">{s.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider2 text-sand-100/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
