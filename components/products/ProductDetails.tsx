"use client";

import { FC, useState } from "react";
import { ValveForm } from "./forms/ValveForm";
import { ActuatorForm } from "./forms/ActuatorForm";
import { AccesoryForm } from "./forms/AccesoryForm";

const Horizontal = () => {
    return <hr className="w-[30%] my-2 h-1 rounded-md bg-primary-purple" />
};

interface Props {
    product: any;
}

export const ProductDetails:FC<Props> = ({product}) => {

    const [isAllDescription, setIsAllDescription] = useState<boolean>(false);
   
  return (
    <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
            {/* Info container */}
            <div className="flex flex-col gap-1 text-slate-500 w-full max-w-4xl">
                <h2 className="text-2xl lg:text-4xl mb-5 font-medium text-primary-blue uppercase">{product.serie}</h2>
                <p
                    onClick={() => setIsAllDescription(!isAllDescription)} 
                    className="text-justify w-full">
                    {isAllDescription ? product.description : `${product.description.substring(0, 200)}...`}
                    <span className="text-slate-700 font-bold cursor-pointer ml-3">({!isAllDescription ? 'ver más' : 'ver menos'})</span>
                </p>
                <div className="mt-10">
                    <span className="font-semibold">Categoría:</span> {product.category.toUpperCase()}
                </div>
                <Horizontal />
            </div>

            {/* Images container */}
            <div className="w-full flex items-center justify-center">
                <img src={product.images[0]} alt="" className="max-h-[250px] lg:max-h-[500px]" />            
            </div>
        </div>

        {/* Properties section */}
        {
            product.model === "valvulas" 
                ? <ValveForm product={product} />
            : product.model === "actuadores"
                ? <ActuatorForm product={product} />
            : <AccesoryForm product={product} />
        }
    </div>
  )
}
