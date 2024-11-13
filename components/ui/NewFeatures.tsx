import { FC } from "react";
import { IIdentity } from "@/interfaces/constants";

interface Props{
  identity: IIdentity;
};

export const NewFeatures:FC<Props> = ({ identity : {icon: Icon, subtitle, title} }) => (
  <div className="flex-1 flex flex-col items-center lg:items-start sm:max-w-[250px] min-w-[210px]">
    <div
      className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'
    >
    <Icon color="e1e1e1" size={30} />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-blue-800">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);