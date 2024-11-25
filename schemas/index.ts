
import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email({
        message: "El email es requerido"
    }),
    password: z.string().min(1, {
        message: "La contraseña es requerida"
    })
});

export const registerSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre es requerido"
    }).toLowerCase(),
    email: z.string().email({
        message: "El email es requerido"
    }).toLowerCase(),
    password: z.string().min(6, {
        message: "Mínimo 6 caracteres requeridos"
    })
});