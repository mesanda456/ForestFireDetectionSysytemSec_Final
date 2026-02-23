function SeverityCard({ level, count, color }) {
  return (
    <div className={`card ${color}`}>
      <h2>{level}</h2>
      <p>{count} Zones</p>
    </div>
  );
}

export default SeverityCard;