import { FC } from "react";
import { exo } from "@/app/fonts";

interface Props {
    title: string;
    center?: boolean;
};

export const Heading:FC<Props> = ({title, center}) => {
  return (
        <h1 className={`${center ? 'text-center' : 'text-start'} ${exo.className} mt-2 text-primary-purple text-4xl lg:text-6xl`}>{title}</h1>
  )
};