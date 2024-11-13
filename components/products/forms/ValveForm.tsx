import { Valve } from "@prisma/client";
import { FormItem } from "./FormItem";

export const ValveForm = ({product}:{product:Valve}) => {

    const {
      applications,
      bodyMaterials,
      bodyType,
      certifications,
      closureClassification,
      connectionRules,
      operatingPressure,
      seatMaterials,
      shutterMaterial,
      sizeRange,
      standardDesign,
      standardTests,
      stemMaterials,
      temperatureRange
    } = product;

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-4">
        <FormItem title={"Rango de tamaño"} property={sizeRange} />
        <FormItem title={"Rango de temperatura"} property={temperatureRange} />
        <FormItem title={"Presión operativa máx. permitida"} property={operatingPressure} />
        <FormItem title={"Material del obturador"} property={shutterMaterial} />
        <FormItem title={"Materiales del cuerpo"} property={bodyMaterials} />
        <FormItem title={"Materiales del vástago"} property={stemMaterials} />
        <FormItem title={"Materiales del asiento"} property={seatMaterials} />
      </div>

      <div className="flex flex-col gap-4">
        <FormItem title={"Clasificación con cierre"} property={closureClassification} />
        <FormItem title={"Tipo de cuerpo"} property={bodyType} />
        <FormItem title={"Normas de conexión"} property={connectionRules} />
        <FormItem title={"Certificaciones"} property={certifications} />
        <FormItem title={"Aplicaciones"} property={applications} />
        <FormItem title={"Estándar de diseño"} property={standardDesign} />
        <FormItem title={"Ensayos estándar"} property={standardTests} />
      </div>

    
    </div>
  )
}
