import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { exo } from '../fonts';
 
export default function ControlSistemsPage() {
  return (
    <div className='container mx-auto flex flex-col justify-center gap-3 h-[80vh]'>
      <h2 className={`text-3xl lg:text-6xl text-primary-purple pt-24 ${exo.className}`}>Esta página <br /> se encuentra en <br /> construcción</h2>
      <p className={`text-xl lg:text-3xl text-primary-dark-grey ${exo.className}`}>Estamos trabajando para <br /> darte la mejor información <br /> posible.</p>
      <Link href="/" className='flex items-center group text-primary-purple md:hover:bg-primary-purple md:hover:text-white w-fit px-3 py-2 rounded-full transition-all'>
        <span className='text-xl md:group-hover:text-white transition'>Regresar al inicio</span>
        <IoIosArrowForward />
      </Link>
    </div>
  )
}