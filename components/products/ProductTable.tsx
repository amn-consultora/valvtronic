import { IProducts } from "@/interfaces/product"
import Link from "next/link"
import { NullData } from "../ui/NullData"

export const ProductTable = ({data}:{data:IProducts[]}) => {

    if(!data.length) return <NullData title="UPS! No hay nada para mostrar. Intenta con otra palabra." />

  return (
    <div className="relative overflow-auto sm:rounded-lg mt-10 max-h-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-500 uppercase dark:text-gray-400 border-b border-primary-dark-grey">
            <tr>
                <th scope="col" className="px-6 py-3">Tipo</th>
                <th scope="col" className="px-6 py-3">Categoría</th>
                <th scope="col" className="px-6 py-3">Serie</th>
            </tr>
        </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id} className=" border-b dark:border-gray-700 capitalize">
                            {/* odd:bg-transparent odd:dark:bg-gray-900 even:bg-gray-300 even:dark:bg-gray-800 */}
                            <td className="px-6 py-4">{item.model}</td>
                            <td className="px-6 py-4">{item.category}</td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> 
                            <Link 
                                href={item.model === "valvulas" ? `/productos/valvulas/${item.slug}` : item.model === "accesorios" ? `/productos/accesorios/${item.slug}` : `/productos/actuadores/${item.slug}`}
                                className="md:hover:opacity-70 transition-colors"
                            >
                                {item.serie}
                            </Link>
                            </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
