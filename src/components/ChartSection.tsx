// src/components/ChartSection.tsx
import React from "react";

const ChartSection: React.FC = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Gráfico de Ejemplo
      </h3>
      <div className="h-64 bg-gray-200 rounded-md">
        {/* Aquí puedes agregar un gráfico usando una librería como Chart.js o Recharts */}
      </div>
    </div>
  );
};

export default ChartSection;
