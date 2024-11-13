'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { motion, useScroll, useTransform } from 'framer-motion';

import { socialMedia } from '@/utils/socialMedia';
import AnimatedLink from './AnimatedLink';

export const Footer = () => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  return (
  <footer ref={container} className='container mx-auto px-3 relative'>
    <Divs scrollProgress={scrollYProgress} />
  </footer>
)};

const Divs = ({scrollProgress}:{scrollProgress: any}) => {
  
  const y = useTransform(scrollProgress, [0, 1], [-400, 0]);
  const year = new Date().getFullYear();  
  return (

    <div className='container mx-auto overflow-hidden'>
      <motion.div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center gap-3 mt-10 w-full h-full' style={{y}}>

        <Link href="/" className='w-40 lg:w-52 mt-20 lg:mt-0'>
          <img src="/assets/logo/vx-color.svg" alt="logo-vx" className='w-full' />
        </Link>

        <div className='flex flex-col items-center gap-y-3 text-primary-blue dark:text-slate-300'>
          <FaGoogle className='border border-primary-blue dark:border-slate-300 p-2 rounded-full text-4xl text-primary-blue dark:text-slate-300' />
          <a href="https://www.google.com/maps/place/VALVTRONIC+SA/@-33.0116512,-68.8577285,17z/data=!4m8!3m7!1s0x967e0b2af28f0889:0x9f58ffac4ea42040!8m2!3d-33.0113013!4d-68.8569814!9m1!1b1!16s%2Fg%2F11bwnbcbfh?entry=ttu" target='_blank' className='flex items-center justify-center gap-x-2 underline'>
          <p className='text-md md:hover:scale-105 transition'>RESEÑAS EN GOOGLE</p>
          <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
          <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
          <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
          <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
          <GoStarFill className="md:hover:text-yellow-400 md:hover:scale-110 transition" />
          </a>
        </div>

      <div className='flex justify-between gap-5 mt-5 lg:mt-0'>
          <div className='flex flex-col items-center md:items-start gap-1 uppercase'>
            <Link href="/nosotros" className='text-primary-blue dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
            <AnimatedLink title={"Nosotros"} textStyles="text-[15px] lg:text-xl" /></Link>
            <Link href="/productos" className='text-primary-blue dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
            <AnimatedLink title={"Productos"} textStyles="text-[15px] lg:text-xl" /></Link>
            <Link href="/servicios" className='text-primary-blue dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
            <AnimatedLink title={"Servicios"} textStyles="text-[15px] lg:text-xl" /></Link>
            <Link href="/vtc" className='text-primary-blue dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
            <AnimatedLink title={"VTC"} textStyles="text-[15px] lg:text-xl" /></Link>
            <Link href="/contacto" className='text-primary-blue dark:text-slate-300 md:hover:text-primary-purple md:hover:font-bold transition'>
            <AnimatedLink title={"Contacto"} textStyles="text-[15px] lg:text-xl" /></Link>

            <div className="mt-6 sm:mt-0 flex items-center gap-x-2">
              {socialMedia.map( ({href, source, id}) => (
                <a key={id} href={href} target="_blank" className="w-7 h-7 flex items-center justify-center">
                  <img src={source} alt="" className='w-full lg:hover:scale-105 transition-all' />
                </a>
              ))}
              </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center w-full mt-5 md:my-20 text-primary-dark-grey dark:text-slate-300">
        <div className="flex flex-col items-center justify-center text-center gap-4 mt-5">
          <p> Copyright © {year} Valvtronic. Todos los derechos reservados. </p>
          <p className='w-full text-center'>Desarrollado por <br className='md:hidden' /> <a className='underline cursor-pointer md:hover:text-purple-500 transition' href="#" target='_blank'>AMN Consultora Informática</a> </p>
        </div>
      </div>
  </div>
  )
}