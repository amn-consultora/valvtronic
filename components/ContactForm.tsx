"use client";

import { useRef, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { isEmail } from '@/utils/contact';
import { FormInput } from './ui/FormInput';
import { Loading } from './ui/Loading';
import { IoIosArrowForward } from 'react-icons/io';

export const ContactForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [notARobot, setNotARobot] = useState(true);
    const ref = useRef(null);
    const formRef = useRef(null);
    const {register, handleSubmit, reset ,formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            from_first_name: '',
            from_last_name: '',
            from_email: '',
            phone: '',
            reasonForConsult: '',
            message: ''
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = () => {
        setIsLoading(true);
        
        try {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
                formRef.current || '', 
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
              .then(() => {
                setSuccess(true);
                setIsLoading(false);
                
                setTimeout(() => {
                    setSuccess(false);
                    reset();
                  }, 2000);
                })
        } catch (error) {
            console.log(error);
            setError(true);
            setIsLoading(false);
        }
    };    

  return (
    <motion.div 
        ref={ref}
        initial="initial"
        whileInView="animate"
        className='w-full flex flex-col gap-y-8 items-center rounded-md mt-10'
    >        
        <motion.form 
            className='w-full flex flex-col gap-y-3 rounded-md z-20'
            ref={formRef}
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}} 
        >
            <div className='w-full flex items-center gap-x-2'>
                <FormInput 
                    id="from_first_name"
                    label="Nombre"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    minLength={3}
                    errors={errors}
                    required
                />
                
                <FormInput 
                    id="from_last_name"
                    label="Apellido"
                    type="text"
                    disabled={isLoading}
                    register={register}
                    minLength={3}
                    errors={errors}
                    required
                />
            </div> 

            <FormInput 
                id="from_email"
                label="Email"
                type="email"
                disabled={isLoading}
                register={register}
                errors={errors}
                validate={isEmail}
                required
                />
            <FormInput 
                id="phone"
                label="Telefono"
                type="tel"
                disabled={isLoading}
                register={register}
                errors={errors}
                required={false}
            />

            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Consultas generales" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Seleccionar</SelectLabel>
                    <SelectItem value="consults">Consultas generales</SelectItem>
                    <SelectItem value="prices">Precios y entregas</SelectItem>
                    <SelectItem value="support">Soporte técnico de producto</SelectItem>
                    <SelectItem value="oportunities">Oportunidades de empleo</SelectItem>
                    <SelectItem value="others">Otros</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <FormInput 
                textarea
                id="message"
                label="Mensaje"
                type="tel"
                disabled={isLoading}
                register={register}
                errors={errors}
                minLength={10}
                required
            />

            <div className="flex items-center mb-5" onClick={() => setNotARobot(!notARobot)}>
                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-300" />
                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No soy <span className="text-blue-600 dark:text-blue-500 hover:underline">un robot</span>.</label>
            </div>

            <div data-scroll data-scroll-speed={0.1}>
            <button
                className='flex items-center gap-x-3 group text-primary-blue md:hover:bg-primary-blue md:hover:text-white w-fit px-3 py-2 rounded-full transition-all cursor-pointer'
                onClick={handleSubmit(onSubmit)}
                disabled={notARobot}
            >
                 <span className='text-xl md:group-hover:text-white transition'>
                    {isLoading ? <Loading /> : "ENVIAR"}
                 </span>
                <IoIosArrowForward />
            </button>
        </div>
        {success && <p className='text-center textl-lg text-emerald-600'>Su email fue enviado. Nos comunicaremos a la brevedad</p>}
        {error && <p className='text-center textl-lg text-rose-600'>UPS! Algo salió mal, intente de nuevo más tarde</p>}
            
        
        </motion.form>
    </motion.div>
  )
}