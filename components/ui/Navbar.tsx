"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { Menu } from './Menu';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {

  const [hidden, setHidden] = useState(false);

  const {scrollY} = useScroll();

 useMotionValueEvent(scrollY, "change", (latest) => {
  const previous = scrollY.getPrevious();
 
  if(previous){
    if(latest > previous && latest > 100){
      setHidden(true)
    }else {
      setHidden(false)
    }
  }
 })
  
return (
  <motion.nav
    variants={{
      visible: {y: 0},
      hidden: {y: "-100%"}
    }} 
    animate={hidden ? "hidden" : "visible"}
    transition={{duration: 0.35, ease: "easeInOut"}}
    className='sticky top-0 w-full mx-auto flex justify-between items-center px-3 py-2 lg:px-6 border-b shadow-md bg-slate-100 dark:bg-slate-900 z-50'
  >
    <Menu />
    <Link href={'/'} className="font-extrabold hidden md:flex z-20 h-24">
      <img src="/assets/logo/logo-color.svg" alt="logo-vx" className='w-full' />
    </Link>
    <div className="flex items-center gap-2">
      <Link href="/buscar" className='border p-1 rounded-3xl border-primary-blue '>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Link>
      <ThemeToggle />
    </div>
  </motion.nav>
)

}