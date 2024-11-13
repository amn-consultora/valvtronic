import { Profiles } from "@/components/ctv/Profiles";
import { Services } from "@/components/ctv/Services";
import { HeroSection } from "@/components/ui/HeroSection";

const CTVPage = () => {
  return (
    <section>
      <HeroSection
        imgUrl="/assets/ctv/hero.webp"
        subheading="Valvtronic Technology Center"
        heading=" Un espacio dedicado a la innovación, la ingeniería y el avance tecnológico."
      />
      <Services />
      <Profiles />
    </section>
  )
}

export default CTVPage