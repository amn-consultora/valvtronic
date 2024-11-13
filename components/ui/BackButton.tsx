import { exo } from "@/app/fonts";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BackButton({category, subcategory}:{category: string; subcategory?: string}) {

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink title={"Inicio"} href={"/"} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbLink title={"Categorías"} href={"/productos"} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {
            subcategory ? (
              <BreadcrumbLink title={category} href={`/productos/${category}`} className="capitalize" />
            ) :
            <BreadcrumbPage className={exo.className}>{category}</BreadcrumbPage>
          }
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {subcategory && (
          <BreadcrumbItem>
            <BreadcrumbPage className={exo.className}>{subcategory}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
