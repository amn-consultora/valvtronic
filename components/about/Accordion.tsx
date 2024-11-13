import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const AccordionMenu = () => {
    return ( 
        <div className="lg:mt-10 px-3 max-w-[1000px] mx-auto">
            <Accordion type="single" collapsible className="grid space-y-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Soluciones inteligentes</AccordionTrigger>
                    <AccordionContent>
                        Para aquellos que buscan nuevas formas de pensamiento, solución y acción dentro de su empresa con desarrollo en el rubro industrial.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Personalizadas</AccordionTrigger>
                    <AccordionContent>
                        Adaptadas a cada cliente a partir del entendimiento y análisis de cada desafío de cada desafío y el trabajo conjunto en sus posibles soluciones.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Empresas
                    </AccordionTrigger>
                    <AccordionContent>
                        Nuestros clientes. Aquellos espacios donde se desarrollan actividades industriales que involucren, en alguna instancia de sus procesos, el manejo de algún tipo de fluido, cualquiera sean sus características.
                    </AccordionContent>
                </AccordionItem>
            
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Desarrollar y mejorar
                    </AccordionTrigger>
                    <AccordionContent>
                        Con un equipo de profesionales de la ingeniería que buscan permanentemente nuevas maneras de aplicar tecnologías y actualizaciones a cada proceso requerido.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Control de fluidos
                    </AccordionTrigger>
                    <AccordionContent>
                        Rubro al cual nos dedicamos y para el cual buscamos nuevas soluciones que permitan el mejor funcionamiento de productos, la aplicación de sistemas de automatización y la satisfacción final en la experiencia de usuario como empresa.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    </div> 
    );
}