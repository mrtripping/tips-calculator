export default function EmptyOrder() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 px-4 text-center">
      {/* Icono de plato/cubiertos */}
      <div className="mb-6">
        <svg 
          className="w-20 h-20 text-slate-300 mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      {/* Texto principal en italic */}
      <p className="text-lg sm:text-xl text-slate-500 italic mb-3">
        Tu orden está vacía
      </p>

      {/* Subtítulo invitando a agregar */}
      <p className="text-sm sm:text-base text-slate-400 italic">
        Selecciona productos del menú para comenzar a calcular tu consumo
      </p>

      {/* Indicador visual sutil */}
      <div className="mt-8 flex items-center gap-2 text-slate-300">
        <div className="w-8 h-px bg-slate-300"></div>
        <span className="text-xs">←</span>
        <span className="text-xs italic">Explora el menú</span>
        <span className="text-xs">←</span>
        <div className="w-8 h-px bg-slate-300"></div>
      </div>
    </div>
  );
}