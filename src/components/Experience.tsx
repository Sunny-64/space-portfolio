import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className='h-screen'>
      <Image className="object-cover" src={'/assets/frame-4.png'} alt="frame-1" fill />
    </section>
  );
};

export default Experience;
