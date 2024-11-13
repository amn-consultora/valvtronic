
import { IProductParams } from "@/interfaces/product";
import { db } from "@/lib/db";

export const getAccesories = async(params: IProductParams) => {
    try {
        const {category, searchTerm} = params;

        let searchString = searchTerm;

        if(!searchTerm){
            searchString = ''
        }

        let query:any = {};

        if(category){
            query.category = category;
        }

        const products = await db.accesory.findMany({
            where: {
                ...query,
                OR: [
                    {
                        serie: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        description: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        });

        if(!products) return null;

        return products;

    } catch (error:any) {
        throw new Error(error);
    }
};

interface IParams {
    slug?: string;
}

export const getAccesoryBySlug = async(params: IParams) => {

    try {
        const {slug} = params;

        const product = await db.accesory.findFirst({
            where: {
                slug
            }
        });

        if(!product){
            return null;
        }

        return product;
    } catch (error:any) {
        throw new Error(error)
    }
};