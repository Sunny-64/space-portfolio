'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'socials'] as const;
type Section = (typeof SECTIONS)[number];

const Globe = () => {
  const rotationRef = useRef(0);
  const prevSectionRef = useRef<Section | null>(null);

  // Tell TS what useActiveSection returns
  const activeSection = useActiveSection([...SECTIONS]) as Section | null;

  useEffect(() => {
    if (!activeSection) return;

    if (prevSectionRef.current === null) {
      prevSectionRef.current = activeSection;
      return;
    }

    const from = SECTIONS.indexOf(prevSectionRef.current);
    const to = SECTIONS.indexOf(activeSection);

    if (from === -1 || to === -1 || from === to) {
      prevSectionRef.current = activeSection;
      return;
    }

    const delta = to - from;
    const steps = Math.abs(delta);
    const perStep = delta > 0 ? +90 : -90;

    rotationRef.current += perStep * steps;
    rotationRef.current = ((rotationRef.current % 360) + 360) % 360;

    const globe = document.querySelector<HTMLElement>('.globe-img');
    if (globe) {
      globe.style.transform = `rotate(${-rotationRef.current}deg)`;
    }

    prevSectionRef.current = activeSection;
  }, [activeSection]);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] pointer-events-none z-10">
      <Image
        className="w-full h-auto translate-y-[72%] object-cover globe-img transition-transform duration-800 ease-in-out"
        src="/assets/globe.svg"
        alt="globe"
        width={1200}
        height={1200}
        priority
      />
    </div>
  );
};

export default Globe;
