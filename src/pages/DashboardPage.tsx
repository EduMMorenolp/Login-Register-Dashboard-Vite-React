// src/pages/DashboardPage.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Widgets from "../components/Widgets";
import ProfileContent from "../components/ProfileContent";
import SettingsContent from "../components/SettingsContent";

const DashboardPage: React.FC = () => {
  // Estado para controlar el contenido mostrado
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Barra Lateral */}
      <Sidebar setActiveContent={setActiveContent} />

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
        {/* Encabezado */}
        <Header />

        {/* Contenido Dinámico */}
        {activeContent === "dashboard" && <Widgets />}
        {activeContent === "profile" && <ProfileContent />}
        {activeContent === "settings" && <SettingsContent />}
      </main>
    </div>
  );
};

export default DashboardPage;
