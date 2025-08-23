import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='h-screen snap-start'>
        <Image className='object-cover' src={'/assets/frame-1.png'} alt='frame-1' fill />
        <h1 className='text-4xl'>About</h1>
    </section>
  )
}

export default About