import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Clientes, Login, Quartos, Produtos, Servicos } from 'pages';

import Rota from './rota';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rota element={<Login />} />} />
        <Route path="/login" element={<Rota element={<Login />} />} />
        <Route path="/quartos" element={<Rota element={<Quartos />} isPrivate />} />
        <Route path="/clientes" element={<Rota element={<Clientes />} isPrivate />} />
        <Route path="/produtos" element={<Rota element={<Produtos />} isPrivate />} />
        <Route path="/servicos" element={<Rota element={<Servicos />} isPrivate />} />
        <Route path="/dashboard" element={<Rota element={<Dashboard />} isPrivate />} />
        <Route path="*" element={<Rota element={<Navigate to="/" />} />} />
      </Routes>
    </BrowserRouter>
  );
};
