import { User } from "@prisma/client";

export type IUser = Omit<User, "createdAt" | "emailVerified"> & {
    createdAt: string | null;
    emailVerified: string | null;
};
