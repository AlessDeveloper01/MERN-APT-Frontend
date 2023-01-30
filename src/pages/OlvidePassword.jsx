import { Link } from 'react-router-dom';
import { useState } from 'react';
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';
import imagenLogin from '../public/planet-04.png';


const OlvidePassword = () => {

  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === '') {
      setAlerta({ msg: 'Introduce el email con el que te registraste', error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email });

      setAlerta({
        msg: data.msg,
        error: false
      })
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
          <h1 className="text-white font-black text-6xl text-center">Perdiste Tu {""} <span className="text-black">Contraseña</span></h1>
          
          <p className="text-white text-center text-2xl mt-5">Recuperala Aqui</p>
          <img src={imagenLogin} alt="imagen del login" className='img-fluid rounded-lg' />
        </div> 

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

      {msg && <Alerta 
          alerta={alerta}
        />}

          <form onSubmit={handleSubmit}>
          <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-black">
                Ingresa El Email Con El Que Te Registraste
              </label>
              <input type="email"
              placeholder="Ingresa Tu Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            </div>

            <input 
              type="submit"
              value="Enviar Instrucciones"
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
              to="/register">¿Perdiste Tu Cuenta?<span className='text-indigo-600'> Registrate</span>
            </Link>
          </nav>
      </div>

    </>
  )
}

export default OlvidePassword;