// src/pages/DashboardPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Barra Lateral */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-600">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            to="/dashboard"
            className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
          >
            <svg
              className="h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0L9 9"
              />
            </svg>
            Inicio
          </Link>
          <Link
            to="/profile"
            className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
          >
            <svg
              className="h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Perfil
          </Link>
          <Link
            to="/settings"
            className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
          >
            <svg
              className="h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Configuración
          </Link>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
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

        {/* Widgets o Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Usuarios Activos
            </h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">42</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Ventas Totales
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$1,250</p>
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Tareas Pendientes
            </h3>
            <p className="text-3xl font-bold text-red-600 mt-2">8</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
