import { AccordionMenu } from "@/components/about/Accordion";
import { Attributes } from "@/components/about/Attributes";
import { Departments } from "@/components/about/Departments";
import { Purpose } from "@/components/about/Purpose";
import { HeroSection } from "@/components/ui/HeroSection";

const About = () => (
  <section>
    <HeroSection
      imgUrl="/assets/about/hero.webp"
      subheading="Nosotros"
      heading="Nuestra gente, la que hace posible el crecimiento constante."
    />
    <Purpose />
    <AccordionMenu />
    <Attributes />
    <Departments />
  </section>
);

export default About;