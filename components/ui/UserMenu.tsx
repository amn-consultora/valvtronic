"use client";

import { FC, useCallback, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout, MdLogin } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";

import { Avatar } from "./UserAvatar";
import { MenuItem } from "./MenuItem";
import { signOut } from "next-auth/react";
import { BackDrop } from "./BackDrop";
import { useRouter } from "next/navigation";

interface Props {
    user: any;
}

export const UserMenu:FC<Props> = ({user}) => {

    const [isOpen, setIsOpen] = useState(false);
    const {replace} = useRouter();

    const toggleOpen = useCallback(() => {
    setIsOpen( prev => !prev);
    }, []);

    return (
    <>
    <div className="relative z-30 border border-primary-blue rounded-full">
    <div onClick={toggleOpen} className="p-1 flex items-center gap-1 rounded-full cursor-pointer md:hover:shadow-md transition text-white">
        <Avatar user={user} />
        <MdKeyboardArrowDown color="#4A53A0" size={25}/>
    </div>
    {isOpen && (
    <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
        {user?.role === 'ADMIN' && (
        <Link href="/admin">
            <MenuItem
            icon={LuLayoutDashboard}
            onClick={toggleOpen}>
            Panel admin
            </MenuItem>
        </Link>)
        }
        {user ? (
        <div>
        <hr />
            <MenuItem
                color="text-red-600"
                icon={MdLogout}
                onClick={() => {
                toggleOpen();
                signOut();
                replace("/")
            }}>Salir
            </MenuItem>
        </div>
        ) : (
        <div>
            <Link href="/login">
                <MenuItem
                icon={MdLogin}
                onClick={toggleOpen}>Iniciar sesión</MenuItem>
            </Link>
            <Link href="/registro">
                <MenuItem
                icon={PiUserCirclePlus}
                onClick={toggleOpen}>Crea tu cuenta</MenuItem>
            </Link>
        </div>
        )}
    </div>
    )}
    </div>
    {isOpen ? <BackDrop onClick={toggleOpen} /> : null }
    </>
)
}