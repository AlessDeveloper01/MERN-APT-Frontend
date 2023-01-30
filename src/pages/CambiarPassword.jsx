import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {

    const { guardarPassword } = useAuth();

  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwdNuevo: '',
    pwdActual: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(Object.values(password).some(campo => campo === '')){
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        });
        return;
    }

    if(password.pwdNuevo.length < 6){
        setAlerta({
            msg: 'El password nuevo debe tener al menos 6 caracteres',
            error: true
        });
        return;
    }

    guardarPassword(password);
  }

  const { msg } = alerta;
    return (
      <> 
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>

        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {""} <span className="text-indigo-600 font-bold">Password Aqui</span></p>

        <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta} />}

                    <form
                        onSubmit={handleSubmit}
                    >  
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Password Actual</label>
                            <input
                                type="password"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="pwdActual"
                                placeholder="Escribe Password Actual"
                                onChange={e => setPassword({ ...password, [e.target.name]: e.target.value })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Password Nuevo</label>
                            <input
                                type="password"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="pwdNuevo"
                                placeholder="Escribe Password Nuevo"
                                onChange={e => setPassword({ ...password, [e.target.name]: e.target.value })}
                            />
                        </div>

                        <input type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 w-full p-2 text-white uppercase font-bold"
                            value="Cambiar Password"
                        />
                    </form>
                </div>
            </div>
      </>
    )
  }
  
  export default CambiarPassword