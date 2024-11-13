
import { Actuator } from "@prisma/client";
import { FormItem } from "./FormItem";

export const ActuatorForm = ({product}:{product:Actuator}) => {

    const {
    aplications,
    certifications,
    controlOptions,
    mounting,
    otherSpec,
    outputTorque,
    powerSupply,
    pressureRange,
    standardDesign,
    standardTests,
    strokeLimit,
    temperatureRange,
    valveCompatibility
    } = product;

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-4">
        <FormItem title={"Torque de salida"} property={outputTorque} />
        <FormItem title={"Rango de temperatura"} property={temperatureRange} />
        <FormItem title={"Rango de presión"} property={pressureRange} />
        <FormItem title={"Montaje"} property={mounting} />
        <FormItem title={"Estándar de diseño"} property={standardDesign} />
        <FormItem title={"Ensayos estándar"} property={standardTests} />
        <FormItem title={"Aplicaciones"} property={aplications} />
      </div>

      <div className="flex flex-col gap-4">
        <FormItem title={"Opciones de control (on-off)"} property={controlOptions} />
        <FormItem title={"Fuente de alimentación"} property={powerSupply} />
        <FormItem title={"Certificaciones aprobadas"} property={certifications} />
        <FormItem title={"Compatibilidad de la válvula"} property={valveCompatibility} />
        <FormItem title={"Límite de carrera"} property={strokeLimit} />
        <FormItem title={"Otras especificaciones"} property={otherSpec} />
      </div>

    
    </div>
  )
}
