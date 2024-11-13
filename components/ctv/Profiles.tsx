import { profiles } from '@/utils/ctv';
import { SupportCard } from '../services/SupportCard';
import { TitleText } from '../ui/CustomText';

export const Profiles = () => {
  return (
    <div className='px-3 lg:px-6 flex flex-col gap-2 mt-10 lg:mt-20 items-center justify-center'>
      <div className="mb-16 w-full">
        <TitleText
          title={<>Un equipo con experiencia <br /> y trayectoria</>}
          textStyles="text-center"
        />
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:justify-center items-center gap-5 w-full max-w-[1400px]">
        {profiles.map( ({desc, id, img, title, subtitle}) => (
          <SupportCard 
            key={id}
            title={title}
            subtitle={subtitle}
            desc={desc}
            img={img}
            className='-bottom-14 lg:-bottom-2 group-hover:-translate-y-14 lg:group-hover:-translate-y-2'
          />
        ))}    
      </div>                              
    </div>
  )
};