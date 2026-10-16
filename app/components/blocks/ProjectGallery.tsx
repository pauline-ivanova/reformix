'use client';

import { Fragment, useCallback, useEffect, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import type { ProjectImage, ProjectImagePhase } from '@/lib/proyectos-data';

const phaseLabel: Record<ProjectImagePhase, string> = {
  antes: 'Antes',
  proceso: 'Proceso',
  despues: 'Después',
};

export default function ProjectGallery({
  images,
  intro,
}: {
  images: ProjectImage[];
  intro?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const active = activeIndex !== null ? images[activeIndex] : null;
  const total = images.length;

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || total === 0) return current;
      return (current - 1 + total) % total;
    });
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || total === 0) return current;
      return (current + 1) % total;
    });
  }, [total]);

  const onPrevClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      goPrev();
    },
    [goPrev],
  );

  const onNextClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      goNext();
    },
    [goNext],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        event.stopPropagation();
        goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopPropagation();
        goNext();
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [isOpen, goPrev, goNext]);

  if (!images.length) return null;

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-text-heading mb-3 text-center">
          Galería del proyecto
        </h2>
        {intro ? (
          <p className="text-brand-text-body text-center max-w-2xl mx-auto mb-10">{intro}</p>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <figure
              key={`${image.phase}-${image.src}-${image.caption}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="relative block w-full aspect-[4/3] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                aria-label={`Ampliar: ${image.caption}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide bg-brand-primary text-white px-2.5 py-1 rounded">
                  {phaseLabel[image.phase]}
                </span>
              </button>
              <figcaption className="px-4 py-3 text-sm text-brand-text-body">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[80]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto p-4 md:p-8">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-5xl outline-none">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      close();
                    }}
                    className="absolute -top-2 right-0 z-10 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-brand-text-heading shadow hover:bg-white"
                    aria-label="Cerrar imagen ampliada"
                  >
                    Cerrar
                  </button>

                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={onPrevClick}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 px-3 py-2 text-lg font-semibold text-brand-text-heading shadow hover:bg-white md:-left-4"
                        aria-label="Foto anterior"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={onNextClick}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 px-3 py-2 text-lg font-semibold text-brand-text-heading shadow hover:bg-white md:-right-4"
                        aria-label="Foto siguiente"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {active && activeIndex !== null && (
                    <figure className="overflow-hidden rounded-xl bg-black">
                      <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                        <Image
                          key={active.src}
                          src={active.src}
                          alt={active.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          priority
                        />
                      </div>
                      <figcaption
                        className="bg-black/90 px-4 py-3 text-center text-sm text-white"
                        data-lightbox-caption
                      >
                        <span className="mr-2 inline-block rounded bg-brand-primary px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">
                          {phaseLabel[active.phase]}
                        </span>
                        <span>{active.caption}</span>
                        <span className="ml-2 text-white/70 tabular-nums">
                          {activeIndex + 1} / {total}
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
