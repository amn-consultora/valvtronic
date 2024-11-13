"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../ui/CustomText";
import { DiscoverCard } from "./DiscoverCard";
import { exo } from "@/app/fonts";

export const Discover = () => {
  return (
    <motion.div
      variants={staggerContainer(1,0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`w-full flex flex-col mt-10 lg:mt-32 px-3 lg:px-6`}
      >
        <TypingText title="| Ferias internacionales" textStyles="text-center" />
        <TitleText
          title={<>Conectados con el futuro de cada industria</>}
          textStyles="text-center mb-10 lg:mb-20"
        />

        <div className="lg:hidden relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-br from-primary-blue from-5% via-primary-blue via-30% to-primary-purple to-95% rounded-lg">
          <img src="/assets/homepage/oil-gas.jpg" alt="oil-gas" className='w-full object-cover opacity-100 md:group-hover:opacity-35 transition-all rounded-lg' />

          <div className='flex flex-col gap-y-2 items-center justify-center h-full max-w-[600px] mx-auto text-white p-3'>
            <h3 className={`text-2xl ${exo.className}`}>OIL & GAS</h3>
            <p className='text-md'>Considerada una de las principales ferias de la industria de hidrocarburos en la región. En Valvtronic participamos de numerosas ediciones, como uno de los líderes centrales en este mercado.</p>
          </div>
        </div>

        <div className="lg:hidden relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-br from-primary-blue from-5% via-primary-blue via-30% to-primary-purple to-95% rounded-lg mt-5">
          <img src="/assets/homepage/arminera.webp" alt="arminera" className='w-full object-cover opacity-100 md:group-hover:opacity-35 transition-all rounded-lg' />

          <div className='flex flex-col gap-y-2 items-center justify-center h-full max-w-[600px] mx-auto text-white p-3'>
            <h3 className={`text-2xl ${exo.className}`}>ARMINERA</h3>
            <p className='text-md'>Evento que reúne a los referentes de la industria minera. En Valvtronic somos parte de cada convocatoria mostrando nuestros avances en materia de tecnología e innovación.</p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-5 lg:gap-10">
            <DiscoverCard
              id={0}
              imgUrl={"/assets/homepage/oil-gas.jpg"}
              title={"OIL & GAS"}
              subtitle="Considerada una de las principales ferias de la industria de hidrocarburos en la región. En Valvtronic participamos de numerosas ediciones, como uno de los líderes centrales en este mercado."
            />
            <DiscoverCard
              id={1}
              imgUrl={"/assets/homepage/arminera.webp"}
              title={"ARMINERA"}
              subtitle="Evento que reúne a los referentes de la industria minera. En Valvtronic somos parte de cada convocatoria mostrando nuestros avances en materia de tecnología e innovación."
            />
        </div>
    </motion.div>
  )
}