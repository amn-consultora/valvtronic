"use client";

import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

import { ICategory } from "@/interfaces/category";
import { exo } from "@/app/fonts";

interface Props {
    category: ICategory;
    selected?: boolean; 
    categoryProduct: string;
}

export const Category:FC<Props> = ({category, selected, categoryProduct}) => {

    const {name, href} = category;

    const params = useSearchParams();
    const router = useRouter();    

    const handleClick = useCallback(() => {
        if(name === 'todas'){
            router.push(`/productos/${categoryProduct}`)
        } else{
            let currentQuery = {};

            if(params){
                currentQuery = qs.parse(params.toString());
            }

            const updatedQuery:any = {
                ...currentQuery,
                category: href
            }

            const url = qs.stringifyUrl({
                url: `/productos/${categoryProduct}`,
                query: updatedQuery
            }, {
                skipNull: true
            })

            router.push(url);
        };
    }, [router, name, params, categoryProduct, href]);

  return (
    <div 
        className={`flex items-center justify-start border-b-[3px] mb-3 border-primary-blue gap-1 p-2 transition ${exo.className} cursor-pointer ${selected ? ' text-white  font-semibold bg-primary-blue rounded-full' : 'text-slate-500'}`}
        onClick={handleClick}
    >
        <span className={`font-medium xl:text-[20px] ml-5 uppercase ${selected ? "text-white" : "text-primary-blue"}`} >{name}</span>
    </div>
  )
}