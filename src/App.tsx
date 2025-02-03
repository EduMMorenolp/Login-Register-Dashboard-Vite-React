import "./App.css";
import { Routes, Route, Link } from 'react-router-dom'

// Pages
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
