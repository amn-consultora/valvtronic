import { FC } from "react";
import Link from "next/link";

import { IProduct } from "@/interfaces/product";
import Image from "next/image";

interface Props {
  product: IProduct;
  categoryProduct: string;
};

export const ProductCard:FC<Props> = ({product, categoryProduct}) => {

  const {serie, images, description, slug} = product;  

  return (
    <Link
      href={`/productos/${categoryProduct}/${slug}`}
      className='p-3 rounded-2xl w-full  shadow-lg shadow-slate-400 dark:shadow-slate-800 transition-all flex flex-col group bg-white/50 md:hover:bg-gradient-to-br from-primary-blue from-10% to-primary-purple to-90% md:hover:text-white overflow-hidden group dark:bg-slate-900'
    >
      <div className="relative w-full flex items-center justify-center max-h-[250px] ">
        {images && 
          <Image 
            src={images[0]}
            alt={serie}
            width={200}
            height={200}
            className='w-full h-[160px] object-contain lg:group-hover:scale-105 transition min-h-[150px]' 
            loading="lazy"
          /> 
        }
      </div>

      <div className="mt-5 flex flex-col items-center justify-center ">
      <h3 className="text-primary-blue font-bold xl:text-2xl capitalize md:group-hover:text-white">{serie}</h3>
      {description && <p className="mt-2 text-primary-dark-grey md:group-hover:text-white text-sm xl:text-lg">{`${description.substring(0, 55)}...`}</p>}
    
      </div>

      <div className="absolute bottom-0 right-0 flex justify-end m-3 card-img_hover">
          <span className="absolute z-50 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-100 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
          </span>
      </div>
    </Link>
  )
}
