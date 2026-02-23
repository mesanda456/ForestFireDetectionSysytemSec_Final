import SeverityCard from "../components/SeverityCard";
import SensorCard from "../components/SensorCard";
import AlertTable from "../components/AlertTable";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Overview</h2>

      {/* Severity Section */}
      <div style={{display: "flex"}}>
        <SeverityCard level="LOW" count="2" color="green" />
        <SeverityCard level="MEDIUM" count="1" color="orange" />
        <SeverityCard level="HIGH" count="0" color="red" />
      </div>

      {/* Sensor Section */}
      <div style={{display: "flex"}}>
        <SensorCard title="Temperature" value="45" unit="°C" />
        <SensorCard title="Humidity" value="30" unit="%" />
        <SensorCard title="Gas Level" value="320" unit="ppm" />
      </div>

      {/* Alerts */}
      <AlertTable />
    </div>
  );
}

export default Dashboard;