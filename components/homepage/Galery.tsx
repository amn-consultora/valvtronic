"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../ui/CustomText";

const images = [
    "/assets/homepage/industrial-trainning/formacion-industrial-1.webp",
    "/assets/homepage/industrial-trainning/formacion-industrial-2.webp",
    "/assets/homepage/industrial-trainning/formacion-industrial-3.webp",
    "/assets/homepage/industrial-trainning/formacion-industrial-4.webp",
    "/assets/homepage/industrial-trainning/formacion-industrial-5.webp",
    "/assets/homepage/industrial-trainning/formacion-industrial-6.webp",
  ];  

export function Galery() {
  return (
    <>
     <motion.div
      variants={staggerContainer(1,0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full mx-auto flex flex-col mt-10 lg:mt-32 mb-10 lg:mb-20 px-3 lg:px-6`}
    >
      <TypingText title="| Formación industrial" textStyles="text-center" />
      <TitleText title={<>Potenciá el conocimiento de tu equipo</>} textStyles="text-center" />
      </motion.div>
        <Carousel 
            className="w-full mx-auto max-w-[1700px] "
            plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              opts={{loop: true}}
        >
        <CarouselContent className="">
            {images.map((img, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
                <div className="">
                <Card>
                    <CardContent className="group flex items-center justify-center bg-slate-100 dark:bg-slate-950">
                      <img src={img} alt="" className="w-full" />
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </>
  )
}
