'use client';

import { motion } from 'framer-motion';
import { FaEye } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import { IoIosCloud } from "react-icons/io";

import { TitleText, TypingText } from '../ui/CustomText';
import { ExploreCard } from '../ui/ExploreCard';
import { staggerContainer } from '@/utils/motion';

export const Explore = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full mx-auto flex flex-col mt-10 lg:mt-10 lg:h-[70vh] px-3 lg:px-6`}
    >
      <TypingText title="| Innovación y avance tecnológico" textStyles="text-center" />
      <TitleText title={<>VTC - Valvtronic Technology Center</>} textStyles="text-center" />
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20">
        <ExploreCard title="I+D Investigación y desarrollo" subtitle="Innovación tecnológica" icon={FaEye} />
        <ExploreCard title="Ingeniería de detalles" subtitle="Planos y cálculos" icon={FaGear} />
        <ExploreCard title="Desarrollo de productos" subtitle="Válvulas, actuadores, sistemas de control" icon={RiBox3Fill} />
        <ExploreCard title="VAC | Centro de automatización" subtitle="Sector de fabricación" icon={IoIosCloud} />
      </div>
    </motion.div>
  );
};