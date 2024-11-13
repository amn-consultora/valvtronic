import {NextResponse} from 'next/server';

import { Valve } from '@prisma/client';
import { getUser } from '@/actions/user';
import { db } from '@/lib/db';

export async function POST(req: Request){

    const user = await getUser();

    if(!user || user.role !== 'ADMIN') {return NextResponse.error();}

    const body = await req.json();

    const {slug, description, images, category, serie, sizeRange, temperatureRange, operatingPressure, shutterMaterial, closureClassification, bodyType, connectionRules, certifications, applications, bodyMaterials, stemMaterials, seatMaterials, standardDesign, standardTests } = body;

    const existingProductInDB = await db.valve.findFirst({where: {slug}});

    if(existingProductInDB){
        return NextResponse.json({ error: 'Este producto ya existe en la base de datos' }, { status: 400 })
    };

    const product = await db.valve.create({
        data: {
           slug, description, images, category, serie, sizeRange, temperatureRange, operatingPressure, shutterMaterial, closureClassification, bodyType, connectionRules, certifications, applications, bodyMaterials, stemMaterials, seatMaterials, standardDesign, standardTests
        }
    });

    return NextResponse.json(product);
};

export async function PUT(req: Request){

    const user = await getUser();
    
    if(!user) return NextResponse.error();

    if(user.role !== 'ADMIN'){
        return NextResponse.error()
    };

    const {id}:Valve = await req.json();        

    const valve = await db.valve.update({
        where: {id},
        data: {
            ...req.json()
        }
    });

    return NextResponse.json(valve);
};
