"use client";

import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import queryString from "query-string";

export const SearchBar = () => {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: {}
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    });

    const onSearchTerm = (searchTerm:string) => {  

        if( searchTerm?.length === 0) return;

        return router.push(`/buscar?searchTerm=${ searchTerm }`);
    }

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {

        if(!data.searchTerm) return;

        const url = queryString.stringifyUrl({
            url: '/buscar',
            query: {
                searchTerm: data.searchTerm || "",
                category: data.categoria || ""
            }
        }, {skipNull: true}
    );

        router.push(url);

        reset();
    };

return (
   <div className="flex flex-col relative border-b border-primary-blue">

    <div>
        <input
            onKeyDown={ (e) => e.code === "Enter" ? onSearchTerm((e.target as HTMLInputElement).value.trim()) : null }
            {...register('searchTerm')} 
            type="text"
            autoComplete="off"
            placeholder="¿Qué estás buscando?"
            className="p-2 bg-transparent w-full focus:outline-none focus:border-none text-2xl"
        />

        <button
            className="absolute right-0"
            onClick={handleSubmit(onSubmit)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>

    </div>
   </div>
);
}