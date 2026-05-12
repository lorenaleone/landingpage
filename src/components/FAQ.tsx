'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-ink-900">
            Perguntas que a gente recebe toda semana.
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed">
            Não achou o que procurava? Manda no WhatsApp que a gente responde
            em até 1h no horário comercial.
          </p>
        </div>

        <ul className="lg:col-span-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {faq.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-ink-900">{item.q}</span>
                  <span
                    className={`mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-transform ${
                      isOpen ? 'rotate-45 bg-ink-900 text-sand-50 border-ink-900' : ''
                    }`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-ink-700 leading-relaxed max-w-prose2">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
