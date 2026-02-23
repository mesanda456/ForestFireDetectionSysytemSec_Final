import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

function Robots() {

  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const robotRef = ref(database, "robots");

    onValue(robotRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRobots(Object.values(data));
      }
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Robots</h2>

      {robots.length === 0 ? (
        <p>No robots found</p>
      ) : (
        robots.map((robot, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl mb-4 shadow-lg">
            <h3 className="text-xl font-semibold">ID: {robot.id}</h3>
            <p>Battery: {robot.battery}%</p>
            <p>Status: {robot.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Robots;