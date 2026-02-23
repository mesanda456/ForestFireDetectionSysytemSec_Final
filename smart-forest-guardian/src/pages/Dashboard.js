import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

function Dashboard() {
  const [zone, setZone] = useState({});

  useEffect(() => {
    const zoneRef = ref(database, "zones/zone1");

    onValue(zoneRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setZone(data);
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="card">
        <h3>Temperature: {zone.temperature}</h3>
        <h3>Humidity: {zone.humidity}</h3>
        <h3>Gas: {zone.gas}</h3>
        <h3>Severity: {zone.severity}</h3>
      </div>
    </div>
  );
}

export default Dashboard;