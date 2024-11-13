"use client";

import { motion } from "framer-motion";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { TypingText, TitleText } from "../ui/CustomText"
import { fadeIn, staggerContainer } from "@/utils/motion";
import { ExploreCard } from "../ui/ExploreCard";

export const Attributes = () => {
  return (
    <motion.div
      variants={staggerContainer(1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='px-3 lg:px-6 flex flex-col items-center gap-5 w-full mt-10 lg:mt-20'
    >
      <TypingText title="| Atributos" textStyles="text-center" />
      <TitleText title={<>La base de nuestra compañía</>} textStyles="text-center" />
      
      <motion.p
        variants={fadeIn('up', 'tween', 0.1,1)}
        className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey dark:text-slate-300 max-w-[1000px] font-medium"
      >
        Crecimiento es sinónimo de transformación. Tener la capacidad de adaptarse y contar con equipos capacitados, que posean la habilidad de enfrentar creativamente cada desafío, es uno de nuestros mayores valores diferenciales como empresa.
      </motion.p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20">
        <ExploreCard title="Flexibles" subtitle="Trabajamos para lograr la superioridad en cada uno de los productos y servicios que ofrecemos a nuestros clientes. Nos adaptamos a nuevos escenarios, animándonos a buscar nuevos caminos e intercambiando conocimiento y experiencia con colegas. La calidad esta en la experiencia conjunta" icon={BsFillPatchCheckFill} />
        <ExploreCard title="Cercanía humana" subtitle="Nos da una gran satisfacción crear lazos cercanos con las personas con las que interactuamos y creemos que esa es la mejor forma de llegar a entender y empatizar con cada una de sus problemáticas y las de sus empresas. Los vínculos que construimos son la base de las soluciones que brindamos." icon={FaPeopleGroup} />
        <ExploreCard title="Conocimiento" subtitle="Sabemos que el talento y el profesionalismo son claves a la hora de encarar proyectos de cualquier índole. Por eso priorizamos el saber y la capacitación de nuestro capital humano, como así también la habilidad de éstos para exteriorizarlo a nuestros clientes cada vez que éstos lo requieran. El entendimiento es la herramienta básica en la búsqueda de mejores resultados." icon={FaSearch} />
      </div>
    </motion.div>
  )
};