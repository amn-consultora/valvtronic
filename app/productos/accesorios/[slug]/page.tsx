import { getAccesoryBySlug } from "@/actions/accesories";
import { ProductDetails } from "@/components/products/ProductDetails";
import { BackButton } from "@/components/ui/BackButton";
import { NullData } from "@/components/ui/NullData";

const ProductPageBySlug = async({params} : {params: {slug:string}}) => {

  const product = await getAccesoryBySlug(params);

  if(!product) return <NullData title={`No existe el producto "${params.slug}"`} />

  return (
    <section className="py-10 lg:py-20 px-3">
      <BackButton category={product.model} subcategory={product.serie.toUpperCase()} />
      {product && (<ProductDetails product={product} />)}
    </section>
  )
}

export default ProductPageBySlug