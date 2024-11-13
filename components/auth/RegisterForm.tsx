"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { CardWrapper } from "@/components/auth/CardWrapper";
import { registerSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {

    const [isPending, startTransition] = useTransition();
    const {push} = useRouter();

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (form:z.infer<typeof registerSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            register(form)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success)
                })
        });

        setTimeout(() => {
            push("/")
        }, 2000);
    };

  return (
    <CardWrapper
          headerLabel="Crear una cuenta"
          backButtonLabel="Inicia sesión"
          backButtonHref="/login"
          backButtonQuestion={"¿Ya tienes cuenta? "}
          showSocial 
        >
        <Form {...form}>
            <form 
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="space-y-4">
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Pedro Perez"
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="tuemail@ejemplo.com"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        placeholder="******"
                                        type="password"
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error}  />
                <FormSuccess message={success}  />
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                    variant={"vx"}
                >
                    Registrarme
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}
