import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

function Map() {

  const [satellite, setSatellite] = useState(false);

  const robots = [
    {
      id: "Robot 1",
      lat: 6.9271,
      lng: 79.8612,
      status: "ACTIVE",
      fire: true
    },
    {
      id: "Robot 2",
      lat: 7.2906,
      lng: 80.6337,
      status: "ACTIVE",
      fire: false
    }
  ];

  // Custom icon function
  const createIcon = (fire) =>
    new L.DivIcon({
      className: "",
      html: `
        <div style="
          width:20px;
          height:20px;
          border-radius:50%;
          background:${fire ? "red" : "green"};
          box-shadow:0 0 15px ${fire ? "red" : "lime"};
          animation:${fire ? "pulse 1s infinite" : "none"};
        "></div>
      `,
      iconSize: [20, 20]
    });

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          🗺 Live Forest Monitoring Map
        </h2>
        <p className="text-gray-400 mt-2">
          Real-time tracking with fire detection indicators
        </p>
      </div>

      {/* Map Container */}
      <div className="relative bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">

        {/* Map */}
        <MapContainer
          center={[7.0, 80.0]}
          zoom={8}
          style={{ height: "600px", width: "100%" }}
        >

          {satellite ? (
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          ) : (
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          )}

          {robots.map((robot, index) => (
            <Marker
              key={index}
              position={[robot.lat, robot.lng]}
              icon={createIcon(robot.fire)}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold">{robot.id}</h3>
                  <p>Status: {robot.status}</p>
                  <p>
                    {robot.lat}, {robot.lng}
                  </p>
                  <p style={{ color: robot.fire ? "red" : "green" }}>
                    {robot.fire ? "🔥 FIRE DETECTED" : "SAFE"}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>

        {/* Top Right Controls */}
        <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-90 p-4 rounded-xl shadow-lg text-white space-y-3">

          <button
            onClick={() => setSatellite(!satellite)}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm"
          >
            Toggle View
          </button>

          <div className="text-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              Safe Robot
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              Fire Detected
            </div>
          </div>

        </div>

      </div>

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

    </div>
  );
}

export default Map;