// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Aquí puedes verificar si el usuario está autenticado (por ejemplo, usando localStorage o un token)
  return !!localStorage.getItem("token");
};

const PrivateRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
