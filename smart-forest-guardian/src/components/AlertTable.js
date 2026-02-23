function AlertTable() {
  return (
    <div className="card">
      <h3>Recent Alerts</h3>
      <table width="100%">
        <thead>
          <tr>
            <th>Time</th>
            <th>Location</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14:32</td>
            <td>Zone 3</td>
            <td style={{color: "red"}}>HIGH</td>
          </tr>
          <tr>
            <td>10:20</td>
            <td>Zone 1</td>
            <td style={{color: "orange"}}>MEDIUM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;