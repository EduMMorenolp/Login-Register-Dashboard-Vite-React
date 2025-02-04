// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);
