import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className='h-screen'>
      <Image className=" object-cover" src={'/assets/frame-3.png'} alt="frame-1" fill />
    </section>
  );
};

export default Projects;
