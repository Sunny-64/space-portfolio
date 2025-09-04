'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'socials'] as const;

const Globe = () => {
  const rotationRef = useRef(0);
  const prevSectionRef = useRef<string | null>(null);

  // Keep the same order for the hook and for index math
  const activeSection = useActiveSection([...SECTIONS]);

  useEffect(() => {
    if (!activeSection) return;

    // Initialize on first render
    if (prevSectionRef.current === null) {
      prevSectionRef.current = activeSection;
      return;
    }

    const from = SECTIONS.indexOf(prevSectionRef.current as any);
    const to = SECTIONS.indexOf(activeSection as any);

    if (from === -1 || to === -1 || from === to) {
      prevSectionRef.current = activeSection;
      return;
    }

    // Positive delta -> scrolling down (later in array) => anticlockwise (-90)
    // Negative delta -> scrolling up (earlier in array) => clockwise (+90)
    const delta = to - from;
    const steps = Math.abs(delta);
    const perStep = delta > 0 ? +90 : -90;

    rotationRef.current += perStep * steps;
    // normalize to [0, 360)
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
