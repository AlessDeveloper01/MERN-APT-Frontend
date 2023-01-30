import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

    const { pacientes } = usePacientes()

  return (
    <>
        {pacientes.length ? ( 
        <>
            <h1 className="text-3xl text-center mb-5 font-black text-white">Administra tus pacientes</h1>
            
            <p className="text-xl text-center">
                Comienza agregando una nueva tarea
             </p>

             {pacientes.map(paciente => (
                    <Paciente 
                        key={paciente._id}
                        paciente={paciente}
                    />
             ))}
        </>
        ) : ( 
        <>
             <h1 className="text-3xl text-center mb-5 font-black text-red-500">No hay tareas aun</h1> 

             <p className="text-xl text-center">
                Comienza agregando una nueva tarea
             </p>
        </>
        )}

    </>
  )
}

export default ListadoPacientes