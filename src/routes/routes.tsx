import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//Rotas Publicas
import { LandingPage, Contato, Erro } from 'pages';

// Componente renderizado ao redor de todas as rotas
import { Public } from 'components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/erro" element={<Erro />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
