function Robots() {

  const robots = [
    {
      id: "robot1",
      battery: 75,
      status: "ACTIVE",
      location: { lat: 6.9271, lng: 79.8612 }
    },
    {
      id: "robot2",
      battery: 60,
      status: "ACTIVE",
      location: { lat: 7.2906, lng: 80.6337 }
    }
  ];

  const activeCount = robots.filter(r => r.status === "ACTIVE").length;

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          🤖 Robotics Control Center
        </h2>
        <p className="text-gray-400 mt-2">
          Monitor and control deployed forest robots
        </p>
      </div>

      {/* Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Total Robots</p>
          <h3 className="text-3xl font-bold">{robots.length}</h3>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Active Robots</p>
          <h3 className="text-3xl font-bold">{activeCount}</h3>
        </div>

        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Average Battery</p>
          <h3 className="text-3xl font-bold">
            {Math.round(
              robots.reduce((sum, r) => sum + r.battery, 0) / robots.length
            )}%
          </h3>
        </div>

      </div>

      {/* Robots Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {robots.map((robot) => {

          const statusColor =
            robot.status === "ACTIVE"
              ? "bg-green-600"
              : "bg-red-600";

          const batteryColor =
            robot.battery > 70
              ? "bg-green-500"
              : robot.battery > 40
              ? "bg-yellow-500"
              : "bg-red-500";

          return (
            <div
              key={robot.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-[1.02] transition duration-300"
            >

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-white">
                  🤖 {robot.id.toUpperCase()}
                </h3>

                <span className={`${statusColor} px-4 py-2 rounded-full text-sm font-bold text-white`}>
                  {robot.status}
                </span>
              </div>

              {/* Battery */}
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">Battery Level</p>

                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className={`${batteryColor} h-4 rounded-full transition-all duration-500`}
                    style={{ width: `${robot.battery}%` }}
                  ></div>
                </div>

                <p className="text-right text-sm mt-2 text-white">
                  {robot.battery}%
                </p>
              </div>

              {/* GPS */}
              <div className="bg-gray-700 p-5 rounded-2xl mb-6">
                <p className="text-sm text-gray-400">📍 GPS Location</p>
                <p className="text-green-400 font-semibold">
                  {robot.location.lat}, {robot.location.lng}
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 gap-4">

                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  View Map
                </button>

                <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
                  Emergency Stop
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Robots;