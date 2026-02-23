import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌲 Forest Guardian</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/map">Live Map</Link>
      <Link to="/alerts">Alerts</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
}

export default Sidebar;