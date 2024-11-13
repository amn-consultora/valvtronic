
import { Accesory } from "@prisma/client";
import { FormItem } from "./FormItem";

export const AccesoryForm = ({product}:{product:Accesory}) => {

    const {
    applications,
    certifications,
    connections,
    feedPressure,
    inputSignal,
    intrinsicSafety,
    otherSpec,
    protectionDegree,
    temperatureRange
    } = product;

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-4">
        <FormItem title={"Presión alimentación"} property={feedPressure} />
        <FormItem title={"Señal entrada"} property={inputSignal} />
        <FormItem title={"Conexiones"} property={connections} />
        <FormItem title={"Rango de temperatura"} property={temperatureRange} />
      </div>

      <div className="flex flex-col gap-4">
        <FormItem title={"Grado de protección"} property={protectionDegree} />
        <FormItem title={"Seguridad intrínseca"} property={intrinsicSafety} />
        <FormItem title={"Aplicaciones"} property={applications} />
        <FormItem title={"Certificaciones y aprobaciones"} property={certifications} />
        <FormItem title={"Otras especificaciones"} property={otherSpec} />
      </div>

    
    </div>
  )
}
