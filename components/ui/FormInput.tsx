"use client";

import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: any;
    textarea?: boolean;
    value?: number;
    validate?: any;
    minLength?: number | undefined;
};

export const FormInput:FC<Props> = ({id, errors, label, register, disabled, required = false, type, textarea = false, minLength = undefined, validate}) => {  

  return (
    <div className="w-full relative">
        {
            !textarea 
            ? (
                <>
                <input  
                id={id}
                type={type}
                autoComplete="off"  
                disabled={disabled}
                {...register(id, {
                    required: {value: required, message: 'Este campo es obligatorio'}, 
                    minLength: minLength && {value: minLength, message: `Debe tener al menos ${minLength} caracteres`},
                    validate: validate && {validate}
                })}
                placeholder=' '
                className="peer w-full h-full bg-transparent text-primary-blue font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary-blue disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-primary-blue placeholder-shown:border-t-primary-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm lg:text-xl px-3 py-2.5 rounded-[7px] border-primary-blue focus:border-primary-blue"
            />
            <p className="pt-1 text-red-400 text-center text-sm">{errors[id]?.message}</p>
            </>
            ) : (
                <>
                <textarea  
                id={id}
                disabled={disabled}
                {...register(id, {
                    required: {value: required, message: 'Este campo es obligatorio'}, 
                    minLength: minLength && {value: minLength, message: `Debe tener al menos ${minLength} letras`}
                })}
                placeholder=" "
                className="peer w-full h-full bg-transparent text-primary-blue font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-primary-blue disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-primary-blue placeholder-shown:border-t-primary-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm lg:text-xl px-3 py-2.5 rounded-[7px] border-primary-blue focus:border-primary-blue"
                />
                <p className="pt-1 text-red-400 text-center text-sm">{errors[id]?.message}</p>
                </>
            )
        }
        <label 
            htmlFor={id}
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary-blue leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary-blue transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-xl peer-focus:text-xs before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-primary-blue peer-focus:text-primary-blue before:border-primary-blue peer-focus:before:!border-primary-blue after:border-primary-blue peer-focus:after:!border-primary-blue"
        >{label}</label>
    </div>
  )
}