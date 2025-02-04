// src/components/Widgets.tsx
import React from "react";

const Widgets: React.FC = () => {
  return (
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
        <h3 className="text-lg font-semibold text-gray-800">Ventas Totales</h3>
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
  );
};

export default Widgets;
