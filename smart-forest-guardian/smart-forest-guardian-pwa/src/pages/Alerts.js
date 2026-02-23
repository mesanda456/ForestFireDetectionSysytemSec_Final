function Alerts() {

  const alerts = [
    {
      id: 1,
      zone: "Forest Robot 1",
      type: "Fire Detected",
      severity: "HIGH",
      status: "ACTIVE",
      time: "2026-02-23 14:35",
      location: "6.9271, 79.8612"
    },
    {
      id: 2,
      zone: "Forest Robot 2",
      type: "High Gas Level",
      severity: "MEDIUM",
      status: "RESOLVED",
      time: "2026-02-23 12:10",
      location: "7.2906, 80.6337"
    }
  ];

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          🚨 Alert Management Center
        </h2>
        <p className="text-gray-400 mt-2">
          Monitor and respond to fire and environmental threats
        </p>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Active Alerts</p>
          <h3 className="text-3xl font-bold">
            {alerts.filter(a => a.status === "ACTIVE").length}
          </h3>
        </div>

        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Medium Severity</p>
          <h3 className="text-3xl font-bold">
            {alerts.filter(a => a.severity === "MEDIUM").length}
          </h3>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Resolved Alerts</p>
          <h3 className="text-3xl font-bold">
            {alerts.filter(a => a.status === "RESOLVED").length}
          </h3>
        </div>

      </div>

      {/* Alert Cards */}
      <div className="space-y-6">

        {alerts.map((alert) => {

          const severityColor =
            alert.severity === "HIGH"
              ? "bg-red-600"
              : alert.severity === "MEDIUM"
              ? "bg-yellow-500"
              : "bg-green-600";

          const statusColor =
            alert.status === "ACTIVE"
              ? "bg-red-500"
              : "bg-green-600";

          return (
            <div
              key={alert.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700"
            >

              {/* Top Row */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-white">
                  🔔 {alert.type}
                </h3>

                <span className={`${severityColor} px-4 py-2 rounded-full text-sm font-bold text-white`}>
                  {alert.severity}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

                <div>
                  <p className="text-sm text-gray-400">Device</p>
                  <p className="text-white font-semibold">{alert.zone}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Time</p>
                  <p className="text-white font-semibold">{alert.time}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-green-400 font-semibold">{alert.location}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <span className={`${statusColor} px-4 py-1 rounded-full text-sm font-bold text-white`}>
                    {alert.status}
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">

                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  View Details
                </button>

                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
                  Mark Resolved
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Alerts;