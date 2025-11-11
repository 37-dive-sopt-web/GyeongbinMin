const MessagePanel = ({ gameStatus }) => {
  let message = "카드를 눌러 게임을 시작";
  if (gameStatus === "won") message = "축하합니다! 승리했어요. 3초 후 새로 시작합니다.";
  if (gameStatus === "lost") message = "시간 초과로 패배했어요. 3초 후 새로 시작합니다.";

  return (
    <div className="bg-white rounded-lg p-3 border">
      <div className="text-sm font-semibold mb-2">안내 메시지</div>
      <div className="text-sm text-gray-700">{message}</div>
    </div>
  );
};

export default MessagePanel;


