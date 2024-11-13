'use client'

import { useRouter } from "next/navigation"

export default function Error() {

  const {replace} = useRouter()

  return (
    <div className="h-[50vh] flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl lg:text-4xl text-rose-700">Algo salió mal!</h2>
      <button className="text-xl lg:text-2xl text-primary-dark-grey underline underline-offset-1 " onClick={() => replace("/")}>Volver al inicio</button>
    </div>
  )
}