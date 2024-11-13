import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FormItem = ({title, property}:{title: string; property:string | boolean | null}) => {

    if(property === null || property === "") return;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{property}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};