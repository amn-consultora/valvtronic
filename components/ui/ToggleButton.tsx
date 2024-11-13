import { Dispatch, FC, SetStateAction } from "react";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean;
}

export const ToggleButton:FC<Props> = ({setOpen, open}) => {
  return (
    <button
        onClick={()=> setOpen(prev => !prev)}
        className="z-50 w-12 h-12 rounded-full fixed top-6 left-[26px] flex justify-center items-center"
    >
      {
        open
          ? <svg className="fadeIn" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
          : <svg className="fadeIn" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/></svg>
      }
    </button>
  )
}