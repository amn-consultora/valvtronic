"use server";

import {AuthError} from 'next-auth'
import * as z from "zod";

import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async(form: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(form);

    if(!validatedFields.success){
        return {error: "Campos incorrectos!"};
    }

    const {email, password} = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {

        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Email o contraseña incorrectos"}
            
                default:
                    return {error: "Algo salió mal"};
            }
        }

        throw error;
    }
};