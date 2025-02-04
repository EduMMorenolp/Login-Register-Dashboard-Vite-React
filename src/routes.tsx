// src/routes.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta pública: Registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Ruta protegida: Dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* Redirigir la ruta raíz al login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Manejo de rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// Componente para manejar rutas no encontradas
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">Página no encontrada</p>
        <a
          href="/login"
          className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default AppRoutes;
