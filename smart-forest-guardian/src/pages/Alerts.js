import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const alertRef = ref(database, "alerts");

    onValue(alertRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setAlerts(Object.values(data));
    });
  }, []);

  return (
    <div>
      <h2>Alerts</h2>

      {alerts.map((alert, index) => (
        <div className="card" key={index}>
          <h3>Zone: {alert.zone}</h3>
          <p>Severity: {alert.severity}</p>
          <p>Status: {alert.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Alerts;