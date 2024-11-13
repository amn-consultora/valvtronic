"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import { products } from "@/data/products";
import { IProducts } from "@/interfaces/product";
import { ProductTable } from "@/components/products/ProductTable";

const SearchPage = () => {

  const [query, setQuery] = useState("");

  const keys = ["serie", "category", "model"];

  const search = (data : IProducts[]) => { 
    return data.filter(
      (item:any) => keys.some((key) => item[key].toLowerCase().includes(query))
    )
  };

  return (
    <section className="container mx-auto px-3 lg:px-6 min-h-[50vh]">
      <div className="flex items-center gap-5 mt-10 lg:mt-20">
        <h2 className="text-2xl lg:text-6xl">Búsquedas <br /> populares</h2>

        <div className="text-primary-dark-grey mt-5 flex flex-col gap-y-2 underline lg:text-2xl">
          <Link href="/productos/valvulas" className="flex items-center gap-x-2 lg:hover:opacity-75 transition">Válvulas <IoIosArrowForward/></Link>
          <Link href="/productos/actuadores" className="flex items-center gap-x-2 lg:hover:opacity-75 transition">Actuadores <IoIosArrowForward/></Link>
          <Link href="/productos/ctv" className="flex items-center gap-x-2 lg:hover:opacity-75 transition">Automatización <IoIosArrowForward/></Link>
          <Link href="/productos/accesorios" className="flex items-center gap-x-2 lg:hover:opacity-75 transition">Accesorios <IoIosArrowForward/></Link>
        </div>
      </div>

      <div className="flex relative items-center bg-white mt-10 shadow-xl">
        <input 
          type="text" 
          placeholder="¿Qué producto estás buscando?"
          className="py-2 pl-5 bg-transparent w-full focus:outline-none focus:border-none lg:text-2xl"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />

        <div className="absolute right-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {
        query === ""
          ? <div className="min-h-[50vh]" />
          : <ProductTable data={search(products)} /> 
      }
    </section>
  )
}

export default SearchPage