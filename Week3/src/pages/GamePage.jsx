import { useState, useEffect } from "react";
import { GameBoard, ActionBar, LevelSelect, StatsPanel, MessagePanel, HistoryList } from "../components/game";
import { useCountdown, useHistory, useDeck, useMatchEngine, useAutoReset, useLevelConfig } from "../hooks";

const GamePage = () => {
  const { level, setLevel, timeLimit } = useLevelConfig(1);
  const { cards, regenerate } = useDeck(level);
  const { flippedCards, matchedCards, isProcessing, handleClick, reset: resetMatch } =
    useMatchEngine();
  const [gameStatus, setGameStatus] = useState("playing");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const totalPairs = Math.floor(cards.length / 2);
  const successfulPairs = Math.floor(matchedCards.length / 2);
  const remainingPairs = Math.max(0, totalPairs - successfulPairs);
  const { items: history, add: addHistory, reset: resetHistory } = useHistory(10);
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
  }, [level]);

  const resetAll = () => {
    regenerate();
    resetMatch();
    setGameStatus("playing");
    resetCountdown(timeLimit ?? 45);
    setIsTimerRunning(false);
    resetHistory();
  };

  const handleCardClick = (index) => {
    if (gameStatus !== "playing" || isProcessing) return;
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      start();
    }
    handleClick(
      index,
      cards,
      (a, b, success) => addHistory(a, b, success),
      () => {
        setGameStatus("won");
        scheduleReset(resetAll, 3000);
      }
    );
  };

  const handleReset = () => {
    resetAll();
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
          <ActionBar onReset={handleReset} />
          <LevelSelect level={level} onChange={setLevel} />
          <StatsPanel
            timeLeft={timeLeft.toFixed(1)}
            successfulPairs={successfulPairs}
            totalPairs={totalPairs}
            remainingPairs={remainingPairs}
          />
          <MessagePanel gameStatus={gameStatus} />
          <HistoryList items={history} />
        </section>
      </div>
    </main>
  );
};

export default GamePage;

