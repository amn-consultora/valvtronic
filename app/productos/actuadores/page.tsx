import { getActuators } from "@/actions/actuators";

import { ActuatorsCategories } from "@/components/products/ActuatorsCategories";
import { ProductCard } from "@/components/products/ProductCard";
import { BackButton } from "@/components/ui/BackButton";
import { NullData } from "@/components/ui/NullData";
import { IProductParams } from '@/interfaces/product';

interface Props {
  searchParams: IProductParams;
};

export const revalidate = 0

const ActuatorsPage = async({searchParams}:Props) => {

  const products = await getActuators(searchParams);

  return (
    <section className="py-10 lg:py-20 px-3">
    <BackButton category="Actuadores" />

    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">  
    <ActuatorsCategories />
      {products?.length === 0
        ? (<NullData title={"Aún no encontramos productos en esta categoría. Seleccione 'Todas' para limpiar los filtros"} />)
        : (<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:w-3/4">
          {products?.map( (product:any) => (
            <ProductCard key={product.id} product={product} categoryProduct="actuadores" />
          ))}
          </div>)}
    </div>
  </section>
  )
};

export default ActuatorsPage;