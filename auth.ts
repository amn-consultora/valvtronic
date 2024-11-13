import NextAuth, {DefaultSession} from "next-auth";
import authConfig from "@/auth.config";
import {PrismaAdapter} from '@auth/prisma-adapter';

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

type ExtendedUser = DefaultSession["user"] & {
  id: string;
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
};

declare module "@auth/core/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER"
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {
      strategy: "jwt"
    },
    callbacks: {
      async session({token, session}){

        if(token.sub && session.user){
          session.user.id = token.sub
        };

        if(token.role && session.user){
          // session.user.role = token.role as "ADMIN" | "USER";
          session.user.role = token.role;
        }
        
        return session;
      },
      async jwt({token}){

        if(!token.sub) return token;

        const existingUser = await getUserById(token.sub);

        if(!existingUser) return token;

        token.role = existingUser.role;

        return token;
      }
    },
  ...authConfig
});