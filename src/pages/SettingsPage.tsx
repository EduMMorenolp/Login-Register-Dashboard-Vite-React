// src/pages/SettingsPage.tsx
import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="p-8">
      {/* Encabezado */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Configuración</h1>

      {/* Sección de Cambio de Contraseña */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Cambiar Contraseña
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Contraseña Actual:
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Nueva Contraseña:
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Confirmar Nueva Contraseña:
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Guardar Cambios
          </button>
        </form>
      </div>      
    </div>
  );
};

export default SettingsPage;
