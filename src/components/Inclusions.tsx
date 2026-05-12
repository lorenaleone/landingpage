import { inclusions } from '@/lib/content';

function List({ title, items, tone }: { title: string; items: string[]; tone: 'in' | 'out' | 'bring' }) {
  const accent =
    tone === 'in' ? 'text-lagoon-600' : tone === 'out' ? 'text-rust-500' : 'text-ink-700';
  const Mark = () =>
    tone === 'out' ? (
      <svg className={`mt-1 h-4 w-4 flex-none ${accent}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/>
      </svg>
    ) : (
      <svg className={`mt-1 h-4 w-4 flex-none ${accent}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z" />
      </svg>
    );
  return (
    <div>
      <h3 className="font-display text-xl text-ink-900">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm text-ink-700">
            <Mark />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Inclusions() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">O que está incluso</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-ink-900">
            {inclusions.title}
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-10 lg:gap-14">
          <List title="No pacote" items={inclusions.items} tone="in" />
          <List title="Não inclui" items={inclusions.notIncluded} tone="out" />
          <List title="Leve com você" items={inclusions.bring} tone="bring" />
        </div>
      </div>
    </section>
  );
}
