import React from 'react';
import Image from 'next/image';

const Globe = () => {
  return (
      <Image className="fixed -bottom-[90%] left-1/2 -translate-x-1/2 h-[800px!] w-[68%] object-cover pointer-events-none" src={'/assets/globe.png'} alt="frame-1" width={500} height={500} />
  );
};

export default Globe;
