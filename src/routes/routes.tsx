import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  Clientes,
  Dashboard,
  Indicadores,
  Login,
  MinhaConta,
  Produtos,
  Quartos,
  Servicos,
  LandingPage,
  Contato,
} from 'pages';
import Configuracoes from 'pages/Configuracoes/Configuracoes';
import { useAuth } from 'store/auth';
import Rota from './rota';

export const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Rota element={<LandingPage />} />} />
            <Route path="/contato" element={<Rota element={<Contato />} />} />
            <Route path="/login" element={<Rota element={<Login />} />} />
            <Route path="*" element={<Rota element={<Navigate to="/login" />} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Rota element={<LandingPage />} />} />
            <Route path="/dashboard" element={<Rota element={<Dashboard />} isPrivate />} />
            <Route path="/indicadores" element={<Rota element={<Indicadores />} isPrivate />} />
            <Route path="/quartos" element={<Rota element={<Quartos />} isPrivate />} />
            <Route path="/clientes" element={<Rota element={<Clientes />} isPrivate />} />
            <Route path="/produtos" element={<Rota element={<Produtos />} isPrivate />} />
            <Route path="/servicos" element={<Rota element={<Servicos />} isPrivate />} />
            <Route path="/configuracoes" element={<Rota element={<Configuracoes />} isPrivate />} />
            <Route path="/minha-conta" element={<Rota element={<MinhaConta />} isPrivate />} />
            <Route path="*" element={<Rota element={<Navigate to="/dashboard" />} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
