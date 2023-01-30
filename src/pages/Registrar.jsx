import { Link } from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import axios from 'axios';
import clienteAxios from '../config/axios';
import imagenLogin from '../public/planet-08.png';


const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({ msg: 'Todos los campos son obligatorios', error: true});
      return;
    }

    if(password.length < 6) {
      setAlerta({ msg: 'El password debe ser de al menos 6 caracteres', error: true});
      return;
    }

    if(password !== repetirPassword) {
      setAlerta({ msg: 'Los passwords no coinciden', error: true});
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      const url = `/veterinarios`;
      const respuesta = await clienteAxios.post(url, {nombre, email, password});
      setAlerta({
        msg: 'Creado Correctamente, revisa tu email para confirmar tu cuenta',
        error: false
      })
      // Estas 2 lineas son para que se limpien los campos del formulario
      setNombre('');
      setEmail('');
      setPassword('');
      setRepetirPassword('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  
  const { msg } = alerta;

  return (
    <>
        <div>
          <h1 className="text-white font-black text-6xl text-center">¿No Tienes Cuenta? {""} <span className="text-black">Creala</span></h1>
          
          <p className="text-white text-center text-2xl mt-5">Crea tu cuenta para que puedas iniciar sesion</p>
          <img src={imagenLogin} alt="imagen del login" className='img-fluid rounded-lg' />
        </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

        {msg && <Alerta 
          alerta={alerta}
        />}

          <form 
            onSubmit={handleSubmit}
          >
          <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-black">
                Nombre
              </label>
              <input type="text"
              placeholder="Ingresa Tu Nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-black">
                Email
              </label>
              <input type="email"
              placeholder="Ingresa Tu Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-black">
                Password
              </label>
              <input type="password"
              placeholder="Ingresa Tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-black">
                Confirm Password
              </label>
              <input type="password"
              placeholder="Ingresa Nuevamente Tu Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
              />
            </div>

            <input 
              type="submit"
              value="Crear Cuenta"
              className= "bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:bg-indigo-600 hover:cursor-pointer md:w-auto"
              />
          </form>

          <nav className='mt-10 lg:flex lg:justify-between'>
            <Link 
              className='block text-center my-5 text-gray-500'
              to="/">¿Ya Tienes Una Cuenta? <span className='text-indigo-500'>Inicia Sesion</span>
            </Link>
            <Link
              className='block text-center my-5 text-gray-500'
              to="/reset-password"><span className='text-indigo-600'>Recupera tu contraseña</span>
            </Link>
          </nav>
      </div>
    </>
  )
}

export default Registrar