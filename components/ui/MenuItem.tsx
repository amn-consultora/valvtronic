import { FC, ReactNode } from "react"
import { IconType } from "react-icons";

interface Props {
    children: ReactNode;
    onClick: () => void;
    color?:string;
    icon: IconType
};

export const MenuItem:FC<Props> = ({children, onClick, color, icon: Icon}) => {
  return (
    <div 
      onClick={onClick} 
      className={`flex items-center gap-x-1 px-4 py-3 transition hover:bg-slate-300 ${color}`}
    > 
      <Icon />
      {children} 
    </div>
  )
}