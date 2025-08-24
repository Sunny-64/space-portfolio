import React from 'react';
import Image from 'next/image';

const Globe = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] pointer-events-none z-10">
      <Image
        className="w-full h-auto translate-y-[72%] object-cover"
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
