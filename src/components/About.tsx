import React from 'react';
import Image from 'next/image';
import Socials from './Socials';
import FloatingButtons from './FloatingButtons';

const lineClassName = 'inline-block border-1 border-pink max-w-[600px] h-4 shadow-sm shadow-pink';

const About = () => {
  return (
    <section id="about" className="h-screen relative px-2 sm:px-4">
      <Image className="object-cover pointer-events-none opacity-70" src={'/assets/frame-1.png'} alt="frame-1" fill />
      <div className="z-50">
        <div className="text-white pt-20 text-center w-full">
          <div className="w-full flex justify-center items-center gap-2">
            <span className={`${lineClassName} flex-grow`}></span>
            <span className="text-white text-lg sm:text-xl font-bold uppercase">A Message from Earth</span>
          </div>
          <p className="text-3xl sm:text-[54px] font-bold text-transparent neon-text my-2 uppercase">
            Hello Fellow Galaxy Member
          </p>
          <div className="w-full flex justify-center items-center gap-2">
            <span className="text-white text-lg sm:text-xl font-bold uppercase">A Message from Earth</span>
            <span className={`${lineClassName} flex-grow`}></span>
          </div>

          <p className="text-3xl sm:text-[54px] font-bold text-transparent my-10 uppercase neon-stroke neon-shadow">
            I am Sunny
          </p>
        </div>
      </div>
      <div className="socials">
        <Socials />
      </div>
      <div>
        <FloatingButtons />
      </div>
    </section>
  );
};

export default About;
