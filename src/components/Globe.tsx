'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Globe = () => {
  const rotationRef = useRef(0); // Track current rotation

  useEffect(() => {
    const interval = setInterval(() => {
      rotationRef.current = (rotationRef.current - 90) % 360; // Decrement by 90, loop after -360
      const globe: HTMLElement | null = document.querySelector('.globe-img');
      if (!globe) return;
      globe.style.transform = `rotate(${rotationRef.current}deg)`;
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] pointer-events-none z-10">
      <Image
        className="w-full h-auto translate-y-[72%] object-cover globe-img transition-transform duration-500 ease-in-out"
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
