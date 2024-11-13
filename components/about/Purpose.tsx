"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { FaArrowDown } from 'react-icons/fa6';
import { TypingText, TitleText } from '../ui/CustomText';

export const Purpose = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex justify-center items-center flex-col lg:mt-20 px-3 lg:px-6`}
    >
      <TypingText title="| Propósito" textStyles="text-center" />
      <TitleText
          title={<>La esencia de nuestros objetivos</>}
          textStyles="text-center"
        />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey dark:text-slate-300 max-w-[1000px]"
      >
        Brindamos soluciones inteligentes y personalizadas a todas aquellas empresas que requieran desarrollar y mejorar sus procesos para el control de fluidos
      </motion.p>

      <motion.span
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[18px] h-[28px] object-contain my-[35px] animate-bounce"
      >
        <FaArrowDown size={30}/>
      </motion.span>
    </motion.div>
  )
}
