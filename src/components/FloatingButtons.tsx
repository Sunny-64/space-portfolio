import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function FloatingButtons() {
  return (
    <>
      {/* Bottom Left Button */}
      <button
        className="fixed bottom-6 left-6 shadow-lg 
         z-50 flex flex-col items-center justify-center gap-2 p-2"
      >
        <span className='uppercase text-pink font-semibold'>Press</span>
        <Image src={'/assets/enter-icon.png'} alt="enter" width={50} height={50} />
      </button>

      {/* Bottom Right Button */}
      <button
        className="fixed bottom-6 right-6 shadow-lg 
        z-50 flex flex-col items-center justify-center gap-2 p-2"
      >
        <span className='uppercase text-pink font-bold'>Scroll</span>
        <Image src={'/assets/mouse-icon.png'} alt="enter" width={50} height={50} />
      </button>
    </>
  );
}
