import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Robots from "./pages/Robots";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AlertPopup from "./components/AlertPopup";

function App() {

  const location = useLocation();

  // 🔥 Load role from localStorage
  const [role, setRole] = useState(
    localStorage.getItem("role") || null
  );

  const [popup, setPopup] = useState(null);

  // 🔥 Persist role
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [role]);

  // 🔥 Fire popup simulation (only when logged in)
  useEffect(() => {
    if (!role) return;
    if (location.pathname === "/login" || location.pathname === "/register") return;

    const timer = setTimeout(() => {
      setPopup({
        message: "🔥 Fire detected in Zone 1!"
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [role, location.pathname]);

  // 🔥 Auto close popup
  useEffect(() => {
    if (!popup) return;

    const autoClose = setTimeout(() => {
      setPopup(null);
    }, 5000);

    return () => clearTimeout(autoClose);
  }, [popup]);

  const hideSidebar = !role;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0b1622] via-[#0f1e2e] to-[#111827] text-white">

      {/* Sidebar */}
      {!hideSidebar && (
        <Sidebar role={role} setRole={setRole} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <div className="flex-1 p-8 overflow-y-auto">

          <Routes>

            {/* Login */}
            <Route
              path="/login"
              element={
                role ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login setRole={setRole} />
                )
              }
            />

            {/* Register */}
            <Route
              path="/register"
              element={
                role ? (
                  <Navigate to="/" replace />
                ) : (
                  <Register />
                )
              }
            />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                role ? <Dashboard /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/analytics"
              element={
                role ? <Analytics /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/alerts"
              element={
                role ? <Alerts /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/map"
              element={
                role ? <Map /> : <Navigate to="/login" replace />
              }
            />

            {/* Authority Only */}
            <Route
              path="/robots"
              element={
                role === "authority" ? (
                  <Robots />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Catch All */}
            <Route
              path="*"
              element={
                <Navigate to={role ? "/" : "/login"} replace />
              }
            />

          </Routes>

        </div>

      </div>

      {/* Popup */}
      {role && (
        <AlertPopup
          alert={popup}
          onClose={() => setPopup(null)}
        />
      )}

    </div>
  );
}

export default App;