import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Clientes, Login } from 'pages';
import { Drawer } from 'components';
import { UseRotaPrivada } from 'utils';
import { theme } from 'themes';

export const Router = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <div>{UseRotaPrivada() && <Drawer />}</div>
        <div style={{ width: '100%', background: theme.color.dark, color: theme.color.white, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/dashbord" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
