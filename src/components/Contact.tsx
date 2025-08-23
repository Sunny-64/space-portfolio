import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className='h-screen snap-start'>
      <Image className=" object-cover" src={'/assets/frame-5.png'} alt="frame-5" fill />
    </section>
  );
};

export default Contact;
