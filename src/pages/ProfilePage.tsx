// src/pages/ProfilePage.tsx
import React from "react";

const ProfilePage: React.FC = () => {
  // Datos de ejemplo del usuario
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrador",
  };

  return (
    <div className="p-8">
      {/* Encabezado */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mi Perfil</h1>

      {/* Información del Usuario */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Información Personal
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Nombre:
            </label>
            <p className="text-lg text-gray-800">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Correo Electrónico:
            </label>
            <p className="text-lg text-gray-800">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Rol:
            </label>
            <p className="text-lg text-gray-800">{user.role}</p>
          </div>
        </div>
      </div>

      {/* Botón para Actualizar Perfil */}
      <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Actualizar Perfil
      </button>
    </div>
  );
};

export default ProfilePage;
