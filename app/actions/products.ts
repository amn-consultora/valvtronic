"use server";

import { IProductParams } from "@/interfaces/product";
import { db } from "@/lib/db";

export const getProducts = async(params: IProductParams) => {
    try {
        const {searchTerm, category} = params;

        let searchString = searchTerm;

        if(!searchTerm){
            searchString = ''
        };
    
        const query:any = {};

        if(category){
            query.category = category || "";
        };

        const [valves, actuators, accesories ] = await db.$transaction([
            db.valve.findMany({ where: {
                ...query,
                OR: [
                    {
                        serie: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        }),
            db.actuator.findMany({ where: {
                    ...query,
                    OR: [
                        {
                            serie: {
                                contains: searchString,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            }),
            db.accesory.findMany({ where: {
                    ...query,
                    OR: [
                        {
                            serie: {
                                contains: searchString,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            }),
        ]);               
        
        return {valves, actuators, accesories};

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