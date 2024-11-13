
export const CTVCard = ({title, subtitle, img, reverse}:{title: string; subtitle:string; img:string; reverse?:boolean}) => {
  return (
    <div className={`flex flex-col items-center justify-between gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} w-full`}>
        <div className="w-full lg:w-1/2">
          <h4 className="text-xl lg:text-4xl">{title}</h4>
          <p className="text-lg lg:text-2xl text-primary-dark-grey max-w-2xl">{subtitle}</p>
        </div>
        <img src={img} alt={`${title}-imagen`} className="w-full lg:w-1/2" />
    </div>
  )
}
