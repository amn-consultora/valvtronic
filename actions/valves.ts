
import { IProductParams } from "@/interfaces/product";
import { db } from "@/lib/db";

export const getValves = async(params: IProductParams) => {
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

        const valves = await db.valve.findMany({
            where: {
                ...query,
                OR: [
                    {
                        serie: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        
                    }
                ]
            }
        });

        if(!valves) return null;

        return valves;

    } catch (error:any) {
        throw new Error(error);
    }
};

interface IParams {
    slug?: string;
}

export const getValveBySlug = async(params: IParams) => {

    try {
        const {slug} = params;

        const product = await db.valve.findFirst({
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