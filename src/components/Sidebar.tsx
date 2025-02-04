// src/components/Sidebar.tsx
import React, { useState } from "react";

interface SidebarProps {
  setActiveContent: (content: string) => void; // Función para actualizar el contenido
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  // Estado para controlar si la barra lateral está expandida o colapsada
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-white shadow-md transition-all duration-300 ease-in-out`}
    >
      {/* Botón para alternar el colapso */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 w-full text-gray-700 hover:bg-gray-200 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Contenido de la barra lateral */}
      <nav className="mt-6">
        {/* Opción: Inicio */}
        <button
          onClick={() => setActiveContent("dashboard")}
          className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
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
          {!isCollapsed && "Inicio"}
        </button>

        {/* Opción: Perfil */}
        <button
          onClick={() => setActiveContent("profile")}
          className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
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
          {!isCollapsed && "Perfil"}
        </button>

        {/* Opción: Perfil */}
        <button
          onClick={() => setActiveContent("alumnos")}
          className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
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
          {!isCollapsed && "Alumnos"}
        </button>

        {/* Opción: Configuración */}
        <button
          onClick={() => setActiveContent("settings")}
          className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full ${
            isCollapsed ? "justify-center" : ""
          }`}
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {!isCollapsed && "Configuración"}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
