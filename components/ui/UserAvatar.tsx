import { User } from "@prisma/client";
import { FC } from "react";
import {FaUserCircle} from 'react-icons/fa';

interface Props {
    user?: User; 
}

export const Avatar:FC<Props> = ({user}) => {
    if(user){
        if(user.image){
            return <img
            src={user.image}
            alt=''
            className="rounded-full h-[24px]"
        />
        }else{
            return <span className="uppercase text-primary-blue dark:text-slate-200 font-bold">{user.name ? user.name[0] : ""}</span>
        }
    }

  return ( <FaUserCircle size={24} color="#4A53A0" />)
}
