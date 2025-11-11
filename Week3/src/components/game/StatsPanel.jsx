const StatBox = ({ label, value }) => (
  <div className="bg-white rounded-lg p-3 border">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-xl font-bold">{value}</div>
  </div>
);

const StatsPanel = ({ timeLeft, successfulPairs, totalPairs, remainingPairs }) => {
  return (
    <div className="space-y-2">
      <StatBox label="남은 시간" value={timeLeft} />
      <StatBox label="성공한 짝" value={`${successfulPairs}/${totalPairs}`} />
      <StatBox label="남은 짝" value={remainingPairs} />
    </div>
  );
};

export default StatsPanel;


