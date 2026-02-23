import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌲 Guardian</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/robots">Robots</Link>
      <Link to="/alerts">Alerts</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/map">Live Map</Link>
    </div>
  );
}

export default Sidebar;