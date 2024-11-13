import { ReactNode } from 'react';

export const FormWrap = ({children} : {children: ReactNode}) => {
  return (
    <div className='flex justify-center r'>
      {children}
    </div>
  )
}
