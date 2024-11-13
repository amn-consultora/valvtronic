import { auth } from '@/auth';
import { db } from '@/lib/db';

export const getSession = async() => {
    return await auth();
};

export const getUser = async() => {
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null
        };

        const currentUser = await db.user.findUnique({
            where: {
                email: session?.user?.email
            }
        });

        if(!currentUser){
            return null
        }

        return {
            ...currentUser,
            emailVerified: currentUser.emailVerified?.toISOString() || null,
            createdAt: currentUser.createdAt.toISOString()
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUsers = async() => {

    try {
        const users = await db.user.findMany();

        if(!users){
            return null;
        }

        return users;

    } catch (error:any) {
        throw new Error(error);
    }
};