// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  setActiveContent: (content: string) => void; // Función para actualizar el contenido
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-600">Dashboard</h2>
      </div>
      <nav className="mt-6">
        {/* Opción: Inicio */}
        <button
          onClick={() => setActiveContent("dashboard")}
          className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full text-left"
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
        </button>

        {/* Opción: Perfil */}
        <button
          onClick={() => setActiveContent("profile")}
          className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full text-left"
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
        </button>

        {/* Opción: Configuración */}
        <button
          onClick={() => setActiveContent("settings")}
          className="flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 w-full text-left"
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
          Configuración
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
