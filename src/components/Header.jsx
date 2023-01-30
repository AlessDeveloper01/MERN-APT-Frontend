import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

  const { cerrarSesion } = useAuth();
  return (
    <header className="py-10 bg-transparent">
        <div className="container mx-auto  flex flex-col justify-between items-center lg:flex-row">
            <h1 className="font-black text-2xl text-white text-center">Administrador De Tareas {""} <span className="text-black font-black">Verifica</span></h1>

            
          <nav className="flex gap-4 mt-5 flex-col lg:flex-row lg:mt-0 items-center">
              <Link to="/admin" className="text-white text-xl font-bold">TAREAS</Link>

            <button
            type="button"
            className="text-red-500 hover:text-red-600 font-bold text-xl"
            onClick={cerrarSesion}
            >
            Cerrar Sesion</button>
          </nav>
        </div>
    </header>
  )
}

export default Header