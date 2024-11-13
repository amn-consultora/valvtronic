import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const AccordionMenu = () => {
    return ( 
        <div className="w-full xl:w-4/12">
            <Accordion type="single" collapsible className="grid space-y-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Conocimiento específico</AccordionTrigger>
                    <AccordionContent>
                        Información personalizada, específica e inteligente a todos los profesionales que se desarrollen en las industrias del control de fluidos.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Intercambio y aprendizaje</AccordionTrigger>
                    <AccordionContent>
                        Desarrollo de habilidades prácticas y conocimientos específicos de productos y tecnologías, para minimizar los errores humanos y extender la vida útil de los mismos.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Soporte y asistencia</AccordionTrigger>
                    <AccordionContent>
                        Un equipo formado tanto para dar soluciones a inconvenientes técnicos y reparaciones, como para realizar mantenimiento industrial o incluso brindar el asesoramiento necesario para garantizar el funcionamiento adecuado de cada producto en campo.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
    </div> 
    );
}