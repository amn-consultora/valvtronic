'use client';

import { motion } from 'framer-motion';
import { exo } from '@/app/fonts';

import { fadeIn, staggerContainer } from '@/utils/motion';

export const Hero = () => {

  return (
  <section className={`flex-col items-center justify-center mx-auto mt-10`}>
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mb-10 lg:mb-20"
    >
        <h1 className={`text-6xl mb-5 text-center text-primary-blue ${exo.className}`}>CTV - Centro de Tecnología Valvtronic</h1>
    </motion.div>

    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
        <div className='h-screen w-full relative'>
            <div className='ctv-hero-img' />
            <p className={`absolute left-5 lg:left-20 bottom-0 max-w-[800px] py-20 text-white text-3xl lg:text-6xl font-bold ${exo.className}`}>
              Un espacio dedicado a la innovación, la ingeniería y el avance tecnológico. Equipos profesionales al servicio de tus proyectos. 
            </p>
    </div>

    </motion.div>
  </section>)
};