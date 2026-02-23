import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar({ role, setRole }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Alerts", path: "/alerts" },
    { name: "Live Map", path: "/map" }
  ];

  if (role === "authority") {
    menuItems.splice(1, 0, { name: "Robots", path: "/robots" });
  }

  const handleLogout = () => {
    setRole(null);
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-[#0f2e1f] to-[#0a1f16] text-white flex flex-col shadow-2xl">

      {/* Header */}
      <div className="p-6 border-b border-green-800">
        <h2 className="text-2xl font-bold tracking-wide">
          🌲 Guardian
        </h2>
        <p className="text-xs text-green-300 mt-1 uppercase tracking-wider">
          {role === "authority" ? "Authority Panel" : "Citizen Panel"}
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">

        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center px-4 py-3 rounded-xl
                transition-all duration-300
                ${
                  isActive
                    ? "bg-green-600 shadow-lg"
                    : "hover:bg-green-700 text-green-200"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}

      </div>

      {/* Logout */}
      <div className="p-4 border-t border-green-800">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
        >
          🔓 Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;