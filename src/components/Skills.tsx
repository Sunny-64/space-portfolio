import Image from 'next/image';
import React from 'react';
import { lineClassName } from './About';

const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJs',
  'NextJs',
  'ReactNative',
  'Nestjs',
  'ExpressJs',
  'Docker',
  'AWS',
  'GCP',
  'GraphQL',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Git',
];

const Skills = () => {
  return (
    <section id="skills" className="h-screen snap-start">
      <Image className="object-cover opacity-70" src={'/assets/frame-2.png'} alt="frame-2" fill />
      <div className="">
        <div className="text-white pt-20 text-center w-full">
          <span className={`${lineClassName} inline-block w-1/5`}></span>
          <p className="text-3xl sm:text-4xl font-bold text-transparent neon-text neon-stroke neon-shadow my-2 uppercase">
            My Skills
          </p>
          <span className={`${lineClassName} inline-block w-1/5`}></span>
        </div>

        <div className="text-white text-center mt-12">
          <p className="text-2xl font-medium text-white my-2 uppercase neon-shadow mb-12">
            Here is a list of my skills
          </p>

          <div className="w-full sm:w-1/2 px-14 sm:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
            {SKILLS.map((skill) => (
              <span key={skill} className="border-2 border-pink px-6 py-4 text-lg bg-black/20 rounded-sm z-50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
