function Analytics() {

  const stats = {
    avgTemperature: 38,
    avgHumidity: 42,
    avgGas: 210,
    highRiskZones: 1
  };

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          📊 Environmental Analytics Center
        </h2>
        <p className="text-gray-400 mt-2">
          Analyze environmental trends and fire risk patterns
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Avg Temperature</p>
          <h3 className="text-3xl font-bold">{stats.avgTemperature}°C</h3>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Avg Humidity</p>
          <h3 className="text-3xl font-bold">{stats.avgHumidity}%</h3>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">Avg Gas Level</p>
          <h3 className="text-3xl font-bold">{stats.avgGas} ppm</h3>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl text-white">
          <p className="text-sm opacity-80">High Risk Zones</p>
          <h3 className="text-3xl font-bold">{stats.highRiskZones}</h3>
        </div>

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Temperature Trend */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl text-white font-semibold mb-6">
            🌡 Temperature Trend
          </h3>

          <div className="h-64 bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
            Line Chart Placeholder
          </div>
        </div>

        {/* Gas Level Trend */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl text-white font-semibold mb-6">
            🧪 Gas Level Trend
          </h3>

          <div className="h-64 bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
            Line Chart Placeholder
          </div>
        </div>

        {/* Fire Risk Distribution */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl text-white font-semibold mb-6">
            🔥 Fire Risk Distribution
          </h3>

          <div className="h-64 bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
            Pie Chart Placeholder
          </div>
        </div>

        {/* Robot Performance */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700">
          <h3 className="text-2xl text-white font-semibold mb-6">
            🤖 Robot Performance
          </h3>

          <div className="h-64 bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
            Bar Chart Placeholder
          </div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;