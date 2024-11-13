"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string';

import { actuatorsCategories } from "@/utils/categories"
import { ICategory } from "@/interfaces/category";

interface Props {
    category: ICategory;
    selected?: boolean;
  }

const SearchValveCategory:FC<Props> = ({category, selected}) => {

    const {name, href} = category;
    return (
      <option 
        className={`flex items-center justify-start gap-1 transition cursor-pointer capitalize ${selected ? ' text-primary-purple font-bold' : 'text-slate-500'}`}
        value={href}
      >
        <span className={`font-medium capitalize ${selected ? "text-primary-purple font-bold" : "text-primary-blue"}`} >{name}</span>
      </option>
    )
  }

export const SearchActuator = () => {

    const params = useSearchParams();
    const router = useRouter();

    const category = params?.get('category');   

    const handleClick = (e:any) =>{

        const name = e.target.value;
        if(name === 'todas'){
            router.push(`/buscar`)
        } else{
            if(params){
              qs.parse(params.toString());
            }

            const updatedQuery:any = {
              category: name,
              model: "actuadores"
            }

            const url = qs.stringifyUrl({
              url: `/buscar/model=actuadores`,
              query: updatedQuery
            }, {
              skipNull: true
            })

            router.push(url);
        }
    };

  return (
    <div className="container mx-auto w-full flex justify-between items-center px-3 mt-10">
        <div>
            <label htmlFor="" className="text-xl lg:text-2xl">Actuadores:</label>
            <select className="pt-4 flex gap-3 bg-transparent capitalize" onChange={handleClick}>
                {actuatorsCategories.map(item => (
                <SearchValveCategory
                key={item.id}
                category={item}
                selected={category === item.href || (category === null && item.name === 'todas')}
            />
                ))}
            </select>
        </div>
    </div>
  )
}