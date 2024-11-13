"use server";

import * as z from "zod";
import bcrypt from 'bcryptjs';

import { registerSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const register = async(form: z.infer<typeof registerSchema>) => {
    const validatedFields = registerSchema.safeParse(form);

    if(!validatedFields.success){
        return {error: "Campos incorrectos!"};
    }

    const {name, email, password} = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error: "¡Este email ya existe!"}
    };

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    // TODO: Send verification token email

    return {success: "Usuario creado!"}
}