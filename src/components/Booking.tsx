'use client';

import { FormEvent, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { payments, travessias } from '@/lib/content';

const fields = [
  { name: 'nome', label: 'Nome completo', type: 'text', required: true },
  { name: 'telefone', label: 'WhatsApp (com DDD)', type: 'tel', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'data', label: 'Data prevista', type: 'date', required: true },
  { name: 'pessoas', label: 'Quantas pessoas', type: 'number', required: true, min: 1 },
];

export function Booking() {
  const [travessia, setTravessia] = useState<string>(travessias[1].name);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) || '').toString().trim();
    const lines = [
      `Olá Galego! Quero reservar uma travessia.`,
      ``,
      `*Travessia:* ${travessia}`,
      `*Nome:* ${get('nome')}`,
      `*WhatsApp:* ${get('telefone')}`,
      `*E-mail:* ${get('email')}`,
      `*Data prevista:* ${get('data')}`,
      `*Pessoas:* ${get('pessoas')}`,
    ];
    const obs = get('obs');
    if (obs) lines.push(``, `*Observações:* ${obs}`);
    const url = whatsappLink(lines.join('\n'));
    window.open(url, '_blank');
  }

  return (
    <section id="reservar" className="py-24 lg:py-32 bg-lagoon-700 text-sand-50">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-sand-100/80">Reserve sua aventura</p>
          <h2 className="h-display mt-4 text-4xl sm:text-5xl text-sand-50">
            Resposta direto no WhatsApp.
          </h2>
          <p className="mt-5 text-sand-100/80 leading-relaxed max-w-md">
            Preencha aqui que os dados caem na conversa do Galego. Confirmamos
            disponibilidade e mandamos os detalhes em até 1 hora útil.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="uppercase tracking-wider2 text-sand-100/55 text-xs">WhatsApp</dt>
              <dd className="mt-1">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider2 text-sand-100/55 text-xs">E-mail</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider2 text-sand-100/55 text-xs">Endereço</dt>
              <dd className="mt-1">{site.address.street}, {site.address.city} — {site.address.state}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider2 text-sand-100/55 text-xs">Pagamento</dt>
              <dd className="mt-1">{payments.join(' · ')}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl bg-sand-50 text-ink-900 p-7 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-5">
            {fields.map((f) => (
              <label key={f.name} className="block sm:col-span-1">
                <span className="text-xs uppercase tracking-wider2 text-ink-500">{f.label}</span>
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  min={f.min}
                  className="mt-2 w-full border-0 border-b border-ink-900/20 bg-transparent py-2.5 focus:border-lagoon-600 focus:outline-none focus:ring-0"
                />
              </label>
            ))}
          </div>

          <label className="mt-6 block">
            <span className="text-xs uppercase tracking-wider2 text-ink-500">Qual travessia?</span>
            <select
              value={travessia}
              onChange={(e) => setTravessia(e.target.value)}
              className="mt-2 w-full border-0 border-b border-ink-900/20 bg-transparent py-2.5 focus:border-lagoon-600 focus:outline-none focus:ring-0"
            >
              {travessias.map((t) => (
                <option key={t.name} value={t.name}>{t.name} — {t.duration}</option>
              ))}
            </select>
          </label>

          <label className="mt-6 block">
            <span className="text-xs uppercase tracking-wider2 text-ink-500">Observações</span>
            <textarea
              name="obs"
              rows={3}
              placeholder="Restrição alimentar, viagem com criança, datas flexíveis..."
              className="mt-2 w-full border border-ink-900/15 bg-white rounded-xl p-3 focus:border-lagoon-600 focus:outline-none focus:ring-0 resize-none"
            />
          </label>

          <button type="submit" className="mt-8 btn-whats w-full sm:w-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.04 0C5.46 0 .1 5.34.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.93 11.93 0 0 0 5.74 1.46h.01c6.58 0 11.94-5.34 11.94-11.9 0-3.18-1.24-6.17-3.49-8.41z"/></svg>
            Enviar para o WhatsApp
          </button>
          <p className="mt-4 text-xs text-ink-500">
            Ao enviar, você é redirecionado pro WhatsApp com sua mensagem já pronta.
          </p>
        </form>
      </div>
    </section>
  );
}
