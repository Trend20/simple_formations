import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/*  header */}
        {/*  routes*/}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/*  footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
