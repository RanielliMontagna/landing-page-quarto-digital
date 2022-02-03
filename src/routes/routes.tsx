import { Clientes, Dashboard, Indicadores, Login, MinhaConta, Produtos, Quartos, Servicos } from 'pages';
import Configuracoes from 'pages/Configuracoes/Configuracoes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Rota from './rota';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rota element={<Login />} />} />
        <Route path="/login" element={<Rota element={<Login />} />} />
        <Route path="/dashboard" element={<Rota element={<Dashboard />} isPrivate />} />
        <Route path="/indicadores" element={<Rota element={<Indicadores />} isPrivate />} />
        <Route path="/quartos" element={<Rota element={<Quartos />} isPrivate />} />
        <Route path="/clientes" element={<Rota element={<Clientes />} isPrivate />} />
        <Route path="/produtos" element={<Rota element={<Produtos />} isPrivate />} />
        <Route path="/servicos" element={<Rota element={<Servicos />} isPrivate />} />
        <Route path="/configuracoes" element={<Rota element={<Configuracoes />} isPrivate />} />
        <Route path="/minha-conta" element={<Rota element={<MinhaConta />} isPrivate />} />
        <Route path="*" element={<Rota element={<Navigate to="/" />} />} />
      </Routes>
    </BrowserRouter>
  );
};
