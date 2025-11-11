const RankingTable = ({ rankings, onClear }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("ko-KR");
  };

  if (rankings.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        아직 기록이 없어요
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={onClear}
          className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-colors"
        >
          초기화
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">순위</th>
              <th className="border p-2 text-left">현재 시각</th>
              <th className="border p-2 text-left">레벨</th>
              <th className="border p-2 text-left">클리어 시간</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((record, index) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{formatTime(record.timestamp)}</td>
                <td className="border p-2">Level {record.level}</td>
                <td className="border p-2">{record.clearTime}초</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingTable;

