import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

function Dashboard() {

  const devices = [
    {
      id: "zone1",
      deviceName: "Forest Robot 1",
      temperature: 45,
      humidity: 30,
      gas: 350,
      severity: "HIGH",
      flame: true,
      rain: false,
      ldr: "Low Light",
      gps: "6.9271° N, 79.8612° E",
      camera: "Active"
    },
    {
      id: "zone2",
      deviceName: "Forest Robot 2",
      temperature: 32,
      humidity: 55,
      gas: 120,
      severity: "LOW",
      flame: false,
      rain: true,
      ldr: "Bright",
      gps: "7.2906° N, 80.6337° E",
      camera: "Inactive"
    }
  ];

  return (
    <div className="space-y-12">

      {/* Page Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          🌲 Forest Monitoring Dashboard
        </h2>
        <p className="text-gray-400 mt-2">
          Smart Forest Fire Detection & Environmental Monitoring System
        </p>
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

        {devices.map((device) => {

          const severityColor =
            device.severity === "HIGH"
              ? "bg-red-600"
              : device.severity === "MEDIUM"
              ? "bg-yellow-500"
              : "bg-green-600";

          return (
            <div
              key={device.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-[1.02] transition duration-300"
            >

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-white">
                  🤖 {device.deviceName}
                </h3>

                <span className={`${severityColor} px-4 py-2 rounded-full text-sm font-bold text-white`}>
                  {device.severity}
                </span>
              </div>

              {/* Core Sensors */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">

                <div className="bg-blue-600 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">Temperature</p>
                  <h4 className="text-2xl font-bold">{device.temperature}°C</h4>
                </div>

                <div className="bg-cyan-600 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">Humidity</p>
                  <h4 className="text-2xl font-bold">{device.humidity}%</h4>
                </div>

                <div className="bg-orange-500 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">Gas Level</p>
                  <h4 className="text-2xl font-bold">{device.gas} ppm</h4>
                </div>

              </div>

              {/* Extra Modules Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Flame */}
                <div className="bg-gray-700 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">🔥 Flame Sensor</p>
                  <h4 className={`text-xl font-bold ${
                    device.flame ? "text-red-500" : "text-green-400"
                  }`}>
                    {device.flame ? "DETECTED" : "SAFE"}
                  </h4>
                </div>

                {/* Rain Sensor */}
                <div className="bg-gray-700 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">🌧 Rain Sensor</p>
                  <h4 className={`text-xl font-bold ${
                    device.rain ? "text-blue-400" : "text-yellow-300"
                  }`}>
                    {device.rain ? "Rain Detected" : "No Rain"}
                  </h4>
                </div>

                {/* LDR */}
                <div className="bg-gray-700 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">💡 Light Sensor (LDR)</p>
                  <h4 className="text-xl font-bold text-white">
                    {device.ldr}
                  </h4>
                </div>

                {/* GPS */}
                <div className="bg-gray-700 p-5 rounded-2xl text-white">
                  <p className="text-sm opacity-80">📍 GPS Location</p>
                  <h4 className="text-sm font-semibold text-green-400">
                    {device.gps}
                  </h4>
                </div>

                {/* Camera */}
                <div className="bg-gray-700 p-5 rounded-2xl text-white md:col-span-2">
                  <p className="text-sm opacity-80">📷 Camera Module</p>
                  <h4 className={`text-xl font-bold ${
                    device.camera === "Active"
                      ? "text-green-400"
                      : "text-red-500"
                  }`}>
                    {device.camera}
                  </h4>
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Dashboard;