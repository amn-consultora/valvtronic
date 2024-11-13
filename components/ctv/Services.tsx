import { CTVCard } from "./CTVCard"

export const Services = () => {
  return (
    <div className="px-3 flex flex-col gap-10 lg:mt-20 lg:mb-32 w-full max-w-[1635px] mx-auto">
        <CTVCard 
            title={"I+D Investigación y desarrollo"} 
            subtitle={"Para convertir las ideas en soluciones prácticas y revolucionarias."} 
            img={"/assets/ctv/id-investigacion.webp"} 
        />
        <CTVCard 
            title={"Ingeniería de detalles"} 
            subtitle={"Para una toma de decisiones informada en todas las etapas del proyecto."} 
            img={"/assets/ctv/ingenieria-detalles.webp"} 
            reverse
        />
        <CTVCard 
            title={"Desarrollo de productos"} 
            subtitle={"Para comprender, junto a nuestros clientes, sus necesidades específicas."} 
            img={"/assets/ctv/desarrollo-productos.webp"} 
        />
        <CTVCard 
            title={"VAC | Centro de automatización"} 
            subtitle={"Para encontrar soluciones para la industria del control de fluidos."} 
            img={"/assets/ctv/vac.webp"} 
            reverse
        />
    </div>
  )
}
