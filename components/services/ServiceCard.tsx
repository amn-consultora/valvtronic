import { FC } from "react";

interface Props {
    title: string;
    desc: string;
    img?: string;
    titleStyles: string;
    subtitleStyles: string;
    iconStyles: string,
}

export const ServiceCard:FC<Props> = ({desc, img, title, titleStyles, subtitleStyles, iconStyles}) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-slate-50  dark:bg-gray-700 px-6 pt-10 pb-8  ring-1 ring-gray-900/5 transition duration-700 lg:hover:-translate-y-3 lg:hover:shadow-2xl sm:mx-auto sm:rounded-2xl sm:px-10 w-full">

        <span className="absolute top-7 right-14 z-0 h-20 w-20 rounded-full  transition-all duration-1000 lg:group-hover:scale-[20] md:group-hover:bg-gradient-to-r from-primary-purple to-primary-blue hidden xl:block" />

        <div className="relative z-10 mx-auto max-w-xl">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h3 className={`text-primary-blue dark:text-slate-100  self-start font-bold lg:group-hover:text-white/90 ${titleStyles}`}>{title}</h3>
                    <p className={`space-y-6 pt-5  leading-7 text-gray-400 transition-all duration-700 lg:group-hover:text-white/9 ${subtitleStyles}`}>{desc}</p>
                </div>

                {img && (
                    <span className="grid h-20 w-20 self-end rounded-full transition-all duration-700">
                        <img src={img} className={`${iconStyles} lg:group-hover:invert`} alt="imagen" />
                    </span>
                )}
             
            </div>
        </div>
    </div>
  )
}