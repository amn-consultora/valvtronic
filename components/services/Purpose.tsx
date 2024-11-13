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
      className={`flex justify-center items-center flex-col`}
    >
      <TypingText title="| A medida" textStyles="text-center" />
      <TitleText
          title={<>Conocimiento técnico al servicio de cada industria</>}
          textStyles="text-center"
        />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey dark:text-slate-300 max-w-[850px]"
      >
        Cada cliente y cada empresa tiene necesidades específicas, nuestro equipo técnico cuenta con el conocimiento y las herramientas para brindar la excelencia y la calidad que cada uno busca
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
