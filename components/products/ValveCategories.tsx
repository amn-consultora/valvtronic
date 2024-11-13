"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { valvesCategories } from "@/utils/categories"
import { Category } from "./Category"

export const ValveCategories = () => {

    const params = useSearchParams();

    const category = params?.get('category');    

    const pathname = usePathname();    

    const isProductsPage = pathname === '/productos/valvulas';

    if(!isProductsPage) return null;

  return (
    <div className="w-full lg:w-1/4">
        <div className="pt-4 flex flex-col gap-3 overflow-x-auto">
            {valvesCategories.map(item => (
                <Category
                    key={item.id}
                    category={item}
                    selected={category === item.href || (category === null && item.name === 'todas')}
                    categoryProduct="valvulas"
                />
            ))}
        </div>
    </div>
  )
}