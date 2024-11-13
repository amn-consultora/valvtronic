"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { staggerContainer, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../ui/CustomText";

export const Departments = () => {
  return ( 
    <div>
      <motion.div
      variants={staggerContainer(1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='px-3 lg:px-6 flex flex-col items-center gap-5 w-full mt-10 lg:mt-20'
    >
      <TypingText title="| Talento humano" textStyles="text-center" />
      <TitleText title={<>Quienes se animan a marcar la diferencia</>} textStyles="text-center" />
      
      <motion.p
        variants={fadeIn('up', 'tween', 0.1,1)}
        className="mt-10 sm:text-[32px] text-[20px] text-center text-primary-dark-grey dark:text-slate-300 max-w-[950px] font-medium"
      >
        Las personas son las que hacen valiosa a una compañía. Aportan habilidades, creatividad, ideas, trayectoria y experiencias que impulsan el éxito y la innovación en las diferentes etapas de cada proyecto.
      </motion.p>
      </motion.div>
    
      <div className="mt-10 lg:mt-20 px-3 mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-3">
        <div>
          <Accordion type="single" collapsible className="grid space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger>Ventas internas y externas</AccordionTrigger>
              <AccordionContent>
                Área que se encarga de identificar oportunidades comerciales, gestionar relaciones con clientes actuales y potenciales y procurar la satisfacción al cliente en todo momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Operaciones</AccordionTrigger>
                <AccordionContent>
                  Sector que se ocupa de coordinar y ejecutar las actividades diarias relacionadas con la producción, distribución y servicios, asegurando eficiencia y cumplimiento de estándares de calidad y costos.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                CTV | VAC
              </AccordionTrigger>
              <AccordionContent>
                Espacio dedicado a la innovación, la ingeniería y el avance tecnológico profesional en el desarrollo de proyectos industriales.
              </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>

        <div>
        <Accordion type="single" collapsible className="grid space-y-3">
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Calidad, seguridad y ambiente
              </AccordionTrigger>
              <AccordionContent>
                Departamento responsable de implementar y supervisar políticas y procedimientos para asegurar altos estándares en la calidad del producto o servicio, así como en la seguridad laboral y la gestión ambiental.
              </AccordionContent>
            </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Marketing y comunicación
            </AccordionTrigger>
            <AccordionContent>
              Equipo que desarrolla estrategias para promover nuestros productos y servicios, además de gestionar la imagen y la comunicación de la empresa tanto interna como externamente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Administración y finanzas
            </AccordionTrigger>
            <AccordionContent>
              Personal que gestiona y controla los recursos económicos y administrativos para asegurar el funcionamiento eficiente y el cumplimiento de objetivos financieros y estratégicos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </div> 
    </div> 
  );
}