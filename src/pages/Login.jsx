import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';
import '../index.css';

import imagenLogin from '../public/whats-new.png';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubtmit = async(e) => {
    e.preventDefault();

    if(email === '' || password === '') {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    try {
      const { data } = await clienteAxios.post('/veterinarios/login', { email, password });
      localStorage.setItem('token', data.token);
      setEmail('');
      setPassword('');
      setAuth(data.veterinario);
      navigate('/admin')
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
          <h1 className="text-white font-black text-6xl text-center">Welcome To {""} <span className="text-black">TechWork</span></h1>
          
          <p className="text-white text-center text-2xl mt-5">Inicia Sesion Para Acceder A Tu Cuenta</p>
          <img src={imagenLogin} alt="imagen del login" className='img-fluid' />
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

        {msg && <Alerta 
          alerta={alerta}
        />}

          <form onSubmit={handleSubtmit}>
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

            <input 
              type="submit"
              value="Iniciar Sesion"
              className= "bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:bg-indigo-600 hover:cursor-pointer md:w-auto"
              />
          </form>

          <nav className='mt-10 lg:flex lg:justify-between'>
            <Link 
              className='block text-center my-5 text-gray-500'
              to="/register">¿No Tienes Una Cuenta? <span className='text-indigo-500'>Registrate</span>
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

export default Login