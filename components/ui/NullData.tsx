import { FC } from "react";

interface Props {
    title: string;
    width?: string;
}

export const NullData:FC<Props> = ({title, width = "w-full"}) => {
  return (
    <div className={`flex items-center justify-center text-center h-[30vh] text-xl md:text-2xl ${width}`}>
        <p className="font-medium">{title}</p>
    </div>
  )
}
