// src/pages/DashboardPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenido al Dashboard</h2>
      <p>Esta es la página principal después de iniciar sesión.</p>
      <Link to="/login">Cerrar sesión</Link>
    </div>
  );
};

export default DashboardPage;
