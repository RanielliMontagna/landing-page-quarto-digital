import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages';
import Login from 'pages/Login/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
