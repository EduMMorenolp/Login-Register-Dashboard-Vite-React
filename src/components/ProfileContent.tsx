// src/components/ProfileContent.tsx
import React from "react";

const ProfileContent: React.FC = () => {
  // Datos de ejemplo del usuario
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrador",
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
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
      <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Actualizar Perfil
      </button>
    </div>
  );
};

export default ProfileContent;
