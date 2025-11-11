const HistoryList = ({ items }) => {
  return (
    <div className="bg-white rounded-lg p-3 border">
      <div className="text-sm font-semibold mb-2">최근 히스토리</div>
      {items.length === 0 ? (
        <div className="text-sm text-gray-500">아직 뒤집은 카드가 없어요</div>
      ) : (
        <ul className="space-y-1">
          {items.map((h) => (
            <li
              key={h.id}
              className={`flex items-center justify-between text-sm ${
                h.success ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>
                {h.a},{h.b}
              </span>
              <span className="ml-2">{h.success ? "성공" : "실패"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;
