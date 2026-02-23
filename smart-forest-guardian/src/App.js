import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Robots from "./pages/Robots";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Map from "./pages/Map";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;