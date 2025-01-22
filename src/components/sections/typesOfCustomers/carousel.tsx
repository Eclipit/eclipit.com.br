'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const types: string[] = [
  'Pequenas empresas',
  'Médias empresas',
  'Startups',
  'Infoprodutores',
  'Autônomos',
  'Grandes corporações',
  'Agências de marketing',
  'Instituições de ensino',
  'Organizações governamentais',
  'Setor de saúde',
  'Empresas de e-commerce',
  'Empresas de tecnologia',
  'Setor financeiro',
  'Empresas de logística',
  'Setor de entretenimento',
  'Empresas de recursos humanos',
  'Consultorias de negócios',
];

const carouselOptions = {
  loop: true, // Habilita rotação infinita
};

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [
    Autoplay({ delay: 2000, stopOnInteraction: false }), // Configura o autoplay
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex gap-5 items-center">
        {types.map((type, index) => (
          <div
            key={index}
            className={`embla__slide flex items-center justify-center  ${index === selectedIndex
              ? 'bg-gradient-to-tr from-blue to-pink text-2xl'
              : 'bg-transparent text-lg'
              } transition-all ease-in-out rounded-3xl sm:w-80 sm:h-80 w-64 h-64 px-5`}
          >
            <p className=" font-semibold text-white text-center">{type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
