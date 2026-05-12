'use client';

import { FormEvent, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { payments, circuitos } from '@/lib/content';

export function Booking() {
  const [circuito, setCircuito] = useState(circuitos[0].name);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) || '').toString().trim();
    const lines = [
      `Olá Brisa Azul! Quero reservar um circuito.`,
      ``,
      `*Circuito:* ${circuito}`,
      `*Nome:* ${get('nome')}`,
      `*WhatsApp:* ${get('telefone')}`,
      `*E-mail:* ${get('email')}`,
      `*Data prevista:* ${get('data')}`,
      `*Pessoas:* ${get('pessoas')}`,
    ];
    const obs = get('obs');
    if (obs) lines.push(``, `*Observações:* ${obs}`);
    window.open(whatsappLink(lines.join('\n')), '_blank');
  }

  return (
    <section id="reservar" className="py-24 lg:py-32 bg-lagoon-700 text-sand-50">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
        {/* Left */}
        <div className="lg:col-span-5">
          <p className="eyebrow text-lagoon-200">Reserve seu circuito</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-sand-50 leading-[1.06]">
            Resposta em até 1h no WhatsApp.
          </h2>
          <p className="mt-5 text-sand-100/75 leading-relaxed max-w-sm text-[15px]">
            Preencha e seus dados chegam direto na conversa da Brisa Azul.
            A gente confirma disponibilidade e manda todos os detalhes.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            {[
              { label: 'WhatsApp', value: site.whatsappDisplay, href: whatsappLink(), external: true },
              { label: 'E-mail', value: site.email, href: `mailto:${site.email}`, external: false },
              { label: 'Instagram', value: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}`, external: true },
            ].map(({ label, value, href, external }) => (
              <div key={label}>
                <dt className="uppercase tracking-wider2 text-sand-100/45 text-[11px]">{label}</dt>
                <dd className="mt-1">
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="hover:underline text-sand-100/85 hover:text-sand-50 transition-colors"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className="uppercase tracking-wider2 text-sand-100/45 text-[11px]">Pagamento</dt>
              <dd className="mt-1 text-sand-100/85">{payments.join(' · ')}</dd>
            </div>
          </dl>
        </div>

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 rounded-3xl bg-sand-50 text-ink-900 p-7 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: 'nome', label: 'Nome completo', type: 'text' },
              { name: 'telefone', label: 'WhatsApp (com DDD)', type: 'tel' },
              { name: 'email', label: 'E-mail', type: 'email' },
              { name: 'data', label: 'Data prevista', type: 'date' },
              { name: 'pessoas', label: 'Quantas pessoas', type: 'number' },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-[11px] uppercase tracking-wider2 text-ink-400">{f.label}</span>
                <input
                  name={f.name}
                  type={f.type}
                  required
                  min={f.type === 'number' ? 1 : undefined}
                  className="mt-2 w-full border-0 border-b border-ink-900/20 bg-transparent pb-2.5 pt-1 focus:border-lagoon-600 focus:outline-none text-ink-900 placeholder:text-ink-400"
                />
              </label>
            ))}
          </div>

          <label className="mt-7 block">
            <span className="text-[11px] uppercase tracking-wider2 text-ink-400">Qual circuito?</span>
            <select
              value={circuito}
              onChange={(e) => setCircuito(e.target.value)}
              className="mt-2 w-full border-0 border-b border-ink-900/20 bg-transparent pb-2.5 pt-1 focus:border-lagoon-600 focus:outline-none text-ink-900"
            >
              {circuitos.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name} — {c.duration}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-7 block">
            <span className="text-[11px] uppercase tracking-wider2 text-ink-400">Observações</span>
            <textarea
              name="obs"
              rows={3}
              placeholder="Restrição alimentar, crianças no grupo, datas flexíveis..."
              className="mt-2 w-full rounded-xl border border-ink-900/12 bg-sand-100/60 px-4 py-3 focus:border-lagoon-500 focus:outline-none resize-none text-sm text-ink-800 placeholder:text-ink-400"
            />
          </label>

          <button type="submit" className="btn-whats mt-8 w-full sm:w-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11.7 11.7 0 0 0 12.04 0C5.46 0 .1 5.34.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.93 11.93 0 0 0 5.74 1.46h.01c6.58 0 11.94-5.34 11.94-11.9 0-3.18-1.24-6.17-3.49-8.41z"/>
            </svg>
            Enviar para o WhatsApp
          </button>
          <p className="mt-3 text-xs text-ink-400">
            Você será redirecionado para o WhatsApp com a mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  );
}
