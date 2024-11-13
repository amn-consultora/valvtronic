import { Categories } from "@/components/products/Categories"
import { Hero } from "@/components/products/Hero"

const ProductsPage = () => {
 
  return (
    <section className="px-3 lg:px-6">
      <Hero />
      <Categories />
    </section>
  )
}

export default ProductsPage