'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gallery } from '@/lib/content';

const SLIDE_W = 320;    // px
const SLIDE_GAP = 20;   // px
const SCALE_SIDE = 0.78;
const ROTATE_DEG = 28;
const TRANSLATE_X = 50; // px, extra push left/right

export function Gallery() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startIdx: 0, dragging: false });

  const total = gallery.length;

  const go = useCallback(
    (idx: number) => {
      setActive(Math.max(0, Math.min(total - 1, idx)));
    },
    [total]
  );

  /* keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(active + 1);
      if (e.key === 'ArrowLeft') go(active - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, go]);

  /* pointer drag */
  function onPointerDown(e: React.PointerEvent) {
    dragRef.current = { startX: e.clientX, startIdx: active, dragging: true };
    trackRef.current?.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current.dragging) return;
    const diff = dragRef.current.startX - e.clientX;
    if (Math.abs(diff) > (SLIDE_W + SLIDE_GAP) / 2) {
      const newIdx = dragRef.current.startIdx + (diff > 0 ? 1 : -1);
      dragRef.current.startX = e.clientX;
      dragRef.current.startIdx = newIdx;
      go(newIdx);
    }
  }
  function onPointerUp() {
    dragRef.current.dragging = false;
  }

  return (
    <section id="galeria" className="py-24 lg:py-28 bg-ink-900 overflow-hidden">
      <div className="container-x mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="eyebrow text-lagoon-300">Galeria</p>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl text-sand-50 max-w-lg leading-[1.06]">
              Um pedaço do que te espera.
            </h2>
          </div>
          {/* dot + arrow nav */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Foto anterior"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/20 text-sand-50 hover:bg-sand-50/10 disabled:opacity-30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
            <span className="text-sm text-sand-100/50 tabular-nums">
              {active + 1} / {total}
            </span>
            <button
              aria-label="Próxima foto"
              onClick={() => go(active + 1)}
              disabled={active === total - 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/20 text-sand-50 hover:bg-sand-50/10 disabled:opacity-30 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Coverflow track */}
      <div
        ref={trackRef}
        className="relative flex items-center justify-center select-none touch-pan-y cursor-grab active:cursor-grabbing"
        style={{ perspective: '1100px', height: `${SLIDE_W * 1.28}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-label="Galeria de fotos — use as setas para navegar"
      >
        {gallery.map((img, i) => {
          const offset = i - active;
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const visible = absOffset <= 3;

          if (!visible) return null;

          const scale = isActive ? 1 : SCALE_SIDE - absOffset * 0.06;
          const rotateY = offset < 0 ? ROTATE_DEG : offset > 0 ? -ROTATE_DEG : 0;
          const translateX = offset * (SLIDE_W + SLIDE_GAP + TRANSLATE_X);
          const translateZ = isActive ? 80 : -absOffset * 60;
          const opacity = isActive ? 1 : Math.max(0.35, 0.75 - absOffset * 0.15);
          const zIndex = 10 - absOffset;

          return (
            <div
              key={img.src}
              onClick={() => !isActive && go(i)}
              aria-label={isActive ? img.alt : `Ver: ${img.alt}`}
              role={isActive ? 'img' : 'button'}
              tabIndex={isActive ? -1 : 0}
              onKeyDown={(e) => e.key === 'Enter' && go(i)}
              style={{
                position: 'absolute',
                width: SLIDE_W,
                height: SLIDE_W * 1.28,
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'transform 0.45s cubic-bezier(.25,.46,.45,.94), opacity 0.45s ease',
                cursor: isActive ? 'default' : 'pointer',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: isActive
                  ? '0 28px 60px rgba(0,0,0,0.55)'
                  : '0 10px 30px rgba(0,0,0,0.35)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={absOffset <= 1 ? 'eager' : 'lazy'}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {isActive && (
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sand-100/90 text-sm leading-snug">{img.alt}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-2">
        {gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-6 h-1.5 bg-lagoon-300'
                : 'w-1.5 h-1.5 bg-sand-100/25 hover:bg-sand-100/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
