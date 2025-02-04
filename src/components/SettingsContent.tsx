// src/components/SettingsContent.tsx
import React from "react";

const SettingsContent: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Cambio de Contraseña */}
      <div>
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

      {/* Preferencias */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Preferencias
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Tema:
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
