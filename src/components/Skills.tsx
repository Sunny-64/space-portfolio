import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='h-screen'>
        <Image className='object-cover' src={'/assets/frame-2.png'} alt='frame-2' fill />
    </section>
  )
}

export default Skills