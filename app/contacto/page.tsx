
import { ContactForm } from '@/components/ContactForm'
import { FormWrap } from '@/components/ui/FormWrap'
import { exo } from '../fonts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const ContactPage = async() => {

  return (
    <section className='lg:py-20 px-3 lg:px-6'>
      <div className='grid lg:grid-cols-2 gap-3'>
        <div className={`flex flex-col gap-5 mt-10 ${exo.className}`}>
          <h1 className='text-3xl lg:text-6xl text-primary-blue max-w-[850px] '>¿Cuál es tu <br /> próximo proyecto?</h1>
          <p className='text-xl lg:text-3xl text-primary-dark-grey '>Trabajemos juntos para hacer <br /> tus ideas realidad.</p>
        </div>
        <FormWrap>
          <ContactForm />
        </FormWrap>
      </div>

      <div className='grid lg:grid-cols-2 gap-3 mt-16 lg:mt-52'>
        <div className={`flex flex-col gap-5 ${exo.className}`}>
          <h1 className='text-3xl lg:text-6xl text-primary-blue max-w-[850px] '>Dónde <br /> encontrarnos</h1>
          <p className='text-xl lg:text-3xl text-primary-dark-grey '>Ubicados en puntos <br /> estratégicos de la Argentina.</p>
        </div>
        
        <Accordion type="single" collapsible className="grid items-center gap-3 mt-5 lg:mt-0">
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-start'>Oficinas comerciales y administración</AccordionTrigger>
            <AccordionContent>
              Buenos Aires - Argentina <br />
              Irala 393 | La Boca (C1163ABG) <br />
              +54-911-5772-5464 <br />
              <a href="https://maps.app.goo.gl/LQJM3vEhzaVQCaSY6" target='_blank' className='lg:hover:text-primary-blue transition-colors'>Ubicación</a>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className='text-start'>Planta industrial y administración</AccordionTrigger>
            <AccordionContent>
              Mendoza - Argentina <br />
              Irala 393 | La Boca (C1163ABG) <br />
              +54-911-5772-5464 <br />
              <a href="https://maps.app.goo.gl/fRXjgyRT6Zy7duQR9" target='_blank' className='lg:hover:text-primary-blue transition-colors'>Ubicación</a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default ContactPage