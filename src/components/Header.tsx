// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">
        Bienvenido al Dashboard
      </h1>
      <Link
        to="/login"
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Cerrar Sesión
      </Link>
    </header>
  );
};

export default Header;
