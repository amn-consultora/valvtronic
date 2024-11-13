import { FC } from "react";
import { exo } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  desc?: string;
  img: string;
  className?: string;
};

export const SupportCard:FC<Props> = ({desc = "", img, subtitle = "", title, className = ""}) => {

  return (
    <div className="group relative space-y-6 overflow-hidden w-full">
      <img
        className="mx-auto h-[28rem] w-full object-cover object-top ransition duration-500 group-hover:scale-110"
        src={img}
        alt={title}
        loading="lazy"
        width="640"
        height="805"
      />
      <div 
        className={cn(
        "absolute inset-x-0 h-max group-hover:h-full mt-auto bg-primary-blue/90 translate-y-48 p-3 px-6 transition duration-300 ease-in-out",
        className)}>
        <div className="flex flex-col gap-y-3 h-full transition">
          <h4 className={`font-semibold text-white text-3xl ${exo.className}`}>{title}</h4>
          <span className="block text-gray-300 text-lg">{subtitle}</span>
        <p className="mt-8 text-gray-300 dark:text-slate-200 text-lg">{desc}</p>
        </div>
      </div>
  </div>
  );
};                      