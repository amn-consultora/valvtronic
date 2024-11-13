'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

export const TypingText = ({ title, textStyles }: { title:string, textStyles?:string }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-lg lg:text-3xl dark:text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: { title:string | ReactNode, textStyles?:string }) => (
  <motion.h1
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 text-3xl lg:text-6xl ${textStyles}`}
  >
    {title}
  </motion.h1>
);