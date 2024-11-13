
import { HeroSection } from "@/components/ui/HeroSection";
import { AccordionMenu } from "@/components/services/Accordion";
import { Support } from "@/components/services/Support";
import { Purpose } from "@/components/services/Purpose";

const ServicesPage = () => {
  return (
  <section>
    <HeroSection
      imgUrl="/assets/services/hero.webp"
      subheading="Servicios"
      heading="El conocimiento como base del éxito compartido con nuestros clientes."
    />
    <Purpose />
    <div className="flex flex-col xl:flex-row xl:justify-between gap-5 mt-10 mx-auto px-3 lg:px-6">
      <AccordionMenu />
      <Support />
    </div>
  </section>
  )
}

export default ServicesPage