export const Welcome = () => {
  return (
    <div className='w-full h-[calc(100vh_-_50px)] lg:h-[calc(100vh_-_110px)] relative'>
      <div className="absolute top-0 left-0 w-full h-full bg-black/10">
        <video src="/video.mp4" className="w-full h-full object-cover" autoPlay loop muted />

        <div className='w-full h-full max-w-6xl flex flex-col justify-center items-start px-4 lg:px-[4rem] absolute inset-0'>
          <img src="/assets/logo/vx-blanco.svg" alt="logo Valvtronic" className="h-60 lg:h-80" />
          <h1 className='hidden md:flex text-slate-300 md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-3'>
            Soluciones tecnológicas, <br /> 
            conexiones humanas <br /> 
            e innovación para el mundo industrial</h1>
        </div>
      </div>
    </div>
  )
}
