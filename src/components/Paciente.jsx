import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes();

    const { email, nombre, fecha, propietario, sintomas, _id } = paciente;

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha);
    };

  return (
    <div className="mx-5 my-10 bg-white shadow-md  px-5 py-10  rounded-xl">
        <p className="font-bold uppercase text-indigo-600 my-5">Materia: {""}
            <span className="font-normal normal-case text-black">{nombre}</span>
        </p>

        <p className="font-bold uppercase text-indigo-600 my-5">Tarea {""}
            <span className="font-normal normal-case text-black">{propietario}</span>
        </p>

        <p className="font-bold uppercase text-indigo-600 my-5">Hora De Entrega: {""}
            <span className="font-normal normal-case text-black">{email}</span>
        </p>

        <p className="font-bold uppercase text-indigo-600 my-5">Fecha De Entrega: {""}
            <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>

        <p className="font-bold uppercase text-indigo-600 my-5">Descripcion de la tarea: {""}
            <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>

        <div className="flex justify-between my-5 gap-5">
            <button
                className="bg-red-600 py-2 px-4 w-full text-white rounded text-center uppercase font-bold hover:bg-red-700"
                onClick={() => eliminarPaciente(_id)}
            >Eliminar &times;</button>

            <button
                className="bg-green-600 py-2 px-4 w-full text-white rounded text-center uppercase font-bold hover:bg-green-700"
                onClick={() => setEdicion(paciente)}
            >Editar</button>

        </div>
    </div>
  )
}

export default Paciente