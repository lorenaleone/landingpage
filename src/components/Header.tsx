'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/85 backdrop-blur border-b border-ink-900/10' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="#topo" className="flex items-baseline gap-2 font-display text-xl font-medium tracking-tight">
          <span className="text-lagoon-700">Galego</span>
          <span className="text-ink-900">Trekking</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {site.nav.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-ink-700 hover:text-ink-900 transition-colors">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reservar
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-ink-900 transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-ink-900 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-ink-900 transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-sand-50 border-t border-ink-900/10">
          <div className="container-x py-6 flex flex-col gap-4">
            {site.nav.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="text-base text-ink-800">
                {i.label}
              </a>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 w-full">
              Reservar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
