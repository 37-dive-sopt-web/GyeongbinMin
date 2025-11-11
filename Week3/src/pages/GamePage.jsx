import { useState, useEffect, useRef } from "react";
import { GameBoard, ActionBar, LevelSelect, StatsPanel, MessagePanel, HistoryList } from "../components/game";
import { useCountdown, useHistory, useDeck, useMatchEngine, useAutoReset, useLevelConfig, useRanking } from "../hooks";

const GamePage = () => {
  const { level, setLevel, timeLimit } = useLevelConfig(1);
  const { cards, regenerate } = useDeck(level);
  const { flippedCards, matchedCards, isProcessing, handleClick, reset: resetMatch } =
    useMatchEngine();
  const [gameStatus, setGameStatus] = useState("playing");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [guideMessage, setGuideMessage] = useState("");
  const startTimeRef = useRef(null);
  const totalPairs = Math.floor(cards.length / 2);
  const successfulPairs = Math.floor(matchedCards.length / 2);
  const remainingPairs = Math.max(0, totalPairs - successfulPairs);
  const { items: history, add: addHistory, reset: resetHistory } = useHistory(10);
  const { saveRanking } = useRanking();
  const { scheduleReset } = useAutoReset();
  const handleTimeFinish = () => {
    setGameStatus("lost");
    scheduleReset(resetAll, 3000);
  };
  const { timeLeft, start, reset: resetCountdown } = useCountdown(45, 0.1, handleTimeFinish);

  useEffect(() => {
    setGameStatus("playing");
    resetMatch();
    resetCountdown(timeLimit ?? 45);
    setIsTimerRunning(false);
    resetHistory();
    setGuideMessage("");
    startTimeRef.current = null;
  }, [level]);

  const resetAll = () => {
    regenerate();
    resetMatch();
    setGameStatus("playing");
    resetCountdown(timeLimit ?? 45);
    setIsTimerRunning(false);
    resetHistory();
    setGuideMessage("");
    startTimeRef.current = null;
  };

  const showGuideMessage = (msg) => {
    setGuideMessage(msg);
    setTimeout(() => setGuideMessage(""), 2000);
  };

  const handleCardClick = (index) => {
    if (gameStatus !== "playing") {
      showGuideMessage("게임이 진행 중이 아닙니다.");
      return;
    }

    if (isProcessing) {
      showGuideMessage("카드가 처리 중입니다. 잠시만 기다려주세요.");
      return;
    }

    if (matchedCards.includes(index)) {
      showGuideMessage("이미 맞춘 카드입니다.");
      return;
    }

    if (flippedCards.includes(index)) {
      showGuideMessage("이미 뒤집은 카드입니다.");
      return;
    }

    if (flippedCards.length >= 2) {
      showGuideMessage("이미 두 장의 카드가 뒤집혀 있습니다.");
      return;
    }

    setGuideMessage("");
    
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      start();
      startTimeRef.current = timeLimit ?? 45;
    }
    
    handleClick(
      index,
      cards,
      (a, b, success) => addHistory(a, b, success),
      () => {
        setGameStatus("won");
        if (startTimeRef.current !== null) {
          const clearTime = startTimeRef.current - timeLeft;
          saveRanking(level, clearTime);
        }
        scheduleReset(resetAll, 3000);
      }
    );
  };

  return (
    <main className="w-3/4 mx-auto my-6 p-6 bg-blue-400 rounded-xl shadow">
      <div className="flex gap-6">
        <section className="flex-1">
          <h2 className="text-lg font-semibold mb-4">게임 보드</h2>
          {cards.length > 0 && (
            <GameBoard
              cards={cards}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
              onCardClick={handleCardClick}
              disabled={isProcessing || gameStatus !== "playing"}
            />
          )}
        </section>

        <section className="w-80 flex flex-col gap-4">
          <ActionBar onReset={resetAll} />
          <LevelSelect level={level} onChange={setLevel} />
          <StatsPanel
            timeLeft={timeLeft.toFixed(1)}
            successfulPairs={successfulPairs}
            totalPairs={totalPairs}
            remainingPairs={remainingPairs}
          />
          <MessagePanel gameStatus={gameStatus} guideMessage={guideMessage} />
          <HistoryList items={history} />
        </section>
      </div>
    </main>
  );
};

export default GamePage;

