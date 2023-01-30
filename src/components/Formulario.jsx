import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [email, setEmail] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        if(paciente) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setFecha(paciente.fecha);
            setEmail(paciente.email);
            setSintomas(paciente.sintomas);
            setId(paciente._id);
        }
    }, [paciente]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(nombre === '' || propietario === '' || fecha === '' || email === '' || sintomas === '') {
            setAlerta({
                error: true,
                msg: 'Todos los campos son obligatorios'
            });
            return;
        }

        guardarPaciente({ nombre, propietario, fecha, email, sintomas, id });
        setAlerta({
            msg: 'Tarea guardada correctamente',
            error: false
        });
    }

    const { msg } = alerta;

  return (
    <>
        <h1 className="text-3xl text-center mb-5 font-black text-white">Formulario Para Crear Tareas</h1>
    
        <p className="text-xl text-center mb-10 text-gray-300">
            Crea Una Tarea
        </p>

    <form
        className="bg-blue-300 shadow-md py-10 px-5 mb-4 rounded-md"
        onSubmit={handleSubmit}
    >
        <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="nombre">MATERIA: </label>
            <input 
            id="nombre"
            type="text"
            placeholder="Nombre de la materia"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="propietario">TAREA: </label>
            <input 
            id="propietario"
            type="text"
            placeholder="Nombre de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">HORA DE ENTREGA: </label>
            <input 
            id="email"
            type="time"
            placeholder="Hora de entrega"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fecha">FECHA DE ENTREGA: </label>
            <input 
            id="fecha"
            type="date"
            placeholder="Fecha de recepcion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label className="block text-white text-sm font-bold mb-2 " htmlFor="sintomas">DESCRIPCION DE LA TAREA: </label>
            <textarea 
            id="sintomas"
            type="text"
            placeholder="Descripcion de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none" 
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
            />
        </div>

        <input 
              type="submit"
              value={ id ? "Guardar Cambios" : "Agregar Tarea"}
              className= "bg-black w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:bg-indigo-600 hover:cursor-pointer md:w-auto mb-7"
              />
    </form>

    {msg && <Alerta 
                alerta={alerta}
            />}
    </>
  )
}

export default Formulario