"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
 
import { cn } from "@/lib/utils";
import { exo } from "@/app/fonts";
 
interface WordRotateProps {
  title: string[];
  subtitle: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}
 
export default function WordRotate({
  title,
  subtitle,
  duration = 5000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % title.length);
      setIndex((prevIndex) => (prevIndex + 1) % subtitle.length);
    }, duration);
 
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [title, subtitle, duration]);
 
  return (
    <div className="overflow-hidden flex flex-col lg:gap-y-10 h-[40vh]">
      <AnimatePresence >
        <motion.h1
          key={title[index]}
          className={cn("text-3xl lg:text-7xl font-bold", className, exo.className)}
          {...framerProps}
        >
          {title[index]}
        </motion.h1>
        <motion.p
          key={subtitle[index]}
          className={cn("text-xl lg:text-3xl text-primary-dark-grey dark:text-slate-300", className, exo.className)}
          {...framerProps}
        >
          {subtitle[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};  
  
export const WordsRotate = () => {
  return (
    <WordRotate 
      className="max-w-[790px] text-center lg:text-start mt-10 lg:mt-0" 
      title={[
        "Creamos experiencias integrales y personalizadas", 
        "Potenciamos herramientas que impulsan el futuro", 
        "Impulsamos soluciones para mercados competitivos"
      ]}
      subtitle={[
        "Capacitaciones a medida, servicio técnico personalizado y el conocimiento técnico que tu empresa y proyectos necesitan.", 
        "Productos de alta calidad, recursos humanos capacitados y respaldo internacional para tu próximo proyecto.", 
        "Participamos activa y profesionalmente en proyectos específicos dentro de cada industria en nuestro país."
      ]}
    />);
}