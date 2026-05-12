import { features } from '@/lib/content';

export function Marquee() {
  const row = [...features, ...features];
  return (
    <section aria-hidden="true" className="border-y border-ink-900/10 bg-sand-100/60 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee-x gap-10 whitespace-nowrap">
        {row.map((f, i) => (
          <span key={i} className="flex items-center gap-10 text-sm uppercase tracking-wider2 text-ink-700">
            {f}
            <span aria-hidden className="text-rust-500">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
