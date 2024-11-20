
const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <button type="button" className="bg-indigo-500 p-2 rounded-md text-xl" disabled>
          <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
          </svg>
          Cargando...
      </button>
    </div> 
  )
}

export default loading