import { IconType } from "react-icons";

export const ExploreCard = ({ title, subtitle, icon: Icon}:{ title:string; subtitle:string; icon:IconType}) => {
    return (
      <div className="w-full py-6 px-5 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
  
        <Icon className="absolute z-10 top-1 -right-3 w-24 text-5xl text-slate-400 dark:text-slate-800 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        <h3 className="font-medium text-md lg:text-2xl text-primary-blue group-hover:text-white relative z-10 duration-300 pt-10">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 text-sm lg:text-lg mt-3">
          {subtitle}
        </p>
      </div>
    );
  };