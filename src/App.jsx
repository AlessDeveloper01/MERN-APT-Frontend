import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import OlvidePassword from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';
import RutaProtegida from './layout/RutaProtegida';
import AdministrarPacientes from './pages/AdministrarPacientes';
import EditarPerfil from './pages/EditarPerfil';
import CambiarPassword from './pages/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

function App() {

  return (
    <BrowserRouter>
        <AuthProvider>
            <PacientesProvider>
              <Routes>
                    <Route path="/" element={<AuthLayout />}>  
                      <Route index element={<Login />} />
                      <Route path="register" element={<Registrar />} />
                      <Route path="reset-password" element={<OlvidePassword />} />
                      <Route path="reset-password/:token" element={<NuevoPassword />} />
                      <Route path="confirm/:id" element={<ConfirmarCuenta />} />
                    </Route>

                    <Route path="/admin" element={<RutaProtegida />}>
                      <Route index element={<AdministrarPacientes />} />
                      <Route path="perfil" element={<EditarPerfil />} />
                      <Route path="cambiar-password" element={<CambiarPassword />} />
                    </Route>
              </Routes>
            </PacientesProvider>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
