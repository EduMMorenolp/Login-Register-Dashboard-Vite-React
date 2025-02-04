// src/components/AlumnosContent.tsx
import React, { useState, useEffect } from "react";

interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}

const AlumnosContent: React.FC = () => {
  // Estado para almacenar los datos 
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  // Simulación de carga de datos desde un backend
  useEffect(() => {
    // Aquí podrías usar fetch o axios para obtener datos reales de un backend
    const fetchData = async () => {
      const mockData: Alumno[] = [
        { id: 1, nombre: "Juan", apellido: "Pérez", edad: 20 },
        { id: 2, nombre: "María", apellido: "Gómez", edad: 22 },
        { id: 3, nombre: "Carlos", apellido: "López", edad: 19 },
      ];
      setAlumnos(mockData);
    };

    fetchData();
  }, []);

  // Función para eliminar
  const handleDelete = (id: number) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.filter((alumno) => alumno.id !== id)
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Lista de Alumnos
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Apellido</th>
              <th className="py-2 px-4 border-b">Edad</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{alumno.id}</td>
                <td className="py-2 px-4 border-b">{alumno.nombre}</td>
                <td className="py-2 px-4 border-b">{alumno.apellido}</td>
                <td className="py-2 px-4 border-b">{alumno.edad}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button className="bg-indigo-600 text-white py-1 px-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(alumno.id)}
                    className="bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumnosContent;
