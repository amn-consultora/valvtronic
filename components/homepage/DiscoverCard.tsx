import { FC } from 'react';
import { exo } from '@/app/fonts';

interface Props {
  id: number;
  imgUrl: string | undefined;
  title: string;
  subtitle?: string;
}

export const DiscoverCard:FC<Props> = ({ imgUrl, title, subtitle = '' }) => {

  return (
  <div className="relative w-full flex flex-col items-center justify-center group transition-all bg-gradient-to-br from-primary-blue from-5% via-primary-blue via-30% to-primary-purple to-95% rounded-lg">
      <img src={imgUrl} alt={title} className='w-full object-cover opacity-100 md:group-hover:opacity-35 transition-all rounded-lg' />

      <div className='absolute inset-0 hidden md:group-hover:flex flex-col gap-y-4 items-center justify-center h-full max-w-[600px] mx-auto text-white transition-all'>
        <h3 className={`text-4xl ${exo.className}`}>{title}</h3>
        <p className='text-xl'>{subtitle}</p>
      </div>
  </div>
  )

}
  