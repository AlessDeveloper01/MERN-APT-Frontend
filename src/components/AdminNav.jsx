import { Link } from 'react-router-dom';
import { navVariants } from '../assets/motion.js';
import styles from '../index.css';
import { motion } from 'framer-motion';

const AdminNav = () => {
    return (
      <nav className='flex gap-5'>
        <Link to="/admin/perfil"
        className='font-bold uppercase text-gray-500'
        >Perfil</Link>
        <Link to="/admin/cambiar-password"
        className='font-bold uppercase text-gray-500'
        >Cambiar Password</Link>
      </nav>
    )
  }
  
  export default AdminNav