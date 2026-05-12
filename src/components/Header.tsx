'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { Logo } from './Logo';

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
        scrolled
          ? 'bg-sand-50/90 backdrop-blur-sm border-b border-ink-900/8'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="#topo" aria-label="Brisa Azul Viagens — ir para o topo">
          <Logo variant={scrolled ? 'default' : 'light'} size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {site.nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={`text-sm transition-colors ${
                scrolled ? 'text-ink-700 hover:text-ink-900' : 'text-sand-100/80 hover:text-sand-50'
              }`}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={scrolled ? 'btn-primary' : 'btn bg-sand-50/15 border border-sand-50/30 text-sand-50 hover:bg-sand-50 hover:text-ink-900 backdrop-blur-sm'}
          >
            Reservar
          </a>
        </div>

        {/* Mobile burger */}
        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className={`lg:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border ${
            scrolled ? 'border-ink-900/15' : 'border-sand-50/30'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px w-5 transition-all duration-200 ${scrolled ? 'bg-ink-900' : 'bg-sand-50'} ${
                i === 0 && open ? 'translate-y-[7px] rotate-45' :
                i === 1 && open ? 'opacity-0 scale-x-0' :
                i === 2 && open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t border-ink-900/10 bg-sand-50' : 'max-h-0'
        }`}
      >
        <div className="container-x py-6 flex flex-col gap-4">
          {site.nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink-800 hover:text-lagoon-600"
            >
              {i.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Reservar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
